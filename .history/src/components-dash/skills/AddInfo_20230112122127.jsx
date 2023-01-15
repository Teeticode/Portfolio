import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InfoModal from './InfoModal';
import EditModal from './EditModal';
import { useSelector } from 'react-redux';


function AddInfo({ user}) {
  const {about} = useSelector(state=>state.about)
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  useEffect(()=>{
    if(about){
      setEdit(true)
    }else{
      setEdit(false)
    }
  },[about])
  const handleClose = () => {
    setShow(false)
  };
  const handleShow = () => {
    setShow(true)
  };

  return (
    <div style={{width:'100%'}}>
        {(about)?(
          <span onClick={handleShow} style={{padding:'30px'}} className="button button--flex">
          Edit Skill &nbsp; <i className="uil uil-edit"></i>
      </span>
        ):(
          <span onClick={handleShow} style={{padding:'30px'}} className="button button--flex">
            Add Skill &nbsp; <i className="uil uil-plus-circle"></i>
        </span>
        )}
        

      {(edit)?
      (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditModal user={user}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      ):(
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add About</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InfoModal user={user}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
      ) 
    }
    </div>
  );
}

export default AddInfo;