import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    setDropdownOpen(false);
  };

  return (
    <div className="relative flex items-center justify-between px-6 py-5 font-medium">

      {/* LOGO */}
      <Link to="/">
        <img src="https://tse2.mm.bing.net/th/id/OIP.JPoSYcIzdDhEWcWSTHTrhwAAAA?pid=Api&P=0&h=180"
          className="w-24 object-contain cursor-pointer" alt="Logo" />
      </Link>

      {/* DESKTOP MENU */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        <NavLink to="/" className="hover:text-black">HOME</NavLink>
        <NavLink to="/about" className="hover:text-black">ABOUT</NavLink>
        <NavLink to="/collection" className="hover:text-black">COLLECTION</NavLink>
        <NavLink to="/contact" className="hover:text-black">CONTACT</NavLink>
      </ul>

      {/* RIGHT ICONS */}
      <div className="flex items-center gap-6">

        {/* SEARCH */}
        <IoSearchSharp onClick={() => setShowSearch(true)} className="cursor-pointer" size={24} />

        {/* USER DROPDOWN MENU */}
        <div className="relative">
          <FaRegUser className="cursor-pointer" size={20}
            onClick={() => token ? setDropdownOpen(!dropdownOpen) : navigate("/login") }
             />

          {dropdownOpen && token && (
            <div className="absolute right-0 mt-2 w-36 bg-slate-100 rounded shadow-md text-gray-600 z-50 py-3 px-4">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p onClick={() => navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
              <p onClick={logout} className="cursor-pointer hover:text-black">
                Logout
              </p>
            </div>
          )}
        </div>

        {/* CART */}
        <Link to="/cart" className="relative cursor-pointer">
          <GrCart size={20} />
          <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-black text-white text-[8px] rounded-full">
            {getCartCount()}
          </span>
        </Link>

        {/* MOBILE MENU ICON */}
        <AiOutlineMenu onClick={() => setVisible(true)} className="cursor-pointer sm:hidden" size={22}/>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className={`fixed top-0 right-0 bg-white overflow-hidden transition-all duration-300 ease-in-out z-50 ${visible ? "w-full" : "w-0" }`}>
        <div className="flex flex-col text-gray-600">
          <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer" >
            <FaChevronLeft />
            <p>Back</p>
          </div>

          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/collection">COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </div>

  );
};

export default Navbar;
