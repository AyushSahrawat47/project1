import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './component.css';
import image from '../assets/check.svg';
import { setPageviews, toggleBilling, updatePrice, toggleTheme } from '../redux/pricingSlice';

const Home = () => {


    const { pageviews, price, isYearly, theme } = useSelector((state) => state.pricing);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(updatePrice());
    }, [pageviews, isYearly, dispatch]);

    const handleSliderChange = (event) => {
        const newPageviews = event.target.value * 10000; // Adjusting range for pageviews
        dispatch(setPageviews(newPageviews));
        dispatch(updatePrice());
    };

    const handleBillingToggle = () => {
        dispatch(toggleBilling());
        dispatch(updatePrice());
    };

    const handleThemeToggle = () => {
        dispatch(toggleTheme());
    };


    return (
        <>
                <p className='text-center dark-mode'>
                    <i onClick={handleThemeToggle} class="fa-solid fa-moon"></i>
                </p>
            <div className={` container-main container text-center mt-5 ${theme}`}>
                <div className={`pricing-section py-5 `} style={{ marginBottom: "40px" }}>

                    <h1>Simple, traffic-based pricing</h1>
                    <p>Sign-up for our 30-day trial. No credit card required.</p>
                </div>
                <div className="pricing-container bg-white  rounded shadow">
                    <div className="pricing-card mx-auto">
                        <div className="pricing-header d-flex justify-content-between align-items-center mb-3">
                            <span>{pageviews.toLocaleString()} PAGEVIEWS</span>
                            <span className="price fw-bold">${price} <span style={{ fontSize: "15px" }}>/ month</span></span>
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
                                <input className="form-check-input" checked={isYearly} type="checkbox" onChange={handleBillingToggle} />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                            </div>
                            <span className='discount'>Yearly Billing
                                <span className="badge text-bg-warning">25% discount</span>
                            </span>
                        </div>
                        <hr className="my-4" />
                        <div className="row ">
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
