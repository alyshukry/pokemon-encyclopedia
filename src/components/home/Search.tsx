import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Search() {
    const [query, setQuery] = useState("")
    const [allPokemon, setAllPokemon] = useState<string[]>([])
    const [filtered, setFiltered] = useState<string[]>([])

    useEffect(() => {
        async function fetchAllPokemon() {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
            const data = await res.json()
            setAllPokemon(data.results.map((p: { name: string }) => p.name))
        }
        fetchAllPokemon()
    }, [])

    useEffect(() => {
        if (query.length > 0) {
            setFiltered(
                allPokemon.filter(name => name.includes(query.toLowerCase()))
            )
        } else {
            setFiltered([])
        }
    }, [query, allPokemon])

    const navigate = useNavigate()

    function handleClick(name: string) {
        navigate(`/${name}`)
    }

    return (
        <div className="z-10 h-12 flex justify-center mb-6">
            <input
                type="text"
                placeholder="Search Pokémon"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w1/1 bg-white border-2 border-gray-100 text-black text-2xl p-4"
            />
            <ul className="absolute border-2 border-gray-100 translate-y-8">
                {filtered.map(name => (
                    <li
                        key={name}
                        className="text-black text-2xl text-nowrap bg-white pl-4 pr-4 pt-2 hover:bg-gray-50 hover:cursor-pointer"
                        onClick={() => handleClick(name)}
                    >{name.slice(0, 1).toUpperCase() + name.slice(1)}</li>
                ))}
            </ul>
        </div>
    )
}

export default Search