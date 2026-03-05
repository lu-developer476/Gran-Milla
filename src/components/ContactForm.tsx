import { useState } from "react"

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
    if (status) {
      setStatus("")
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("Mensaje recibido. Pronto nos estaremos contactando.")
    setForm({ name: "", email: "", message: "" })
  }

  return (
    <>
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

      {status && (
        <p className="form-status" role="status" aria-live="polite">
          {status}
        </p>
      )}
    </>
  )
}
