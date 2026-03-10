import Title from '../components/Title';


const About = () => {


  return (
    <div className='text-2xl text-center border-t pt-8'>
      <Title text1={'ABOUT '} text2={'US'} />
      <div className='my-10 flex-col md:flex-row gap-16 flex'>
        <img className='w-full md:max-w-[450px]' src='https://img.kwcdn.com/product/1d65862c4c/5dbff22d-2ad2-4e1c-8614-37ed334bcbae_1350x1800.jpeg.a.jpg' alt='Fashion clothing collection' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            We are a modern online fashion store focused on delivering high-quality,
            stylish, and affordable products for everyday wear. Our collection is
            carefully curated to match the latest trends while ensuring maximum comfort
            and durability.
          </p>

          <p>
            From casual essentials to trendy outfits, we believe fashion should be
            accessible to everyone. Every product we offer is selected with attention
            to quality, fit, and customer satisfaction.
          </p>

          <b className='text-gray-800 text-left px-5'>Our Mission</b>
          <p>
            Our mission is to provide customers with premium fashion products at fair
            prices while delivering a smooth and enjoyable shopping experience. We aim
            to build trust through quality, transparency, and excellent customer service.
          </p>

        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY '} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            We focus on high-quality materials and strict quality checks to ensure every
            product meets our standards before reaching our customers.
          </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            Enjoy a seamless shopping experience with easy navigation, secure payments,
            and fast delivery — all designed to save your time and effort.
          </p>

        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Services:</b>
          <p className='text-gray-600'>
            Our customer support team is always ready to assist you with orders,
            returns, and queries to ensure complete satisfaction.
          </p>

        </div>
      </div>
    </div>
  )
}

export default About
