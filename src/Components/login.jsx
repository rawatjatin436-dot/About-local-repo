import React from "react";
import { useState } from "react";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-contaner">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}
          >
            Sign UP
          </button>
        </div>

        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <a href="#">Forget Password</a>
              <button>Login</button>
              <p>
                Not a member?
                <a href="#" onClick={() => setIsLogin(false)}>
                  signup now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="from">
              <h2>Signup Form</h2>
              <input type="email" placeholder="email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder=" Conform password" />
              <button>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
