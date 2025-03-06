export type ContactInfo = {
    name: string
    email: string
    phone: string
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

export type Language = {
    language: string
    level: string
}

export type ResumeData = {
    contactData: ContactInfo
    educationData: EducationRecord[]
    experienceData: ExperienceRecord[]
    languageData: Language[]
    skillsData: string[]
    description: string
    hobbyData: string[]
}
