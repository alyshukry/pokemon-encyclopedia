import { useState, useEffect, type ReactElement } from "react"
import { useParams, useNavigate } from "react-router-dom"
import pokemonLogo from '../../assets/pokemon-logo.svg'
import Sprites from './Sprites'
import Text from './Text.tsx'

function Main(): ReactElement | undefined {
    const { id } = useParams()
    const pageFromUrl = id

    const [pokemon, setPokemon] = useState<any>(null)
    const [species, setSpecies] = useState<any>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!pageFromUrl) return
        setLoading(true)
        setError(null)
        fetch(`https://pokeapi.co/api/v2/pokemon/${pageFromUrl.toLowerCase()}`)
            .then(res => {
                if (!res.ok) throw new Error("Pokemon not found")
                return res.json()
            })
            .then(data => setPokemon(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${pageFromUrl.toLowerCase()}`)
            .then(res => {
                if (!res.ok) throw new Error("Pokemon species not found")
                return res.json()
            })
            .then(data => setSpecies(data))
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [pageFromUrl])

    const navigate = useNavigate()
    function handleClick() {
        navigate(`/`)
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    if (pokemon) return (
        <main className="flex items-center justify-center flex-col gap-4 w-1/1 h-svh p-8">
            <img id="logo" onClick={handleClick} src={pokemonLogo} className="w-58 mb-8 hover:cursor-pointer" />
            <Sprites sprites={pokemon.sprites} />
            <Text pokemon={pokemon} species={species} />
        </main>
    )
}

export default Main