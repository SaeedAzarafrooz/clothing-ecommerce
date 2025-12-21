// import './profile-dropdown.scss';
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

    <div
      ref={profiledropdownRef}
      className="absolute flex flex-col w-[300px] h-[340px] p-3 bg-slate-100 
                 shadow-lg border border-slate-300 rounded-lg top-[70px] right-1 z-10">
      <div className='flex flex-col h-4/5'>
        <div className='flex w-full items-center gap-2 px-2 mb-4'>


          <div className="w-[60px] h-[60px]  rounded-full overflow-hidden bg-slate-300
        flex justify-center items-center border-1">
            <img
              className="w-[40px] h-[40px] object-contain"
              src={currentUser?.photoURL || defaultAvatar}
              alt="profile"
              referrerPolicy="no-referrer"
              onError={(e) => (e.currentTarget.src = defaultAvatar)}
            />
          </div>
          <span>{name.charAt(0).toUpperCase() + name.slice(1)}!</span>
        </div>
        <div className='flex flex-col'>
          <span className='text-gray-700 text-sm mb-1 whitespace-nowrap'>Email:</span>
          <span className='text-gray-500 text-sm mb-2 pl-2 whitespace-nowrap'>
            {currentUser ? currentUser.email : 'not set'}
          </span>
        </div>
      </div>


      <div className='relative w-full  h-1/5 border-t border-gray-300 mt-2'>

        <Button className='absolute bottom-0 w-full whitespace-nowrap' buttonType='danger' onClick={signOutHandler}>SIGN OUT</Button>
      </div>


    </div>

  )
}

export default ProfileDropdown