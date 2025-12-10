import { Link, Outlet } from "react-router-dom"
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import './navigation.scss'
import { UserContext } from "../../components/contexts/user.context"
import { useContext } from "react"
import {signOutUser}from '../../utils/firebase/firebase'
const Navigation = () => {
    const {currentUser}=useContext(UserContext)
    console.log('Context:',currentUser);
    
const signOutHandler =async ()=>{
await signOutUser();
// setCurrentUser(null)

}

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ): (
                             <Link className="nav-link" to="/auth">SIGN IN</Link>
                        )
                    }
                   
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navigation