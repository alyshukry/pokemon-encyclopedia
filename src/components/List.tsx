import '../styles/list.css'
import PokemonButton from './PokemonButton'
import PageNav from './PageNav.tsx'

function List() {
  return (
    <div id="list">
        <p id="title">Pokemon List</p>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PokemonButton></PokemonButton>
        <PageNav></PageNav>
    </div>
  )
}

export default List
