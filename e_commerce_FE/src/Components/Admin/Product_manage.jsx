import React, {useState, useEffect} from 'react'
import { ImSearch } from 'react-icons/im'
import axios from 'axios';
function Product_manage() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("")
  const [images, setImages] = useState([])
  const [category, setCategory] = useState("")

  function addItem(item) {
    setData([...data, item]);
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleIdChange(e) {
    setId(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  function handleImagesChange(e) {
    setImages(e.target.value);
  }
  function handleCategoryChange(e){
    setCategory(e.target.value)
  }


  useEffect(() => {
    async function fetchAllProducts() {
         try {
           const response = await axios.get('/product/allProduct');
           setData(response.data.products);
           //setImgURL(response.data.products.images[0])
         } catch (error) {
           console.error(error);
         }
    }
        
    fetchAllProducts();
  },);



  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { title, id, description ,price, category, images };
    addItem(newItem);
    setTitle("");
    setId("");
    setDescription("")
    setCategory("")
    setPrice("")
    setImages("")
  }

  function handleEdit(index) {
    const item = data[index];
    setTitle(item.title);
    setCategory(item.category)
    setId(item.id);
    setDescription(item.description);
    setPrice(item.price)
    setImages(item.images)

  }

  function handleDelete(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
  return (
    <div className='px-4 md:px-0 '>
      <div className='flex flex-col md:flex-row justify-between'>
        <h1 className='text text-[1.5rem] text-green-900 font-semibold'>Product Management System</h1>
        <div className='flex mt-2 md:mt-0 md:w-[50%] '>
          <input
            className=" w-[100%] md:w-[100%]  text-lg outline-none  text-black border-b border-black"
            type="text"
            placeholder="What are you looking for ?"

          />
          <button
            type="submit"
            className="px-2 font-semibold text-green-900  "
          >
            <ImSearch size={'25px'} />
          </button>
        </div>
      </div>

      <div className="p-4 md:p-0 md:w-100 mt-4">
        <form onSubmit={handleSubmit} className ="grid grid-cols-1 md:grid-cols-3 md:gap-3 mx-auto">
        <label className="block mb-2">
            Id:
            <input
              className="block w-full border border-gray-400 rounded py-2 px-3"
              type="number"
              value={id}
              onChange={handleIdChange}
            />
          </label>
          
          <label className="block mb-2">
            Title:
            <input
              className="block w-full border border-gray-400 rounded py-2 px-3"
              type="text"
              value={title}
              onChange={handleTitleChange}
            />
          </label>
          
          <label className="block mb-2">
            Category:
            <input
              className="block w-full border border-gray-400 rounded py-2 px-3"
              type="text"
              value={category}
              onChange={handleCategoryChange}
            />
          </label>

          <label className="block mb-2">
            Description:
            <input
              className="block w-full border border-gray-400 rounded py-2 px-3"
              type="text"
              value={description}
              onChange={handleDescriptionChange}
            />
          </label>
          <label className="block mb-2">
            Price:
            <input
              className="block w-full border border-gray-400 rounded py-2 px-3"
              type="number"
              value={price}
              onChange={handlePriceChange}
            />
          </label>
          <label className="block mb-2">
            ImgURL:
            <input
              className="block w-full border border-gray-400 rounded py-2 px-3"
              type="text"
              value={images}
              onChange={handleImagesChange}
            />
          </label>
          <label> </label>
          <button
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
          >
            Add Item
          </button>
        </form>
      
        <div className="overflow-x-scroll">
          <table className="w-full mt-4">
            <thead className='bg-green-900 text-white border border-black'>
              <tr>
              <th className=" md:table-cell border border-white">Id</th>
                <th className=" md:table-cell border border-white">Title</th>
                <th className=" md:table-cell border border-white">Category</th>
                <th className=" md:table-cell border border-white">Description</th>
                <th className="md:table-cell border border-white">Price</th>
                <th className="md:table-cell border border-white">ImgURL</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="bg-white hover:bg-blue-300">
                  <td className="p-2">{item.id}</td>
                  <td className="p-2">{item.title}</td>    
                  <td className="p-2">{item.category}</td>  
                  <td className="p-2">{item.description}</td>
                  
                  <td className="p-2 ">${item.price}</td>
                  <td className="">{item.images[0]}</td>
                  <td className="p-2 flex justify-center items-center gap-2">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
</div>
</div>
        )
}

        export default Product_manage
