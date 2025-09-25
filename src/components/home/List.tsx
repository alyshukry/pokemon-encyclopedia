import { useEffect, useState, type ReactElement } from "react"
import PokemonButton from "./PokemonButton"

interface Props {
    number: number
}

function List({ number }: Props): ReactElement {
    const [data, setData] = useState<any[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch first 16 Pokemon
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${number * 50}`)
                if (!response.ok) throw new Error(`Error status: ${response.status}`)
                const result = await response.json()

                // Fetch details for each Pokemon (to get sprites)
                const detailed = await Promise.all(
                    result.results.map(async (pokemon: any) => {
                        const res = await fetch(pokemon.url)
                        return await res.json()
                    })
                )

                setData(detailed)
            } catch (err: any) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [number])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>


    return (
        <div id="pokemon-buttons" className="flex flex-row flex-wrap gap-6 items-center justify-center pr-8 pl-8">
            {data.map((pokemon) => (
                <PokemonButton
                    key={pokemon.id}
                    name={pokemon.name}
                    sprite={pokemon.sprites.front_default}
                />
            ))}
        </div>
    )
}

export default List