import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3">
            <div className='bg-[#6047ec1a] border border-[#6047EC] rounded-lg mb-6'>
                <h2 className="text-[#6047EC] text-2xl font-bold py-6 px-12 text-center">Spent time on read: {readingTime} min</h2>
            </div>
            <div className='bg-[#1111110D] p-7 rounded-lg'>
                <h2 className='text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;