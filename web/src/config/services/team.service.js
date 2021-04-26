import http from '../http'

export const getAllTeams = id => http.get(`/projects/${id}/teams`)
export const getAllTeamsByID = id => http.get(`/projects/${id}/teams`)

export const postAllTeams = (id, data) =>
  http.post(`/projects/${id}/teams`, data)
export const deleteAllTeams = (id, data) =>
  http.delete(`projects/teams/${id}`, data)

export const updateAllTeams = (id, data) =>
  http.put(`projects/teams/${id}`, data)
