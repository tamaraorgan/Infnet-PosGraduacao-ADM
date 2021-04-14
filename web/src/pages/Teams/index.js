import { useCallback, useEffect, useState } from 'react'

import FormTeams from '../../components/FormTeams'
import { useParams } from 'react-router'

import { getAllTeamsByID } from '../../config/services/team.service'
import ListTeams from '../../components/ListTeams'

import { TeamsContainer } from './style'

const Teams = () => {
  const { id } = useParams()

  const [ teams, setTeams ] = useState({})
  const [ uptade, setUpdate ] = useState(false)

  const getTeamById = useCallback(async () => {
    const result = await getAllTeamsByID(id)
    setTeams(result.data)
  },[id])

  useEffect(() => {
    getTeamById()
    setUpdate(false)
  },[getTeamById, uptade])

  console.log(teams, "teams")
  return (
    <TeamsContainer>
      <FormTeams id={id} update={setUpdate} />
      <ListTeams teams={teams.teams} update={setUpdate} />
    </TeamsContainer>
  )
}

export default Teams
