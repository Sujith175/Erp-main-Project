import React from 'react'
import Job from '../Job';
import { PostsStyle} from './JobsElements';
import { SearchCard, SearchInput, SearchButton } from '../StudentProgram/StudentProgramElements';
import { useState } from 'react';





const Jobs = ({posts}) => {  //accepting props from home
  const[search, setSearch] = useState("");
  return (
    <>
    <SearchCard>
         <SearchInput style={{color: "black"}} type="text" placeholder="Search..."
          onChange = {(e)=>setSearch(e.target.value)}
         />
         <SearchButton><i class="fa fa-search"></i></SearchButton>
     </SearchCard>
     <PostsStyle>
       
    { 
     posts.filter((value)=>{
      if(search===''){ 
        return value;
      }
      else if(value.jobtitle.toString().toLowerCase().includes(search.toString().toLowerCase())){
        return value;
      }
     return false;
     }).map((p) => (
      
        <Job post = {p} />
        ))}
        
    </PostsStyle>
    </>
  )
}
export default Jobs