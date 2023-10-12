import '../style/App.scss'
import {useLayoutEffect, useEffect} from "react";
export default function App() {

    useEffect(() => {
        let height = document.documentElement.clientHeight
        document.getElementById('app').style.height = `${height}px`
    }, );

    return (
        <div className="app" id='app'>

        </div>
    )
}