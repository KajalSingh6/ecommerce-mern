import { useState, useEffect, useContext } from 'react';
import Title from '../components/Title';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency, products } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const res = await axios.post(
        `${backendUrl}/api/order/userOrders`,
        {},
        { headers: { Authorization: token } }
      );

      if (res.data.success) {
        let allOrdersItem = [];

        res.data.orders.forEach(order => {
          order.items.forEach(item => {
            // Backend product
            const prod = products.find(p => p._id === item.productId);

            allOrdersItem.push({
              ...item,
              name: prod?.name || 'Product',
              price: prod?.price || 0,
              imageUrl: prod?.imageUrl || ['/assets/images/default.png'],
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (products.length > 0 && token) loadOrderData();
  }, [products, token]);

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={'MY '} text2={'ORDERS'} />
      </div>
      <div>
        {orderData.map((item, index) => (
          <div
            key={index}
            className='border-t border-b py-4 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'
          >
            <div className='flex items-start gap-6 text-sm'>
              <img
                className='w-16 sm:w-20'
                src={item.imageUrl?.[0]}
                alt={item.name}
              />
              <div>
                <p className='sm:text-base font-medium'>{item.name}</p>
                <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                  <p>{currency}{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className='mt-1'>
                  Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span>
                </p>
                <p className='mt-1'>
                  Payment: <span className='text-gray-400'>{item.paymentMethod}</span>
                </p>
              </div>
            </div>
            <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2'>
                <span className='bg-green-500 h-2 w-2 rounded-full'></span>
                <p className='text-sm md:text-base'>{item.status}</p>
              </div>
              <button
                onClick={loadOrderData}
                className='border border-gray-300 px-4 py-2 text-sm font-medium rounded-sm cursor-pointer'
              >
                Track Order
              </button>
            </div>
          </div>
        ))}
        {orderData.length === 0 && <p className='text-center mt-10 text-gray-400'>No orders placed yet!</p>}
      </div>
    </div>
  );
};

export default Orders;
