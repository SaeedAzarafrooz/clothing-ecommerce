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
import { selectCurrentUser, selectIsProfileOpen } from '../../store/user/user.selector'
import ProfileIcon from '../../components/profile-icon/Profile-Icon'
import ProfileDropdown from '../../components/profile-dropdown/Profile-Dropdown'


const Navigation = () => {
    const location = useLocation();
    const dispatch = useDispatch();
  
  const isCartOpen = useSelector(selectIsCartOpen);
  const isProfileOpen = useSelector(selectIsProfileOpen);
    const currentUser = useSelector(selectCurrentUser);
console.log('currentUser:', currentUser);


    useEffect(() => {
        dispatch(setIsCartOpen(false));
    }, [location.pathname]);




    return (
        <>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <CrwnLogo className="logo" />
                </Link>
                <div className="nav-links-container">

                    <Link className="nav-link" to="/shop">SHOP</Link>
                    
                    <ProfileIcon/>
              
                    <CartIcon />
                </div>
                {isCartOpen && <CartDropdown />}
                {isProfileOpen && <ProfileDropdown currentUser={currentUser} />}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation