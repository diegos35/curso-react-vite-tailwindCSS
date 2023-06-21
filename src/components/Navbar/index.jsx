import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

const Navbar = () => {
  const context = useContext(ShoppingCartContext); //parametro el contexto
  const activeStyle = 'underline underline-offset-4';

  let menu1 = [
    {
      to: '/',
      text: 'Shopi',
      className: 'font-semibold text-lg',
    },
    {
      to: '/',
      text: 'All',
      className: '',
    },
    {
      to: '/clothes',
      text: 'clothes',
      className: '',
    },
    {
      to: '/electronics',
      text: 'electronics',
      className: '',
    },
    {
      to: '/furnitures',
      text: 'furnitures',
      className: '',
    },
    {
      to: '/toys',
      text: 'toys',
      className: '',
    },
    {
      to: '/others',
      text: 'others',
      className: '',
    },
  ];

  let menu2 = [
    {
      to: '/email',
      text: 'diego@gmail.com',
      className: 'text-black/60',
    },
    {
      to: '/myorders',
      text: 'My orders',
      className: '',
    },
    {
      to: '/myoccount',
      text: 'My occount',
      className: '',
    },
    {
      to: '/signin',
      text: 'Sign in',
      className: '',
    },
    {
      to: '/shoppcar',
      text: '🛒',
      className: '',
      showCount: true,
    },
  ];

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light'>
      <ul className='flex items-center gap-3'>
        {menu1.map((link) => (
          <li className={link.className} key={link.text}>
            <NavLink
              to={link.to}
              className={({ isActive }) => {
                if (isActive && link.text !== 'Shopi') {
                  return activeStyle;
                }
                return undefined;
              }}
            >
              {location.pathname === '/shoppcar' && <li>{context.count}</li>}
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className='flex gap-3 items-center'>
        {menu2.map((link) => (
          <li key={link.text} className={link.className}>
            <NavLink
              to={link.to}
              className={({ isActive }) => {
                if (isActive && link.text !== 'diego@gmail.com') {
                  return activeStyle;
                }
                return undefined;
              }}
            >
              {link.text}
              {link.showCount && <span>{context.count}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
