// import './button.scss'

// const BUTTON_TYPE_CLASSES = {
//     google: 'google-sign-in',
//     inverted: 'inverted',
//     danger: 'danger'
// }

import loginIcon from "../../assets/loginIcon.svg";
import loginIconHover from "../../assets/loginIcon-hover.svg";

const BASE_BUTTON_CLASSES =
  'group h-[50px] min-w-[165px] px-[35px] text-[15px] uppercase font-SG ' +
  'flex justify-center items-center gap-2 whitespace-nowrap cursor-pointer rounded-md ' +
  'transition-all duration-300 ease-in-out'

const BUTTON_VARIANTS = {
  default:
    'bg-black text-white border border-transparent ' +
    'hover:bg-white hover:text-black hover:border-black',

  google:
    'bg-[#4285f4] text-white border border-transparent ' +
    'hover:bg-[#2a61b9]',

  inverted:
    'bg-white text-black border border-slate-300 ' +
    'hover:bg-black hover:text-white hover:border-transparent',

  invertedSignIn:
    ' text-black border border-slate-300 px-[15px] ' +
    'hover:bg-slate-300 hover:text-black hover:border-transparent',

  danger:
    'bg-white text-red-500 border border-red-500 ' +
    'hover:bg-red-500 hover:text-white hover:border-transparent',
}

const Button = ({ children, hasIcon, buttonType = 'default',className = '', ...otherProps }) => {
  return (


    <button
      className={`${BASE_BUTTON_CLASSES} ${BUTTON_VARIANTS[buttonType]} ${className}`}
      {...otherProps}
    >
      {hasIcon && 
  ( <span className="flex w-7 h-7">

  
        <img
          src={loginIcon}
          alt="shop"
          className=" block group-hover:hidden"
        />

        <img
          src={loginIconHover}
          alt="shop-hover"
          className="  hidden group-hover:block"
        />
    
      </span>)  
      }
      {children}
    </button>

  )
}

export default Button