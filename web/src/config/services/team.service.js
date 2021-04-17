import http from '../http'

export const getAllTeams = (id) => http.get(`/stacks/${id}/teams`)
export const getAllTeamsByID = (id) => http.get(`/stacks/${id}/teams`)

export const postAllTeams = (id, data) => http.post(`/stacks/${id}/teams`, data)
export const deleteAllTeams = (id, data) => http.delete(`stacks/teams/${id}`, data)

export const updateAllTeams = (id, data) => http.update(`stacks/teams/${id}`, data)