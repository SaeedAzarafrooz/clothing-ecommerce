import './profile-dropdown.scss';
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsProfileOpen } from '../../store/user/user.action';
import Button from '../button/Button';
import { selectCurrentUser } from '../../store/user/user.selector';
import { signOutUser } from '../../utils/firebase/firebase';

const ProfileDropdown = () => {
  const dispatch = useDispatch();
  const profiledropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownEl = profiledropdownRef.current;
      const profileIconEl = document.querySelector('.profile-icon-container');

      // اگر کلیک داخل دراپ‌دان بود یا روی آیکون سبد بود، کاری نکن
      if (
        (dropdownEl && dropdownEl.contains(event.target)) ||
        (profileIconEl && profileIconEl.contains(event.target))
      ) {
        return;
      }

      // در غیر اینصورت دراپ‌دان را ببند
      dispatch(setIsProfileOpen(false));
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setIsProfileOpen]);




    const signOutHandler = async () => {
        await signOutUser();
        dispatch(setIsProfileOpen(false));
        // setCurrentUser(null)
    }
  return (

    <div ref={profiledropdownRef} className="profile-dropdown-container">
      
                      
         <Button onClick={signOutHandler}>SIGN OUT</Button>
                
                    
      
    </div>

  )
}

export default ProfileDropdown