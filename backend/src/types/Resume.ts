export type ContactInfo = {
    name: string
    email: string
    phone: string
}

export type ResumeProps = {
    experience: ExperienceRecord[]
    education: EducationRecord[]
    description: string
    skills: string[]
    urlImage: string
    contact: ContactInfo
}

export type ExperienceRecord = {
    company: string
    position: string
    startDate: string
    endDate: string
    description: string
}

export type EducationRecord = {
    school: string
    major: string
    startDate: string
    endDate: string
    description: string
}
