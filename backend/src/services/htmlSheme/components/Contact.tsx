import { ContactInfo } from '@types'
import React from 'react'

export type ContactProps = {
    contact: ContactInfo
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
    return (
        <div className="mb-6">
            <h2 className="text-xl font-bold mb-2 uppercase">Kontakt</h2>
            <p className="font-bold">{contact.name}</p>
            <p className="mb-1">{contact.email}</p>
            <p className="mb-1">{contact.phone}</p>
        </div>
    )
}

export default Contact
