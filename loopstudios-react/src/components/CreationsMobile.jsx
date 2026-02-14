export default function CreationsMobile(props) {
  return (
    <>
        <div className="creations-mobile-examples">
          <div className="creation-mobile-example" style={{ backgroundImage: `url(${props.img.src})` }}>
            <h2>{props.title}</h2>
          </div>
        </div>
    </>
  )
}