import globeImg from "../images/globe.png"
export default function Header() {
  return (
    <header>
      <img src={globeImg} alt="Earth" className="header--logo" />
      <h1 className="header--title">my travel journal.</h1>
    </header>
  )
}