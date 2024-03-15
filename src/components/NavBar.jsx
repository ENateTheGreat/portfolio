import './../styles/NavBar.css';
import { Link } from 'react-router-dom'

function Nav() {
const content = '<EdwardLee />'
  return (
    <div className="header-wrapper">
      <h1 className="name">{content}</h1>
      <nav className="nav">
        <Link to="/"          className='title' id='nav-button'>      <button className="home">Home</button></Link>
        <Link to="/about"     id='nav-button' className='about-L'>    <button className="about">About</button></Link>
        <Link to="/portfolio" id='nav-button' className='portfolio-L'><button className="portfolio">Portfolio</button></Link>
        <Link to="/contact"   id='nav-button' className='contact-L'>  <button className="contact">Contact</button></Link>
      </nav>
      
    </div>
  )
}

function NavBar() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default NavBar;

