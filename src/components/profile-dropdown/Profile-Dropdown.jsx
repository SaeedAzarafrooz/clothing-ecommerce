import './profile-dropdown.scss';
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import defaultAvatar from '../../assets/icons-user.png';
import { setIsProfileOpen } from '../../store/user/user.action';
import Button from '../button/Button';
import { signOutUser } from '../../utils/firebase/firebase';

const ProfileDropdown = ({ currentUser }) => {
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


  const name =
    currentUser?.displayName
    ?? currentUser?.email?.split('@')[0]
    ?? 'Guest';

  const signOutHandler = async () => {
    await signOutUser();
    dispatch(setIsProfileOpen(false));
    // setCurrentUser(null)
  }
  return (

    <div ref={profiledropdownRef} className="profile-dropdown-container">
      <div className='profile-info'>
       <div className="profile-img-wrapper">
  <img
    className="profile-img"
    src={currentUser?.photoURL || defaultAvatar}
    alt="profile"
    referrerPolicy="no-referrer"
    onError={(e) => (e.currentTarget.src = defaultAvatar)}
  />
</div>
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}!</span>
      </div>
      <span className='email'>Email:{currentUser ? currentUser.email : 'not set'}</span>

      <Button buttonType='danger' onClick={signOutHandler}>SIGN OUT</Button>



    </div>

  )
}

export default ProfileDropdown