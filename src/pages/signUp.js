import "../components/signUp.css";

function SignUp() {
  return (
    <div className="signup-container">
        <h2>Create Your Account</h2>
        <form className="signup-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
    </div>
  );
}

export default SignUp;
