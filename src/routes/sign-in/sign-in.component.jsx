import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in">
      <div className="sign-in__card">
        <h1>Welcome back</h1>
        <p>Sign in to continue to AlexKpot Store.</p>
        <button
          type="button"
          className="sign-in__google"
          onClick={logGoogleUser}
        >
          Continue with Google
        </button>
        <p className="sign-in__note">
          Email/password sign-in is coming soon.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
