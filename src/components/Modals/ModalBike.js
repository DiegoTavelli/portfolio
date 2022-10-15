import React, { useState } from "react";
import Modal from "react-animated-modal";

const ModalBike = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <Modal
        visible={showModal}
        closemodal={setShowModal(false)}
        type="flipInX"
      >
        Some text or JSX inside modal goes here...
      </Modal>
      <button onClick={setShowModal(true)}>
        Open Modaljjjjjjjjjjjjjjj
      </button>
    </div>
  );
}

export default ModalBike