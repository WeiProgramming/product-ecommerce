import React, { useState } from 'react'

import ProductComponent from '../components/products/product'

// Test Data
import beautyBg from '../assets/beauty-care-bg.jpg'
import leafUnderline from '../assets/leaf-underline.png'
import product1 from '../assets/sample-moisturizer.jpg'

// When Clicking a category, the carousel will show the first produc, user can scroll or look through all products
const categoryData = {
  moisturizers: [
    {
      name: 'Peach Tree Love',
      img: { product1 },
    },
  ],
}

const MainComponent = () => {
  let [slideState, setSlideState] = useState(false)
  let [categoryClick, setCategoryClick] = useState(false)
  console.log('slidestate', slideState)

  const updateCategoryClicked = () => {
    setTimeout(() => {
      setCategoryClick(!categoryClick)
    }, 1000)
  }

  const updateSlideState = () => {
    setSlideState(!slideState)
    setTimeout(() => {
      setSlideState(slideState)
    }, 1000)
  }

  const mainCarousel = () => {
    return
  }

  return (
    <div>
      <div className="grid gap-4 grid-cols-2 p-5">
        <div className="relative border-2 row-span-4 col-span-1 cursor-pointer overflow-hidden">
          <div className="overlay absolute w-full h-full bg-none hover:bg-gray-300 opacity-20"></div>
          <div className="relative block w-full h-full">
            <img
              src={beautyBg}
              className={`block absolute h-auto w-full ${
                slideState ? 'animate-slide-left' : ''
              } ${categoryClick ? 'hidden ' : ''}`}
            />
            <div className="grid grid-cols-1">
              <div className="col-span-1 row-span-1">
                <img
                  src={`categoryData['moisturizers'][0][img']`}
                  className={`block absolute h-auto w-full ${
                    slideState ? 'animate-slide-left' : ''
                  } ${categoryClick ? 'hidden ' : ''}`}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={() => {
            updateSlideState()
            updateCategoryClicked()
          }}
          className="relative flex items-center justify-center cursor-pointer border-2 col-span-1 py-4 px-28 bg-moisturizer-bg bg-cover bg-center"
        >
          <div className="absolute z-5 top-0 right-0 w-full h-full bg-gray-700 opacity-30"></div>
          <p className="text-white z-10 font-semibold uppercase">
            Moisturizers
          </p>
        </div>
        <div className="relative flex items-center justify-center cursor-pointer border-2 col-span-1 py-4 px-28 bg-shampoo-bg bg-cover bg-center">
          <div className="top-0 right-0 z-5 absolute w-full h-full bg-gray-700 opacity-30"></div>
          <p className="text-white z-10 font-semibold uppercase">Shampoo TBA</p>
        </div>
        <div className="relative flex items-center justify-center cursor-pointer border-2 col-span-1 py-4 px-28 bg-shampoo-bg bg-cover bg-center">
          <div className="absolute z-5 top-0 right-0 w-full h-full bg-gray-700 opacity-30"></div>
          <p className="text-white z-10 font-semibold uppercase">Serums</p>
        </div>
        <div className="relative flex items-center justify-center cursor-pointer border-2 col-span-1 py-4 px-28 bg-shampoo-bg bg-cover bg-center">
          <div className="absolute z-5 top-0 right-0 w-full h-full bg-gray-700 opacity-30"></div>
          <p className="text-white z-10 font-semibold uppercase">
            Cleansers TBA
          </p>
        </div>
      </div>
      <div className="flex flex-col content-start items-center m-4">
        <h2 className="block uppercase text-xl font-medium">Featured</h2>
        <img className="block h-8 w-auto" src={leafUnderline} alt="underline" />
      </div>
      <div className="grid grid-cols-3 gap-1 px-2">
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
        <ProductComponent></ProductComponent>
      </div>
    </div>
  )
}

export default MainComponent
