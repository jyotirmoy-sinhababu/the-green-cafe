import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-center gap-[15%]'>
      <NavLink className='font-barlow text-xl' to=''>
        About
      </NavLink>
      <NavLink className='font-barlow text-xl' to=''>
        Food & Drinks
      </NavLink>
      <NavLink className='font-barlow text-xl' to=''>
        Our Location
      </NavLink>
    </div>
  );
};

export default Header;
