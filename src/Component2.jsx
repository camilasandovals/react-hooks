import React from "react"
import { useTrees } from "./App"

export default function Component2() {
    const {trees} = useTrees()
    return(
        <div>
            <h1>
                Trees I have heard of 
            </h1>
            <ul>
                {trees.map((tree) => (
                    <li key={tree.id}>{tree.type}</li>
                ))}
            </ul>
        </div>
    )
}