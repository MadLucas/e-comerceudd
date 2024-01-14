import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Button } from "react-bootstrap";


const Slide = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive} className="">
            <div className="card my-3 mx-5">
                <img className="product--image" src="http://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" alt="" />
                <h2>Harry potter</h2>
                <p>$49.99</p>
                <Button variant="dark" size="lg" className="px-4 me-md-2" >Add To cart</Button>
            </div>
            <div className="card my-3 mx-5">
                <img className="product--image" src="https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1" alt="" />
                <h2>The Great Gatsby</h2>
                <p>$49.99</p>
                <Button variant="dark" size="lg" className="px-4 me-md-2" >Add To cart</Button>
            </div>
            <div className="card my-3 mx-5">
                <img className="product--image" src="https://images.unsplash.com/photo-1629992101753-56d196c8aabb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <h2>Narnia</h2>
                <p>$49.99</p>
                <Button variant="dark" size="lg" className="px-4 me-md-2" >Add To cart</Button>
            </div>
            <div className="card my-3 mx-5">
                <img className="product--image" src="https://cdn.gramedia.com/uploads/items/psychology_of_money.jfif.png" alt="" />
                <h2>Pshylogy of Money</h2>
                <p>$49.99</p>
                <Button variant="dark" size="lg" className="px-4 me-md-2" >Add To cart</Button>
            </div>
            <div className="card my-3 mx-5">
                <img className="product--image" src="http://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" alt="" />
                <h2>Elon Musk</h2>
                <p>$49.99</p>
                <Button variant="dark" size="lg" className="px-4 me-md-2" >Add To cart</Button>
            </div>
            <div className="card my-3 mx-5">
                <img className="product--image" src="http://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" alt="" />
                <h2>Como controlar tu ansiedad</h2>
                <p>$49.99</p>
                <Button variant="dark" size="lg" className="px-4 me-md-2" >Add To cart</Button>
            </div>
            <div className="card my-3 mx-5">
                <img className="product--image" src="http://bukovero.com/wp-content/uploads/2016/07/Harry_Potter_and_the_Cursed_Child_Special_Rehearsal_Edition_Book_Cover.jpg" alt="" />
                <h2>Python</h2>
                <p>$49.99</p>
                <Button variant="dark" size="lg" className="px-4 me-md-2" >Add To cart</Button>
            </div>
        </Carousel>

    )
}

export default Slide;