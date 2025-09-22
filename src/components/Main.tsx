import { useState, type ReactElement } from 'react'
import ListNav from './ListNav.tsx'
import List from './List.tsx'

function Main(): ReactElement {
    const [currentList, setCurrentList] = useState(0)

    return (
        <div id="main" className="flex flex-col items-center gap-4 w-1/1">
            <p id="title" className="text-2xl font-bold self-start ml-4">Pokemon List</p>
            <List number={currentList}></List>
            <ListNav number={currentList} onSelect={setCurrentList} />
        </div>
    )
}

export default Main
