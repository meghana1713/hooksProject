import React, { useState, useEffect } from 'react'
import BtnContainer from './components/BtnContainer';
import JobInfo from './components/JobInfo';
 
const url = "https://www.course-api.com/react-tabs-project"
const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs,setJobs] = useState([]);
  const [currentItem,setCurrentItem]=useState(0);
const fetching = async()=>{
try{
  setLoading(true);
  const response = await   fetch(url);
  const data = await response.json();
  setJobs(data);
  setLoading(false);
    // console.log(data); 
}
catch(error){
  setLoading(false);
 console.log(error);
}
};
  
  useEffect(()=>{
// we can write fetching function declaration (i.e asyn code) in side this useEffect or we can write outside the  useEffect fn and just call fetching function declaration
fetching();

  },[]);
  if(loading){
     return (
      <section>
        <div>Loading...........</div>
      </section>
     )
  }
  return (
    <section className="job-center">
  <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
  <JobInfo jobs={jobs} currentItem={currentItem} />
  </section>
  )
}

export default App

