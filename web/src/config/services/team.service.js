import http from '../http'

export const getAllTeams = (id) => http.get(`/stacks/${id}/teams`)
export const getAllTeamsByID = (id) => http.get(`/stacks/${id}/teams`)

export const postAllTeams = (id, data) => http.post(`/stacks/${id}/teams`, data)

