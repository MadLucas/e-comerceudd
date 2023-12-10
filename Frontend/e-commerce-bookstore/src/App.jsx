import './App.css'

import React from 'react'

import NavBar from '../src/components/NavBar/NavBar'
import { MainRouter } from './router/MainRouter'

const App = () => {
    return (
        <>
            <NavBar/>
            <MainRouter />
        </>
    )
}




export default App
