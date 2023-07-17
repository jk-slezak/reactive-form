import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import './../../index.scss'
import './style.scss'

type Inputs = {
  example: string
  exampleRequired: string
}

const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return(
    <div>
      <h1>Reactive form</h1>
      { /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input className="form__input" defaultValue="test" {...register("example",  { required: true })} />
        {errors.example && <span className="form__error">This field is required</span>}

        {/* include validation with required or other standard HTML validation rules */}
        <input className="form__input" {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span className="form__error">This field is required</span>}

        <input type="submit" />
      </form>
    </div>
  )
}

export default Form;