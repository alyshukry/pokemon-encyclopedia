import type { ReactElement } from "react";

interface SpritesObject {
    front_default: string;
    back_default: string;
    front_shiny: string;
}

interface Props {
    sprites: SpritesObject;
}

function Sprites({ sprites }: Props): ReactElement {

    return (
        <div className="flex flex-row">
            <img className="size-48" src={sprites.front_default} style={{ imageRendering: "pixelated" }}></img>
            <img className="size-48" src={sprites.back_default} style={{ imageRendering: "pixelated" }}></img>
            <img className="size-48" src={sprites.front_shiny} style={{ imageRendering: "pixelated" }}></img>
        </div>
    )
}

export default Sprites