import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/bookmarks/Bookmarks"
import Header from "./Components/Header/Header"


function App() {

    const[addedBms,setAddedBms]=useState([])
    const handleadd = (blog) => {
          const newtitle=[...addedBms,blog]
          setAddedBms(newtitle)
     }
  return (
    <>
        <Header></Header>
        <main className="container mx-auto ">
        <section className="flex">
          <Blogs handleadd={handleadd}></Blogs>
          <Bookmarks addedBms={addedBms} ></Bookmarks>
        
        </section>
        </main>
      
      
    </>
  )
}

export default App
