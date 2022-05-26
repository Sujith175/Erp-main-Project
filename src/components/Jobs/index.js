import React from 'react'
import Job from '../Job';
import { PostsStyle} from './JobsElements';

const Jobs = ({posts}) => {  //accepting props from home
  return (
    <>
     <PostsStyle>
    { posts.map((p) => (
      
        <Job post = {p} />
        ))}
        
    </PostsStyle>
    </>
  )
}
export default Jobs