import React, {useState, useEffect} from 'react';
import { withRouter } from "react-router-dom";

function Header(props) {
  let [logoutVisible, setLogoutVisibility] = useState(false);
  const isLoggedIn = !!sessionStorage.getItem('jwt');

  const setVisibility = () => {
    setLogoutVisibility(isLoggedIn);
  }

  const handleLogout = () => {
    sessionStorage.removeItem('jwt');
    props.history.push('/');
  }

  useEffect(() => {
    setVisibility()
  }, [isLoggedIn]);

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="row col-12 d-flex justify-content-center text-white">
        <span className="h3">Conexia</span>
      </div>
      {logoutVisible && (
      <button 
        type="submit"
        className="btn btn-dark"
        onClick={handleLogout}
      >Logout
      </button>
      ) }
    </nav>
  )
}

export default withRouter(Header);