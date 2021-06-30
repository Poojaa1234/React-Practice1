import React, { createContext } from 'react';
import CompA from './CompA';

const Firstname = createContext();
const Lastname = createContext();

const App = () => {
return ( 
<>
<Firstname.Provider value={"Poo"}>
<Lastname.Provider value={"Agrawal"}>
<CompA />
</Lastname.Provider>
</Firstname.Provider>
</>
)

}

export default App;
export {Firstname, Lastname};