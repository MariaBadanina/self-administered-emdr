'use client'

import React, { useState } from 'react'
import formConfig from '../data/formConfig.json'
import { generateAndDownloadPDF } from '../lib/utils'

interface FormField {
  id: string
  type: string
  label: string
  placeholder: string
}

const DynamicForm: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = () => {
    generateAndDownloadPDF(formData)
  }

  return (
    <div>
      {formConfig.fields.map((field: FormField) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input
            id={field.id}
            type={field.type}
            placeholder={field.placeholder}
            value={formData[field.id] || ''}
            onChange={handleInputChange}
          />
        </div>
      ))}
      <button onClick={handleSubmit}>Generate and Download PDF</button>
    </div>
  )
}

export default DynamicForm
