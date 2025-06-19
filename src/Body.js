import Product from './components/Product';
export default function Body() {
    return(
        <div className="container">
            <div>
                <Product name = "Beach Glasses" image = "./glasses.jpg"/>
            </div>
            <div>
                <Product name =  "Brown Shades" image = "./brownshades.jpg"/>
            </div>
            <div>
                <Product name = "Black Shades" image = "./blackshades.jpg"/>
            </div>
        </div>
    )
}

