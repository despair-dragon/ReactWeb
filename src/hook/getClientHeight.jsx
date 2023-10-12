/* eslint-disable */

import {useEffect} from "react";

export default function getClientHeight() {
    useEffect(() => {
        let height = document.documentElement.clientHeight
        document.getElementById('app').style.height = `${height}px`
    }, );
}

// Poor optimization