import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './Login';
import Register from './Register';
import './account.css';

function Account({}) {
  const [show, setShow] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{width:'100%'}}>
        <div className="nav__item" style={{cursor:'pointer'}}>
        <span className="nav__link" onClick={handleShow}>
       
       <i className="bx bx-user-circle nav__icon" style={{fontSize:'25px',alignSelf:'center'}} ></i>
       Account
       </span>
        </div>
        

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            isLogin?(
              <Login  setLogin={setLogin}/>
            ):(
              <Register setLogin={setLogin}/>
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Account;