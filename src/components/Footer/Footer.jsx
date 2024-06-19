import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <div className='logo'>Air Baking.</div>
            {/* Check Later */}
            <p>Виберіть із різноманітного меню, яке включає чудовий набір солодощів, приготованих із найкращих інгредієнтів та кулінарного досвіду.</p>
            {/* Check Later */}
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          {/* Check Later */}
            <h2>COMPANY</h2>
            <ul>
                <li>Головна</li>
                <li>Про нас</li>
                <li>Доставка</li>
                <li>Публічна Оферта</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Контакти</h2>
            <ul>
                <li>+380-12-3456-6789</li>
                <li>contact@airbaking.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © AirBaking.com - Усі Права Захищено.</p>
    </div>
  )
}

export default Footer
