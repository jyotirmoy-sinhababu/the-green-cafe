import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='flex justify-center gap-[12%]'>
      <NavLink to=''>About</NavLink>
      <NavLink to=''>Food & Drinks</NavLink>
      <NavLink to=''>Our Location</NavLink>
    </div>
  );
};

export default Header;
