import React from "react"
import Footer from "./Footer"

function App() {
    return {
        <div>
           <header />
           <MainContent />
        <footer />
        </div>
    }
}

export default App

// Parent/Child Component Practice

import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/footer"


function App() {
    return {
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>

    }
}

export default App
