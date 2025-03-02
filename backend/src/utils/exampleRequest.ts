import {
    type EducationRecord,
    type ExperienceRecord,
    type Language,
    ResumeData,
} from '@types'

const DUMMY_LANGUAGES: Language[] = [
    { language: 'Polski', level: 'Ojczysty' },
    { language: 'Angielski', level: 'B2' },
]

const DUMMY_DESCRIPTION = `Praca z ludźmi to moja pasja. Zajmuję się
                                    rekrutacją od pięciu lat. Zainicjowałam od
                                    podstaw i studentów z powodzeniem w firmie
                                    THrR, co przyczyniło się do wzrostu liczby
                                    aplikacji. Chcę dalej rozwijać się w
                                    obszarze rekrutacji.`

const DUMMY_EXPERIENCE: ExperienceRecord[] = [
    {
        position: 'Junior Software Tester',
        company: 'THrR',
        startDate: '12.2023',
        endDate: 'obecnie',
        description: `Cras eu felis metus. Donec convallis nunc augue, vitae faucibus tortor maximus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nunc eros, vestibulum ac mi a, pharetra faucibus nisl.`,
    },
    {
        position: 'Junior System Administrator',
        company: 'Exa Sys',
        startDate: '08.2023',
        endDate: '12.2023',
        description: `Cras eu felis metus. Donec convallis nunc augue, vitae faucibus tortor maximus sed. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas nunc eros, vestibulum ac mi a, pharetra faucibus nisl.`,
    },
]

const DUMMY_EDUCATION: EducationRecord[] = [
    {
        school: 'Uniwersytet Warszawski',
        major: 'Psychologia',
        startDate: '09.2010',
        endDate: '06.2015',
        description: `Studia magisterskie na kierunku psychologia.
                                    Specjalizacja w psychologii pracy.`,
    },
    {
        school: 'Uniwersytet Warszawski',
        major: 'Psychologia',
        startDate: '09.2007',
        endDate: '06.2010',
        description: `Studia licencjackie na kierunku psychologia.`,
    },
]

const data: ResumeData = {
    contactData: {
        name: 'Jan Kowalski',
        email: 'test@test.pl',
        phone: '123 456 789',
    },
    description: DUMMY_DESCRIPTION,
    educationData: DUMMY_EDUCATION,
    experienceData: DUMMY_EXPERIENCE,
    languageData: DUMMY_LANGUAGES,
    skillsData: ['Rekrutacja', 'Zarządzanie zespołem'],
    hobbyData: ['Podróże', 'Sport'],
}

const genrateJson = () => {
    const json = JSON.stringify(data)
    console.log(json)
    return json
}

genrateJson()
