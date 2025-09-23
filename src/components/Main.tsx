import { useState, useEffect, type ReactElement } from "react"
import { useSearchParams } from "react-router-dom"
import ListNav from "./ListNav.tsx"
import List from "./List.tsx"

function Main(): ReactElement {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageFromUrl = Number(searchParams.get("page")) || 0
    const [currentList, setCurrentList] = useState(pageFromUrl)

    // Change url when currentList changes
    useEffect(() => {
        setSearchParams({ page: String(currentList) })
    }, [currentList, setSearchParams])

    return (
        <main className="flex flex-col items-center w-1/1 mt-20">
            <p id="title" className="text-4xl self-start ml-8 mb-6">Pokemon List</p>
            <List number={currentList}></List>
            <ListNav number={currentList} onSelect={setCurrentList} />
        </main>
    )
}

export default Main
