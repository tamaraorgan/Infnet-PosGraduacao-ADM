import { useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { postServiceAllStacksList } from '../../services/stack.service'
import InfoSweet from '../../plugins/infoSwal'

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
    const newform = {
      ...form,
      employee: form.employee.toUpperCase(),
      place: form.place.toUpperCase(),
      state: form.state.toUpperCase(),
      email: form.email.toLowerCase(),
      phone: form.phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3')
    }
    await postServiceAllStacksList(id, newform)
      .then(() => {
        InfoSweet.fire({
          icon: 'success',
          title: 'Registro criado com sucesso!',
          showConfirmButton: false,
          timer: 2500
        })
        setForm({})
        update(true)
      })
      .catch(err => {
        InfoSweet.fire({
          icon: 'error',
          title: 'Erro na criação do registro, por favor tente novamente!',
          showConfirmButton: false,
          timer: 2500
        })
      })
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
