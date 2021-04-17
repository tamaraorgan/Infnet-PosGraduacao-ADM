import ImgModal from '../../assets/image/svg-mulher-big.svg'

import { ModalContainer, ModalSession } from './style'

function Modal({ modal, isShow, toggleModal, handleDeleteInput }) {
  return (
    <ModalContainer isShow={isShow}>
      <ModalSession>
        <img src={ImgModal} alt="" />
        <div className="modal-body">
          <h4>ALERTA!</h4>
          <p>
            Tem certeza que deseja excluir
            <strong> {modal?.data?.name} </strong>?
          </p>
          <div className="modal-button">
            <button className="delete" onClick={handleDeleteInput}>SIM</button>
            <button className="confirm" onClick={toggleModal}>NÃO</button>
          </div>
        </div>
      </ModalSession>
    </ModalContainer>
  )
}

export default Modal
