import type { ReactElement } from 'react'

interface Props {
    name: string,
    sprite: string,
}

function PokemonButton({ name, sprite }: Props): ReactElement {
    return (
        <div id="pokemon-button" className="size-40 flex flex-col items-center bg-gray-100 rounded-2xl" style={{ imageRendering: "pixelated" }}>
            <img className="sprite size-5/6" src={sprite} alt={name} />
            <p className="name text-2xl antialiased -translate-y-1/3">{name.slice(0, 1).toUpperCase() + name.slice(1)}</p>
        </div>
    )
}

export default PokemonButton
