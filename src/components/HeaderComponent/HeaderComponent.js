import logo from '../../../public/bglogo.png'

const HeaderComponent = () => {
    return (
        <div className='p-5  rounded-xl'>
            <div className=' max-w-screen-2xl mx-auto flex justify-between'>
            <div className='w-40 h-20 '>
               <img src={logo} alt='' className='object-cover w-full h-full bg-transparent'/>
            </div>
            <div className='flex justify-between gap-5 items-center cursor-pointer'>
                    <p>Search</p>
                    <p>Offer</p>
                    <p>Help</p>
                    <p>Sign in</p>
            </div>
            </div>
        </div>
)
}

export default HeaderComponent