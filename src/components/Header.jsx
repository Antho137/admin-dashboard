import { BiGlobe, BiSolidHome, BiSearch, BiUser } from 'react-icons/bi';

const Header = () => {
  return (
    <div className='mt-18 bg-blue-300 p-5 lg:mt-0 lg:ml-40'>
      <div className='flex justify-between items-center'>
        <div className='flex justify-between items-center text-gray-900'>
            <input 
                type="text"
                placeholder='Search'
                className="w-36 sm:w-60 px-2 pb-1 bg-white border border-gray-300 text-sm rounded-md" 
            />
            <BiSearch className='ml-[-25px]' />
        </div>
        <div className='flex justify-between items-center gap-1 sm:gap-2 text-xl text-gray-900 xl:text-2xl'>
            <BiUser />
            <BiSolidHome />
            <BiGlobe />
        </div>
      </div>
    </div>  
  )
}

export default Header;