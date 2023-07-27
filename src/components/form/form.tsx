import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import './../../index.scss'
import './style.scss'

type FormInupt = {
  name: string
  email: string
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInupt>()
  const onSubmit: SubmitHandler<FormInupt> = data => console.log(data)

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="form__input"
        {...register('name', { required: true })}
      />
      {errors.name && (
        <span className="form__error">This field is required</span>
      )}
      <input
        className="form__input"
        {...register('email', { required: true })}
      />
      {errors.email && (
        <span className="form__error">This field is required</span>
      )}
      <input className="form_btn" type="submit" />
    </form>
  )
}

export default Form
