
"use client"
import CountButton from "./CountButton"
export default function Page() {
    return (
    <div>
    <CountButton 
    incrementval = {1}
    name = {"eric"}
    />
    <CountButton 
    incrementval = {2}
    name = {"john"}
    />
    {/* <CountButton /> */}

    <hr />
    <a href="github.com">Link to my github</a>
    <hr />
    <p>Search Bar</p>
    </div>
    )
  }

//   export default function Page() {
//     // return <h1>Hello, Next.js!</h1>
//     return <CountButton />
//   }
