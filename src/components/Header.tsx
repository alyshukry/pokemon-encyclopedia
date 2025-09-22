import type { ReactElement } from 'react'
import pokemonLogo from '../assets/pokemon-logo.svg'

function Header(): ReactElement {
  return (
    <header className="w-1/1 h-16 flex items-center justify-between bg-red-500 pr-6 pl-6 fixed top-0">
        <img id="logo" src={pokemonLogo} className="h-4/5" />
        <nav id="header-nav" className="flex">
            <p>Home</p>
            <p>Pokedex</p>
        </nav>
        <input id="search"></input>
        <div id="settings">a</div>
    </header>
  )
}

export default Header