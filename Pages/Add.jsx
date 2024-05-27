import axios from "axios"
import { useForm } from "react-hook-form"
import "./Add.scss"




export default function Add() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => {
    axios.post("http://localhost:3000/card", data)
    reset()
  }




  return (
    <>
    
    <div className="backgorund">
      <div className="AddDiv">
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("info")} />
      {errors.info && <span>This field is required</span>}


      <input {...register("price", { required: true })} />
      {errors.price && <span>This field is required</span>}


      <input className="submit" type="submit" />
    </form>
    </div>
    </div></>
  )
}
