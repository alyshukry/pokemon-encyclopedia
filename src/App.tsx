import './App.css'
import type { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.tsx'
import PokemonPage from './pages/PokemonPage.tsx'

function App(): ReactElement {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<PokemonPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
