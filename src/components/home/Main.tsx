import { useState, useEffect, type ReactElement } from "react"
import { useSearchParams } from "react-router-dom"
import pokemonLogo from '../../assets/pokemon-logo.svg'
import ListNav from "./ListNav.tsx"
import List from "./List.tsx"
import Search from "./Search.tsx"

function Main(): ReactElement {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageFromUrl = Number(searchParams.get("page")) || 0
    const [currentList, setCurrentList] = useState(pageFromUrl)

    // Change url when currentList changes
    useEffect(() => {
        setSearchParams({ page: String(currentList) })
    }, [currentList, setSearchParams])

    return (
        <main className="flex flex-col items-center w-1/1 mt-4 mb-4">
            <img id="logo" src={pokemonLogo} className="w-48 mb-8" />
            <Search />
            <List number={currentList}></List>
            <ListNav number={currentList} onSelect={setCurrentList} />
        </main>
    )
}

export default Main
