import { Component } from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/slider.css";
import { CardGroup, Button } from "react-bootstrap";

export default class SlickSlider extends Component {
    state = {
        slideImage: 'slide0',
    };
    render() {
        let getNextPage = e => {
            this.setState( {slideImage: 'slide' + e})
        }
        const settings = {
            autoplay: true,
            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            afterChange: getNextPage
        };
        return (
            <div className="Container">
                <Slider {...settings} className={this.state.slideImage}>
                    <div>
                        <CardGroup className="slider_cover">
                            <li style={{marginLeft: '250px', marginTop: '100px'}}>
                                <h3 style={{color: '#333', fontSize: '38px', fontWeight: '500', zIndex: '5', paddingBottom: '12px'}}>DiskStation DS1821+</h3>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍ<b style={{fontWeight: '500'}}>AMD Ryzen</b> 쿼드코어 <b style={{fontWeight: '400'}}>656 MBps</b> 2.2GHz</p>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍ<b style={{fontWeight: '500'}}>4GB DDR4</b> 메모리(최대 32GB까지 확장 가능)</p>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍSynology DX517 확장유닛으로 </p>
                                <p style={{color: '#333', fontSize: '18px', fontWeight: '400', zIndex: '5'}}><b style={{fontWeight: '500'}}>최대 18Bay</b>확장 가능</p>
                                <Button style={{marginTop: '12px', width: '8rem'}} className="btn-default">자세히보기</Button>
                            </li>
                            <img style={{position: 'absolute', left: '45rem', width: '560px', zIndex: '10'}} src="https://www.ablestor.com/public/image/slider/DS1821+.png" alt="DS1821+"></img>
                        </CardGroup>
                    </div>
                    <div>
                        <CardGroup className="slider_cover">
                            <li style={{marginLeft: '250px', marginTop: '100px'}}>
                                <h3 style={{color: '#eee', fontSize: '38px', fontWeight: '500', zIndex: '5', paddingBottom: '12px'}}>DS1621xs+</h3>
                                <br/>
                                <p style={{color: '#eee', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍNVMe SSD를 지원하는 이중 M.2 2280 SSD</p>
                                <p style={{color: '#eee', fontSize: '18px', fontWeight: '400', zIndex: '5'}}>ㆍ대역폭 집약 환경을 위해 기본 제공되는 10GBASE-T</p>
                                <Button style={{marginTop: '3rem', width: '8rem'}}variant="primary">자세히보기</Button>
                            </li>
                            <img style={{position: 'absolute', top: '4rem', left: '45rem', width: '540px', zIndex: '10'}} src="https://www.ablestor.com/public/image/slider/DS1621xs+.png" alt="DS1821+"></img>
                        </CardGroup>
                    </div>
                    <div>
                        <CardGroup className="slider_cover">
                            <img style={{marginLeft: '800px', marginTop: '150px', zIndex: '10'}} src="https://www.ablestor.com/public/image/slider/moss_slide_inner_1.png" alt="DS1821+"></img>
                            <Button style={{marginTop: '1rem', marginLeft: '51rem'}}variant="outline-light">자세히보기</Button>
                        </CardGroup>
                    </div>
                    <div>
                        <CardGroup className="slider_cover">
                            <li style={{marginLeft: '250px', marginTop: '100px'}}>
                                <h3 style={{color: '#798691', fontSize: '33px', fontWeight: '1000', zIndex: '5', paddingBottom: '12px'}}>드디어 출시</h3>
                                <p style={{color: '#798691', fontSize: '18px', fontWeight: '500', zIndex: '5'}}>ㆍ4K 온라인 트랜스 코딩이 포함된</p>
                                <p style={{color: '#798691', fontSize: '18px', fontWeight: '500', zIndex: '5'}}>ㆍ고성능 올-라운드 NAS 제품군</p>
                                <p style={{color: '#798691', fontSize: '18px', fontWeight: '500', zIndex: '5'}}>ㆍ성장하고 있는 기업에 이상적인 NAS</p>
                            </li>
                            <Button style={{height: '2rem', fontSize: '14px', marginLeft: '7rem', marginTop: '14rem'}} variant="outline-secondary" size="sm">DS920+</Button>
                            <Button style={{height: '2rem', fontSize: '14px', marginLeft: '12rem', marginTop: '14rem'}} variant="outline-secondary" size="sm">DS420+</Button>
                            <Button style={{height: '2rem', fontSize: '14px', marginLeft: '69rem', marginTop: '-2rem'}} variant="outline-secondary" size="sm">DS220+</Button>
                            <img style={{position: 'relative', left: '28rem', bottom: '4rem',}} src="https://www.ablestor.com/public/image/slider/Slider_new_product.png" alt="DS1821+"></img>
                            <img style={{position: 'absolute', left: '70rem', bottom: '25rem'}} src="https://www.ablestor.com/public/image/slider/Slider_14_logo.png" alt="synology"></img>
                        </CardGroup>
                    </div>
                    <div>
                        <CardGroup className="slider_cover">
                            <li style={{marginLeft: '250px', marginTop: '100px'}}>
                                <h3 style={{color: '#333', fontSize: '38px', fontWeight: '900', zIndex: '5', paddingBottom: '12px'}}>RackStation RS1619xs+</h3>
                                <p style={{color: '#555', fontSize: '16px', fontWeight: '400', zIndex: '5'}}>ㆍ저장소를 확장할 수 있는 고성능 랙 마운트 4베이 NAS</p>
                                <p style={{color: '#555', fontSize: '16px', fontWeight: '400', zIndex: '5'}}>ㆍ쿼드 코어 CPU 및 8GB DDR4 UDIMM(64베이까지 확장 가능)</p>
                                <p style={{color: '#555', fontSize: '16px', fontWeight: '400', zIndex: '5'}}>ㆍNVMe/SATA SSD 캐시를 지원하는 이중 M.2 2280 슬롯</p>
                                <p style={{color: '#555', fontSize: '16px', fontWeight: '400', zIndex: '5'}}>ㆍ10GbE/25GbE NIC를 지원하는 PCIe 3.0 슬롯</p>
                                <Button style={{marginTop: '12px', width: '8rem'}} className="btn-default">자세히보기</Button>
                            </li>
                            <img style={{position: 'absolute', left: '40rem', top: '20rem', width: '560px', zIndex: '10'}} src="https://www.ablestor.com/public/image/slider/RS1619xs+.png" alt="DS1821+"></img>
                        </CardGroup>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}