import { FormEvent, useState } from 'react'
import { IoAdd } from 'react-icons/io5'
import { postServiceAllStacksList } from '../../services/stack.service'

import Modal from '../Modal'

import { Form } from './style'

interface FormRegisterProps {
  id: string
  update: (update: boolean) => void
}
interface FormProps {
  name: string
  email: string
  phone: string
  place: string
  state: string
}

const FormRegister = ({ id, update }: FormRegisterProps) => {
  const [form, setForm] = useState({} as FormProps)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState([
    {
      type: 'Sucesso',
      message: 'Cadastro realizado com sucesso!'
    },
    {
      type: 'error',
      message: 'Ocorreu um erro, tente novamente!'
    }
  ])
  console.log(error[0])

  const handleChangeList = (e: FormEvent) => {
    setForm({
      ...form,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
    })
  }

  const handleCreateList = async () => {
    try {
      await postServiceAllStacksList(id, form)

      setForm({} as FormProps)
      update(true)
    } catch (error) {}
  }

  return (
    <>
      <Form onSubmit={handleCreateList}>
        <input
          type="text"
          name="name"
          placeholder="Nome"
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
export default FormRegister
