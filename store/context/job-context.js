import { createContext, useState } from "react";

export const JobContext = createContext({
    selectedJob: {},
    jobs: [],
    search: "",
    addJobs: (space) => { },
    clearJobs: (space, index) => { },
    updateSearch: (search)=> {},
    updateSelectedJob: (job)=> {}
});

function JobContextProvider({ children }) {
    const [selectedJob, setSelectedJob] = useState({});
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState("");

    function addJobs(jobs){
        setJobs((currentState)=>[...jobs])
    }

    function clearJobs(jobs){
        setRecipes((currentState)=>[])
    }

    function updateSearch(search){
        setSearch((currentState)=>search);
    }

    function updateSelectedJob(job){
        setSelectedJob((cs)=>job);
    }


    const value = {
        selectedJob: selectedJob,
        jobs: jobs,
        search: search,
        addJobs: addJobs,
        clearJobs: clearJobs,
        updateSearch: updateSearch,
        updateSelectedJob: updateSelectedJob
    }


    return <JobContext.Provider value={value}>
        {children}
    </JobContext.Provider>
}

export default JobContextProvider;