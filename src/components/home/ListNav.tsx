import type { ReactElement } from 'react'

interface Props {
    number: number,
    onSelect: (num: number) => void
}

function ListNav({ number, onSelect }: Props): ReactElement {
    const offset = 2
    const start = Math.max(0, number - offset)

    const max = Math.floor(1301 / 50)

    return (
        <div id="list-nav" className="flex gap-4 text-2xl text-black mt-12 *:size-8 *:flex *:items-center *:justify-center *:hover:cursor-pointer">
            <div onClick={() => onSelect(0)}>{"<<"}</div>
            <div onClick={() => {if (number > 0) onSelect(number - 1)}}>{"<"}</div>
            <div className={`list-${start + 0}` + `${number === start + 0 ? " text-white bg-red-500" : ""}`} onClick={() => onSelect(start + 0)}>{start + 1}</div>
            <div className={`list-${start + 1}` + `${number === start + 1 ? " text-white bg-red-500" : ""}`} onClick={() => onSelect(start + 1)}>{start + 2}</div>
            <div className={`list-${start + 2}` + `${number === start + 2 ? " text-white bg-red-500" : ""}`} onClick={() => onSelect(start + 2)}>{start + 3}</div>
            <div className={`list-${start + 3}` + `${number === start + 3 ? " text-white bg-red-500" : ""}`} onClick={() => onSelect(start + 3)}>{start + 4}</div>
            <div className={`list-${start + 4}` + `${number === start + 4 ? " text-white bg-red-500" : ""}`} onClick={() => onSelect(start + 4)}>{start + 5}</div>
            <div onClick={() => {{if (number < max) onSelect(number + 1)}}}>{">"}</div>
            <div onClick={() => onSelect(max)}>{">>"}</div>
        </div>
    )
}

export default ListNav
