import http from '../config/http'

export const getServiceAllStacks = () => http.get('/stacks')
export const getServiceAllStacksListById = (id) => http.get(`/stacks/${id}/stacks/`)

export const postServiceAllStacksList = (id, data) => http.post(`/stacks/${id}/stacks/`, data)

export const deleteServiceAllStacksList = (id) => http.delete(`/stacks/${id}`)



