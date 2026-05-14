import Header from "./components/Header"
import Entry from "./components/Entry"

import {data} from "./assets/scripts/data"

function App() {

  const destinations = data.map(destination =>{
    return(
      <Entry 
        props={destination}
      />
    )
  })
  return (
    <>
      <Header/>
      <div className="container">
        {destinations}
      </div>
      
      {/* </>
      </> */}
    </>
  )
}

export default App
