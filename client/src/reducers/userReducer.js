function saveInfo(data) {
  localStorage.setItem('docqeeper', data.token);
  localStorage.setItem('docqeeperid', data.user.id);
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_USER_FULFILLED': {
      const response = action.payload.data;
      saveInfo(response);
      delete response.token;
      state = { ...state, ...{ done: response.done, message: response.message } };
      break;
    }
    case 'REGISTER_USER_REJECTED': {
      const response = action.payload.response.data;
      state = { ...state, ...response };
      break;
    }
    case 'REGISTER_USER_PENDING': {
      // state = { ...state, ...action.payload };
      break;
    }
    case 'LOGIN_FULFILLED': {
      const response = action.payload.data;
      saveInfo(response);
      delete response.token;
      state = { ...state, ...{ done: response.done, message: response.message } };
      break;
    }
    case 'LOGIN_REJECTED': {
      const response = action.payload.response.data;
      state = { ...state, ...response };
      break;
    }
    case 'LOGIN_PENDING': {
      // state = { ...state, ...action.payload };
      break;
    }
    case 'EDIT_FULFILLED': {
      const response = action.payload.data;
      state = { ...state, ...response };
      break;
    }
    case 'EDIT_REJECTED': {
      const response = action.payload.response.data;
      state = { ...state, ...response };
      break;
    }
    case 'EDIT_PENDING': {
      // state = { ...state, ...action.payload };
      break;
    }
    case 'GET_USER_FULFILLED': {
      const { user } = action.payload.data;
      user.status = action.payload.status;
      state = { ...state, ...user };
    }
  }
  return state;
};

export default userReducer;
