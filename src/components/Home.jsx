import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import Profile from './Profile'
import Works from './Works'
import Courses from './Courses'
import Footer from './Footer'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to our homepage. Explore our profile, works, and courses offered. Get to know more about us and connect with us."
        />
        <meta name="keywords" content="profile, works, courses, homepage, portfolio" />
        <meta name="author" content="Your Company Name" />
        <meta property="og:title" content="Home | Your Website Name" />
        <meta
          property="og:description"
          content="Welcome to our homepage. Explore our profile, works, and courses offered. Get to know more about us and connect with us."
        />
        <meta property="og:image" content="path_to_image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Your Website Name" />
        <meta
          name="twitter:description"
          content="Welcome to our homepage. Explore our profile, works, and courses offered. Get to know more about us and connect with us."
        />
        <meta name="twitter:image" content="path_to_image.jpg" />
        <meta name="twitter:site" content="@your_twitter_handle" />
      </Helmet>

      <div className="">
        <Navbar />
        <section id="profile">
          <Profile />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="courses">
          <Courses />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default Home
