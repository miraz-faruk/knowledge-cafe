import PropTypes from 'prop-types'
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author_img, reading_time, author, posted_date, hashtag } = blog;
    return (
        <div>
            <img className='w-full' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-9 mb-4'>
                <div className='flex gap-6 items-center'>
                    <img className='w-16 rounded-full' src={author_img} alt={`author image`} />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-xl'><CiBookmark /></button>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <p><a href="">{hashtag}</a></p>
            <button onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}
export default Blog;