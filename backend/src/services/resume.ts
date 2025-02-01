import { getHtmlScheme } from '../utils/htmlScheme'
import puppeteer from 'puppeteer'

export async function generateResumeService({
    name,
    experience,
    skills,
}: {
    name: string
    experience: string
    skills: string
}) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const html = getHtmlScheme({ name, experience, skills })
    await page.setContent(html)

    const pdf = await page.pdf({ format: 'A4', printBackground: true })

    await browser.close()

    return pdf
}
