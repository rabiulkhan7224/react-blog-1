
import PropTypes from 'prop-types'

const Bookmark = ({bookmk}) => {
  return (
    <div className='bg-gray-200 mb-2 rounded-md p-2'>
        <h2>{bookmk.title}</h2>
    </div>
  )
}

Bookmark.propTypes = {
    bookmk: PropTypes.object.isRequired
}

export default Bookmark