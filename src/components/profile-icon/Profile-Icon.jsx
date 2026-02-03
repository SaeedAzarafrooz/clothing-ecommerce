// import './profile-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
// import ProfileIconIMG from '../../assets/icons-user.png'
import ArrowIcon from '../../assets/arrow-down-icon.svg';
import ArrowIconHover from '../../assets/arrow-down-icon-hover.svg';

import { setIsProfileOpen } from '../../store/user/user.action';
import { selectCurrentUser, selectIsProfileOpen } from '../../store/user/user.selector';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import userProfile from '../../assets/userProfile2.svg'
import userProfilehover from '../../assets/userProfile-hover2.svg'

const ProfileIcon = ({ iconRef }) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const isProfileOpen = useSelector(selectIsProfileOpen);
  const currentUser = useSelector(selectCurrentUser);


  const toggleIsProfileOpen = () => {
    dispatch(setIsProfileOpen(!isProfileOpen));
  };
  const goToAuthHandler = () => {
    navigate('/auth');
  }
  return (
    <>
      {
        currentUser ? (
          <div ref={iconRef} onClick={toggleIsProfileOpen}
            className='group w-18 h-11 px-1 py-1 flex justify-center items-center cursor-pointer
                     rounded-md hover:bg-slate-300 transition-all duration-300 ease-in-out'>
            <div className={`group relative w-4 h-4 flex-shrink-0 transition-transform duration-300 ease-in-out ${isProfileOpen ? 'scale-y-[-1]' : ''}`}>
              <img 
              src={ArrowIcon} 
              alt="arrow_down"
              className='absolute inset-0 w-4 h-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none' />
              <img 
              src={ArrowIconHover} 
               alt="arrow_down_hover"
              className={`absolute inset-0 w-4 h-4 opacity-0 group-hover:opacity-100 ${isProfileOpen ? '' : 'group-hover:animate-softBounce'} transition-opacity duration-300 ease-in-out pointer-events-none`} />
            </div>
            <div className="group relative w-10 h-10 flex-shrink-0">
              <img
                src={userProfile}
                alt="shop_Icon"
                className="absolute inset-0 w-10 h-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none"
              />
              <img
                src={userProfilehover}
                alt="shop_Icon_hover"
                className="absolute inset-0 w-10 h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none"
              />
            </div>
            {/* <img src={ProfileIconIMG} className='profile-icon' /> */}
          </div>
        ) : (
          <Button
            buttonType='invertedSignIn'
            hasIcon={true}
            onClick={goToAuthHandler}>
            SIGN IN / SIGN UP
          </Button>
        )
      }
    </>
  )
}

export default ProfileIcon