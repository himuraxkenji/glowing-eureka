import Image from 'next/image';
import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';
const Login = () => {
  return (
    <div className="login">
      <div className="form-container">
        <Image src={logo} alt="logo" className="logo" />
        <h1 className="title">Create a new password</h1>
        <p className="subtitle">Enter a new password for your account</p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />
          <label htmlFor="new-password" className="label">
            Re-enter password
          </label>
          <input type="password" id="new-password" placeholder="*********" className="input input-password" />
          <input type="submit" value="Confirm" className="primary-button login-button" />
        </form>
      </div>
    </div>
  );
};

export default Login;
