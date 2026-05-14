
// import japan from "../assets/images/mountfuji.png"
import marker from "../assets/images/marker.svg"
export default function Entry({props}){
  return(
    <section className="card">
      <img src={props.img.src} alt={props.img.alt} className="scenery-img"/>
      <article className="description">
        <h2>{props.title}</h2>
        <div className="localisation">
          <img src={marker} alt="marker for localisation" />
          <h3>{props.country}</h3>
          <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
        </div>
        <div className="dates">
          <time dateTime="2023-01-12">{props.dates.begin}</time>
          <span> - </span>
          <time dateTime="2023-01-24">{props.dates.end}</time>
        </div>
        <p>{props.text}</p>
      </article>
    </section>
  )
}