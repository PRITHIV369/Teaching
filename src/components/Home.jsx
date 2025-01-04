import React from 'react'
import Navbar from './Navbar'
import Profile from './Profile'
import Works from './Works'
import Courses from './Courses'
import Footer from './Footer'
const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <section id='profile'>
        <Profile/>
        </section>
        <section id='myworks'>
        <Works/>
        </section>
        <section id='courses'>
        <Courses/>
        </section>
        <Footer/>
    </div>
  )
}

export default Home