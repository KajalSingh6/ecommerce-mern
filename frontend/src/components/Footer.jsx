import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div className=''>
                    <Link to="/">
                    <img src='https://tse2.mm.bing.net/th/id/OIP.JPoSYcIzdDhEWcWSTHTrhwAAAA?pid=Api&P=0&h=180' alt='Certify Logo' className='mb-5 w-32 cursor-pointer' />
                    </Link>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Certify is your one-stop destination for modern, stylish, and affordable
                        fashion. We are committed to delivering quality products, secure shopping,
                        and a smooth customer experience you can trust.
                    </p>

                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>
                            <Link to='/' className='hover:text-black'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about' className='hover:text-black'>About Us</Link>
                        </li>
                        <li>
                            <a to="#" className='hover:text-black'>Delivery</a>
                        </li>
                        <li>
                            <a to="#" className='hover:text-black'>Privacy Policy</a>
                        </li>

                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul>
                        <li>+91 98765 43210</li>
                        <li>control@certify.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>&copy;Copyright 2026@ Certify.com - All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;
