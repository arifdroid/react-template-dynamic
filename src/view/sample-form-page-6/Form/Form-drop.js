// components/Forms/ProductForm.tsx
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Input from 'components/FormComponents/Input'
import FileInput from 'components/FormComponents/FileInput'

export const ProductForm = () => {
  const methods = useForm({
    mode: 'onBlur',
  })
  const onSubmit = methods.handleSubmit((values) => {
    console.log('values', values)
    // Implement your own form submission logic here.
  })

  return (
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
            <div className='mb-4'>
              <Input name='name' />
            </div>
            <div className='mb-4'>
              <Input name='description' />
            </div>
            <div className='mb-4'>
              <Input name='price' type='number' />
            </div>
            <div className='mb-4'>
              <Input name='discount' type='number' />
            </div>
            <div className='mb-4'>
              <FileInput
                accept='image/png, image/jpg, image/jpeg, image/gif'
                multiple
                name='images'
              />
            </div>
            <div className='mb-4'>
              <button className='w-full bg-primary'>
                Create
              </button>
            </div>
        </form>
      </FormProvider>
  )
}