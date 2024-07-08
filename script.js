const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? '' : dropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="./images/logo.svg" alt="snap logo" className="navbar-logo" />
        <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <ul className="navbar-items">
            <li className="navbar-item" onClick={() => toggleDropdown('features')}>
              Features
              <span className={`arrow ${activeDropdown === 'features' ? 'up' : 'down'}`}></span>
              <ul className={`dropdown ${activeDropdown === 'features' ? 'is-active' : ''}`}>
                <li className="dropdown-item"><img src="./images/icon-todo.svg" alt="Todo" /> Todo List</li>
                <li className="dropdown-item"><img src="./images/icon-calendar.svg" alt="Calendar" /> Calendar</li>
                <li className="dropdown-item"><img src="./images/icon-reminders.svg" alt="Reminders" /> Reminders</li>
                <li className="dropdown-item"><img src="./images/icon-planning.svg" alt="Planning" /> Planning</li>
              </ul>
            </li>
            <li className="navbar-item" onClick={() => toggleDropdown('company')}>
              Company
              <span className={`arrow ${activeDropdown === 'company' ? 'up' : 'down'}`}></span>
              <ul className={`dropdown ${activeDropdown === 'company' ? 'is-active' : ''}`}>
                <li className="dropdown-item">History</li>
                <li className="dropdown-item">Our Team</li>
                <li className="dropdown-item">Blog</li>
              </ul>
            </li>
            <li className="navbar-item"><a href="#">Careers</a></li>
            <li className="navbar-item"><a href="#">About</a></li>
            <div className="mobile-buttons">
              <a href="#" className="button login">Login</a>
              <a href="#" className="button register">Register</a>
            </div>
          </ul>
        </div>
      </div>
      <div className="navbar-right desktop-buttons">
        <a href="#" className="button login">Login</a>
        <a href="#" className="button register">Register</a>
      </div>
      <div className="navbar-burger" onClick={toggleMenu}>
        <img src={isMenuOpen ? './images/icon-close-menu.svg' : './images/icon-menu.svg'} alt="menu icon" />
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="hero">
    <div className="hero-grid">
      <div className="hero-image">
        <picture>
          <source srcSet="./images/image-hero-desktop.png" media="(min-width: 1230px)" />
          <img src="./images/image-hero-mobile.png" alt="Hero" />
        </picture>
      </div>
      <div className="hero-title">
        <h1>Make <br /> remote work</h1>
      </div>
      <div className="hero-content">
        <p className="hero-description">
          Get your team in sync, no matter your location.<br /> Streamline processes, create team rituals, and watch productivity soar.
        </p>
        <button className="learn-more">Learn more</button>
      </div>
      <div className="hero-icons">
        <img src="./images/client-databiz.svg" alt="Databiz" className="client-icon" />
        <img src="./images/client-audiophile.svg" alt="Audiophile" className="client-icon" />
        <img src="./images/client-meet.svg" alt="Meet" className="client-icon" />
        <img src="./images/client-maker.svg" alt="Maker" className="client-icon" />
      </div>
    </div>
  </section>
);

const App = () => (
  <div className="container">
    <Navbar />
    <Hero />
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
