import PropTypes from 'prop-types'
import { CiBookmark } from 'react-icons/ci'

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const  {id, title, cover, author, img, postedDate, hashtags, readingTime}  = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
          <div className='flex justify-between mb-4 '>
            <div className='flex'>
<img className='w-14 '  src={img} alt="" />
<div><h3 className="text-2xl">{author}</h3>
<p>{postedDate}</p>
</div>
            </div>
            <div>
        <span>{readingTime}</span> 
        <button onClick={() => handleAddToBookmark(blog)}
         className='ml-2 text-2xl text-red-600'> 
      <CiBookmark></CiBookmark>
      </button> 
            </div>
          </div>
          <div>
             <h2 className='text-4xl'>{title}</h2>
          </div>
  <div>
      <p>
        {
            hashtags.map(hash => <span><a href=""></a>{hash}</span>)
             }
    </p>

    <button
        onClick={() => handleMarkAsRead(id, readingTime)}
        className='text-blue-900 font-bold-700 underline' 
    >Mark As Read</button>
  </div>
    </div>
  )
  };

Blog.propTypes = {
blog: PropTypes.object.isRequired,
handleAddToBookmark: PropTypes.func,
handleMarkAsRead: PropTypes.func
}
export default Blog;