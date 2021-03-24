import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Loading } from './style'

const Spinners = () => {
  return (
    <Loading>
      <Spinner animation="border" role="status" variant="dark" />
    </Loading>
  )
}
export default Spinners
