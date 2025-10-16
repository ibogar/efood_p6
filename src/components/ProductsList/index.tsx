import Product from "../Product";
import { List } from "./styles";

const ProductsList = () => (
    <div className="container">
        <List>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </List>
    </div>
)

export default ProductsList