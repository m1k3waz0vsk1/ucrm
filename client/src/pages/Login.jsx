import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../style.scss"
import axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'


export const Login = () => {
    const [inputs, setInputs] = useState({
        name:"",
        password:"",
      })
    
      const [err, setError] = useState(null);
    
      const navigate = useNavigate();

      const {login} = useContext(AuthContext);

      const handleChange = e => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
      }
    
      const handleSubmit = async e => {
        e.preventDefault();
        try {
            await login(inputs);
            await axios.post("/auth/login", inputs);
            navigate("/");
        } catch (err) {
            setError(err.response.data);
        }
    
      }
    
    return (
    <div className='auth'>
        <h1>Логін</h1>
        <form >
            <input type="text" placeholder="Ім'я користувача" name="name" onChange={handleChange}/>
            <input type="password" placeholder="Пароль" name="password" onChange={handleChange}/>
            <button onClick={handleSubmit}>Вхід</button>
            {err && <p>{err}</p>}
            <span>Немає акаунту? <Link to="/register">Зареєструйтесь</Link></span>
        </form>
    </div>
    )
}

export default Login;