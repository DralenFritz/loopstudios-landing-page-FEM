export default function CreationsDesktop(props) {
  return (
    <>
      <div className="creations-desktop-examples">
        <div className="creation-desktop-example" style={{ backgroundImage: `url(${props.img.src})` }}>
          <h2>{props.title}</h2>
        </div>
      </div>
    </>
  )
}