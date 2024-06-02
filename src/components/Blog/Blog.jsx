import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
    const { title, cover, author_img, reading_time, author, posted_date } = blog;
    return (
        <div>
            <img src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between items-center mt-9 mb-4'>
                <div className='flex gap-6 items-center'>
                    <img className='w-16 rounded-full' src={author_img} alt={`author image`} />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;