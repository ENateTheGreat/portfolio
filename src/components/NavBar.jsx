import './../styles/NavBar.css';
// import { Link } from 'react-router-dom'
import { menuItemsData } from './menuItems.js'
import MenuItems from './MenuItems.jsx';

function NavBar() {

  const content = '<EdwardLee />'

  return (
    <div className="header-wrapper">
      <h1 className="name">{content}</h1>
      <nav className="nav">
        <ul className='menus-nav'>
          {menuItemsData.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
          {/* I see that using index as the key is poor practice and make the code non reusable, will look into that */}
        </ul>
      </nav>
    </div>
  )
}

/* function Nav() {
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
*/
/*function NavBar() {
  return (
    <div className="nav-app">
      <Nav />
    </div>
  );
} */

export default NavBar; 

