import { createContext, useState } from "react";

export const PlannerDailyContext = createContext({
    morningSpaces: [""],
    afternoonSpaces: [""],
    eveningSpaces: ["",""],
    addSpace: (space) => { },
    removeSpace: (space, index) => { },
    addRecipe: (space, index, id) => { },
    removeRecipe: (space, index) => { },
});

function PlannerDailyContextProvider({ children }) {
    const [morningSpaces, setMorningSpaces] = useState([""]);
    const [afternoonSpaces, setAfternoonSpaces] = useState([""]);
    const [eveningSpaces, setEveningSpaces] = useState(["",""]);

    function addSpace(space) {
        switch (space) {
            case "morning":
                setMorningSpaces((currentState)=>[...currentState, ""])
                break;
            case "afternoon":
                setAfternoonSpaces([...afternoonSpaces, ""])
                break;
            case "evening":
                setEveningSpaces([...eveningSpaces, ""])
                break;
            default:
                break;
        }
    }
    function removeSpace(space, index) {
        switch (space) {
            case "morning":
                const m_temp = [...morningSpaces];
                m_temp.splice(index, 1);
                setMorningSpaces(m_temp)
                break;
            case "afternoon":
                const a_temp = [...afternoonSpaces];
                a_temp.splice(index, 1);
                setAfternoonSpaces(a_temp)
                break;
            case "evening":
                const e_temp = [...eveningSpaces];
                e_temp.splice(index, 1);
                setEveningSpaces(e_temp)
                break;
            default:
                break;
        }
    }
    function addRecipe(space, id){
        switch (space) {
            case "morning":
                const m_temp = [...morningSpaces];
                const nextEmptySpaceMorning = m_temp.findIndex((el)=>el === "");
                m_temp[nextEmptySpaceMorning !== -1 ? nextEmptySpaceMorning : m_temp.length] = id
                setMorningSpaces(m_temp)
                break;
            case "afternoon":
                const a_temp = [...afternoonSpaces];
                const nextEmptySpaceAfternoon = a_temp.findIndex((el)=>el === "");
                a_temp[nextEmptySpaceAfternoon !== -1 ? nextEmptySpaceAfternoon : _temp.length] = id
                setAfternoonSpaces(a_temp)
                break;
            case "evening":
                const e_temp = [...eveningSpaces];
                const nextEmptySpaceEvening = e_temp.findIndex((el)=>el === "");
                e_temp[nextEmptySpaceEvening !== -1 ? nextEmptySpaceEvening : e_temp.length] = id                
                setEveningSpaces(e_temp)
                break;
            default:
                break;
        }
    }
    function removeRecipe(space, index){
        switch (space) {
            case "morning":
                const m_temp = [...morningSpaces];
                m_temp[index] = ""
                setMorningSpaces(m_temp)
                break;
            case "afternoon":
                const a_temp = [...afternoonSpaces];
                a_temp[index] = ""
                setAfternoonSpaces(a_temp)
                break;
            case "evening":
                const e_temp = [...eveningSpaces];
                e_temp[index] = ""
                setEveningSpaces(e_temp)
                break;
            default:
                break;
        }
    }


    const value = {
        morningSpaces: morningSpaces,
        afternoonSpaces: afternoonSpaces,
        eveningSpaces: eveningSpaces,
        addSpace: addSpace,
        removeSpace: removeSpace,
        addRecipe: addRecipe,
        removeRecipe: removeRecipe
    }


    return <PlannerDailyContext.Provider value={value}>
        {children}
    </PlannerDailyContext.Provider>
}

export default PlannerDailyContextProvider;