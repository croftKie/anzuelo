import { createContext, useState } from "react";

export const FavouritesContext = createContext({
    ids:[],
    addFavourite: (id)=>{},
    removeFavourite: (id)=>{}
});

function FavouritesContextProvider({children}){
    const [favouriteId, setFavouriteId] = useState([]);

    function addFavourite(id, title, logo, employer, location){
        setFavouriteId((currentState)=> [...currentState, {
            id: id,
            title: title, 
            logo: logo, 
            employer: employer,
            location: location
        }])
    }

    function removeFavourite(id){
        setFavouriteId((currentState)=>{
            return currentState.filter((m_id)=>m_id.id !== id);
        })
    }

    const value = {
        ids: favouriteId,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }


    return <FavouritesContext.Provider value={value}>
        {children}
    </FavouritesContext.Provider>
}

export default FavouritesContextProvider