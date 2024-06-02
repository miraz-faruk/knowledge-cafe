import PropTypes from 'prop-types'
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author_img, reading_time, author, posted_date, hashtag } = blog;
    return (
        <div className='border-b-2 mb-10 pb-10'>
            <img className='w-full rounded-lg' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-8 mb-4'>
                <div className='flex gap-6 items-center'>
                    <img className='w-16 rounded-full' src={author_img} alt={`author image`} />
                    <div>
                        <h2 className='text-2xl'>{author}</h2>
                        <p className='text-[#11111199] font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-3 text-[#11111199] font-medium text-xl'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}><CiBookmark /></button>
                </div>
            </div>
            <h1 className="text-[40px] font-bold mb-4">{title}</h1>
            <p className='mb-5'><a href="">{hashtag}</a></p>
            <button className='text-[#6047EC] text-xl font-semibold underline' onClick={() => handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func

}
export default Blog;