// import './profile-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
// import ProfileIconIMG from '../../assets/icons-user.png'
import ArrowIcon from '../../assets/icons-arrow-down.png'
import { setIsProfileOpen } from '../../store/user/user.action';
import { selectCurrentUser, selectIsProfileOpen } from '../../store/user/user.selector';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import userProfile from '../../assets/userProfile2.svg'
import userProfilehover from '../../assets/userProfile-hover2.svg'

const ProfileIcon = () => {
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
          <div onClick={toggleIsProfileOpen}
            className='group w-18 h-11 px-1 py-1 flex justify-center items-center cursor-pointer
                     rounded-md hover:bg-slate-300 transition-all duration-300 ease-in-out'>
            <img src={ArrowIcon} className='w-6 h-6 block' />
            <img
              src={userProfile}
              alt="shop"
              className="w-10 h-10 block group-hover:hidden"
            />
            <img
              src={userProfilehover}
              alt="shop-hover"
              className="w-10 h-10 hidden group-hover:block"
            />
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