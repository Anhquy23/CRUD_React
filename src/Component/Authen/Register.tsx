// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './css/main.css';
import './css/util.css';
import './images/icons/favicon.ico';
import './vendor/bootstrap/css/bootstrap.min.css'
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import './fonts/iconic/css/material-design-iconic-font.min.css'
import './vendor/animate/animate.css'
import './vendor/css-hamburgers/hamburgers.min.css'
import './vendor/animsition/css/animsition.min.css'
import './vendor/select2/select2.min.css'
import './vendor/daterangepicker/daterangepicker.css'

const Register = () => {
//     const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await login(email, password);
//   };


  return (
    <div className="limiter">
		<div className="container-login100" style={{ backgroundImage: "url('./images/bg-01.jpg')" }}>
			<div className="wrap-login100">
				<form className="login100-form validate-form" >
					<span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" name="username"  placeholder="Username"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

          <div className="wrap-input100 validate-input" data-validate = "Enter email">
						<input className="input100" type="text" name="username"  placeholder="Email"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

          <div className="wrap-input100 validate-input" data-validate = "Enter phone">
						<input className="input100" type="text" name="username"  placeholder="Phone"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

          <div className="wrap-input100 validate-input" data-validate = "Enter address">
						<input className="input100" type="text" name="username"  placeholder="Address"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass"  placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

          <div className="wrap-input100 validate-input" data-validate="Enter confirmPassword">
						<input className="input100" type="password" name="pass"  placeholder="ConfirmPassword"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Register
						</button>
					</div>
                    <p>Tôi đã có tài khoản <Link to={'/login'}>Đăng nhập</Link></p>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Register