const appstyles = {
  container: {
    textAlign: 'center',
  },
  heading: {
    color: '#333',
  },
  inputContainer: {
    margin: '20px 0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center'
  },
  label: {
    display: 'block',
    color: '#3498db',
    margin: '10px',
  },
  input: {
    padding: '8px',
    fontSize: '16px',
    border: 'none',
    borderBottom: '1px solid #3498db',
    borderColor: '#3498db'
  },
  button: {
    padding: '10px 15px',
    fontSize: '16px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  checkConnectionButton: {
    padding: '10px 15px',
    fontSize: '16px',
    top: 0,
    right: 0,
    cursor: 'pointer',
  },
  connectionStatus: {
    marginTop: '10px',
    fontSize: '14px',
    color: 'green',
  },
  keyboard: {
    marginTop: '30px',
    padding: '10px',
    border: '1px solid #3498db',
    marginBottom:'10%'
  },
  keyboardButtons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
    gap: '10px',
  },
  keyboardButton: {
    padding: '10px',
    fontSize: '16px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#ecf0f1',
    borderColor: '#3498db',
    border: '1px solid #bdc3c7',
    borderRadius: '5px',
  },
  specialKeys: {
    marginTop: '20px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  specialKeyButton: {
    padding: '10px',
    fontSize: '16px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  funKeyButtonImg: {
    cursor: 'pointer',
    height: '40px',
  },
  remote: {
    marginTop: '30px',
    textAlign: 'center',
  },
  remoteRow: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  
}


export default appstyles