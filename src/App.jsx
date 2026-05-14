import Header from "./components/Header"
import Entry from "./components/Entry"

import {data} from "./assets/scripts/data"

function App() {

  return (
    <>
      <Header/>
      <div className="container">
        <Entry props={data[0]}/>
      </div>
      
      {/* </>
      </> */}
    </>
  )
}

export default App
