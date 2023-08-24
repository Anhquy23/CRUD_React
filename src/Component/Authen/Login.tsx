import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
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
import { message } from 'antd';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validate()){
      fetch("http://localhost:3000/users?email=" + email).then((res) => {
        return res.json();
      }).then((resp) => {
        if(Object.keys(resp[0]).length === 0) {
          message.error('Email không đúng')
        }else{
          if(resp[0].password === password){
            message.success('Đăng nhập thành công')
            localStorage.setItem('email', email)
            navigate('/admin')
          }else{
            message.error('Mật khẩu không đúng')
          }
        }
      }).catch((err) => {
        message.error('Email không đúng', err.message);
      })
    }
  }

  const validate = () => {
    let result = true;
    if(email === '' || email === null){
      result = false;
      message.error('Vui lòng nhập email')
    }
    if(password === '' || password === null){
      result = false;
      message.error('Vui lòng nhập password')
    }
    return result;
  }


  return (
    <div className="limiter">
		<div className="container-login100" style={{ backgroundImage: "url('./images/bg-01.jpg')" }}>
			<div className="wrap-login100">
				<form onSubmit={handleSubmit} className="login100-form validate-form" >
					<span className="login100-form-logo">
						<i className="zmdi zmdi-landscape"></i>
					</span>

					<span className="login100-form-title p-b-34 p-t-27">
						Log in
					</span>

					<div className="wrap-input100 validate-input" data-validate = "Enter username">
						<input className="input100" type="text" name="username" value={email} onChange={e => setEmail(e.target.value)}  placeholder="Username"/>
						<span className="focus-input100" data-placeholder="&#xf207;"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<input className="input100" type="password" name="pass" value={password} onChange={e => setPassword(e.target.value)}  placeholder="Password"/>
						<span className="focus-input100" data-placeholder="&#xf191;"></span>
					</div>

					<div className="container-login100-form-btn">
						<button className="login100-form-btn">
							Login
						</button>
					</div>
            <p>Tôi chưa có tài khoản <Link to={'/register'}>Đăng kí</Link></p>
				</form>
			</div>
		</div>
	</div>
  )
}

export default Login

