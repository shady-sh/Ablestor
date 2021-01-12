import { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slider.css";
import { CardGroup, Button } from "react-bootstrap";

export default class SlickSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className="Container">
                <Slider {...settings} className='slide1'>
                    <div>
                        <CardGroup className="slider_cover">
                            <li style={{marginLeft: '250px', marginTop: '100px'}}>
                                <h3 style={{color: '#333', fontSize: '38px', fontWeight: '500', zIndex: '5', paddingBottom: '12px'}}>DiskStation DS1821+</h3>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍ<b style={{fontWeight: '500'}}>AMD Ryzen</b> 쿼드코어 <b style={{fontWeight: '400'}}>656 MBps</b> 2.2GHz</p>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍ<b style={{fontWeight: '500'}}>4GB DDR4</b> 메모리(최대 32GB까지 확장 가능)</p>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍSynology DX517 확장유닛으로 </p>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}><b style={{fontWeight: '500'}}>최대 18Bay</b>확장 가능</p>
                                <Button style={{marginTop: '12px', width: '8rem'}}variant="primary">자세히보기</Button>
                            </li>
                            <img style={{position: 'absolute', left: '45rem', width: '560px', zIndex: '10'}} src="https://www.ablestor.com/public/image/slider/DS1821+.png" alt="DS1821+"></img>
                        </CardGroup>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}