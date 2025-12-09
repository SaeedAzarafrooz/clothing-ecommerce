import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase"

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  }
  return (
    <div><h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in whith Google Popup</button>
    </div>
  )
}

export default SignIn