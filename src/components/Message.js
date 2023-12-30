import React from 'react'

const Message = ({showModal,closeModal}) => {
  return (

    <div className={`modal ${showModal ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal Title</p>
          <button className="delete" aria-label="close" onClick={closeModal}></button>
        </header>
        <section className="modal-card-body">
          <p>Modal content goes here.</p>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={closeModal}>Cancel</button>
        </footer>
      </div>
    </div>

  )
}

export default Message