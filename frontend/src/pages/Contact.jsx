import Title from "../components/Title";
import NewsletterBox from "../components/NewsletterBox";


const Contact = () => {

  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT '} text2={'US'} />
      </div>
      <div className="my-12 flex flex-col justify-center md:flex-row gap-12 mb-28">
        <img className="w-full md:max-w-[480px]" src="https://media.istockphoto.com/photos/japanese-man-at-hand-using-a-smartphone-picture-id1252809376?b=1&k=20&m=1252809376&s=170667a&w=0&h=lBcsOo9jnpMDn-wDkIRuCSDdQ2MZyZ9X3Q0NuN9DHFg=" alt="Customer support representative using phone" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Certify Fashion Store <br />
            54709 Willms Station, Suite 350 <br />
            Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132 <br />
            Email: support@certify.com
          </p>

          <p className="font-semibold text-xl text-gray-600">Careers at Certify</p>
          <p className="text-gray-500">
            We’re always looking for passionate people to join our growing team.
            Explore exciting opportunities in fashion, design, marketing, and technology.
          </p>

          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact;
