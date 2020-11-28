import React,{ createContext, useContext, useState} from 'react';

const DataContext :any =  createContext<Partial<any>>({});;


export const DataProvider = ({children}:{children:any})=>{

    const [data,setData] = useState({});

    const setValues = (values:any)=>{
         setData(prevData=>({
             ...prevData,
             ...values
         }))
    }

return <DataContext.Provider value={{data,setValues}}>{children}</DataContext.Provider>
}

export const useData = ()=> useContext(DataContext)
