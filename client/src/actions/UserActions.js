import axios from 'axios';

const config = {
  headers: { Authorization: localStorage.getItem('docqeeper') }
};

/**
 * userActions for all user related actions
 */
const userActions = {
  register(userDetails) {
    return (dispatch) => {
      dispatch({
        type: 'REGISTER_USER',
        payload: axios.post('/users', userDetails)
      });
    };
  },

  login(loginDetails) {
    return (dispatch) => {
      dispatch({
        type: 'LOGIN',
        payload: axios.post('/users/login', loginDetails)
      });
    };
  },

  editProfile(userInfo) {
    console.log(userInfo);
    return (dispatch) => {
      dispatch({
        type: 'EDIT',
        payload: axios.put(`/users/${userInfo.id}`, userInfo, config)
      });
    };
  }
};

export default userActions;
