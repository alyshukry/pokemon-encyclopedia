import type { ReactElement } from 'react'
    import { useNavigate } from 'react-router-dom'

interface Props {
    id: string,
    name: string,
    sprite: string,
}

function PokemonButton({ id, name, sprite }: Props): ReactElement {
    const navigate = useNavigate()

    function handleClick() {
        navigate(`/${id}`)
    }

    return (
        <div 
            id="pokemon-button" 
            className="size-32 flex flex-col items-center hover:cursor-pointer hover:scale-110 transition-all z-0" style={{ imageRendering: "pixelated" }}
            onClick={handleClick}
        >
            <img className="sprite size-5/6" src={sprite} alt={name} />
            <p className="name text-black text-2xl antialiased -translate-y-1/3">{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
        </div>
    )
}

export default PokemonButton
