const { expect } = require ('chai')
const logic = require('../logic/app')
const {AssertionError, FormatError, LogicError} = require ('../utils/errors')

const email = 'test@test.com'
const subject = 'test subject'
const text = 'text example for testing...'
var wrongEmail = undefined
var wrongSubject = undefined
var wrongText = undefined


describe('Logic', () => {

    describe('sendEmail', () => {
        it('should succeed on correct email sent', async () => {

            const res = await logic.sendEmail(email, subject, text)
            expect(res).to.exist
            expect(res.status).to.equal('OK')
            expect(res.description).to.equal('email sent')
        })

        it('should fail on not valid email', async () => {
            wrongEmail='wrong email'
            try {
                await logic.sendEmail(wrongEmail, subject, text)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`${wrongEmail} is not an e-mail`)
            }
        })

        it('should fail on empty email', async () => {
            wrongEmail=''
            try {
                await logic.sendEmail(wrongEmail, subject, text)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`email is empty`)
            }
        })

        it('should fail on undefined email', async () => {
            wrongEmail=undefined
            try {
                await logic.sendEmail(wrongEmail, subject, text)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`email is not optional`)
            }
        })

        it('should fail on null email', async () => {
            wrongEmail=null
            try {
                await logic.sendEmail(wrongEmail, subject, text)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`email is not optional`)
            }
        })

        it('should fail on empty subject', async () => {
            wrongSubject=''
            try {
                await logic.sendEmail(email, wrongSubject, text)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`subject is empty`)
            }
        })

        it('should fail on undefined subject', async () => {
            wrongSubject=undefined
            try {
                await logic.sendEmail(email, wrongSubject, text)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`subject is not optional`)
            }
        })

        it('should fail on null subject', async () => {
            wrongSubject=null
            try {
                await logic.sendEmail(email, wrongSubject, text)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`subject is not optional`)
            }
        })

        it('should fail on empty text', async () => {
            wrongText=''
            try {
                await logic.sendEmail(email, subject, wrongText)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`text is empty`)
            }
        })

        it('should fail on undefined text', async () => {
            wrongText=undefined
            try {
                await logic.sendEmail(email, subject, wrongText)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`text is not optional`)
            }
        })

        it('should fail on null text', async () => {
            wrongText=null
            try {
                await logic.sendEmail(email, subject, wrongText)
                throw Error('should not reach this point')
            } catch (error) {
                expect(error).to.exist
                expect(error).to.be.instanceOf(Error)
                expect(error.message).to.equal(`text is not optional`)
            }
        })

    })
})