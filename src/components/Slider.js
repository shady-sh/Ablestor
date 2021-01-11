import { Component } from "react";
import { Carousel } from 'react-bootstrap';

class Slider extends Component {
    render() {
        const numbers = [
            {
                id: 1, 
                className:'imageposition_1 d-block w-30', 
                src:'https://www.ablestor.com/public/image/slider/DS1821+.png', 
                title: <h3 className='item1style'>DiskStation DS1821+</h3>, 
                desc:
                    <p style={{position: "absolute", left:"-80px", bottom:"290px", float: "left", color: "#333", fontSize: "18px", fontWeight: "400", zIndex: "5"}}> ● <b style={{fontWeight: "500"}}>AMD Ryzen</b> 쿼드코어</p>
            },
            {id: 2, className:'', src:'https://www.ablestor.com/public/image/slider/DS1621xs+.png'},
            {id: 3, className:'', src:'https://www.ablestor.com/public/image/slider/Slider_new_product.png'},
        ]
        const listItems = numbers.map((number) =>
            <Carousel.Item key={number.id}>
                <div className="slider_cover">
                    <img
                        className={number.className}
                        src={number.src}
                        alt={number.id}
                    />
                    <Carousel.Caption>
                        <h3 className={number.title_class}>{number.title}</h3>
                        {number.desc}
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        )
        return (
            <header>
                <Carousel>
                    {listItems}
                </Carousel>
            </header>
        );
    }
}

export default Slider;