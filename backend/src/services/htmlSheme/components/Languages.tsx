import React from 'react'
import { Language } from '@types'

export type LanguagesProps = {
    languages: Language[]
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 uppercase">Języki</h2>
            {languages.map((lang) => (
                <p>{`${lang.language} (${lang.level})`}</p>
            ))}
        </div>
    )
}

export default Languages
