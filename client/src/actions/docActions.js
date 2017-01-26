import axios from 'axios';

const config = {
  headers: { Authorization: localStorage.getItem('docqeeper') }
};

const docActions = {
  createDocument(docDetails) {
    console.log(docDetails);
    return (dispatch) => {
      dispatch({
        type: 'CREATE_DOC',
        payload: axios.post('/documents', docDetails, config)
      });
    };
  }
};

export default docActions;
