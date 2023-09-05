import React from 'react'
import Icon from "awesome-react-icons";
import './Footecss.css'
// import {Icon} from ''
import { AiOutlineShop, AiOutlineUser } from "react-icons/ai";
// ImHome

export default function Footer() {
	return (
		<div>
			<script>
				<link rel="stylesheet" href="style.css" />
				<link rel="stylesheet" type="/Footecss.css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
			</script>

			<footer className="footer-distributed">

				<div className="footer-left">

					<h3><u>FixIt<span>Right</span></u><br/>
        <h6 >A touch of perfection</h6></h3>

					<p className="footer-links">
						<AiOutlineShop size={25} />
						<a href="/" className="link-1">Home</a>
						<a href="/Adminlogin"><AiOutlineUser size={25} /> Admin</a>
						<a href="/ServiceProviderLogin">Service Provider</a>
						<a href="/CustomerLogin">Customer</a>
						<a href="/AboutUs">About</a><br/><br/>

						Designed By : Trunal | Shraddha | Vrushali | Aditya
					</p>

					<p className="footer-company-name">FixItRight © 2022</p>
				</div>

				<div className="footer-center">

					<div>
						<i className="fa fa-map-marker"></i>
						<p><span></span> Maharashtra,INDIA</p>
					</div>

					<div>
						<i className="fa fa-phone"></i>
						<p>+91 9325898901</p>
					</div>

					<div>
						<i className="fa fa-envelope"></i>
						<p><a href="mailto:adityapandhare050@gmail.com">adityapandhare050@gmail.com</a></p>
					</div>

				</div>

				<div className="footer-right">

					<p className="footer-company-about">
						<span>About the company</span>
						A website that make it easy for you to get a home maintenance technition easly by connecting the service to provider
						required directly in simple way.
					</p>

					{/* <div className="footer-icons">
					<a href="#"><i className="fa fa-facebook"></i></a>
					<a href="#"><i className="fa fa-twitter"></i></a>
					<a href="#"><i className="fa fa-linkedin"></i></a>
					<a href="#"><i className="fa fa-github"></i></a>
				</div> */}

				</div>

			</footer>
		</div>
	)
}
