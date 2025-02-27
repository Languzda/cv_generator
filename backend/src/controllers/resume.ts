import { Request, Response } from 'express'
import { generateResumeService } from '../services/resume'

export async function generateResumeController(req: Request, res: Response) {
    const { name, experience, skills, phone, email } = req.body

    const pdfBuffer = await generateResumeService({
        name,
        experience,
        skills,
        phone,
        email,
    })

    res.set({
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="cv.pdf"',
        'Content-Length': pdfBuffer.length,
    })

    // Wysyłamy binarne dane
    res.end(pdfBuffer)
}
