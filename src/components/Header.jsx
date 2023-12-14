import CartIcon from '../assets/cart.svg';
import { useSelector } from 'react-redux';
import { selectCartTotalItems } from '../features/cart/cartSlice';

const Header = () => {
  const cartTotalItems = useSelector(selectCartTotalItems);
  console.log(cartTotalItems);

    return (
        <header  className="bg-purple-400">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between h-20">
                  <h1 className="text-4xl font-bold text-purple-100">Simple E-Commerce</h1>
                  <button
                type="button"
                className="relative rounded-full bg-purple-500 p-2 text-purple-100">
                  <img src={CartIcon} alt="cart" className="w-6"/>
                </button>
               </div>  
            </div>
        </header>
    )
}

export default Header;