import React, { useState } from 'react';
import './component.css';
import image from '../assets/check.svg';

const Home = () => {
    const [pageviews, setPageviews] = useState(0); // Initial value for pageviews
    const [price, setPrice] = useState(0); // Initial value for price
    const [isYearly, setIsYearly] = useState(false); // Toggle for yearly billing

    const handleSliderChange = (event) => {
        const newPageviews = event.target.value * 10000; // Adjusting range for pageviews
        setPageviews(newPageviews);
        updatePrice(newPageviews);
    };

    const updatePrice = (newPageviews) => {
        // Example pricing logic: $16 for every 100K pageviews
        const basePrice = 16;
        const calculatedPrice = (newPageviews / 100000) * basePrice;
        setPrice(calculatedPrice.toFixed(2)); // Update price with 2 decimal places
    };
    const handleBillingToggle = () => {
        const newIsYearly = !isYearly;
        setIsYearly(newIsYearly);
        updatePrice(pageviews, newIsYearly);
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="container text-center mt-5">
                <div className="pricing-section py-5">
                    <h1>Simple, traffic-based pricing</h1>
                    <p>Sign-up for our 30-day trial. No credit card required.</p>
                </div>
                <div className="pricing-container bg-white p-4 rounded shadow">
                    <div className="pricing-card mx-auto">
                        <div className="pricing-header d-flex justify-content-between align-items-center mb-3">
                            <span>{pageviews.toLocaleString()} PAGEVIEWS</span>
                            <span className="price fw-bold">${price} <span>/ month</span></span>
                        </div>
                        <div className="slider-container mb-4">
                            <input
                                id="myRange"
                                type="range"
                                min="1"
                                max="100"
                                value={pageviews / 10000}
                                onChange={handleSliderChange}
                                className="form-range"
                            />
                        </div>
                        <div className="billing-toggle d-flex justify-content-center align-items-center gap-2 mb-4">
                            <span>Monthly Billing</span>
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox"  onclick={handleBillingToggle}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                            <span>Yearly Billing <span className="discount text-warning">25% discount</span></span>
                        </div>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-unstyled text-start">
                                    <li className="mb-2">
                                        <img className="me-2" src={image} alt="check" />
                                        Unlimited websites
                                    </li>
                                    <li className="mb-2">
                                        <img className="me-2" src={image} alt="check" />
                                        100% data ownership
                                    </li>
                                    <li className="mb-2">
                                        <img className="me-2" src={image} alt="check" />
                                        Email reports
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <button className="btn btn-dark trial-button">Start my trial</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
