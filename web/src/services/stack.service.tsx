import http from '../config/http'

interface DadaProps {
  name: string
  email: string
  phone: string
  place: string
  state: string
}

export const getServiceAllStacks = () => http.get('/stacks')
export const getServiceAllStacksListById = (id: string) => http.get(`/stacks/${id}/stacks/`)

export const postServiceAllStacksList = (id: string, data: DadaProps) => http.post(`/stacks/${id}/stacks/`, data)

export const deleteServiceAllStacksList = (id: string) => http.delete(`/stacks/${id}`)



