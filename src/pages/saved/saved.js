import productsData from '../../testdata/products.json'

const itemComponent = () => {
  return <div></div>
}

const SavedComponent = () => {
  console.log(productsData)
  return (
    <div>
      {productsData.map((product) => {
        return <itemComponent product={product}></itemComponent>
      })}
    </div>
  )
}

export default SavedComponent
