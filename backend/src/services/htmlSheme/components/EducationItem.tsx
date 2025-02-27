import React from 'react'
import type { EducationRecord } from '@types'

export type EducationRecordProps = {
    educationRecord: EducationRecord
}

const EducationItem: React.FC<EducationRecordProps> = ({ educationRecord }) => {
    return (
        <>
            <p className="font-bold">
                {educationRecord.startDate} – {educationRecord.endDate}
            </p>
            <p>{educationRecord.school}</p>
            <p>{educationRecord.major}</p>
            <p className="text-xs mb-2">{educationRecord.description}</p>
        </>
    )
}

export default EducationItem
