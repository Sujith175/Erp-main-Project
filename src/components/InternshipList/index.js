import React from 'react'
import Navbar from '../Navbar for Pages'
import { useState } from 'react';
import Sidebar from '../Sidebar';
import { MarginSetterNav } from '../Carrers/CarrerElements';
import PageHeader from '../PageHeader';

import Footer from '../Footer';
import { InternTitle } from './internshiplistElements';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Interns from '../Interns';



const InternshipList = () => {
    const [posts, setPosts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const {search} = useLocation();
  
  useEffect(() =>{
    const fetchIntern = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/auth/getinternship"+ search);
        setPosts(res.data.intern);
        console.log(res.data.intern);
      }catch(err){
        console.log(err);
      }
    }
    fetchIntern();
  }, [search])

  
  const toggle = () => {
    setIsOpen(!isOpen);
  };


    

  return (
    <>
     <MarginSetterNav/>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
   <Navbar toggle={toggle} />

    <PageHeader/>
    {/* <Internships internships = {intern}/> */}
    
    <InternTitle>Our Internship Program for Students</InternTitle>
    <MarginSetterNav/>
    
    <Interns posts ={posts}/>

     <Footer/>



    </>
  )
}

export default InternshipList