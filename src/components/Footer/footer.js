import './footer.css'
import { FaFacebook,FaInstagram,FaTwitter } from "react-icons/fa";
const FooterOptions={
    "categoriesOne":[
          {
            "displayText": "Vegetables & Fruits",
            "url": "#"
          },
          {
            "displayText": "Breakfast & instant food",
            "url": "#"
          },
          {
            "displayText": "Bakery & Biscuits",
            "url": "#"
          },
          {
            "displayText": "Atta, rice & dal",
            "url": "#"
          },
          {
            "displayText": "Sauces & spreads",
            "url": "#"
          },
          {
            "displayText": "Organic & gourmet",
            "url": "#"
          },
          {
            "displayText": "Baby care",
            "url": "#"
          },
          {
            "displayText": "Cleaning essentials",
            "url": "#"
          },
          {
            "displayText": "Personal care",
            "url": "#"
          }
        ],
    "categoriesTwo":[
        {
            "displayText": "Dairy, bread & eggs",
            "url": "#"
          },
          {
            "displayText": "Cold drinks & juices",
            "url": "#"
          },
          {
            "displayText": "Tea, coffee & drinks",
            "url": "#"
          },
          {
            "displayText": "Masala, oil & more",
            "url": "#"
          },
          {
            "displayText": "Chicken, meat & fish",
            "url": "#"
          },
          {
            "displayText": "Paan corner",
            "url": "#"
          },
          {
            "displayText": "Pharma & wellness",
            "url": "#"
          },
          {
            "displayText": "Home & office",
            "url": "#"
          },
          {
            "displayText": "Pet care"
          }

    ],
    "getToKnowUs":[
          {
            "displayText": "Company",
            "url": "#"
          },
          {
            "displayText": "About",
            "url": "#"
          },
          {
            "displayText": "Blog",
            "url": "#"
          },
          {
            "displayText": "Help Center",
            "url": "#"
          },
          {
            "displayText": "Our Value",
            "url": "#"
          }
        ],
    "forConsumers": [
        {
          "displayText": "Payments",
          "url": "#"
        },
        {
          "displayText": "Shipping",
          "url": "#"
        },
        {
          "displayText": "Product Returns",
          "url": "#"
        },
        {
          "displayText": "FAQ",
          "url": "#"
        },
        {
          "displayText": "Shop Checkout",
          "url": "#"
        }
      ],
      "becomeAShopper":[
        {
          "displayText": "Shopper Opportunities",
          "url": "#"
        },
        {
          "displayText": "Become a Shopper",
          "url": "#"
        },
        {
          "displayText": "Earnings",
          "url": "#"
        },
        {
          "displayText": "Ideas & Guides",
          "url": "#"
        },
        {
          "displayText": "New Retailers",
          "url": "#"
        }
      ],
      "freshCartPrograms": [
        {
          "displayText": "Freshcart programs",
          "url": "#"
        },
        {
          "displayText": "Gift Cards",
          "url": "#"
        },
        {
          "displayText": "Promos & Coupons",
          "url": "#"
        },
        {
          "displayText": "Freshcart Ads",
          "url": "#"
        },
        {
          "displayText": "Careers",
          "url": "#"
        }
      ]
}

const FooterListView=props=>{
    const{item}=props
    return(
        <li className='footer-list-item'><a href={item.url} className='nav-link'>{item.displayText}</a></li>
    )
}

const Footer=()=>{
    return(
        <div className="footer-main-container">
            <div className="container">
                <div className="row">
                    <div className='col-12 col-lg-4'>
                        <p className='footer-sub-heading'>Categories</p>
                        <div className='row'>
                        <div className='col-6'>
                            <ul className='footer-ul-list'>
                                {FooterOptions.categoriesOne.map(e=>(
                                    <FooterListView key={e.displayText} item={e}/>
                                ))}
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='footer-ul-list'>
                                {FooterOptions.categoriesTwo.map(e=>(
                                    <FooterListView key={e.displayText} item={e}/>
                                ))}
                            </ul>
                        </div>
                        </div>
                    </div>
                    <div className='col-6 col-md-3 col-lg-2'>
                        <p className='footer-sub-heading'>Get to Know Us</p>
                                <ul className='footer-ul-list'>
                                    {FooterOptions.getToKnowUs.map(e=>(
                                        <FooterListView key={e.displayText} item={e}/>
                                    ))}
                                </ul>
                        </div>
                        <div className='col-6 col-md-3 col-lg-2'>
                        <p className='footer-sub-heading'>For Consumers</p>
                                <ul className='footer-ul-list'>
                                    {FooterOptions.forConsumers.map(e=>(
                                        <FooterListView key={e.displayText} item={e}/>
                                    ))}
                                </ul>
                        </div>
                        <div className='col-6 col-md-3 col-lg-2'>
                    <p className='footer-sub-heading'>Become a Shopper</p>
                            <ul className='footer-ul-list'>
                                {FooterOptions.becomeAShopper.map(e=>(
                                    <FooterListView key={e.displayText} item={e}/>
                                ))}
                            </ul>
                        </div>
                        <div className='col-6 col-md-3 col-lg-2'>
                    <p className='footer-sub-heading'>Freshcart Programs</p>
                            <ul className='footer-ul-list'>
                                {FooterOptions.freshCartPrograms.map(e=>(
                                    <FooterListView key={e.displayText} item={e}/>
                                ))}
                            </ul>
                        </div>
                </div>
            </div>
            <div className='container'>
            <div className='row'>
                    <div className='col-12'>
                    <hr></hr>
                    <div className='ps-2 col-12'>
                    <div className='row'>
                        <ul className='partners-ul-list col-12 col-lg-4'>
                        <li className='footer-sub-heading'>Payment Partners</li>
                            <li>
                                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534523/ShoppingClone/amazonpay_yohunp.svg" alt="amazon-pay"/>
                            </li>
                            <li>
                                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/american-express_ab1ko8.svg" alt="american-express"/>
                            </li>
                            <li>
                                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/mastercard_ebacoc.svg" alt="master-card"/>
                            </li>
                            <li>
                                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/paypal_gyn369.svg" alt="paypal"/>
                            </li>
                            <li>
                                <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/visa_mhri7f.svg" alt="visa"/>
                            </li>
                        </ul>
                        <div className='col-12 col-lg-8 play-store-container'>
                        <p className='footer-sub-heading mt-3 me-3' >Get deliveries with FreshCart</p>
                        <ul className='play-ul-list'>
                            <li className='me-2 mt-2'><img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/appstore-btn_edbcsz.svg" alt="app-store"/></li>
                            <li className='me-2 mt-2'><img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1716534522/ShoppingClone/googleplay-btn_g9i3xp.svg" alt="play-store"/></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <hr></hr>
                    </div>
                </div>
            </div>
            <div className='container'>
              <div className='row copy-right-container'>
                <div className='col-12 col-md-6'>
                  <p className=''>&copy; 2022 - 2024 FreshCart eCommerce HTML Template. All rights reserved. Powered by Codescandy.</p>
                </div>
                <div className='col-12 col-md-6'>
                  <ul className='social-icons-container'>
                    <li>Follow us on</li>
                    <li className='social-icon'><a href="www.google.com" className='nav-link'><FaFacebook fontSize={"20px"}/></a></li>
                    <li className='social-icon'><a href="www.google.com" className='nav-link'><FaTwitter fontSize={"20px"}/></a></li>
                    <li className='social-icon'><a href="www.google.com"  className='nav-link'><FaInstagram fontSize={"20px"}/></a></li>
                  </ul>
                </div>
              </div>
            </div>
    
        </div>
    )
}

export default Footer