import React from 'react';
import Sidebar from '../Sidebar';
import Navbar from '../Navbar for Pages';
import { useState } from 'react';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import Jobs from '../Jobs'
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { PostT } from '../Job/JobElements';
import { JobLink } from './JobListElements';
import { SearchCard, SearchInput, SearchButton } from '../StudentProgram/StudentProgramElements';
import PageHeader from '../PageHeader';
const JobLists = () => {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const {search} = useLocation();
  const [query, setQuery] = useState();
  const[data, setData] = useState([]);

useEffect(() => {
  const fetchPosts = async () =>{
    try{
    const res = await axios.get("http://localhost:5000/api/auth/getjoblist"+  search);
    setPosts(res.data.jobs);
    }catch(err){
      console.log(err);
    }
  }
  fetchPosts();
},[search])

useEffect(() => {
  const fetchData = async () =>{
    const res = await axios.get(`http://localhost:5000/api/auth/getjobsearch?q=${query}`);
    setData(res.data);
  }
},[query]);

const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>

    <MarginSetterNav/>
    
   <Sidebar isOpen={isOpen} toggle={toggle}/>
   <Navbar toggle={toggle} />
   <PageHeader/>
   <SearchCard>
         <SearchInput style={{color: "black"}} type="text" placeholder="Search..."
         onChange={(e) => setQuery(e.target.value)}
         />
         <SearchButton><i class="fa fa-search"></i></SearchButton>
     </SearchCard>
   <PostT style={{marginLeft:"10%"}}>Our Job Openings</PostT>
   <JobLink style={{marginLeft:"10%"}} to='/userappliedjoblist'>Your Application History</JobLink>
   
  <Jobs posts ={posts}/>

    </>
  )
}

export default JobLists;