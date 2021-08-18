import React, {useState} from 'react'
import AddApointment from './components/AddApointment'
import Search from "./components/Search"
import ListPatient from './components/ListPatient'


    

const App = () => {
    const [query, setQuery] = useState("")
    return (
        <div>
            {/* <h1>this is new experiance</h1> */}
            <AddApointment />
            <Search
                query={query}
                onQueryChange={myQuery => setQuery(myQuery)}
                />
            <ListPatient query={query} />
        </div>
    )
}
export default App;
