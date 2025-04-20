'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react"

enum HeaderRoute {
  INDEX = "/",
  BATTLE = "/battle",
  EVOLUTION = "/evolution",
  COMMUNITY = "/community",
  SKIN = "/skin"
}
function Header() {
  // 管理导航栏的激活状态
  const [isNavActive, setIsNavActive] = useState(false);
  const pathname = usePathname()

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };
  return (<div>
    <header className="header">
      <div className="container">
        <nav className={`nav ${isNavActive ? 'active' : ''}`}>
          <a href="#" className="logo">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="皮卡丘图标" />
            <span>宝可梦图鉴</span>
          </a>
          <ul className="nav-links">
            <li><a href={HeaderRoute.INDEX} className={`${pathname === HeaderRoute.INDEX ? "active" : ""}`}>图鉴</a></li>
            <li><a href={HeaderRoute.BATTLE} className={`${pathname === HeaderRoute.BATTLE ? "active" : ""}`}>对战攻略</a></li>
            <li><a href={HeaderRoute.EVOLUTION} className={`${pathname === HeaderRoute.EVOLUTION ? "active" : ""}`}>进化路线</a></li>
            <li><a href={HeaderRoute.COMMUNITY} className={`${pathname === HeaderRoute.COMMUNITY ? "active" : ""}`}>社区</a></li>
            <li><a href={HeaderRoute.SKIN} className={`${pathname === HeaderRoute.SKIN ? "active" : ""}`}>皮肤工坊</a></li>
          </ul>
          <div className="search-container">
            <i className="fas fa-search search-icon"></i>
            <input type="text" className="search-input" placeholder="搜索宝可梦、技能、道具..." />
          </div>
          <div className="user-actions">
            <div className="user-avatar">U</div>
          </div>
          <div className="hamburger" onClick={toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </div>
    </header>
  </div>)
}

export default Header