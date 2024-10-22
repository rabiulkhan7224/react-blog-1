
import PropTypes from 'prop-types'
import { FaRegBookmark } from 'react-icons/fa'


const Blog = ({blog,handleadd}) => {
    const{cover,author,author_img,reading_time,title}=blog
    


  return (
    <div className='mb-8'>
        <img className='w-11/12 mx-auto rounded-lg' src={cover} alt="" />
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
               <img className='w-24' src={author_img} alt="" />
               <div>
                <h1 className='text-2xl font-bold ml-3'>{author}</h1>
                
                </div> 
            </div>
            <div>
                <h1 className="text-gray-400 font-bold"> {reading_time}min
                     <span><button className='text-2xl ml-2 border-2 w-20 mx-auto text-center' onClick={()=>handleadd(blog)}>< FaRegBookmark /></button></span></h1>
            </div>
        </div>
            <div><h1 className='text-2xl font-bold'>{title}</h1></div>
            <button >mark as read</button>
    </div>
    
  )
}

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleadd: PropTypes.func.isRequired
}

export default Blog