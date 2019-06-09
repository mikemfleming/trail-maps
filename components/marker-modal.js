import Modal from 'react-modal';

export default function MakerModal ({ isOpen, closeModal, waypoint }) {
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      {waypoint.text}
    </Modal>
  );
}
