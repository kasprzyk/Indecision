import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('body');

const OptionModal = (props) => (
  <Modal
    onRequestClose={props.handleClearSelectedOption}
    isOpen={!!props.selectedOption}
    contentLabel='Selected Option'
    closeTimeoutMS={200}
    className='modal'
  >
    <h3 className='modal__title'>Selected Option</h3>
    {props.selectedOption && (
      <p className='modal__body'>{props.selectedOption}</p>
    )}
    <button className='button' onClick={props.handleClearSelectedOption}>
      Ok
    </button>
  </Modal>
);

export default OptionModal;
