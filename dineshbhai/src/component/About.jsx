import React from 'react'
import Whatsapp from './Whatsapp'
import Calllogo from './Calllogo'
import ScrollToTopButton from './ScrollToTopButton';

function About() {
  return (
   <div className="container aboutus" style={{position: 'relative',top:'90px',marginBottom:'120px',fontfamily: "Poppins"}}>
     <h2 className='text-danger'>About Us</h2>
     <br />
        <h5>Company's Journey</h5>
        <p>Kheteshwar Steel Factory has been a trusted name in the steel industry for over a decade. Established in [year], we have been providing high-quality steel items to customers across [location]. Our commitment to excellence and customer satisfaction has helped us build a strong reputation in the industry.</p>
        <br />
        <h5>Purpose and Goals</h5>
        <p>At Kheteshwar Steel Factory, our primary goal is to provide our customers with top-notch steel products that are durable, reliable, and affordable. We aim to become the go-to destination for all your steel needs, whether you are looking for steel gates, railings, tables, beds, sofas, chairs, and more.</p>
        <br />
        <h5>Introduction to the Team</h5>
        <p>Our team at Kheteshwar Steel Factory consists of skilled professionals who are passionate about delivering superior steel solutions to our customers. With years of experience in the industry, our team is dedicated to ensuring that you receive the best possible products and service.</p>
        <br />
        <h5>Offerings</h5>
        <p>We offer a wide range of steel items to meet your specific needs and preferences. From elegant steel gates and railings to sturdy steel tables and beds, we have something for everyone. Our products are crafted with precision and attention to detail, ensuring that they are built to last.</p>
        <br />
        <h5>Customer Opinions</h5>
        <p>Our customers love the quality and durability of our steel products. Here's what some of them have to say:</p>
        <blockquote>
            <p>"Kheteshwar Steel Factory is my go-to shop for all my steel needs. Their products are top-notch and their customer service is outstanding." - [Customer Name]</p>
            <p>"I couldn't be happier with my steel gate from Kheteshwar Steel Factory. It looks great and functions perfectly." - [Customer Name]</p>
        </blockquote>
        <br />
        <h5>Achievements</h5>
        <p>Over the years, Kheteshwar Steel Factory has received numerous accolades and recognition for our excellence in the steel industry. We are proud of our achievements and will continue to strive for excellence in everything we do.</p>
        <br />
        <h5>Call to Action</h5>
        <p>Ready to elevate your space with premium steel products from Kheteshwar Steel Factory? Contact us today to discuss your requirements and place your order. Let us help you bring your steel vision to life!</p>
        
        <h5>Contact No: <mark>9876543210</mark></h5>
    <Whatsapp/>
    <Calllogo/>
    <ScrollToTopButton/>

   </div>
  )
}

export default About
