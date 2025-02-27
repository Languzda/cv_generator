import { EducationRecord } from '@types'
import React from 'react'
import EducationItem from './EducationItem'

export type EducationProps = {
    education: EducationRecord[]
}

const Education: React.FC<EducationProps> = ({ education }) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 uppercase">Wykształcenie</h2>

            {education.map((edu, index) => (
                <EducationItem educationRecord={edu} key={index} />
            ))}
        </div>
    )
}

export default Education
