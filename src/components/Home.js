import { Component } from 'react';
import Header from '../components/Header';
// import Slides from '../components/Slider';
import SlickSlider from '../components/slider2';
import { Card, CardGroup, Button } from 'react-bootstrap';
import cardimg from '../kao.JPG'
import CafeMove from '../cafe_move.JPG'
import Footer from '../components/Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <SlickSlider/>
                {/* <Slides/> */}
                <CardGroup style={{ marginTop: "3%", marginBottom: "3%"}}>
                    <CardGroup className="cardgroup">
                        <Card.Img style={{ width: "257px", marginLeft: "210px"}} variant="top" src={cardimg} />
                        <Card.Link href="/">
                            <Card.Img style={{marginTop: "30%", marginLeft: "30px", width: "65px", height: "65px"}} src="https://www.ablestor.com/public/image/Main/main_icon_01.svg"/>
                        </Card.Link>
                        <Card.Text style={{marginTop: "50px", marginLeft: "5px", fontSize: "18px", fontWeight: "500"}}>ABLE 회사소개</Card.Text>
                        <Card.Link href="/">
                            <Card.Img style={{marginTop: "30%", marginLeft: "30px", width: "65px", height: "65px"}} src="https://www.ablestor.com/public/image/Main/main_icon_02.svg"/>
                        </Card.Link>
                        <Card.Text style={{position: "relative", top: "50px", marginLeft: "5px", fontSize: "18px", fontWeight: "500"}}>ABLE 뉴스&미디어</Card.Text>
                        <Card.Link href="/">
                            <Card.Img style={{marginTop: "30%", marginLeft: "30px", width: "65px", height: "65px"}} src="https://www.ablestor.com/public/image/Main/main_icon_03.svg"/>
                        </Card.Link>
                        <Card.Text style={{position: "relative", top: "50px", marginLeft: "5px", fontSize: "18px", fontWeight: "500"}}>ABLE 레퍼런스</Card.Text>
                    </CardGroup>
                </CardGroup>
                <div style={{width: '100%', height: '480px', backgroundColor: "#f5f5f5"}}>
                    <CardGroup style={{ width: "100%", height: "480px"}}>
                        <CardGroup className="cardgroup">
                            <Card style={{ width: '18rem', position: 'absolute', top: "100px", left: "200px", fontSize: '105%'}}>
                                <Card.Body>
                                    <Card.Title style={{fontSize: '190%'}}>ABLE EVENT</Card.Title>
                                    <Card.Text>
                                        ABLESTOR에서 진행하는 다양한
                                        이벤트 및 행사를 보실 수 있는 공간입니다.
                                        에이블스토어에서 제공해드리는 특별한 혜택들!
                                        놓치지 마시고 지금 확인해보세요.<br/><br/>
                                    </Card.Text>
                                    <Button style={{width: '10rem'}} variant="outline-dark">자세히 보기</Button>
                                </Card.Body>
                            </Card>
                                <a href="/" onClick={e => e.preventDefault()}>
                                    <Card style={{ width: '21rem', height: '23rem', position: 'absolute', top: "50px", left: "500px"}}>
                                        <Card.Img variant="top" src="https://www.ablestor.com/public/upload/writePromotion/5fc705358d480.png" />
                                        <Card.Body>
                                            <Card.Text>
                                                프로모션/이벤트<br/>
                                            </Card.Text>
                                            <Card.Title style={{fontSize: '19px', fontWeight: '500'}}>[ABLESTOR] 하트라이브 출연기념! 시놀로지 NAS 판매 이벤트</Card.Title>
                                            <Card.Text>
                                                <br/>
                                                하트라이브!
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                                <a href="/" onClick={e => e.preventDefault()}>
                                    <Card style={{ width: '21rem', height: '23rem', position: 'absolute', top: "50px", left: "850px"}}>
                                        <Card.Img variant="top" src="https://www.ablestor.com/public/upload/writePromotion/5fc5f21555924.png" />
                                        <Card.Body>
                                            <Card.Text>
                                                프로모션/이벤트<br/>
                                            </Card.Text>
                                            <Card.Title style={{fontSize: '19px', fontWeight: '500'}}>Synology 2021 online conference</Card.Title>
                                            <Card.Text>
                                                <br/>
                                                시놀로지의 차세대 제품과 솔루션 소개
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </a>
                        </CardGroup>
                    </CardGroup>
                </div>
                <CardGroup style={{ backgroundColor: "#FFFFFF", height: "600px"}}>
                   <CardGroup className="cardgroup">
                        <h3 style={{marginLeft: '200px', marginTop: '60px', fontWeight: '400', fontSize: '24px'}}>ABLE <b>INFORMATION</b></h3>
                            <a href="/" onClick={e => e.preventDefault()}>
                                <Card style={{ position: 'absolute', width: '20rem', height: '19rem', top: '100px', left: '200px' }}>
                                    <Card.Img variant="top" src="https://www.ablestor.com/public/image/Main/Information_01.png" />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight: '600'}}>DSM 라이브 데모</Card.Title>
                                        <Card.Text>
                                            수상 경력의 NAS OS인 DiskStation<br/>
                                            Manager(DSM)를 지금 사용해 보세요!
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                            <a href="/" onClick={e => e.preventDefault()}>
                                <Card style={{ position: 'absolute', width: '20rem', height: '19rem', top: '100px', left: '550px' }}>
                                    <Card.Img variant="top" src="https://www.ablestor.com/public/image/Main/Information_02.png" />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight: '600'}}>Synology 베타 프로그램</Card.Title>
                                        <Card.Text>
                                            Synology의 응용 프로그램을 최적화하고 개<br/>
                                            선할 수 있도록 도와주세요.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                            <a href="/" onClick={e => e.preventDefault()}>
                                <Card style={{ position: 'absolute', width: '20rem', height: '19rem', top: '100px', left: '900px' }}>
                                    <Card.Img variant="top" src="https://www.ablestor.com/public/image/Main/Information_03.png" />
                                    <Card.Body>
                                        <Card.Title style={{fontWeight: '600'}}>랜섬웨어 보호 방법</Card.Title>
                                        <Card.Text>
                                            효율적인 랜섬웨어를 보호하는 방법은 무엇<br/>
                                            이 있을까요?
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </a>
                            <a href="https://cafe.naver.com/synologynas" target="_blank">
                                <Card.Img style={{ position: 'absolute', width: '1024px', height: '100px', top: '430px', left: '200px' }} variant="top" src={CafeMove}></Card.Img>
                            </a>
                    </CardGroup>
                </CardGroup>
                <div style={{width: '100%', height: '370px', backgroundColor: "#f5f5f5"}}>
                    <CardGroup style={{ backgroundColor: "#F5F5F5", height: "350px"}}>
                        <CardGroup className="cardgroup">
                            <Card style={{ width: '32rem', height: '16rem', position: 'absolute', top: "40px", left: "200px", fontSize: '105%'}}>
                                <Card.Body>
                                    <Card.Title style={{fontSize: '150%', fontWeight: '600'}}>견적/구매 관련 문의</Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <p>
                                        기업 규모와 활용도에 적합한 맞춤형 진단이 필요하십니까?<br/>
                                        사내 네트워크 환경에 알맞는 스토리지 솔루션이 필요하십니까?<br/>
                                        관공서 납품등 기업에서의 제품 구입 상담을 요청하십시오.<br/>
                                        담당자가 신속히 연락드리겠습니다.
                                        </p>
                                    </Card.Text>
                                    <Button style={{width: '14rem'}} variant="outline-danger">견적 및 구매 관련 요청</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '32rem', height: '16rem', position: 'absolute', top: "40px", left: "740px", fontSize: '105%'}}>
                                <Card.Body>
                                    <Card.Title style={{fontSize: '150%', fontWeight: '600'}}>전문가 상담 신청</Card.Title>
                                    <br/>
                                    <Card.Text>
                                        <p>
                                            제품 이용에 궁금한 사항이 있으신가요?<br/>
                                            NAS 전문 엔지니어가 실시간으로 대기중입니다.<br/>
                                            전문가 상담 신청으로 문제점을 해결해보세요.<br/>
                                        </p>
                                    </Card.Text>
                                    <Button style={{marginTop: '21px', width: '14rem'}} variant="outline-danger">전문가 상담 신청하기</Button>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </CardGroup>
                </div>
                <div style={{height: '230px'}}>
                    <CardGroup>
                        <CardGroup className="cardgroup">
                            <Card.Body style={{marginTop: '60px', marginLeft: "240px"}}>
                                <h3 className="hfont">계좌안내</h3>
                                <p>
                                    <span>기업은행, 예금주 : (주)에이블스토어</span>
                                </p>
                                <p class="element-group element-group--vertical">
                                    <span>계좌번호 : <b style={{fontSize: '18px', fontWeight: '700'}}>2007-2009-00</b></span>
                                    <span style={{marginLeft: '30px', marginRight: '30px'}}>E-Mail : sales@ablestor.com</span>
                                    <img style={{width:'100px'}} class="ibk_logo" src="https://www.ablestor.com/public/image/logo/IBK_logo.png" alt="IBK_logo.png"></img>
                                </p>
                            </Card.Body>
                            <Card.Body style={{marginTop: '60px', marginLeft: '50px'}}>
                                <h3 className="hfont">고객 지원 센터</h3>
                                <p>운영 시간 - [평일 10:00 ~ 17:00] / 토, 일, 공휴일 휴무</p>
                                <Button variant="outline-danger">지원 페이지 바로가기</Button>
                            </Card.Body>
                        </CardGroup>
                    </CardGroup>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;