'use client'

import { Dispatch, SetStateAction, useState } from 'react'
import { HiCheck, HiPencilSquare, HiXMark } from 'react-icons/hi2'

interface ParentProfile {
  fullName: string
  email: string
  phone: string
  address: string
  parentId: string
  childName: string
  profileImage: string
}

interface PersonalInformationProps {
  parent: ParentProfile
  setParent: Dispatch<SetStateAction<ParentProfile>>
}

export default function PersonalInformation ({
  parent,
  setParent
}: PersonalInformationProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(parent)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    setParent(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(parent)
    setIsEditing(false)
  }

  return (
    <section className='rounded-3xl border border-slate-200 bg-white p-6'>
      {/* Header */}
      <div className='mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div>
          <h2 className='heading-3'>Personal Information</h2>

          <p className='small-text mt-1'>
            Review and manage your personal account information.
          </p>
        </div>

        {!isEditing ? (
          <button
            type='button'
            onClick={() => setIsEditing(true)}
            className='button-text flex items-center gap-2 rounded-xl px-5 py-2.5 text-white transition hover:opacity-90'
            style={{
              background: 'var(--teal-primary)'
            }}
          >
            <HiPencilSquare size={18} />
            Edit Information
          </button>
        ) : (
          <div className='flex gap-3'>
            <button
              type='button'
              onClick={handleSave}
              className='button-text flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-white transition hover:opacity-90'
            >
              <HiCheck size={18} />
              Save
            </button>

            <button
              type='button'
              onClick={handleCancel}
              className='button-text flex items-center gap-2 rounded-xl bg-slate-500 px-5 py-2.5 text-white transition hover:opacity-90'
            >
              <HiXMark size={18} />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Information */}
      <div className='grid gap-6 md:grid-cols-2'>
        <InputField
          label='Full Name'
          name='fullName'
          value={formData.fullName}
          editable={isEditing}
          onChange={handleChange}
        />

        <InputField
          label='Email Address'
          name='email'
          value={formData.email}
          editable={isEditing}
          onChange={handleChange}
        />

        <InputField
          label='Phone Number'
          name='phone'
          value={formData.phone}
          editable={isEditing}
          onChange={handleChange}
        />

        <InputField
          label='Address'
          name='address'
          value={formData.address}
          editable={isEditing}
          onChange={handleChange}
        />

        <InputField
          label='Parent ID'
          name='parentId'
          value={formData.parentId}
          editable={false}
          onChange={handleChange}
        />

        <InputField
          label='Registered Child'
          name='childName'
          value={formData.childName}
          editable={false}
          onChange={handleChange}
        />
      </div>
    </section>
  )
}

interface InputFieldProps {
  label: string
  name: string
  value: string
  editable: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputField ({
  label,
  name,
  value,
  editable,
  onChange
}: InputFieldProps) {
  return (
    <div>
      <label className='label-text mb-2 block'>{label}</label>

      <input
        type='text'
        name={name}
        value={value}
        onChange={onChange}
        disabled={!editable}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
          editable
            ? 'border-slate-300 bg-white focus:border-[var(--teal-primary)]'
            : 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-500'
        }`}
      />
    </div>
  )
}
