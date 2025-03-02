import router from 'express'
import {
    generateResumeController,
    generateResumeControllerOld,
} from '../controllers/resume'

const resumeRouter = router()

resumeRouter.post('/generate-pdf-old', async (req, res) => {
    await generateResumeControllerOld(req, res)
})

resumeRouter.post('/generate-pdf', async (req, res) => {
    await generateResumeController(req, res)
})

export default resumeRouter
