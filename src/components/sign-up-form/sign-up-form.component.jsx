import { useState } from "react";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  
  const handleChange = (event) => {
    const { name } = event
  }
  
  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={() => {}}>
        <label >Display Name</label>
        <input type="text" required />

        <label htmlFor="">Password</label>
        <input type="password" required />

        <label htmlFor="">Confirm Password</label>
        <input type="password" required />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
