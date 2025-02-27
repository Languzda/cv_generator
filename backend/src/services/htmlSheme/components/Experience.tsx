import React from 'react'
import ExperienceRecord from '../../../types/ExperienceRecord'

export type ExperienceProps = {
    experience: ExperienceRecord[]
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 uppercase">
                Doświadczenie zawodowe
            </h2>
            {experience.map((exp, index) => (
                <div key={index}>
                    <p className="font-bold">
                        {exp.startDate} – {exp.endDate}
                    </p>
                    <p className="text-sm italic text-gray-600">
                        {exp.position} - {exp.company}
                    </p>
                    <p className="mb-2 text-xs">{exp.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Experience
