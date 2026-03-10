import exchangeImg from "/assets/images/exchange.png";
import qualityImg from "/assets/images/quality.png";
import supportImg from "/assets/images/support.png";


const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={exchangeImg} className="w-12 m-auto mb-5"  alt="Exchange Policy" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer free hassle free exchange policy</p>
      </div>
       <div>
        <img src={qualityImg} className="w-12 m-auto mb-5 bg-transparent" alt="Return Policy" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
       <div>
        <img src={supportImg} className="w-12 m-auto mb-5" alt="Customer Support" />
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
      
    </div>
  );
};

export default OurPolicy;
