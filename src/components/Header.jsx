import Image from 'next/image';
import Link from 'next/link';
import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import styles from '@styles/Header.module.scss';
import { useContext, useState } from 'react';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={styles.Nav}>
      <Image src={menu} alt="menu" className={styles.menu} />
      <div className={styles['navbar-left']}>
        <Link href="/">
          <Image src={logo} alt="logo" className={styles['nav-logo']} />
        </Link>
        <ul>
          <li>
            <Link href="/">All</Link>
          </li>
          <li>
            <Link href="/">Clothes</Link>
          </li>
          <li>
            <Link href="/">Electronics</Link>
          </li>
          <li>
            <Link href="/">Furnitures</Link>
          </li>
          <li>
            <Link href="/">Toys</Link>
          </li>
          <li>
            <Link href="/">Others</Link>
          </li>
        </ul>
      </div>
      <div className={styles['navbar-right']}>
        <ul>
          <li role="presentation" className={styles['navbar-email']} onKeyDown={handleToggle} onClick={handleToggle}>
            platzi@example.com
          </li>
          <li role="presentation" className={styles['navbar-shopping-cart']} onClick={() => setToggleOrders(!toggleOrders)}>
            <Image src={shoppingCart} alt="shopping cart" />

            {state.cart.length > 0 ? <div>{state.cart.length}</div> : <div>0</div>}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {toggleOrders && <MyOrder />}
    </nav>
  );
};

export default Header;
