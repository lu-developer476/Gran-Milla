import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("Mensaje enviado. Gracias por contactar a Gran Milla.")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Contanos qué tipo de travesía estás buscando"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Enviar</button>
    </form>
  )
}
