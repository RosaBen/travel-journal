import japan from "../assets/images/mountfuji.png"
import marker from "../assets/images/marker.svg"
export default function Entry(){
  return(
    <section className="card">
      <img src={japan} alt="Mount Fuji in Japan" className="scenery-img"/>
      <article className="description">
        <h2>Mount Fuji</h2>
        <div className="localisation">
          <img src={marker} alt="marker for localisation" />
          <h3>Japan</h3>
          <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
        </div>
        <div className="dates">
          <time datetime="2023-01-12">12 Jan, 2023</time>
          <span> - </span>
          <time datetime="2023-01-24">24 Jan, 2023</time>
        </div>
        <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists</p>
      </article>
    </section>
  )
}