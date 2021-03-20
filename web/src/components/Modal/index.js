import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

import { ModalContainer, ModalSection, ModalHeader, ModalBody } from './style'

const ModalInfo = ({ error }) => {
  const [show, setShow ] = useState(false)

  const handleCloseModal = () => {
    setShow(true)
  }
  
  return (
    <ModalContainer>
      <ModalSection>
        <ModalHeader>
          {error.type} 
          <button onClick={handleCloseModal} ><IoMdClose /></button>
        </ModalHeader>
        <ModalBody>{error.message}</ModalBody>
      </ModalSection>
    </ModalContainer>
  )
}
export default ModalInfo
