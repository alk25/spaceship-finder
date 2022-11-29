
import logo from '../logo.png';

const Header = () => {
    return (
        <div className='flex bg-blue-1 py-4  fixed top-0 w-screen'>
            <div className='flex space-x-4 pl-4'>
                <img src={logo} width={40} alt='logo'></img>
                <h1 className='title-font font-pt-sans text-left font-bold text-3xl text-blue-500'> Spaceship Finder </h1>
            </div>
        </div >
    )
}

export default Header