import React, { useContext, useEffect, useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from "react-bootstrap";
import ProductContext from "../../context/products/ProductContext";

const Slide = () => {
    const { getProducts, products } = useContext(ProductContext);
    const [first10Products, setFirst10Products] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            await getProducts();
            const first10 = products.slice(0, 10);
            setFirst10Products(first10);
        };

        fetchProducts();
    }, [getProducts, products]);

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
    };

    return (
        <Carousel responsive={responsive} className="">
            {first10Products.map((product) => (
                <div key={product._id} className="card my-3 mx-2">
                    <img className="product--image" src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    <Button variant="dark" size="lg" className="bg-dark px-4 me-md-2" >Add To cart</Button>
                </div>
            ))}
        </Carousel>
    );
};

export default Slide;
