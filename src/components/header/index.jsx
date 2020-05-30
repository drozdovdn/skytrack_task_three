import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

export default function Header() {
  return (
      <header className="header">
          <nav className="header__menu">
            <ul>
              <li>
                <Link className="header__link" to="/">Главная</Link>
              </li>
              <li>
                <Link className="header__link" to="/history">История</Link>
              </li>
            </ul>
          </nav>
      </header>
  )
}