import React, { useState } from 'react'
import Footer from "./Footer.jsx";
import ProductsImg1 from "../assets/ProductsImg1.webp"
import ProductsImg2 from "../assets/ProductsImg2.webp"
import ProductsImg3 from "../assets/ProductsImg3.webp"
import bg from "../assets/background.jpg"

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cementArticles = [
    { img: ProductsImg1, name: "Cement Blocks", price: "₹25 per block", desc: "Durable blocks for walls and foundations." },
    { img: ProductsImg2, name: "Paving Tiles", price: "₹15 per tile", desc: "Colorful tiles for pathways and driveways." },
    { img: ProductsImg3, name: "Boundary Divider", price: "₹120 each", desc: "Strong dividers for gardens and roads." },
    { img: ProductsImg1, name: "Concrete Pipes", price: "₹500 per meter", desc: "Heavy-duty pipes for drainage systems." },
    { img: ProductsImg2, name: "Garden Benches", price: "₹1500 each", desc: "Stylish and durable outdoor seating." },
    { img: ProductsImg3, name: "Cement Pots", price: "₹200 each", desc: "Planters for gardens and balconies." },
    { img: ProductsImg1, name: "Manhole Covers", price: "₹900 each", desc: "Solid covers for safety and durability." },
    { img: ProductsImg2, name: "Cement Slabs", price: "₹350 per slab", desc: "Strong slabs for flooring and pathways." },
    { img: ProductsImg3, name: "Kerb Stones", price: "₹180 each", desc: "Used for footpaths and landscaping." },
    { img: ProductsImg1, name: "Concrete Fencing Posts", price: "₹250 each", desc: "Durable fencing solution." }
  ];

  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className='text-2xl font-bold min-h-screen w-full'>
        
        {/* Header */}
        <div className='h-50 w-full flex items-end relative justify-center text-5xl text-white'>
          <h1 className='pb-10 font-semibold'>Products</h1>
          <img src={bg} alt="" className="absolute -z-1 object-cover w-full h-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-20">
          {cementArticles.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-lg hover:bg-neutral-100 flex flex-col items-center p-6 transition-all duration-300">
              <img src={item.img} alt={item.name} className="w-32 h-32 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <button 
                onClick={() => setSelectedProduct(item)}
                className='text-[16px] rounded bg-amber-500 text-neutral-700 px-4 py-1 mt-4 cursor-pointer hover:bg-amber-600 transition-all duration-300'
              >
                Quota
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 text-center relative">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-xl"
            >
              ✕
            </button>
            <img src={selectedProduct.img} alt={selectedProduct.name} className="w-40 h-40 mx-auto mb-4" />
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="text-lg font-semibold mt-2">{selectedProduct.price}</p>
            <p className="text-gray-600 mt-2">{selectedProduct.desc}</p>
          </div>
        </div>
      )}

      <Footer /> 
    </div>
  )
}

export default Products
