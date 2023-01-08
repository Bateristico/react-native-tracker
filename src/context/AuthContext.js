import createDataContext from './createDataContext';

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({ email, password }) => {
    // make api request to signup
    // then update our state as authenticated
    // if it fails, return the error
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
