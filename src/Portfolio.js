// Portfolio.js
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaFacebookF,FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaCalendarAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPalette, FaYoutube, FaDumbbell, FaDesktop } from 'react-icons/fa';
import profilePic from '../src/img/profile_pic.jpg';
import user_profilePic1 from '../src/img/user1.jpeg';
import user_profilePic2 from '../src/img/user2.jpg';
import user_profilePic3 from '../src/img/user3.webp';
import ig_qr from '../src/img/IG_qr.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // <-- updated import path
import "swiper/css";
import PopupModel from './popup/popup-model';
import { FaInfoCircle } from "react-icons/fa";
import web1 from '../src/img/icons/cc.png';
import content1 from '../src/img/icons/content.png';
import gym1 from '../src/img//icons/gg.png';




// import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from 'react-icons/fa';

const Portfolio = () => {

    const [showPopup, setShowPopup] = useState(false);
    const instagramRef = useRef(null);
    const startDate = new Date('2024-05-14');
    const [duration, setDuration] = useState('');
    const [modalData, setModalData] = useState({
        skill: "",
        description: "",
        show: false,
    });

    const calculateDuration = () => {
        const now = new Date();
        const diff = now.getTime() - startDate.getTime();

        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

        const years = Math.floor(totalDays / 365);
        const months = Math.floor((totalDays % 365) / 30);
        const days = (totalDays % 365) % 30;

        setDuration(`${years} year(s), ${months} month(s), ${days} day(s)`);
    };


    useEffect(() => {
        calculateDuration();
        const interval = setInterval(calculateDuration, 1000 * 60);
        // Trigger window resize after page load
        const handleLoad = () => {
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
            }, 300);
        };
        window.addEventListener('load', handleLoad);

        // Outside click listener
        const handleClickOutside = (event) => {
            if (instagramRef.current && !instagramRef.current.contains(event.target)) {
                setShowPopup(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        // ✅ Cleanup function
        return () => {
            window.removeEventListener('load', handleLoad);
            document.removeEventListener("mousedown", handleClickOutside);
            clearInterval(interval);
        };
    }, []);

    const detailForPopup = (data) => {
        setModalData({
            skill: data,

            show: true,
        });

    };

   const experienceData = [
  {
    title: 'Frontend Web Developer',
    org_name: 'The Big Solutions · Full-time',
    duration: '1yr',
    location: 'Kathmandu, Bāgmatī, Nepal · On-site',
    description: [
      {
        job: "Koshi Premier League (KPL): Developed a real-time cricket platform featuring live match updates, game news, and a small marketplace. Implemented cart, wishlist, and a full payment system with address management (add, edit, remove, set default)."
      },
      {
        job: "Xpress Sewa: Contributed to building a chat system for seamless user communication."
      },
      {
        job: "Om Mandir: Developed an online puja platform allowing users to perform puja and related services digitally."
      }
    ]
  },
  {
    title: 'Frontend Developer',
    org_name: 'MyPay · Full-time',
    duration: '2 yrs',
    location: 'Bhaktapur, Bāgmatī, Nepal · On-site',
    description: [
      {
        job: "Developed and maintained large-scale Angular applications used in digital wallet and fintech systems."
      },
      {
        job: "Built Agent Digital Wallet with transaction management, commission tracking, and agent hierarchy features."
      },
      {
        job: "Implemented secure KYC, PAN, OTP, and bank verification workflows."
      },
      {
        job: "Integrated Stripe and PayPal for international payments."
      },
      {
        job: "Improved UI performance and reusability using Angular best practices and RxJS."
      }
    ]
  }
];


    const educationData = [
        {
            year: "2014 - 2017",
            title: "High School",
            school: "ABC High School, New York, USA"
        },
        {
            year: "2017 - 2021",
            title: "Bachelor of Science in Computer Science",
            school: "XYZ University, California, USA"
        },
        {
            year: "2021 - 2023",
            title: "Master's in Software Engineering",
            school: "LMN Institute of Technology, Texas, USA"
        }
    ];
 const recommendations = [
  {
    name: "Bibek Sharma",
    title: "Expert Mobile Development Engineer | 10+ Years | Native & Hybrid Apps | Expert in Java, Kotlin, Swift, Flutter, Dart, Compose Multiplatform",
    date: "January 23, 2026",
    relation: "Bibek was senior to Nikesh but didn't manage Nikesh directly",
    image: user_profilePic1, // replace with the actual image import or URL
    message:
      "I’ve had the pleasure of working with Nikesh across multiple projects, and he has consistently impressed me with his technical skills and dedication. He has strong expertise in Angular and React, writes clean and maintainable code, and is comfortable handling complex integrations such as payment systems and APIs. Beyond his technical abilities, Nikesh demonstrates a strong sense of ownership, a collaborative mindset, and a genuine eagerness to learn. He contributes meaningfully to team discussions, implements solutions efficiently, and consistently delivers high-quality work on time. I have no doubt that he will continue to grow into an exceptional frontend developer, and he is definitely someone you want on your team."
  },
  {
    name: "Anish Ghimire",
    title: "Software Engineer || Python || FastAPI || Django",
    date: "January 22, 2026",
    relation: "worked with Nikesh on the same team",
    image: user_profilePic1, // replace with the actual image import or URL
    message:
      "I had the pleasure of working with Nikesh Joshi, and I can confidently recommend him as a strong frontend engineer. He consistently delivered clean, scalable, and user-friendly interfaces with excellent attention to detail and code quality. Nikesh communicates clearly, collaborates effectively with cross-functional teams, and approaches problems with a proactive, solution-oriented mindset. He handles changing requirements well and always balances speed with maintainability and performance. Nikesh would be a valuable asset to any team looking for a dependable, skilled, and thoughtful frontend developer."
  },
  {
    name: "Ayush Niraula",
    title: "🚀 Angular | FE Team Lead | TypeScript | React.JS",
    date: "January 8, 2025",
    relation: "managed Nikesh directly",
    image: user_profilePic1, // replace with actual image import or URL
    message:
      "Working with Nikesh has always been a fantastic experience. Regardless of the number of projects assigned or shifting priorities, he consistently remains eager, dedicated, and fully committed to delivering exceptional results. His contributions have made a lasting positive impact on our team."
  }
];

    const skills = [
        { name: "Frontend", level: 80, color: "#c09409", icon: <i className="fab fa-angular"></i> },
        { name: "Backend", level: 40, color: "#c09409", icon: <i className="fab fa-react"></i> },
        { name: "Graphic Desinging", level: 70, color: "#c09409", icon: <i className="fab fa-js"></i> },
        { name: "Tools", level: 85, color: "#c09409", icon: <i className="fab fa-js-square"></i> },
        // { name: "Content Creation", level: 65, color: "#c09409", icon: <i className="fab fa-bootstrap"></i> },
    ];
    const services = [
        { icon: web1, title: 'Web Sites and Platforms' },
        // { icon: <FaPalette />, title: 'Graphic Desigening' },
        { icon: content1, title: 'Content creation' },
        { icon: gym1, title: 'Gym Trainer' },
        // { icon: <FaSearch />, title: 'Seo Optimization' },
        // { icon: <FaInstagram />, title: 'Social Media Management' },
    ];
    const handleClose = () => setModalData({ ...modalData, show: false });
    return (
        <div className="bg-dark text-white min-vh-100 d-flex align-items-center">
            <div className="container py-5">
                <div className="row align-items-center">
                    {/* Left Side - Profile Image */}
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        {/* <img
                            src={profilePic}
                            alt="Profile"
                            className="img-fluid rounded-3"
                        /> */}
                        <div className="custom-frame">
                            <img src={profilePic} alt="Profile"></img>


                        </div>

                        <div className="d-flex mt-3">
                            <div className="px-3 py-2 bg-white rounded-pill d-flex gap-3 position-relative">
                                {/* Facebook */}
                                <a
                                    href="https://www.facebook.com/share/17DLYmWiB2/"
                                    className="btn btn-light btn-sm rounded-circle"
                                    data-bs-toggle="tooltip"
                                    title="Facebook"
                                >
                                    <FaFacebookF />
                                </a>

                                {/* Github */}
                                <a
                                    href="https://github.com/leoking01996/"
                                    className="btn btn-light btn-sm rounded-circle"
                                    data-bs-toggle="tooltip"
                                    title="Twitter"
                                >
                                    <FaGithub />
                                </a>

                                {/* Instagram */}
                                <div ref={instagramRef} className="position-relative">
                                    <button
                                        className="btn btn-light btn-sm rounded-circle"
                                        onClick={() => setShowPopup(!showPopup)}
                                        data-bs-toggle="tooltip"
                                        title="Instagram"
                                    >
                                        <FaInstagram />
                                    </button>

                                    {showPopup && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '110%',
                                                transform: 'translateY(-50%)',
                                                backgroundColor: '#fff',
                                                padding: '10px 15px',
                                                borderRadius: '8px',
                                                boxShadow: '0 0 10px rgba(0,0,0,0.2)',
                                                whiteSpace: 'nowrap',
                                                zIndex: 100,
                                            }}
                                        >
                                            <img className='popup' src={ig_qr} alt="Instagram QR" />
                                            <br />
                                            <a
                                                href="https://www.instagram.com/joc_nike?igsh=dmh5cHBrZ244Ymg1"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: '#615313ff' }}
                                            >
                                                @MyProfile
                                            </a>
                                        </div>
                                    )}
                                </div>

                                {/* LinkedIn */}
                                <a
                                    href="https://www.linkedin.com/in/nikesh-joshi-6a8889224/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-light btn-sm rounded-circle"
                                    data-bs-toggle="tooltip"
                                    title="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Info */}
                    <div className="col-md-8">
                        <p>Hello Everyone 👋</p>
                        <h1 className="fw-bold">
                            I'm <span className="text-warning">Nikesh Joshi</span>
                        </h1>
                        {/* <h2 className="fw-light">I am a <span className="text-warning">Frontend Developer</span></h2> */}
                     <h2 className="fw-light">
  Frontend Developer | <span className="text-warning">React</span> | <span className="text-warning">Angular</span> | 
  TypeScript, RxJS | Payment Systems | 3 Years Experience
</h2>

                        <hr className="border-secondary" />
                        <div className="row mt-4">
                            <div className="col-sm-6 mb-3">
                               <FaInfoCircle className="me-2 text-warning" />
                                Open to <strong>Full-time</strong> | <strong>Remote</strong> | <strong>Freelance</strong>
                            </div>
                            <div className="col-sm-6 mb-3 d-flex align-items-center">
                                <FaWhatsapp className="me-2 text-warning" />
                                <a
                                    href="tel:+9779840373337"
                                    className="text-white text-decoration-none"
                                    title="Call Nikesh"
                                >
                                    9840373337
                                </a>
                            </div>

                            <div className="col-sm-6 mb-3">
                                <FaMapMarkerAlt className="me-2 text-warning" />
                                Frontend Developer | <strong>3 Years</strong> Experience
                            </div>
                            <div className="col-sm-6 mb-3 d-flex align-items-center">
                                <FaEnvelope className="me-2 text-warning" />
                                <a
                                    href="mailto:nikeshjoshi1996@email.com"
                                    className="text-white text-decoration-none"
                                    title="Email Nikesh"

                                >
                                    nikeshjoshi1996@email.com
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <PopupModel
                    skill={modalData.skill}
                    show={modalData.show}
                    onClose={handleClose}
                />
                <div className='mt-4'>
                    <section class="hero-intro">
<p>
  I’m a Front-end Developer with 3 years of experience building responsive and high-performance web applications.  
  Skilled in React, Angular, JavaScript, and TypeScript, I’ve contributed to projects like:  
  <strong className='ms-1'>MyPay Digital Wallet</strong>,  
  <strong className='ms-1'>International Voting Platform</strong>,  
  <strong className='ms-1'>Xpress Sewa</strong>, and  
  <strong className='ms-1'>KPL-based platforms</strong>, delivering clean, secure, and user-friendly solutions.
</p>


                    </section>

                </div>

                <div className="bg-dark text-light py-5">
                    <Container className="p-5 rounded white-shadow bg-dark">
                        <p className="mb-3 text-center fs-3">
                            <h2 class="fw-bold section-title">My Skills</h2>

                            {/* <strong className="text-white border-bottom border-2 pb-1">My Skills</strong> */}
                        </p>


                        <Swiper
                            modules={[Autoplay]}
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={true}
                            // autoplay={{ delay: 3000 }}
                            breakpoints={{
                                1024: { slidesPerView: 3 },
                                768: { slidesPerView: 2 },
                                100: { slidesPerView: 1 },
                            }}
                            pagination={{ clickable: true }}
                        >
                            {skills.map((skill, index) => (
                                <SwiperSlide key={index}>
                                    <div className="p-3">
                                        <div className="skill-card text-center p-3 rounded-4 shadow-sm " onClick={() => detailForPopup(skill.name)}>
                                            <div className="skill-icon mb-3" style={{ fontSize: "2.5rem", color: skill.color }}>
                                                {skill.icon}
                                            </div>
                                            <h5 className="mb-3">{skill.name}</h5>
                                            <div className="progress-circle" style={{ '--percent': skill.level }}>
                                                <span>{skill.level}%</span>
                                                <svg viewBox="0 0 36 36">
                                                    <path
                                                        className="circle-bg"
                                                        d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke="#444"
                                                        strokeWidth="3"
                                                    />
                                                    <path
                                                        className="circle"
                                                        d="M18 2.0845
                       a 15.9155 15.9155 0 0 1 0 31.831
                       a 15.9155 15.9155 0 0 1 0 -31.831"
                                                        fill="none"
                                                        stroke={skill.color}
                                                        strokeWidth="3"
                                                        strokeDasharray={`${skill.level}, 100`}
                                                        strokeLinecap="round"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Container>
                </div>
                {/* <hr className='border-secondary mt-5'></hr> */}

                <div className="bg-dark text-light py-4">


                    <div className="bg-dark text-light mt-0">
                        <p className="mb-3 text-center fs-3">
                            <h2 class="fw-bold section-title">What I do</h2>
                            {/* <strong className="text-white border-bottom border-2 pb-1"></strong> */}
                        </p>
                        {/* <p className="mb-4 text-ali ms-0"> <strong className="text-white border-bottom border-2 pb-1">What I do</strong> </p> */}
                        <Container><Row>
                            {services.map((service, index) => (
                                <Col
                                    key={index}
                                    md={4}
                                    onClick={() => { detailForPopup(service.title) }}
                                    className="mb-4 text-center p-3 rounded service-hover"
                                >
                                    <div className="mb-3 ico_n" style={{ fontSize: '2rem' }}>
                                         <img
    src={service.icon}
    alt={service.title}
    className="w-22  mx-auto"
  />
                                    </div>
                                    <h5 className='titl_e'>{service.title}</h5>
                                </Col>
                            ))}
                        </Row> </Container>

                    </div>
                </div>

                {/* EXPERIENCE SECTION */}
                <div className="container py-5 text-center">
                    <h2 className="fw-bold section-title">MY EXPERIENCE</h2>
                    <div className="row mt-4">
                       {experienceData.map((item, index) => (
    <div className="col-md-6 mb-4" key={index}>
      <div className="card p-4 experience-card h-100">
        {/* Show duration instead of undefined date */}
        <span className="experience-badge">{item.duration}</span>

        <h5 className="fw-bold">{item.org_name}</h5>
        <h6 className="fw-bold">{item.title}</h6>

        {/* Job descriptions */}
        {Array.isArray(item.description) ? (
          <ul className="text-muted text-start">
            {item.description.map((desc, i) => (
              <li key={i}>{desc.job}</li>
            ))}
          </ul>
        ) : (
          <p className="text-muted">{item.description}</p>
        )}

        <p className="text-muted mb-0">
          <strong>{item.location}</strong>
        </p>
      </div>
    </div>
  ))}

                    </div>
                </div>

          

                {/* recomendation */}

                <div className="container my-5">
                    <div className='text-center'>
                        <h2 className="fw-bold text-center mb-5 section-title">Recommendations</h2>
                    </div>
                    <div className="row">
                        {recommendations.map((rec, index) => (
    <div className="col-md-6 col-lg-4 mb-4" key={index}>
      <div className="card p-4 h-100 shadow-sm border-0">
        <div className="d-flex align-items-start">
          <img
            src={rec.image}
            alt={rec.name}
            className="rounded-circle me-3"
            width="60"
            height="60"
            style={{ objectFit: "cover" }}
          />
          <div>
            <h2 className="mb-0 fw-bold">{rec.name}</h2>
            <p className="text-muted fw-bold mb-1">{rec.title}</p>
            <small className="text-muted">
              {rec.date}, {rec.relation}
            </small>
          </div>
        </div>
        <div className="mt-3">
          <p className="text-muted mb-0" style={{ fontSize: "0.95rem" }}>
            {rec.message}
          </p>
        </div>
      </div>
    </div>
  ))}
                    </div>
                </div>




            </div>
        </div >

    );
};

export default Portfolio;
