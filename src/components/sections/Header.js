import React, {useContext} from "react";

//auth context
import AuthContext from "../../context/Auth";

function Header(props) {

    //context func
    const { signOut } = useContext(AuthContext);

    //auth context
    const { isAuthorized } = props;

    const loginRedirectUri = `https://unsplash.com/oauth/authorize?client_id=${process.env.REACT_APP_API_ACCESS_KEY}&scope=public+write_likes&response_type=code&redirect_uri=${process.env.REACT_APP_AUTH_REDIRECT_URL}`;

    //login & logout functions
    function redirectLogin(){
        window.location.href = loginRedirectUri
    }
    function logout(){
        signOut()
    }

    //renderer
    const renderUserButton = () => {
        return (
            <>
                {
                    !isAuthorized ?
                        <button className="btn btn-primary" type="button" onClick={redirectLogin}>
                            Log in
                        </button>
                        :
                        <button className="btn btn-primary" type="button" onClick={logout}>
                            Log out
                        </button>
                }
            </>
        )
    };

    return (
        <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <strong>Image Search Application</strong>
                </a>
                {renderUserButton()}
            </div>
        </div>
    );
}

export default Header;
