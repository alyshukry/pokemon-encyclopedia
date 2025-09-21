import '../styles/header.css'

function Header() {
  return (
    <header>
        <p id="title">Pokedex</p>
        <nav id="header-nav">
            <p>Home</p>
            <p>Pokedex</p>
        </nav>
        <input id="search"></input>
        <div id="settings"></div>
    </header>
  )
}

export default Header