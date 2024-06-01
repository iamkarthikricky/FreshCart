import { Component,useRef } from "react";
import Slider from "react-slick";

import { FaStar,FaRegStar,FaStarHalfAlt, FaAngleRight, FaAngleLeft, FaArrowRight} from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { Tooltip } from 'react-tooltip';
import { AiOutlineEye,AiOutlineHeart } from "react-icons/ai";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './home.css'

const PopularProductsList=[
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd1bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877405/ShoppingClone/Products/product-img-1_n62plc.jpg",
        altText:"product1",
        isSpecial:[{text:"Sale"}],
        category:"Snack & Munchies",
        productName:"Haldiram's Sav Bhujia",
        rating:4.5,
        noOfRatings:149,
        isDiscounted:[{actualPrice:24},{discountedPrice:18}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd2bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877405/ShoppingClone/Products/product-img-2_m4jysj.jpg",
        altText:"product2",
        isSpecial:[{text:14}],
        category:"Bakery & Biscuits",
        productName:"NutriChoice Digestive",
        rating:4.5,
        noOfRatings:25,
        isDiscounted:[{actualPrice:24}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd3bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877406/ShoppingClone/Products/product-img-3_tah9cc.jpg",
        altText:"product3",
        isSpecial:[],
        category:"Bakery & Biscuits",
        productName:"Cadbury 5 Star Chocolate",
        rating:5,
        noOfRatings:469,
        isDiscounted:[{actualPrice:35},{discountedPrice:32}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877406/ShoppingClone/Products/product-img-4_ktb3ro.jpg",
        altText:"product4",
        isSpecial:[{text:"Hot"}],
        category:"Snack & Munchies",
        productName:"Onion Flavour Potato",
        rating:3.5,
        noOfRatings:456,
        isDiscounted:[{actualPrice:5},{discountedPrice:3}]
    },
    {
            id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd5bed",
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877406/ShoppingClone/Products/product-img-5_vqixfv.jpg",
            altText:"product5",
            isSpecial:[],
            category:"Instant Food",
            productName:"Salted Instant Popcorn",
            rating:4.5,
            noOfRatings:39,
            isDiscounted:[{actualPrice:18},{discountedPrice:13}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd6bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877406/ShoppingClone/Products/product-img-6_y2z3qe.jpg",
        altText:"product6",
        isSpecial:[{text:'Sale'}],
        category:"Dairy, Bread & Eggs",
        productName:"Blueberry Greek Yogurt",
        rating:4.5,
        noOfRatings:189,
        isDiscounted:[{actualPrice:24},{discountedPrice:18}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd7bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877405/ShoppingClone/Products/product-img-7_hl8rj9.jpg",
        altText:"product7",
        isSpecial:[],
        category:"Dairy, Bread & Eggs",
        productName:"Britannia Cheese Slices",
        rating:5,
        noOfRatings:375,
        isDiscounted:[{actualPrice:24}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd8bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877405/ShoppingClone/Products/product-img-8_aau5kr.jpg",
        altText:"product8",
        isSpecial:[],
        category:"Instant Food",
        productName:"Kellogg's Original Cereals",
        rating:4,
        noOfRatings:90,
        isDiscounted:[{actualPrice:35},{discountedPrice:32}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd9bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877405/ShoppingClone/Products/product-img-9_ydihxs.jpg",
        altText:"product9",
        isSpecial:[],
        category:"Snack & Munchies",
        productName:"Slurrp Millet Chocolate",
        rating:4.5,
        noOfRatings:67,
        isDiscounted:[{actualPrice:5},{discountedPrice:3}]
    },
    {
        id:"1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd10bed",
        imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1716877405/ShoppingClone/Products/product-img-10_abja0t.jpg",
        altText:"product10",
        isSpecial:[],
        category:"Dairy, Bread & Eggs",
        productName:"Amul Butter - 500 g",
        rating:3.5,
        noOfRatings:89,
        isDiscounted:[{actualPrice:18},{discountedPrice:13}]
    },
]



const FeaturesView=()=>{
    return(
        <div className="container mt-4 p-0">
        <div className="row">
            <div className="feature-container col-12 col-md-6 col-lg-3">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716545679/ShoppingClone/clock_zutxss.svg" alt="clock"/>
                <h1 className="feature-heading">10 minute grocery now</h1>
                <p className="feature-para">Get your order delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
            </div>
            <div className="feature-container col-12 col-md-6 col-lg-3">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716545679/ShoppingClone/gift_rfazjh.svg" alt="gift"/>
                <h1 className="feature-heading">Best Prices & Offers</h1>
                <p className="feature-para">Cheaper prices than your local supermarket, great cashback offers to top it off. Get best prices & offers.</p>
            </div>
            <div className="feature-container col-12 col-md-6 col-lg-3">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716545679/ShoppingClone/package_ncvxxw.svg" alt="package"/>
                <h1 className="feature-heading">Wide Assortment</h1>
                <p className="feature-para">Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
            </div>
            <div className="feature-container col-12 col-md-6 col-lg-3">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716545679/ShoppingClone/refresh-cw_oawaqm.svg" alt="refresh"/>
                <h1 className="feature-heading">Wide Assortment</h1>
                <p className="feature-para">Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
            </div>
           
        </div>
        </div>
        
    )
}


const renderRatingView=(rating)=>{
    switch(rating){
        case 3.5:
            return(<div><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStarHalfAlt color="#FFC107" fontSize={"16px"}/><FaRegStar color="#FFC107" fontSize={"16px"}/></div>);
        case 4:
            return(<div><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaRegStar color="#FFC107" fontSize={"16px"}/></div>);
        case 4.5:
            return(<div><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStarHalfAlt color="#FFC107" fontSize={"16px"}/></div>);
        case 5:
            return(<div><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/><FaStar color="#FFC107" fontSize={"16px"}/></div>);

        default:
            return null
        }
}

const ProductCard=(props)=>{
    const{product} = props
    const{imgUrl,altText,isSpecial,category,productName,rating,noOfRatings,isDiscounted} = product 
    return(
        <div className="product-card col-5 col-md-3 col-lg-2">
         <div className="product-card-wishlist-container">
                <a href="www.google.com" data-tooltip-id="quickView" data-tooltip-content="Quick View" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineEye /></button>
                    <Tooltip id="quickView"/>
                </a>
                <a href="www.google.com" data-tooltip-id="wishlist" data-tooltip-content="Wishlist" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineHeart /></button>
                    <Tooltip id="wishlist"/>
                </a>  
                <a href="www.google.com" data-tooltip-id="compare" data-tooltip-content="Compare" data-tooltip-place="top"><button className="wishlist-btn"><BiTransfer /></button>
                    <Tooltip id="compare"/>
                </a>       
            </div>
            <div className="product-container">
            {isSpecial.length !== 0 ? typeof(isSpecial[0]["text"]) === "string" ? <button className="special-btn" style={{backgroundColor:"red"}}>{isSpecial[0]["text"]}</button> : <button className="special-btn" style={{backgroundColor:"green"}}>{isSpecial[0]["text"]}%</button> : <div className="special-btn"></div>}
        
                <img src={imgUrl} alt={altText} className="product-img"/>
                <p className="product-category">{category}</p>
                <p className="product-name">{productName}</p>
                <div className="rating-view-container">{renderRatingView(rating)}<p className="deals-rating">{rating} ({noOfRatings})</p></div>
            </div>
            <div className="price-container">
                    {isDiscounted.length === 1 ? <p className="mb-0 item-cost discount-price">${isDiscounted[0]["actualPrice"]}</p> : <p className="mb-0 item-cost discount-price">${isDiscounted[1]["discountedPrice"]}   <span className="item-cost price">  ${isDiscounted[0]["actualPrice"]}</span></p>}
                    <button className="add-btn">+ Add</button>
            </div>
                </div>
    )
}

const DailyBestSells=()=>{
    
    return(
        <div className="container p-0">
        <div className="row">
        <div className="col-12">
         <h3 className="sub-heading">Daily Best Sells</h3>
          <div className="daily-deals-main-container" >
                <div className="daily-deals-container col-3">
                    <div className="deals-container">
                        <h1 className="deal-heading">100% Organic Coffee Beans.</h1>
                        <p className="deal-description">Get the best deal before close.</p>
                        <button className="shop-btn">Shop Now</button>
                    </div>
                </div>
                <div className="card col-2" >
                <div className="wishlist-container">
                <a href="www.google.com" data-tooltip-id="quickView" data-tooltip-content="Quick View" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineEye /></button>
                    <Tooltip id="quickView"/>
                </a>
                <a href="www.google.com" data-tooltip-id="wishlist" data-tooltip-content="Wishlist" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineHeart /></button>
                    <Tooltip id="wishlist"/>
                </a>  
                <a href="www.google.com" data-tooltip-id="compare" data-tooltip-content="Compare" data-tooltip-place="top"><button className="wishlist-btn"><BiTransfer /></button>
                    <Tooltip id="compare"/>
                </a>    
                  
                </div>
                <div className="deal-item-view-container">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716550808/ShoppingClone/Deals/product-img-11_tshzqq.jpg" className="card-img-top" alt="deal1"/>
                <div className="card-body">
                    <p className="deal-category">Tea, Coffee & Drinks</p>
                    <p className="deal-item-name">Roast Ground Coffee</p>
                    <div className="price-container">
                        <p className="mb-0 item-cost discount-price">$13 <span className="item-cost price"> $18</span></p>
                        <div className="rating-view-container">{renderRatingView(4.5)}<p className="deals-rating">4.5</p></div>
                    </div>
                    <a href="www.google.com" className="btn btn-primary">+ Add to cart</a>
                </div>
                </div>
                </div>
                <div className="card col-3" >
                <div className="wishlist-container">
                <a href="www.google.com" data-tooltip-id="quickView" data-tooltip-content="Quick View" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineEye /></button>
                    <Tooltip id="quickView"/>
                </a>
                <a href="www.google.com" data-tooltip-id="wishlist" data-tooltip-content="Wishlist" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineHeart /></button>
                    <Tooltip id="wishlist"/>
                </a>  
                <a href="www.google.com" data-tooltip-id="compare" data-tooltip-content="Compare" data-tooltip-place="top"><button className="wishlist-btn"><BiTransfer /></button>
                    <Tooltip id="compare"/>
                </a>    
                  
                </div>
                <div className="deal-item-view-container">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716550808/ShoppingClone/Deals/product-img-12_sqcric.jpg" className="card-img-top" alt="deal1"/>
                <div className="card-body">
                    <p className="deal-category">Fruits & Vegetables</p>
                    <p className="deal-item-name">Crushed Tomatoes</p>
                    <div className="price-container">
                        <p className="mb-0 item-cost discount-price">$13 <span className="item-cost price"> $18</span></p>
                        <div className="rating-view-container">{renderRatingView(4.5)}<p className="deals-rating">4.5</p></div>
                    </div>
                    <a href="www.google.com" className="btn btn-primary">+ Add to cart</a>
                </div>
                </div>
                </div>
                <div className="card col-3">
                <div className="wishlist-container">
                <div href="www.google.com" data-tooltip-id="quickView"  data-tooltip-content="Quick View" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineEye /></button>
                    <Tooltip id="quickView"/>
                </div>
                <a href="www.google.com" data-tooltip-id="wishlist" data-tooltip-content="Wishlist" data-tooltip-place="top"><button className="wishlist-btn"><AiOutlineHeart /></button>
                    <Tooltip id="wishlist"/>
                </a>  
                <a href="www.google.com" data-tooltip-id="compare" data-tooltip-content="Compare" data-tooltip-place="top"><button className="wishlist-btn"><BiTransfer /></button>
                    <Tooltip id="compare"/>
                </a>    
                  
                </div>
                <div className="deal-item-view-container">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716550808/ShoppingClone/Deals/product-img-13_rxukhm.jpg" className="card-img-top" alt="deal1"/>
                <div className="card-body">
                    <p className="deal-category">Fruits & Vegetables</p>
                    <p className="deal-item-name">Golden Pineapple</p>
                    <div className="price-container">
                        <p className="mb-0 item-cost discount-price">$13 <span className="item-cost price"> $18</span></p>
                        <div className="rating-view-container">{renderRatingView(4.5)}<p className="deals-rating">4.5</p></div>
                    </div>
                    <a href="www.google.com" className="btn btn-primary">+ Add to cart</a>
                </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            </div>
          
          
    )
}

const PopularProducts=()=>{
    return(
        <div className="container p-0">
            <h3 className="sub-heading">Popular Products</h3>
            <div className="row">
                {PopularProductsList.map(e=>(
                    <ProductCard key={e.id} product={e} />
                ))}
            </div>
        </div>
    )
}

const Cards=()=>{
    return(
        <div className="container mt-3 mb-3 p-0">
            <div className="row">
                <div className="mt-2 col-12  col-md-6">
                <div className="bg-card" style={{padding:"30px",backgroundImage:`url("https://res.cloudinary.com/dlwydxzdi/image/upload/v1716905811/ShoppingClone/grocery-banner_vyo7ar.png")`,height:"250px"}}>
                    <h1 style={{fontSize:"26px",fontWeight:"bolder",color:"#"}}>Fresh Vegetables</h1>
                    <p style={{fontSize:"18px",fontWeight:"500",color:"#5C6C75"}}>Get upto <span style={{fontWeight:"600"}}>30%</span> Off</p>
                    <button className="btn" style={{width:"130px",color:"#f9f9f9",backgroundColor:"#001E2B"}}>Shop Now</button>
                </div>
                </div>
                <div className="mt-2 col-12 col-md-6">
                  <div className="bg-card" style={{padding:"30px",backgroundImage:`url("https://res.cloudinary.com/dlwydxzdi/image/upload/v1716905811/ShoppingClone/grocery-banner-2_zzot2m.jpg")`,height:"250px"}}>
                    <h1 style={{fontSize:"26px",fontWeight:"bolder",color:"#"}}>Fresh Baked Buns</h1>
                    <p style={{fontSize:"18px",fontWeight:"500",color:"#5C6C75"}}>Get upto <span style={{fontWeight:"600"}}>25%</span> Off</p>
                    <button className="btn" style={{width:"130px",color:"#f9f9f9",backgroundColor:"#001E2B"}}>Shop Now</button>
                </div>
                </div>
            </div>
        </div>
    )
}


const ImageCarousel=()=>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
        <div className="slide-container slide1" >
          <div className="slide-content">
                  <div className="slide-offer"><p>Open Sale discount 50%</p></div>
                  <h1 className="slide-heading">SuperMarket For Fresh Grocery</h1>
                  <p className="slide-para">Introduced a new model for online grocery shopping and convenient home delivery</p>
                  <button className="shop-btn" style={{backgroundColor:"#001E2B"}}>Shop Now <FaArrowRight /></button>
              </div>
          </div>
          <div className="slide-container slide2" style={{backgroundImage:`url("https://res.cloudinary.com/dlwydxzdi/image/upload/v1717073592/ShoppingClone/slider-2_dwfgxl.jpg")`}}>
          <div className="slide-content">
              <div  className="slide-offer"><p>Free shipping order above $50</p></div>
                  <h1 className="slide-heading">Free Shipping <br/>on <br/>orders over $500</h1>
                  <p  className="slide-para">Free Shipping to first time customers only, After Promotions and Discounts Applied.</p>
                  <button className="shop-btn" style={{backgroundColor:"#001E2B"}}>Shop Now <FaArrowRight /></button>
              </div>
          </div>
        </Slider>
      </div>
    );
  }



const FeaturedCategories=()=>{

    const CategoryList=[
        {
            id:1,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-dairy-bread-eggs_etr3sg.jpg",
            altText:"category-dairy-bread-eggs",
            sourceUrl:"www.google.com",
            text:"Dairy, Bread & Eggs"
        },
        {
            id:2,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-snack-munchies_zubou5.jpg",
            altText:"category-snack-munchies",
            sourceUrl:"www.google.com",
            text:"Snacks & Munchies"
        },
        {
            id:3,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-bakery-biscuits_i6kuhh.jpg",
            altText:"category-bakery-biscuits",
            sourceUrl:"www.google.com",
            text:"Bakery & Biscuits"
        },
        {
            id:4,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154894/ShoppingClone/Categories/category-instant-food_ow4gzb.jpg",
            altText:"category-instant-food",
            sourceUrl:"www.google.com",
            text:"Instant Food"
        },
        {
            id:5,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154894/ShoppingClone/Categories/category-tea-coffee-drinks_lwc2mj.jpg",
            altText:"category-tea-coffee-drinks",
            sourceUrl:"www.google.com",
            text:"Tea, Coffee & Drinks"
        },
        {
            id:6,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-atta-rice-dal_yws2ci.jpg",
            altText:"category-atta-rice-dal",
            sourceUrl:"www.google.com",
            text:"Atta, Rice & Dal"
        },
        {
            id:7,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-baby-care_xdzqh2.jpg",
            altText:"category-baby-care",
            sourceUrl:"www.google.com",
            text:"Baby Care"
        },
        {
            id:8,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-chicken-meat-fish_rwpgqd.jpg",
            altText:"category-chicken-meat",
            sourceUrl:"www.google.com",
            text:"Chicken, Meat & Fish"
        },
        {
            id:9,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-cleaning-essentials_uzrxe7.jpg",
            altText:"category-cleaning-essentials",
            sourceUrl:"www.google.com",
            text:"Cleaning Essentials"
        },
        {
            id:10,
            imgUrl:"https://res.cloudinary.com/dlwydxzdi/image/upload/v1717154893/ShoppingClone/Categories/category-pet-care_ybuobs.jpg",
            altText:"category-pet-care",
            sourceUrl:"www.google.com",
            text:"Pet Care"
        }
    ]

    const ExternalButtons = ({ nextSlide, prevSlide }) => {
        return (
            <div>
            <button className="slick-btn" onClick={prevSlide}><FaAngleLeft /></button>
            <button className="slick-btn" onClick={nextSlide}><FaAngleRight /></button>
            </div>
        );
        };

    const sliderRef = useRef();

    const nextSlide = () => {
    sliderRef.current.slickNext();
    };

    const prevSlide = () => {
    sliderRef.current.slickPrev();
    };

    
    
    const settings = {
        speed: 200,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true, // Center mode for better visualization of spaces
        centerPadding: '0px', // Remove default padding in center mode
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive:[
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
            },
            {
            breakpoint: 1332,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
            }

            
        ]
    };
    return (
        <div className="categories-container mt-4">
        <div className="d-flex flex-row justify-content-between align-items-center">
            <h1 className="sub-heading">Featured Categories</h1>
            <ExternalButtons nextSlide={nextSlide} prevSlide={prevSlide} />
        </div>
        <Slider  ref={sliderRef} {...settings}>
            {CategoryList.map(e=>(
                <div key={e.id} >
                    <div className="product-slide">
                        <img src={e.imgUrl} alt={e.altText} />
                        <p>{e.text}</p>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    );
}

class Home extends Component{


    render(){

        return(
            <div>
            <div className="container">
            <div className="row ">
            <div className="col-12 mb-4">{ImageCarousel()}</div>
            <div className="col-12 mb-4"><FeaturedCategories /></div>
            <div className="col-12 mb-4">{Cards()}</div>
            <div className="col-12 mb-4">{PopularProducts()}</div>
            <div className="col-12 mb-4">{DailyBestSells()}</div>
            <div className="col-12 mb-4">{FeaturesView()}</div>
        </div>
        </div>
        </div>
         
        )
    }
}


export default Home