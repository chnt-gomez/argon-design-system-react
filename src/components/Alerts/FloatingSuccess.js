import React, { useEffect } from 'react';
import { Container, UncontrolledAlert } from 'reactstrap';

const FloatingSuccess = ({ message, onDismiss }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
          onDismiss();
        }, 6000);
    
        return () => clearTimeout(timer);
      }, [onDismiss]);
    
  return (
    <div id="ofBar" style={{
      zIndex: 999999999,
      fontSize: '16px',
      color: '#333',
      fontWeight: 400,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: '40px',
      width: '100%',
      borderRadius: '8px',
      left: 0,
      right: 0,
      marginLeft: 'auto',
      marginRight: 'auto',
    }}>
      <Container>
        <UncontrolledAlert color="success" toggle={false}>
        <span className="alert-inner--icon">
            <i className="ni ni-check-bold" />
          </span>{" "}
          <span className="alert-inner--text">
             {message}
          </span>
        </UncontrolledAlert>
      </Container>
    </div>
  );
};

export default FloatingSuccess;