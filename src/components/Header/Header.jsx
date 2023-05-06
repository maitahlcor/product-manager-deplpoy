import logo from './logo-app.png'
import './Header.css'

function Header() {

  return (
    <>
      <div className="header">
        <img src={logo} alt="mi-logo" className="header__logo"/>
        <a href="#">Get Stared</a>
      </div>
    </>
  )
}

export default Header;