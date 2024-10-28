import { Link } from 'react-router-dom'
import logo from '../../../public/bglogo.png'

const HeaderComponent = () => {
    return (
        <div className='p-5  rounded-xl'>
            <div className=' max-w-screen-2xl mx-auto flex justify-between'>
            <Link to='/' className='w-40 h-20 '>
               <img src={logo} alt='' className='object-cover w-full h-full bg-transparent'/>
            </Link>
            <div className='flex justify-between gap-5 items-center cursor-pointer'>
                    <Link to="search">Search</Link>
                    <Link to="help">Help</Link>
                    <Link to="offers">Offers</Link>
                    <button>Sign in</button>
                    <Link to="cart">Cart</Link>
                 
            </div>
            </div>
        </div>
)
}

export default HeaderComponent