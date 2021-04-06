import InfoSVG from '../../assets/image/info.svg'

import { BodyModal, ButtonModal, ContainerModal, SectionModal } from './style'

function Modal({ modal, isShow, toggleModal, handleDeleteInput }) {
  return (
    <ContainerModal isShow={isShow}>
      <SectionModal>
        <img src={InfoSVG} alt="" />
        <BodyModal>
          <header>EXCLUIR FUNCIONÁRIO</header>
          <main>
            Deseja excluir o funcionário(a), {modal?.data?.employee} ?
          </main>
          <ButtonModal>
            <button onClick={handleDeleteInput}>SIM</button>
            <button onClick={toggleModal}>NÃO</button>
          </ButtonModal>
        </BodyModal>
      </SectionModal>
    </ContainerModal>
  )
}

export default Modal
