import interactiveImageMobile from '../assets/mobile/image-interactive.jpg';
import interactiveImageDesktop from '../assets/desktop/image-interactive.jpg';

export default function Main() {
  return (
    <section className='main-section'>
      <div className="interactive-VR-mobile d-md-none">
        <img src={interactiveImageMobile} alt="man wearing a VR headset" />

        <h2 className="interactive-VR-mobile-header">The leader in interactive VR</h2>
        <p className="interactive-VR-mobile-text">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
      </div>

      <div className="interactive-VR-desktop d-none d-md-block">
        <img src={interactiveImageDesktop} alt="man wearing a VR headset" />

        <div className="interactive-VR-desktop-text-container">
          <h2 className="interactive-VR-desktop-header">The leader in interactive VR</h2>
          <p className="interactive-VR-desktop-text">Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p> 
        </div>        
      </div>
    </section>
  )
}