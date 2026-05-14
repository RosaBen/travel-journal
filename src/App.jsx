import Header from "./components/Header"
import Entry from "./components/Entry"

import {data} from "./assets/scripts/data"

function App() {

  const destinations = data.map(destination =>{
    return(
      <Entry 
        key ={destination.id}
        props={destination}
      />
    )
  })
  return (
    <>
      <div className="body-container">
              <Header/>
      <div className="container">
        {destinations}
      </div>
      </div>
    </>
  )
}

export default App
