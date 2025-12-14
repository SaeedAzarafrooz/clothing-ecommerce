import './navigation.scss'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import { Link, Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from "../../components/cart-icon/Cart-Icon"
import CartDropdown from "../../components/cart-dropdown/Cart-Dropdown"
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector'


const Navigation = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  console.log('currentUser:', currentUser);
  
  const isCartOpen = useSelector(selectIsCartOpen);

    useEffect(() => {
        dispatch(setIsCartOpen(false));
    }, [location.pathname]);



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