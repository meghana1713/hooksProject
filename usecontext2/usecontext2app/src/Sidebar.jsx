import React from 'react'
import { useGlobalContext } from './Context';
import { FaTimes } from "react-icons/fa";
import { links, social } from './data';

const Sidebar = () => {
    const {isSidebarOpen,closeSidebar} = useGlobalContext();
  return (
   <aside className = {isSidebarOpen ? "sidebar show-sidebar":"sidebar"}>
    <div>
       <img src=""  alt="Coding Addict"/>
       <button onClick={closeSidebar} className="close-btn">
       <FaTimes />
       </button>
       <ul>
        {links.map((link)=>{
            // here links is an array and link is like element as element is an object inside an links array as array called links is exported from data.jsx file
          const {id,url,text,icon} = link;// destructuring link object
          return(
            <li key={id}>
                {/* //when we use map we mention key to identify uniquely */}
               <a href={url}>{icon}{text}</a>

            </li>
          )
        })}
       </ul>
       <ul>
        {social.map((link)=>{
            const {id,url,icon} = link;
            return(
             <li key={id}>
                <a href={url}>{icon}</a>
             </li>    
            )
        })}
       </ul>
    </div>
   </aside>
  )
}

export default Sidebar;
