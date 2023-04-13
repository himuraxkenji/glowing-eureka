import Image from 'next/image';
import '@styles/ShoppingCartItem.scss';
import roundShelf from '@images/round-shelf.webp';
import closeButton from '@icons/icon_close.png';

const ShoppingCartItem = () => {
  return (
    <div className="shopping-cart">
      <figure>
        <Image src={roundShelf} alt="" />
      </figure>
      <p>Round shelf</p>
      <p>$ 120,00</p>
      <Image src={closeButton} alt="close" />
    </div>
  );
};

export default ShoppingCartItem;
