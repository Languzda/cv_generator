import router from 'express'
import { generateResumeController } from '../controllers/resume'

const resumeRouter = router()

resumeRouter.post('/generate-pdf', async (req, res) => {
    await generateResumeController(req, res)
})

export default resumeRouter
