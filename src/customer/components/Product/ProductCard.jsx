import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div className='productCard w-[19rem] m-3 transition-all cursor-pointer duration-150 ease-in  hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-500 '>
        <div className='h-[25rem]  '>
            <img className='h-full w-full object-cover object-left-top' src={product.imageUrl} alt=''/>
        </div>
        <div className='textPart hover:-translate-y-1 duration-150 ease-in bg-white p-3   '>
            <div>
                <p className=' font-medium   w-auto '>{product.brand}</p>
            </div>
            <div className='flex space-x-2     '>
                <p className='tracking-widest text-red-500'>PKR.{product.discountedPrice}</p>
                <p className='tracking-widest line-through decoration-0 decoration-black opacity-70 '>PKR.{ product.price}</p>
                <p className=' text-green-600 font-semibold'>{product.discountPersent}% off</p>
            </div>

        </div>

    </div>
  )
}

export default ProductCard