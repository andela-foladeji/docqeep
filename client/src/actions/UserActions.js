import axios from 'axios';

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
  }
};

export default userActions;
