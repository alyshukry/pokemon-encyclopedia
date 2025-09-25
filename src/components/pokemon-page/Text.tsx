import type { ReactElement } from "react";

interface Props {
    pokemon: any;
    species: any;
}

function Text({ pokemon, species }: Props): ReactElement {

    return (
        <>
            <p className="text-black text-4xl font-bold">{pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1) + " (" + species.genera.find((entry: any) => entry.language.name === `en`).genus + ")"}</p>
            <p className="text-black text-4xl text-center">{species.flavor_text_entries.find((entry: any) => entry.language.name === `en`).flavor_text.replace(/[\n\f]/g, " ")}</p>
            <p className="text-black text-4xl text-center">Weight: {pokemon.weight}hg, Height: {pokemon.height}dm</p>
        </>
    )
}

export default Text