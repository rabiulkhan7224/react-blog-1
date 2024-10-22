

import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Blog from '../blog/Blog'

const Blogs = ({handleadd}) => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs-data.json')
       .then(res =>res.json())
       .then(data =>setBlogs(data))
    },[])

  return (
    <div className='w-2/3 mx-auto'>
        <h1>data : {blogs.length}</h1>
        {
    blogs.map((blog,index)=><Blog key={index} handleadd={handleadd} blog={blog}></Blog>)
        }

    </div>
  )
}

Blogs.propTypes = {
    handleadd: PropTypes.func.isRequired
}

export default Blogs