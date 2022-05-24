import ProductComponent from "../../components/products/product";

const ProductsLayout = () => {
    return (
        <div className="grid grid-cols-4 gap-4 p-24">
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
            <ProductComponent/>
        </div>
    )
}

export default ProductsLayout;