// import './navigation.scss'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg"

import { Link, Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import CartIcon from "../../components/cart-icon/Cart-Icon"
import CartDropdown from "../../components/cart-dropdown/Cart-Dropdown"
import { useDispatch, useSelector } from 'react-redux'
import { setIsCartOpen } from '../../store/cart/cart.action'
import { selectIsCartOpen } from '../../store/cart/cart.selector'
import { selectCurrentUser, selectIsProfileOpen } from '../../store/user/user.selector'
import ProfileIcon from '../../components/profile-icon/Profile-Icon'
import ProfileDropdown from '../../components/profile-dropdown/Profile-Dropdown'
import shopIcon from "../../assets/shopIcon3.svg";
import shopIconHover from "../../assets/shopIcon-hover5.svg";

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
            <div className="h-16 w-full flex justify-between items-center mb-6 px-4 bg-slate-100 shadow-md sticky top-0 z-50 rounded-lg">
                <Link className="h-full w-16 flex justify-center items-center" to="/">
                    <CrwnLogo />
                </Link>
                <div className="flex items-center gap-2 ">
                    <Link to="/shop" className='group flex items-center justify-center rounded-md cursor-pointer px-2 py-1  gap-2 h-11 hover:bg-slate-300 transition-all duration-300 ease-in-out'>
                        <img
                            src={shopIcon}
                            alt="shop"
                            className="w-7 h-7 block group-hover:hidden"
                        />

                        <img
                            src={shopIconHover}
                            alt="shop-hover"
                            className="w-7 h-7 hidden group-hover:block"
                        />
                        <span className="font-SG" >SHOP</span>
                    </Link>

                    <CartIcon />
                    <ProfileIcon />

                </div>
                {isCartOpen && <CartDropdown />}
                {isProfileOpen && <ProfileDropdown currentUser={currentUser} />}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation