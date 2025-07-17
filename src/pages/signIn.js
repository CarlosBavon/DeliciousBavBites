import React, { useState } from "react";
import "../components/signIn.css";

function SignIn() {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Under Development: Sign In functionality will be implemented soon.");
    };

  return (
    <div className="signin-page">
        <h1>Sign In</h1>
        <form className="signin-form" onSubmit={handleSubmit}>
            <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={handleChange}
            />
            <button type="submit">Sign In</button>
        </form>
    </div>
  );
}

export default SignIn;
