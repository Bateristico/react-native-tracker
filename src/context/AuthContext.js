import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
};

const signin = dispatch => {
  return ({ email, password }) => {
    // make api request
    // update state
    // handle error
  };
};

const signout = dispatch => {
  return () => {
    //signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout },
  { isSignedIn: false }
);
