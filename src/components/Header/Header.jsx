import profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center py-8 mx-4 border-b-2'>
            <h1 className='text-[40px] font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;