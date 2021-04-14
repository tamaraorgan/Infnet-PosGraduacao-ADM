import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
import { postAllTeams } from '../../config/services/team.service'

import { Form } from './style'

const FormTeams = ({ id, update }) => {
  const [form, setForm] = useState({})

  const handleChangeForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateList = async () => {
    const newForm = {
      ...form,
      name: form.name.toUpperCase(),
      place: form.place.toUpperCase(),
      state: form.state.toUpperCase(),
      email: form.email.toLowerCase(),
      phone: form.phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    }

    await postAllTeams(id, newForm)
      .them(() => {
        setForm({})
        update(true)
      })
      .catch(err => {
        alert(err)
      })
  }

  console.log(form)
  return (
    <Form onSubmit={handleCreateList}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nome Completo"
        value={form.name || ''}
        onChange={handleChangeForm}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="E-mail"
        value={form.email || ''}
        onChange={handleChangeForm}
      />
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Telefone"
        value={form.phone || ''}
        onChange={handleChangeForm}
      />
      <input
        type="text"
        name="place"
        id="place"
        placeholder="Lugar"
        value={form.place || ''}
        onChange={handleChangeForm}
      />
      <input
        type="text"
        name="state"
        id="state"
        placeholder="Estado"
        value={form.state || ''}
        onChange={handleChangeForm}
      />
      <button>
        <BsPlus />
      </button>
    </Form>
  )
}

export default FormTeams
