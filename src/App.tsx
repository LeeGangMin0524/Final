import React, { useState } from 'react';
import Modal from './Modal';

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>React Modal Example</h1>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      {showModal && <Modal onClose={handleModalClose} />}
    </div>
  );
};

export default App;
