// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from "../../utils/firebase/firebase"




const SignIn = () => {
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   console.log(response);

  //   if (response) {
  //        const userDocRef= await createUserDocumentFromAuth(response.user);

  //   }
  // }, [])




  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }


  return (
    <div><h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in whith Google Popup</button>
      <SignUpForm/>
      {/* <button onClick={signInWithGoogleRedirect}>Sign in whith Google Redirect</button> */}
    </div>
  )
}

export default SignIn