import Header from "./components/Header.jsx"
import Body from "./components/Body.jsx"
import CreationsMobile from "./components/CreationsMobile.jsx"
import creationsMobileData from "./creations-mobile.js"
import CreationsDesktop from "./components/CreationsDesktop.jsx"
import creationsDesktopData from "./creations-desktop.js"
import Footer from "./components/Footer.jsx"

export default function App() {

  const creationsMobile = creationsMobileData.map((creation) => {
    return (
      <CreationsMobile 
        key={creation.id}
        {...creation}
      />
    )
  })

  const creationsDesktop = creationsDesktopData.map((creation) => {
    return (
      <CreationsDesktop
        key={creation.id}
        {...creation}
      />
    )
  })
  return (
    <>
      <Header />
      <main>
        <Body />
        <section className="creations-mobile d-md-none">
          <h2 className="creations-header">Our creations</h2>
          {creationsMobile}
          <div className="see-all-button">
            <button className="btn">See All</button>
          </div>
        </section>

        <section className="creations-desktop d-none d-md-block">
          <div className="creations-desktop-top">
            <h2 className="creations-header">Our creations</h2>
            <div className="see-all-button-desktop">
              <button className="btn">See All</button>
            </div>
          </div>

          <div className="our-creations-desktop">
            {creationsDesktop}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}