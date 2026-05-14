import { useState } from "react";
import { Link, Links } from "react-router-dom";
import "./navbar.scss";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>LamaEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/agents">Agents</Link>
      </div>
      <div className="right">
        {user ? <div className="user">
          <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <span>John Doe</span>
          <Link to="/profile" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>
          </Link>
        </div> : (<><Link to="/login">Sign in</Link>
          <Link to="/register" className="register">
            Sign up
          </Link></>)}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="Menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <Link to="/agents" onClick={() => setOpen(false)}>Agents</Link>
          <Link to="/login" onClick={() => setOpen(false)}>Sign in</Link>
          <Link to="/register" onClick={() => setOpen(false)}>Sign up</Link>
        </div>
      </div>
    </nav>
  );
}