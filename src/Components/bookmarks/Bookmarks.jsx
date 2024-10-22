
import PropTypes from 'prop-types'
import Bookmark from './Bookmark'

const Bookmarks = ({addedBms}) => {
    // console.log(addedBms)
  return (
    <div className='w-1/3 bg-gray-400 ml-2 rounded-xl'><h1>Bookmarks</h1>
    {addedBms.map((bookmk,index)=><Bookmark key={index} bookmk={bookmk} ></Bookmark>)}
    
    </div>
  
  )
}

Bookmarks.propTypes = {
    addedBms: PropTypes.object.isRequired
}

export default Bookmarks