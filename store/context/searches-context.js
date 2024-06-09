import { createContext, useState } from "react";

export const SearchesContext = createContext({
    searches: [],
    addSearch: (search) => { },
    clearSearch: (space, index) => { },
});

function SearchesContextProvider({ children }) {
    const [searches, setSearches] = useState([]);

    function addSearch(search){
        setSearches((currentState)=>[...currentState, search])
    }

    function clearSearch(index){
        const temp = [...searches].filter((item, i)=>{
            return i !== index;
        });
        setSearches((currentState)=>[...temp])
    }

    const value = {
        searches: searches,
        addSearch: addSearch,
        clearSearch: clearSearch,
    }


    return <SearchesContext.Provider value={value}>
        {children}
    </SearchesContext.Provider>
}

export default SearchesContextProvider;