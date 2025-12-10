import './navigation.scss'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import { Link, Outlet } from "react-router-dom"
import { UserContext } from "../../components/contexts/user.context"
import { useContext } from "react"
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from "../../components/cart-icon/Cart-Icon"
import CartDropdown from "../../components/cart-dropdown/Cart-Dropdown"
import { CartContext } from "../../components/contexts/cart.context"


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser();
        // setCurrentUser(null)
    }

    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">

                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ? (
                            <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                        ) : (
                            <Link className="nav-link" to="/auth">SIGN IN</Link>
                        )
                    }
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation