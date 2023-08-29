export default function Employee() {
    const handleSignIn = () => {
      // Later, we'll integrate the sign-in logic with OAuth 2.0
      console.log("Employee Sign-In");
    };
  
    return (
      <div>
        <h1>Employee Portal</h1>
        <button onClick={handleSignIn}>Sign In with Company Email</button>
        {/* After sign-in, we will display the list of applicants here */}
      </div>
    );
  }
  