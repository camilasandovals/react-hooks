import React, {useContext} from "react"
import { TreesContext } from "./App"
export default function Component() {
    const {trees} = useContext(TreesContext);
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