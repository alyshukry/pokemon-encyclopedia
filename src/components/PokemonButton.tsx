import type { ReactElement } from 'react'

interface Props {
    name: string,
    sprite: string,
}

function PokemonButton({ name, sprite }: Props): ReactElement {
    return (
        <div id="pokemon-button" className="size-36 flex flex-col items-center" style={{ imageRendering: "pixelated" }}>
            <img className="sprite size-1/1" src={sprite} alt={name} />
            <p className="name -translate-y-1/1">{name}</p>
        </div>
    )
}

export default PokemonButton
