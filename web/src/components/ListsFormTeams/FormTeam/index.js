import { useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { postAllTeams } from '../../../config/services/team.service'


import { Form } from './style'

const FormTeam = ({ id, update }) => {
  const [form, setForm] = useState({})

  const handleChangeList = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateList = async () => {
    const newform = {
      ...form,
      name: form.name.toUpperCase(),
      place: form.place.toUpperCase(),
      state: form.state.toUpperCase(),
      email: form.email.toLowerCase(),
      phone: form.phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    }
    await postAllTeams(id, newform)
      .then(() => {
        setForm({})
        update(true)
      })
      .catch(err => {
        alert("Usuário já cadastrado.")
      })
  }

  return (
    <>
      <Form onSubmit={handleCreateList}>
        <input
          type="text"
          name="name"
          placeholder="Nome Completo"
          value={form.name || ''}
          onChange={handleChangeList}
        />
        <input
          type="text"
          name="email"
          placeholder="E-mail"
          value={form.email || ''}
          onChange={handleChangeList}
        />
        <input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={form.phone || ''}
          onChange={handleChangeList}
        />
        <input
          type="text"
          name="place"
          placeholder="Local"
          value={form.place || ''}
          onChange={handleChangeList}
        />
        <input
          type="text"
          name="state"
          placeholder="Estado"
          value={form.state || ''}
          onChange={handleChangeList}
        />
        <button type="submit">
          <IoAdd />
        </button>
      </Form>
    </>
  )
}
export default FormTeam
