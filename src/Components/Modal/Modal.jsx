import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import Button from '../Button/Button';
import './Modal.css';

const Modal = ({ modalData, children, onClose, secondaryAction }) => {
  const { darkMode } = useContext(ThemeContext);
  const darkTheme = darkMode ? 'modal dark-mode' : '';

  if (!modalData.isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className={`modal ${darkTheme}`}>
        <div className="modal-content">{children}</div>
        <Button label="Close" buttonAction={onClose} />
        {modalData.labelSecondary && (
          <Button secondary label={modalData.labelSecondary} buttonAction={secondaryAction} />
        )}
      </div>
    </div>
  );
};

export default Modal;
