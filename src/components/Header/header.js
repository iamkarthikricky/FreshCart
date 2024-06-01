import { Component } from "react";
import './header.css'
import { RiMenuFold4Line, RiUser3Line } from "react-icons/ri";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { FaAngleDown } from "react-icons/fa";
import { IoLocationOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";



const NavBar=()=>(
    <div>
    <div className="nav-bar-flex-container">
        <div className="hover-list-container">
            <button className="departments-btn" data-bs-toggle="collapse" href="#ul-list"><HiOutlineSquares2X2 /> All Departments </button>
            <ul className="collapse header-ul-list" id="ul-list">
                <li><a href="www.google.com">Dairy, Bread & Eggs</a></li>
                <li><a href="www.google.com">Snacks & Munchies</a></li>
                <li><a href="www.google.com">Fruits & Vegetables</a></li>
                <li><a href="www.google.com">Cold Drinks & Juices</a></li>
                <li><a href="www.google.com">Breakfast & Instant Food</a></li>
                <li><a href="www.google.com">Bakery & Biscuits</a></li>
                <li><a href="www.google.com">Chicken, Meat & Fish</a></li>
            </ul>
        </div>
        <ul className="nav-bar-flex-container ps-2 pe-1" style={{listStyle:"none",margin:"0",padding:"0"}} >
            <li className="mb-2 hover-list-container">
                <div className="list-item-container"  data-bs-toggle="collapse" href="#home">
                    <h1 className="list-item">Home</h1>
                    <FaAngleDown />
                </div>
                <ul className="collapse header-ul-list" id="home">
                    <li><a href="www.google.com">Home 1</a></li>
                    <li><a href="www.google.com">Home 2</a></li>
                    <li><a href="www.google.com">Home 3</a></li>
                    <li><a href="www.google.com">Home 4</a></li>
                    <li><a href="www.google.com">Home 5</a></li>
                </ul>
            </li>
            <li className="mb-2 hover-list-container">
                <div className="list-item-container"  data-bs-toggle="collapse" href="#shop">
                    <h1 className="list-item">Shop</h1>
                    <FaAngleDown />
                </div>
                <ul className="collapse header-ul-list" id="shop">
                    <li><a href="www.google.com">Shop Grid - Filter</a></li>
                    <li><a href="www.google.com">Shop Grid - 3 Column</a></li>
                    <li><a href="www.google.com">Shop List - Filter</a></li>
                    <li><a href="www.google.com">Shop - Filter</a></li>
                    <li><a href="www.google.com">Shop Wide</a></li>
                    <li><a href="www.google.com">Shop Single</a></li>
                    <li><a href="www.google.com">Shop Single V2</a></li>
                    <li><a href="www.google.com">Shop Wishlist</a></li>
                    <li><a href="www.google.com">Shop Cart</a></li>
                    <li><a href="www.google.com">Shop Checkout</a></li>
                </ul>
            </li>
            <li className="mb-2 hover-list-container">
                <div className="list-item-container"  data-bs-toggle="collapse" href="#store">
                    <h1 className="list-item">Stores</h1>
                    <FaAngleDown />
                </div>
                <ul className="collapse header-ul-list" id="store">
                    <li><a href="www.google.com">Shop List</a></li>
                    <li><a href="www.google.com">Shop Grid</a></li>
                    <li><a href="www.google.com">Shop Single</a></li>
                </ul>
            </li>
            <li className="mb-2 mega-menu-container hover-list-container">
                <div className="list-item-container"  data-bs-toggle="collapse" href="#mega-menu">
                    <h1 className="list-item">Mega Menu</h1>
                    <FaAngleDown />
                </div>
                <div className="collapse mega-menu" id="mega-menu">
                    <div className="container">
                        <div className="row">
                            <div className="nav-bar-flex-container" style={{ border: "1px solid #dee2e6",borderRadius:"8px"}}>
                                <div className="mt-3">
                                <p className="mega-menu-para">Dairy,Bread & Eggs</p>
                                <ul className="header-ul-list" style={{display:"block",border:"none",position:"relative"}}>
                                <li><a href="www.google.com">Butter</a></li>
                                <li><a href="www.google.com">Milk Drinks</a></li>
                                <li><a href="www.google.com">Curd & Yogurt</a></li>
                                <li><a href="www.google.com">Eggs</a></li>
                                <li><a href="www.google.com">Buns & Bakery</a></li>
                                <li><a href="www.google.com">Cheese</a></li>
                                <li><a href="www.google.com">Condensed Milk</a></li>
                                <li><a href="www.google.com">Dairy Products</a></li>
                                </ul>
                                </div>
                                <div className="mt-3">
                                <p className="mega-menu-para">Breakfast & Instant Food</p>
                                <ul className="header-ul-list" style={{display:"block",border:"none",position:"relative"}}>
                                <li><a href="www.google.com">Breakfast Cereal</a></li>
                                <li><a href="www.google.com">Noodles, Pasta & Soup</a></li>
                                <li><a href="www.google.com">Frozen Veg Snacks</a></li>
                                <li><a href="www.google.com">Frozen Non-Veg Snacks</a></li>
                                <li><a href="www.google.com">Vermicelli</a></li>
                                <li><a href="www.google.com">Instant Mixes</a></li>
                                <li><a href="www.google.com">Batter</a></li>
                                <li><a href="www.google.com">Fruit and Juices</a></li>
                                </ul>
                                </div>
                                <div className="mt-3">
                                <p className="mega-menu-para">Cold Drinks & Juices</p>
                                <ul className="header-ul-list" style={{display:"block",border:"none",position:"relative"}}>
                                <li><a href="www.google.com">Soft Drinks</a></li>
                                <li><a href="www.google.com">Fruit Juices</a></li>
                                <li><a href="www.google.com">ColdPress</a></li>
                                <li><a href="www.google.com">Water & Ice Cubes</a></li>
                                <li><a href="www.google.com">Soda & Mixers</a></li>
                                <li><a href="www.google.com">Health Drinks</a></li>
                                <li><a href="www.google.com">Herbal Drinks</a></li>
                                <li><a href="www.google.com">Milk Drinks</a></li>
                                </ul>
                                </div>
                                <div className="mt-3">
                                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716986128/ShoppingClone/menu-banner_p4m0sn.jpg" alt="menu-banner" className="w-100"/>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </li>
            <li className="mb-2 hover-list-container">
                <div className="list-item-container"  data-bs-toggle="collapse" href="#pages">
                    <h1 className="list-item">Pages</h1>
                    <FaAngleDown />
                </div>
                <ul className="collapse header-ul-list" id="pages">
                    <li><a href="www.google.com">Blog</a></li>
                    <li><a href="www.google.com">Blog Single</a></li>
                    <li><a href="www.google.com">Blog Category</a></li>
                    <li><a href="www.google.com">About us</a></li>
                    <li><a href="www.google.com">404 Error</a></li>
                    <li><a href="www.google.com">Contact</a></li>
                </ul>
            </li>
            <li className="mb-2">
                <div className="list-item-container"  data-bs-toggle="collapse" href="#account">
                    <h1 className="list-item">Account</h1>
                    <FaAngleDown />
                </div>
                <ul className="collapse header-ul-list" id="account">
                    <li><a href="www.google.com">Sign in</a></li>
                    <li><a href="www.google.com">Signup</a></li>
                    <li><a href="www.google.com">Forgot Password</a></li>
                    <li className="bg-none" style={{backgroundColor:"transparent"}}>  
                        <div className="d-flex flex-row justify-content-between align-items-center"  data-bs-toggle="collapse" href="#myAccount">
                        <h1 className="list-item">My Account</h1>
                        <FaAngleDown className="account-angle"/>
                        </div>
                        <ul className="collapse header-ul-list" id="myAccount" style={{border:"none",position:"relative",width:"100%"}}>
                            <li><a href="www.google.com">Orders</a></li>
                            <li><a href="www.google.com">Settings</a></li>
                            <li><a href="www.google.com">Address</a></li>
                            <li><a href="www.google.com">Payment Method</a></li>
                            <li><a href="www.google.com">Notification</a></li>


                        </ul>
                </li>
                </ul>
            </li>
            <li className="list-item mb-2 hover-list-container"><div className="list-item-container"><a href="www.google.com">Dashboard</a></div></li>
            <li className="list-item mb-2 hover-list-container"><div className="list-item-container"><a href="www.google.com">Docs</a></div></li>
        </ul>
    </div>
    </div>
    
  
)

const LocationList=[
    {
        id:1,
        LocationName:"Alabama",
        Price:20,
    },
    {
        id:2,
        LocationName:"Alaska",
        Price:30,
    },
    {
        id:3,
        LocationName:"Arizona",
        Price:50,
    },
    {
        id:4,
        LocationName:"California",
        Price:29,
    },
    {
        id:5,
        LocationName:"Colorado",
        Price:80,
    },
    {
        id:6,
        LocationName:"Florida",
        Price:90,
    },
    {
        id:7,
        LocationName:"Arizona",
        Price:50,
    },
    {
        id:8,
        LocationName:"California",
        Price:29,
    },
    {
        id:9,
        LocationName:"Colorado",
        Price:80,
    },
    {
        id:10,
        LocationName:"Florida",
        Price:90,
    }
]



class Header extends Component{


    render(){

        return(
            <div>
                <div className="bg-light">
                    <div className="container py-2">
                        <div className="row">
                            <div className="col-12 col-md-6 text-center text-md-start">
                                <p className="offers-heading">Super Value Deals - Save more with coupons</p>
                            </div>
                            <div className="d-none d-md-block col-6 text-end">
                                <select className="dropdown-container">
                                    <option className="dropdown-option">English</option>
                                    <option>Dutch</option>
                                </select>
                            </div>
                        </div>
                    </div>   
            </div>
           <div className="container">
                <div className="row py-3">
                    <div className="col-12 d-flex flex-row justify-content-between align-items-center">
                            <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534524/ShoppingClone/freshcart-logo_loybps.svg" alt="company-logo" className="company-logo"/>
                        <div className="col-7 large-view-container">
                            <div className="search-container form-control rounded d-flex flex-row justify-content-between">
                                <input type="search" className="search-input rounded" placeholder="Search for products"/>
                                <div className="search-icon">
                                    <IoSearchOutline />
                                </div>
                            </div>
                            <button className="location-btn ms-2 ps-2 pe-2 text-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><IoLocationOutline className="me-2"/> Location</button>
                        </div>
                        <div>
                            <div className="icons-main-container">
                                <div className="icon-container">
                                    <IoIosHeartEmpty className="header-icon"/>
                                    <button className="icons-btn">5</button>
                                </div>
                                <div className="icon-container">
                                    <RiUser3Line className="header-icon"/>
                                </div>
                                <div className="icon-container">
                                    <FiShoppingBag className="header-icon"/>
                                    <button className="icons-btn">1</button>
                                </div>
                                <button className="hamburger-btn"  data-bs-toggle="offcanvas" href="#offcanvasExample" aria-controls="offcanvasExample"><RiMenuFold4Line fontSize={"26px"}/></button>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-12 mt-2 d-none d-lg-block">
                            {NavBar()}
                    </div>
                 
                </div>
           </div>
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534524/ShoppingClone/freshcart-logo_loybps.svg" alt="company-logo" className="company-logo"/>       
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
            <div className="nav-bar-flex-container" style={{maxWidth:"650px"}}>
                            <div className="search-container form-control d-flex flex-row justify-content-between my-2">
                                <input type="search" className="search-input rounded" placeholder="Search for products"/>
                                <div className="search-icon">
                                    <IoSearchOutline />
                                </div>
                            </div>
                            <button className="location-btn ps-2 pe-2 text-center my-1" data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><IoLocationOutline className="me-2"/> Location</button>
                        </div>
                {NavBar()}
            </div>
            
            </div>

            <div className="modal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            <div className="modal-header">
            <h1 className="modal-title" id="staticBackdropLabel">Choose your delivery location</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <p className="modal-para">Enter your address we will specify the offer for your area.</p>
            <div className="modal-body">
                <div className="search-container form-control my-2">
                        <input type="search" className="search-input rounded" placeholder="Search your area"/>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center mt-3 ps-1">
                    <p className="modal-title" style={{fontSize:"16px"}}>Select Location</p>
                    <button className="clear-all-btn">Clear All</button>
                </div>
                <ul className="popup-ul-list">
                        {LocationList.map(e=>(
                            <li key={e.id}><div><p>{e.LocationName}</p><p>Min: ${e.Price}</p></div></li>
                        ))}
                    </ul>
            </div>
            </div>
            </div>
            </div>
        
            </div>
        )
    }
}


export default Header