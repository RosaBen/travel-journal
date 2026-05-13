import logo from "../assets/images/globe.png"

export default function Header(){
  return(
    <header>
        <img src={logo} alt="world logo" />
        <h1>my travel journal.</h1>
    </header>
  )
}