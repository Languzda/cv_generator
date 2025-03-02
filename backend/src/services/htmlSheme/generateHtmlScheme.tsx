import path from 'path'
import fs from 'fs'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Resume from './resumeScheme'
import type {
    ContactInfo,
    ExperienceRecord,
    EducationRecord,
    Language,
} from '@types'

const imagePath = path.join(__dirname, '../../assets/pikachu.png')
const fileData = fs.readFileSync(imagePath)
const base64Img = fileData.toString('base64')
const dataUrl = `data:image/png;base64,${base64Img}`

export type args = {
    cv: {
        contact: ContactInfo
        education: EducationRecord[]
        experience: ExperienceRecord[]
        description: string
        skills: string[]
        languages: Language[]
    }
}

export function getHtmlScheme({ cv }: args): string {
    // Renderujemy komponent do HTML-a:
    const htmlContent = ReactDOMServer.renderToString(
        <Resume
            contact={cv.contact}
            education={cv.education}
            urlImage={dataUrl}
            experience={cv.experience}
            skills={cv.skills}
            description={cv.description}
            languages={cv.languages}
        />
    )

    // Dodajemy do wygenerowanego HTML deklarację DOCTYPE
    return `<!DOCTYPE html>${htmlContent}`
}
