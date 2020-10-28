const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const { createProxyMiddleware } = require('http-proxy-middleware');

const logic = require('./logic/api');

const { argv: [, , port = 3000], } = process;

const conf = require('./next.config');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, conf })
const handle = app.getRequestHandler()

const devProxy = {
    [`/api`]: {
        target: `http://localhost:3000/`,
        pathRewrite: {
            [`^/api`]: '',
        },
        changeOrigin: true,
    }
};

app.prepare().then(() => {
    const server = express()

    if (dev && devProxy) {
        Object.keys(devProxy).forEach(context => {
            server.use(createProxyMiddleware(context, devProxy[context]))
        })
    }

    server.use(bodyParser.json())

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.post('*', async (req, res) => {
        const { email, subject, text } = req.body;
        try {
            const response = await logic.nodemailerSend(email, subject, text)
            res.status(202).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`Server up on http://localhost:${port}`)
    })
})