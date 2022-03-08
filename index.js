// ReactDOM & JSX
import React from "react"
import ReactDOM from "react-dom"

// JSX
ReactDOM.render(<div></div></div.><h1>Hello World!</h1><p></div>This is a paragraph</p>, document.getElementById("root"))

var myNewP = document.createElement("p")
myNewP.innerHTML = "This is a paragraph".

import React from "react"
import ReactDOM from "react-dom"

function MyApp() {
    return <ul> (
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
    )
}

ReactDOM.render(
    <MyApp />, 
    document.getElementById("root")
)


// Functional Components Practice

import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
    return (
        <div>
        <h1>Bob Ziroll</h1>
        <p>This is a paragraph about me... </p>
        <ul>
          <li>Thailand</li>
          <li>Japan</li>
          <li>Nordic Countries</li>
        </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))

// Move Components into Separate Files

import React from "react"
import ReactDOM from "react-dom"

import MyInfo from "./components/MyInfo.js"

function MyInfo() {
    return (
        <div>
            <h1>Bob Ziroll</h1>
            <p> This is a paragraph about me...</p>
            <ul>
                <li>Thailand</li>
                <li>Japan</li>
                <li>Nordic Countries</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById("root"))

export default MyInfo

// Parent/Child Components

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

ReactDOM.rende(<App />, document.getElementById("root"))

// Parent/Child Components Practice

import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(<App />, document.getElementById("root"))
