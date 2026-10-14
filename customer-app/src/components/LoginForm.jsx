import { useState } from "react";

function LoginForm() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // stop the browser from reloading the page

    const formData = { userId, password };
    console.log("Login submitted:", formData);
    alert(`UserID: ${userId}\nPassword: ${password}`);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h3>Login</h3>

      <label htmlFor="userId">UserID</label>
      <input
        id="userId"
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
