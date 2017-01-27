import axios from 'axios';

const config = {
  headers: { Authorization: localStorage.getItem('docqeeper') }
};

const docActions = {
  createDocument(docDetails) {
    return (dispatch) => {
      dispatch({
        type: 'CREATE_DOC',
        payload: axios.post('/documents', docDetails, config)
      });
    };
  },

  getDocuments() {
    return (dispatch) => {
      dispatch({
        type: 'GET_DOC',
        payload: axios.get('/documents', config)
      });
    };
  }
};

export default docActions;
