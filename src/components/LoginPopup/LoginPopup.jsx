import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const LoginPopup = ({ setShowLogin }) => {

    const { setToken, url,loadCartData } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Login");

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (e) => {
        e.preventDefault()

        let new_url = url;
        if (currState === "Login") {
            new_url += "/api/user/login";
        }
        else {
            new_url += "/api/user/register"
        }
        const response = await axios.post(new_url, data);
        if (response.data.success) {
            setToken(response.data.token)
            localStorage.setItem("token", response.data.token)
            loadCartData({token:response.data.token})
            setShowLogin(false)
        }
        else {
            toast.error(response.data.message)
        }
    }

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState === "Sign Up" ? 'Раєстрація' : 'Логін'}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Sign Up" ? <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Імʼя' required /> : <></>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Електронна адресса' />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Пароль' required />
                </div>
                <button>{currState === "Login" ? "Увійти" : "Створити"}</button>
                { 
                    currState === "Sign Up" 
                        ? (
                            <div className="login-popup-condition">
                                <input type="checkbox" name="" id="" required/>
                                <p>Продовжуючи, я погоджуюся з умовами використання та політикою конфіденційності.</p>
                            </div>
                        )  
                        : <></>
                }
                
                {currState === "Login"
                    ? <p>Створити акаунт? <span onClick={() => setCurrState('Sign Up')}>Тисніть тут</span></p>
                    : <p>Уже зараєстровані? <span onClick={() => setCurrState('Login')}>Тисніть тут</span></p>
                }
            </form>
        </div>
    )
}

export default LoginPopup
