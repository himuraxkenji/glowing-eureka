import '@styles/Order.scss';
import Image from 'next/image';
import flechita from '@icons/flechita.svg';

const Order = () => {
  return (
    <div className="Order">
      <p>
        <span>25.03.2024</span>
        <span>6 articles</span>
      </p>
      <p>$ 560.00</p>
      <Image src={flechita} alt="" />
    </div>
  );
};

export default Order;
