import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom'

const Navbar = () => {
const {cart}=useSelector((state)=>state);
  return(
    <div >
      <nav className='flex  justify-between items-center h-20 max-w-6xl mx-auto'>
      <NavLink to={'/'}>
        <div className='ml-5'>
        
        </div>
      </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6 gap-7'>

          
          <NavLink to={"/"}>
            <p>Home </p>
          </NavLink>
        
        
          
        </div>
      </nav>
    </div>
  )
};

export default Navbar;
