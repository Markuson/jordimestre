const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const logic = require('./logic/api');

const { argv: [, , port = 3000], } = process;


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.post('/api/contact', async (req, res) => {
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