import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './component/Sidebar'
import Chat from './component/Chat'
import { selectUser } from './features/userSlice'
import Login from './component/Login'
import { auth } from './firebase'
import { login, logout } from './features/userSlice'
import { useSelector, useDispatch } from 'react-redux'



function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in the user
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.phtoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        // logout user
        dispatch(logout())
      }
    })
  }, [dispatch]);

  return (

    <div className="app">
      { user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) :
        <Login />
      }


    </div>

  );
}

export default App;
