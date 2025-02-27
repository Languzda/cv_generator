import puppeteer from 'puppeteer'
import { args, getHtmlScheme } from './htmlSheme/generateHtmlScheme'
import type { ContactInfo } from '@types'

export async function generateResumeService({
    name,
    email,
    phone,
    experience,
    skills,
}: {
    name: string
    experience: string
    skills: string[]
    phone: string
    email: string
}) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    const contact: ContactInfo = { name, email, phone }
    console.log({ skills })
    // const skillsArray = skills.split(',').map((skill) => skill.trim())

    const args: args = { cv: { contact, experience, skills } }

    console.log({ args })
    console.log({ contact })

    const html = getHtmlScheme(args)
    await page.setContent(html)

    const pdf = await page.pdf({ format: 'A4', printBackground: true })

    await browser.close()

    return pdf
}
