import { Card, Carousel, Col, Image, Row } from "react-bootstrap";
import { FaRuler, FaBath, FaBed, FaHeart, FaRegHeart} from "react-icons/fa";
import { Link } from "react-router-dom";
import { PrimaryBtn, SecondPrimaryBtn } from "../button/Buttons";
import VerifyIcon from '../../assets/images/icons/verify.svg';
import UploadIcon from '../../assets/images/icons/upload.svg';
import MintIcon from '../../assets/images/icons/mint.svg';
import { MintedPropertiesCardCarousel } from "../carousel/Carousel";
import { DetailData } from "../../utils/data";
import BarChartIcon from '../../assets/images/icons/barchart.svg';
import SumIcon from '../../assets/images/icons/sum.svg';
import AmountListIcon from '../../assets/images/icons/amount_list.svg';
import BidIcon from '../../assets/images/icons/bid.svg';
import ActiveOffers from '../../assets/images/icons/offers.svg';
import BuildingImage from '../../assets/images/building/1.webp';
import FHeartIcon from '../../assets/images/icons/fheart.svg';
import BuildingIcon from '../../assets/images/icons/building.svg';
import UpIcon from '../../assets/images/icons/up.svg';
import DownIcon from '../../assets/images/icons/down.svg';




export const NormalCard = ({title, network, price, images}) => {
    return (
        <Card className="NormalCard my-2">
            <Card.Body className="position-relative">
                <FaRegHeart className="heart-icon"/>
                <Carousel fade>
                    {
                        images.map((item, idx) => (
                            <Carousel.Item>
                                <Image src={item.src} key={idx} width="100%" height="250" className="object-fit-none border rounded"/>
                            </Carousel.Item>
                        ))
                    }                    
                </Carousel>
                <Link className="nav-link" to="/detail/1">
                <Card.Title className="fs-6 d-flex align-items-center justify-content-between my-1">
                    <div>{price} {network}</div>
                    <small>{price} {network}</small>
                </Card.Title>
                <Card.Subtitle className="fw-semibold fs-6 my-1">{title}</Card.Subtitle>
                <div className="d-flex align-items-center justify-content-between card-properties">
                    <div><FaRuler/><span className="ms-2">300</span></div>
                    <div><FaBath/><span className="ms-2">2</span></div>
                    <div><FaBed/><span className="ms-2">3</span></div>
                </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export const TraitCard = ({title, value}) => {
    return(
        <div className="TraitCard my-2 col-4">
            <Card>
                <Card.Body>
                    <div className="opacity-50 text-center">{title}</div>
                    <div className="fw-semibold opacity-75 text-center">{value}</div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const TraitCard1 = ({title, value}) => {
    return(
        <div className="TraitCard my-2 col-6">
            <Card>
                <Card.Body>
                    <div className="opacity-50 text-center">{title}</div>
                    <div className="fw-semibold opacity-75 text-center">{value}</div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const VerifyCard = ({}) => {
    return (
        <div className="VerifyCard my-1 mb-3">
            <Card>
                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="fs-5 fw-bold mb-2">Verify Identify</div>
                        <SecondPrimaryBtn title="Start"/>
                    </div>
                    <div className="border border-2 rounded-circle p-2">
                        <Image src={VerifyIcon}/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const UploadCard = ({}) => {
    return (
        <div className="UploadCard my-1">
            <Card>
                <Card.Body className="d-flex align-items-center justify-content-between">
                    <div>
                        <div className="fs-5 mb-2 fw-bold">Upload Document</div>
                        <SecondPrimaryBtn title="Start"/>
                    </div>
                    <div className="border border-2 rounded-circle p-2">
                        <Image src={UploadIcon}/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const MintCard = () => {
    return (
        <div className="MintCard my-1">
            <Card>
                <Card.Body>                    
                    <div className="py-5 text-center  border border-1 rounded-2">
                        <Image src={MintIcon} width="70"/>
                    </div>
                    <div className="text-center mt-3"><SecondPrimaryBtn title="Mint"/></div>
                </Card.Body>
            </Card>
        </div>
    )
}

export const MintedPropertiesCard = () => {
    return (
        <div className="MintedPropertiesCard my-1">
            <Card>
                <Card.Body>
                <Row>
                    <Col sm={12} md={6}>
                        <MintedPropertiesCardCarousel images={DetailData.images}/>
                    </Col>
                    <Col sm={12} md={6}>
                        <MintedPropertiesCardCarousel images={DetailData.images}/>
                    </Col>
                </Row>
                </Card.Body>
            </Card>
        </div>
    )
} 

export const PropertyInfoCard = () => {
    return (
        <div className="PropertyInfoCard mt-4">
            <Card>
                <Card.Body className="d-flex align-items-center row">
                    <Col sm={12} md={3} className="d-flex align-items-center">
                        <Image src={BarChartIcon} width="100" height="100"/>
                        <div className="ms-3 d-flex flex-column justify-content-around">
                            <div className="fs-5 fw-bold my-2">Properties States</div>
                            <div className="opacity-50 my-2">3 items</div>
                        </div>
                    </Col>    
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={SumIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Total Properties</div>
                            <div className="fs-6 fw-bold">748</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={AmountListIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Amount listed</div>
                            <div className="fs-6 fw-bold">1249</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={BidIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Active bids</div>
                            <div className="fs-6 fw-bold">300</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={SumIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Active offers</div>
                            <div className="fs-6 fw-bold">748</div>
                        </div>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    )
}

export const FavouritInfoCard = () => {
    return (
        <div className="PropertyInfoCard mt-4">
            <Card>
                <Card.Body className="d-flex align-items-center row">
                    <Col sm={12} md={3} className="d-flex align-items-center">
                        <Image src={FHeartIcon} width="100" height="100"/>
                        <div className="ms-3 d-flex flex-column justify-content-around">
                            <div className="fs-5 fw-bold my-2">My favorites</div>
                            <div className="opacity-50 my-2">3 items</div>
                        </div>
                    </Col>    
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={BuildingIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Total favorites</div>
                            <div className="fs-6 fw-bold">748</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={UpIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Highest Price</div>
                            <div className="fs-6 fw-bold">1249 USD</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={DownIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">Lowest Price</div>
                            <div className="fs-6 fw-bold">300 USD</div>
                        </div>
                    </Col>
                    <Col sm={12} md={2} className="d-flex align-items-center ">
                        <div className="border border-1 rounded-1 p-2">
                            <Image src={BidIcon}/>
                        </div>
                        <div className="ms-3">
                            <div className="opacity-50">My Bid</div>
                            <div className="fs-6 fw-bold">748 USD</div>
                        </div>
                    </Col>
                </Card.Body>
            </Card>
        </div>
    )
}

export const ListPropertyCard = () => {
    return (
        <div className="ListPropertyCard col-sm-12 col-md-2">
            <Card className="border-0">
                <Card.Body>
                    <Image src={BuildingImage} width="100%" height="250" className="rounded mb-3"/>
                    <Link to="/dashboard/properties/1" className="nav-link">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="fw-bold">Kent Avenue #310</div>
                        <div className="opacity-50">4.7 USD</div>
                    </div>
                    </Link>
                    
                    <SecondPrimaryBtn title="Unlisted"/>
                </Card.Body>
            </Card>
        </div>
    )
}

export const BidPropertyCard = () => {
    return (
        <div className="BidPropertyCard col-sm-12 col-md-2">
            <Card className="border-0">
                <Card.Body>
                    <Image src={BuildingImage} width="100%" height="250" className="rounded mb-3"/>
                    <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="fw-bold">Kent Avenue #310</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <SecondPrimaryBtn title="439 USD"/>
                        <div className="text-right">
                            <div className="opacity-50">Offer</div>
                            <div>4.7<span className="ms-2 opacity-50">USD</span></div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}