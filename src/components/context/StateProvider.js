import React,{createContext,useContext,useReducer,useState} from 'react'
const StateContext=createContext();
const StateProvider = ({children}) => {
  const [data,setdata]=useState([
    {
      title:"Langtang Park",
      price:"$500",
      description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"  
    },
    {
        title:"Langtang Park",
        price:"$500",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"  
      },
      {
        title:"Langtang Park",
        price:"$500",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"  
      },
      {
        title:"Langtang Park",
        price:"$500",
        description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in"  
      }
  ]);
  return (
<StateContext.Provider value={ [data,setdata]}>
    {children}
   
</StateContext.Provider>
  )
}

export default StateProvider
export const useStateValue = () => useContext(StateContext);