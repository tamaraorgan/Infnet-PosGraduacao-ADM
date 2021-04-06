import { useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { postServiceAllStacksList } from '../../services/stack.service'

import { Form } from './style'

const FormRegister = ({ id, update }) => {
  const [form, setForm] = useState({})

  const handleChangeList = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateList = async () => {
    await postServiceAllStacksList(id, form)

    setForm({})
    update(true)
  }

  return (
    <>
      <Form onSubmit={handleCreateList}>
        <input
          type="text"
          name="employee"
          placeholder="Nome Completo"
          value={form.employee || ''}
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
export default FormRegister
