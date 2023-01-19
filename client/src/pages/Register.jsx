import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../style.scss"
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    name:"",
    email:"",
    password:"",
  })

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }

  }



  return (
    <div className='auth'>
        <h1>Реєстрація</h1>
        <form >
            <input type="text" placeholder="Ім'я користувача" name="name" onChange={handleChange}/>
            <input type="text" placeholder="Імейл" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Пароль" name="password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Реєстрація</button>
            {err && <p>{err}</p>}
            <span>Вже є акаунт? <Link to="/login">Увійдіть</Link></span>
        </form>
    </div>
  )
}

export default Register