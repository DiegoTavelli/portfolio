import React, { useEffect, useState } from "react";
import ContactModal from '../../assets/figma/contactModal.png'
import './modalContact.scss'

import './modalProject.scss'

const ModalContact = ({ contact }) => {

  const [show, setShow] = useState(false);

  return contact ?
    <div className='modalContactContainer'>
      <img src={ContactModal} alt='' className={contact ? 'modalContact modalContactFx' : 'modalContact modalContactNoFx'} />
    </div>
    : null
}

export default ModalContact

