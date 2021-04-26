import { RiCheckLine } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'

import { FormEditContainer } from './style'
import { useState } from 'react'
import { updateAllTeams } from '../../../config/services/team.service'

const FormUpdate = ({ teams, setIdItem, update, id }) => {
  console.log(id, 'id')
  const [form, setForm] = useState({})

  const handleUpdate = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleUpdateList = async () => {
    if (teams.id) {
      // const newform = {
      //   ...form,
      //   name: form.name.toUpperCase(),
      //   state: form.state.toUpperCase(),
      //   email: form.email.toLowerCase(),
      //   phone: form.phone.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3'),
      //   progress: form.progress
      // }

      updateAllTeams(teams.id, form)
        .then(() => {
          update(true)
        })
        .catch(error => {
          alert('Aconteceu um erro.')
        })
    }
  }

  console.log(form, 'form')
  return (
    <FormEditContainer>
      <input
        type="text"
        name="name"
        placeholder={teams.name}
        value={form.name || ''}
        onChange={handleUpdate}
      />
      <input
        type="text"
        name="email"
        placeholder={teams.email}
        value={form.email || ''}
        onChange={handleUpdate}
      />
      <input
        type="text"
        name="phone"
        placeholder={teams.phone}
        value={form.phone || ''}
        onChange={handleUpdate}
      />
      <input
        type="text"
        name="state"
        placeholder={teams.state}
        value={form.state || ''}
        onChange={handleUpdate}
      />
      <input
        type="text"
        name="progress"
        placeholder={teams.progress}
        value={form.progress || ''}
        onChange={handleUpdate}
      />
      <div className="buttons">
        <button type="button" onClick={() => handleUpdateList(teams)}>
          <RiCheckLine />
        </button>
        <button type="button" onClick={() => setIdItem('')}>
          <MdClose />
        </button>
      </div>
    </FormEditContainer>
  )
}

export default FormUpdate
