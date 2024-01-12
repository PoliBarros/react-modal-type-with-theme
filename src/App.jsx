import { useState, createContext, useEffect } from 'react';
import Modal from './Components/Modal/Modal';
import ThemeToggle from './Components/ThemeToggle/ThemeToggle';
import Button from './Components/Button/Button';
import { modalData } from './modal-data';
import './App.css';

export const ThemeContext = createContext();

function App() {
  const [openPopover, setOpenPopover] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [modals, setModals] = useState(modalData);

  useEffect(() => {
    darkMode
      ? (document.documentElement.className = 'dark-mode')
      : (document.documentElement.className = '');
  });

  const openModal = (modalId) => {
    setModals((prevModals) =>
      prevModals.map((modal) => (modal.id === modalId ? { ...modal, isOpen: true } : modal))
    );
  };

  const closeModal = (modalId) => {
    setModals((prevModals) =>
      prevModals.map((modal) => (modal.id === modalId ? { ...modal, isOpen: false } : modal))
    );
    //reset popover
    setOpenPopover(false);
  };

  const togglePopover = () => {
    setOpenPopover(!openPopover);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const toggleModal = (closeId, openId) => () => {
    closeModal(closeId);
    if (openId !== undefined) {
      openModal(openId);
    }
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <ThemeToggle />
        <div className="app-content">
          <h1>Click any button to trigger the different type of modals.</h1>

          <Button label={modalData[0].name} buttonAction={() => openModal(1)} />
          <Button label={modalData[1].name} buttonAction={() => openModal(2)} />
          <Button label={modalData[2].name} buttonAction={() => openModal(3)} />

          {modals.length > 0 &&
            modals.map((modal) => (
              <Modal
                key={`modal-${modal.id}`}
                modalData={modal}
                onClose={() => closeModal(modal.id)}
                secondaryAction={modal.labelSecondary && toggleModal(modal.id, modal.nextModal)}>
                <h2>{modal.name}</h2>

                {modal.content}

                {modal.popover && (
                  <p>
                    click <span onClick={togglePopover}>here</span> to trigger a popover
                  </p>
                )}
                {modal.popover && openPopover && (
                  <div className="popover">
                    <div className="popover-arrow"></div>
                    <p>This is a popover text</p>
                  </div>
                )}
              </Modal>
            ))}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
