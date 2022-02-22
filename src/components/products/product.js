import product1 from '../../assets/sample-moisturizer.jpg'

const ProductComponent = () => {
  return (
    <div className="container w-full border-solid border-2">
      <img src={product1} alt="sample product" />
      <div className="p-3">
        <h2 className="font-bold text-lg text-center">Product Test</h2>
        <p className="">
          It was popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <button className="btn">Buy Now</button>
      </div>
    </div>
  )
}

export default ProductComponent
