import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Замовляйте улюблену випічку ТУТ!</h2>
                <p>Виберіть із різноманітного меню, яке включає чудовий набір солодощів, приготованих із найкращих інгредієнтів та кулінарного досвіду.</p>
                {/* Check Later */}
                <button>МЕНЮ</button>
            </div>
        </div>
    )
}

export default Header
