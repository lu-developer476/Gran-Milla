
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({name:'',email:'',message:''})

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({...form,[e.target.name]:e.target.value})
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Mensaje enviado. Gracias por contactar a Gran Milla.")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Nombre" onChange={handleChange} required/>
      <input name="email" placeholder="Email" onChange={handleChange} required/>
      <textarea name="message" placeholder="Mensaje" onChange={handleChange} required/>
      <button type="submit">Enviar</button>
    </form>
  )
}
