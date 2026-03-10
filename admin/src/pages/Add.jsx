import { useState } from 'react';
import uploadImage from '../assets/upload.png';
import axios from "axios";
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

 
const Add = ({ token }) => {

  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", Number(price));
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestSeller", bestSeller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("imageUrl1", image1);
      image2 && formData.append("imageUrl2", image2);
      image3 && formData.append("imageUrl3", image3);
      image4 && formData.append("imageUrl4", image4);

      const res = await axios.post(backendUrl + "/api/product/add", formData,
        {
          headers: { token }
        });
      if (res.data.success) {
        toast.success(res.data.message);
        setName('');
        setDescription('');
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setPrice('');

      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || error.message);
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full gap-3 items-start'>
      <div>
        <p className='mb-2'>Upload Image</p>
        <div className='flex gap-2'>
          <label htmlFor='imageUrl1'>
            <img src={!image1 ? uploadImage : URL.createObjectURL(image1)} className='w-20 h-25' alt='' />
            <input onChange={(e) => setImage1(e.target.files[0])} type='file' id='imageUrl1' hidden />
          </label>
          <label htmlFor='imageUrl2'>
            <img src={!image2 ? uploadImage : URL.createObjectURL(image2)} className='w-20 h-25' alt='' />
            <input onChange={(e) => setImage2(e.target.files[0])} type='file' id='imageUrl2' hidden />
          </label>
          <label htmlFor='imageUrl3'>
            <img src={!image3 ? uploadImage : URL.createObjectURL(image3)} className='w-20 h-25' alt='' />
            <input onChange={(e) => setImage3(e.target.files[0])} type='file' id='imageUrl3' hidden />
          </label>
          <label htmlFor='imageUrl4'>
            <img src={!image4 ? uploadImage : URL.createObjectURL(image4)} className='w-20 h-25' alt='' />
            <input onChange={(e) => setImage4(e.target.files[0])} type='file' id='imageUrl4' hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e) => setName(e.target.value)} value={name} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Type here' />
      </div>
      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='w-full max-w-[500px] px-3 py-2' type='text' placeholder='Write content here' />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} value={category} className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory} className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>
        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e) => setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type='number' placeholder='25' />
        </div>
      </div>
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-2'>
          <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>
            <p className={`${sizes.includes("S") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
            <p className={`${sizes.includes("M") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
            <p className={`${sizes.includes("L") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
            <p className={`${sizes.includes("XL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XL</p>
          </div>
          <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
            <p className={`${sizes.includes("XXL") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p>
          </div>
        </div>
      </div>
      <div className='flex gap-2 mt-2'>
        <input onChange={(e) => setBestSeller(prev => !prev)} checked={bestSeller} type='checkbox' id='bestSeller' className='w-4' />
        <label htmlFor='bestSeller' className='cursor-pointer'>Add to bestseller</label>
      </div>
      <button type='submit' className='bg-black text-white py-3 mt-4 w-28 cursor-pointer'>ADD</button>
    </form>
  )
}

export default Add;
