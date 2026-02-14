import facebookIcon from '../assets/icon-facebook.svg';
import twitterIcon from '../assets/icon-twitter.svg';
import pinterestIcon from '../assets/icon-pinterest.svg';
import instagramIcon from '../assets/icon-instagram.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
            <h2>loopstudios</h2>
            <ul className="footer-links">
              <li className="footer-link">About</li>
              <li className="footer-link">Careers</li>
              <li className="footer-link">Events</li>
              <li className="footer-link">Products</li>
              <li className="footer-link">Support</li>
            </ul>
          </div>

          <div className="footer-right">
            <div className="footer-socials">
              <a href="#" className='social'>
                <img src={facebookIcon} alt="facebook icon" />
              </a>
              <a href="#" className='social'>
                <img src={twitterIcon} alt="twitter icon" />
              </a>
              <a href="#" className='social'>
                <img src={pinterestIcon} alt="pinterest icon" />
              </a>
              <a href="#" className='social'>
                <img src={instagramIcon} alt="instagram icon" />
              </a>
            </div>

            <small className='copyright'>©2021 Loopstudios. All rights reserved.</small>
          </div>
        </div>

      </footer>
  )
}