
const Navbar = ({ setToken }) => {

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken('');
  }

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img
        src='https://tse2.mm.bing.net/th/id/OIP.JPoSYcIzdDhEWcWSTHTrhwAAAA?pid=Api&P=0&h=180'
        className='w-[max(10%,90px)] cursor-pointer'
        alt='Logo'
      />
      <button onClick={handleLogout} className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar;
