import './profile-icon.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProfileIconIMG from '../../assets/icons-user.png'
import ArrowIcon from '../../assets/icons-arrow-down.png'
import { setIsProfileOpen } from '../../store/user/user.action';
import { selectCurrentUser, selectIsProfileOpen } from '../../store/user/user.selector';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';

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
        <div onClick={toggleIsProfileOpen} className='profile-icon-container'>
          <img src={ArrowIcon} className='arrowdown-icon' />
          <img src={ProfileIconIMG} className='profile-icon' />
      </div>
        ) : (

          <Button buttonType='inverted' onClick={goToAuthHandler}>

            SIGN IN / SIGN UP
          </Button>
        )
      }


    </>
  )
}

export default ProfileIcon