import http from '../http'

export const getAllProjects = id => http.get(`/stacks/${id}/projects`)
export const getAllProjectsByID = id => http.get(`/stacks/${id}/projects`)

export const postAllProjects = (id, data) =>
  http.post(`/stacks/${id}/projects`, data)
export const deleteAllProjects = (id, data) =>
  http.delete(`stacks/projects/${id}`, data)

export const updateAllProjects = (id, data) =>
  http.update(`stacks/projects/${id}`, data)
