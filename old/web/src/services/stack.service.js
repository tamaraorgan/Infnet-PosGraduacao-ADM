import http from '../config/http'

export const getServiceAllStacks = () => http.get('/stacks')
export const getServiceAllStacksListById = (id) => http.get(`/stacks/${id}/registers/`)

export const postServiceAllStacksList = (id, data) => http.post(`/stacks/${id}/registers/`, data)

export const deleteServiceAllStacksList = (id) => http.delete(`/stacks/${id}`)