import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import Usercontext from '../context/usecontext';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { IoCall } from "react-icons/io5"; 

function Productdetails() {
    const { photoId } = useParams();
    const { photos, formshow } = useContext(Usercontext);

    const photo = photos.find(photo => photo.id === photoId);
    const [value, setValue] = useState(2);
    const [showMore, setShowMore] = useState(false); // State to toggle showing more details

    if (!photo) {
        return <div>Photo not found</div>;
    }

    const handleRatingChange = (event, newValue) => {
        setValue(newValue);
    };

    const handlePhoneCall = () => {
        window.location.href = 'tel:+1234567890'; 
    };

    const toggleDetails = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='container p-5'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <h3 className='mt-5 text-center' style={{ color: "rgb(255, 111, 0)" }}>Product Details</h3>
                </div>
            </div>
            <div className='row p-4 justify-content-center'>
                <div className='col-md-5'>
                    <img className='mt-3 photo-max-size img-fluid' src={photo.src} alt={photo.name} />
                </div>
                <div className='col-md-5'>
                    <h2>{photo.name}</h2>
                    <p className='product-info' style={{ color: '#d90700' }}>{photo.p}</p>
                    <p className='product-info'>{photo.dimensions}</p>
                    <p className='product-info'>{photo.description}</p>
                  
                            <p>Additional details:</p>
                            <p>Size: {photo.size}</p>
                            <p>Color: {photo.color}</p>
                     
                    <div className='d-flex justify-content-between align-items-center'>
                        <p className='product-price'>{photo.price}</p>
                        <div className="social-media-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className='rating-container'>
                        <Box
                            sx={{
                                '& > legend': { mt: 2, fs: 5 },
                            }}
                        >
                            <Typography component="legend">Rating</Typography>
                            <Rating
                                name="product-rating"
                                value={value}
                                onChange={handleRatingChange}
                            />
                        </Box>
                    </div>
                   
                    <div className="contact-buttons mt-3 d-flex">
                        <button className='btn btn-primary me-2' onClick={() => { formshow(photo.name) }}>Inquiry now</button>
                        <button className='btn btn-primary me-2 ' onClick={()=> handlePhoneCall()}><IoCall /> Contact</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Productdetails;
