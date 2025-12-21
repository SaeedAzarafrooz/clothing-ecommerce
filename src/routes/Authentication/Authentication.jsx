// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import './authentication.scss'
import SignInForm from "../../components/sign-in-form/sign-in-form";
import SignUpForm from "../../components/sign-up-form/sign-up-form";




const Authentication = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);

  //   if (response) {
  //        const userDocRef= await createUserDocumentFromAuth(response.user);

  //   }
  // }, [])







  return (
    <div className="flex justify-between w-[900px] my-7 mx-auto">      
      <SignInForm/>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in whith Google Redirect</button> */}
    </div>
  )
}

export default Authentication