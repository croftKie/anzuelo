import { createContext, useState } from "react";

export const AppliedContext = createContext({
  ids: [],
  addApplied: (id) => {},
  removeApplied: (id) => {},
});

function AppliedContextProvider({ children }) {
  const [applied, setApplied] = useState([]);

  function addApplied(id, title, logo, employer, location) {
    setApplied((currentState) => [
      ...currentState,
      {
        id: id,
        title: title,
        logo: logo,
        employer: employer,
        location: location,
      },
    ]);
  }

  function removeApplied(id) {
    setApplied((currentState) => {
      return currentState.filter((m_id) => m_id.id !== id);
    });
  }

  const value = {
    ids: applied,
    addFavourite: addApplied,
    removeFavourite: removeApplied,
  };

  return (
    <AppliedContext.Provider value={value}>{children}</AppliedContext.Provider>
  );
}

export default AppliedContextProvider;
