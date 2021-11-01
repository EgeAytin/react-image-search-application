import React, {useState, useEffect, useReducer} from "react";
import './App.css';

//pages
import Home from './views/Home'

//api service
import apiService from "./apiService";

//auth context
import AuthContext from "./context/Auth"

function App() {

  //global state
  const [state, dispatch] = useReducer(
      (prevState, action) => {
        switch (action.type) {
          case 'RESTORE_AUTH_STATUS':
            return {
              isAuthorized: action.isAuthorized,
            };
          case 'SIGN_OUT':
            return {
              isAuthorized: false,
            };
          default:
            return {
              ...prevState,
            };
        }
      }, {
        isAuthorized: false,
      }
  );

  //auth context global functions
  const authContext = React.useMemo(
      () => ({
        signOut: async () => {
          dispatch({type: 'SIGN_OUT'});
          await localStorage.removeItem('access_token');
        },
      }),
      []
  );

  //authorization status check
  useEffect(() => {
    checkAuthToken()
  }, []);

  const checkAuthToken = async () => {
    const userToken = await localStorage.getItem('access_token');

    if(userToken !== null){
      dispatch({type: 'RESTORE_AUTH_STATUS', isAuthorized: true});
    } else{
      checkAuthCodeParam()
    }
  };

  function checkAuthCodeParam(){
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if(code !== null){
      authorizeUser(code)
    }
  }

  function authorizeUser(code){
    apiService.authorizeUser(code)
        .then(response => {
          const res = response.data;

          alert('User successfully logged in');

          localStorage.setItem('access_token',res.access_token);
          dispatch({type: 'RESTORE_AUTH_STATUS', isAuthorized: true});
        }).catch(error => {
      if(error.response){
        alert(error.response.data.error_description)
      }
    });
  }

  return (
      <AuthContext.Provider value={authContext}>
        <Home isAuthorized={state.isAuthorized}/>
      </AuthContext.Provider>
  );
}

export default App;
