import heroImageMobile from '../assets/mobile/image-hero.jpg';
import heroImageDesktop from '../assets/desktop/image-hero.jpg';

export default function Header() {

  return (
    <header className='header'>
      <nav className="navbar navbar-expand-md">
        <div className="container-fluid">

          <a className="navbar-brand" href="#">loopstudios</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <div className="offcanvas-header">
              <h4 className="offcanvas-title" id="offcanvasNavbarLabel">loopstudios</h4>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Careers</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Events</a>
                </li>              
                <li className="nav-item">
                  <a className="nav-link" href="#">Products</a>
                </li>              
                <li className="nav-item">
                  <a className="nav-link" href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="hero-image-mobile d-md-none">
        <img src={heroImageMobile} alt="hero image" />
      </div>
      <div className="hero-image-desktop d-none d-md-block">
        <img src={heroImageDesktop} alt="hero image" />
      </div>

      <div className="hero-text-container">
        <h1 className="hero-text">Immersive experiences that deliver</h1>
      </div>
    </header>
  )
}




// About
// Careers
// Events
// Products
// Support

// © 2021 Loopstudios. All rights reserved.
