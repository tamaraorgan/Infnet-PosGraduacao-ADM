import { useCallback } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getAllProjectsByID } from '../../config/services/project.service'
import AlertImg from '../../assets/image/svg-mulher-big.svg'

const Projects = () => {
  const { id } = useParams()
  const [projects, setProjects] = useState([])

  const getProjectsById = useCallback(async () => {
    const result = await getAllProjectsByID(id)

    setProjects(result.data)
  }, [id])

  useEffect(() => {
    getProjectsById()
  }, [getProjectsById])

  console.log('====================================')
  console.log(projects)
  console.log('====================================')
  return (
    <ProjectsContainer>
      {projects && projects.length ? (
        <ProjectsSession>
          {projects.map((project, i) => (
            <Link to={`/projects/${project.id}/teams`} key={i}>
              <h2>{project.project}</h2>
              <div className="description">
                <p>
                  GERENTE DE PROJETO:<strong> {project.project_manager}</strong>
                </p>
                <p>
                  DESCRIÇÃO: <strong>{project.description}</strong>
                </p>
              </div>

              <data>
                DATA DE INÍCIO: <strong>{project.data_created}</strong>
              </data>

              <p>
                PROGRESSO: <strong>{project.progress}</strong>
              </p>
            </Link>
          ))}
        </ProjectsSession>
      ) : (
        <Alert>
          <p>Não há projetos cadastrados.</p>
          <img src={AlertImg} alt="" />
        </Alert>
      )}
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  width: 100%;
  min-height: 100%;
  height: auto;
  margin-top: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -8rem;
  left: 0rem;
`

const ProjectsSession = styled.div`
  width: 80%;
  max-height: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  color: ${props => props.theme.colors.text};
  margin: 3rem 0;

  a {
    text-decoration: none;
    background: ${props => props.theme.colors.white};
    border-radius: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-height: 12rem;

    h2 {
      text-align: center;
      width: 100%;
      color: ${props => props.theme.colors.red};
      text-transform: uppercase;
    }

    .description {
      border-top: 1px solid ${props => props.theme.colors.tertiary};
      border-bottom: 1px solid ${props => props.theme.colors.tertiary};
      padding: 0.8rem 0;
      margin: 0.8rem 0;

      p {
        text-align: center;
        font-size: 0.7rem;
        margin-bottom: 0.5rem;

        strong {
          font-size: 1rem;
        }
      }
    }
    p {
      text-align: center;
      font-size: 0.7rem;

      strong {
        font-size: 1rem;
      }
    }
    data {
      font-size: 0.7rem;
      strong {
        font-size: 1rem;
      }
    }
  }
`
const Alert = styled.div`
  width: 80vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
