const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'REGISTER_USER_FULFILLED': {
      const response = action.payload.data;
      console.log(response);
      state = { ...state, ...response };
      break;
    }
    case 'REGISTER_USER_REJECTED': {
      const response = action.payload.response.data;
      console.log(response);
      state = { ...state, ...response };
      break;
    }
    case 'REGISTER_USER_PENDING': {
      // state = { ...state, ...action.payload };
      break;
    }
    case 'LOGIN_FULFILLED': {
      const response = action.payload.data;
      state = { ...state, ...response };
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
  }
  return state;
};

export default userReducer;
