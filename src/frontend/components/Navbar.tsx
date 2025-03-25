'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.jpg'

const data = {
  navTitle: 'Estonian Young Academy of Sciences',
  links: [
    { name: 'About', sectionId: 'about' },
    { name: 'Schedule', sectionId: 'schedule' },
    { name: 'Venue', sectionId: 'venue' },
  ],
  buttonText: 'Register Now',
}

const handleScroll = (sectionId: string) => {
  const navbar = document.querySelector('.navbar') as HTMLElement | null
  if (!navbar) {
    console.error('Navbar element not found')
    return
  }

  const element = document.getElementById(sectionId)
  if (!element) {
    console.error(`Element with ID ${sectionId} not found`)
    return
  }

  const navbarHeight = navbar.offsetHeight
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}

export default function Navbar() {
  const [navOffset, setNavOffset] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const lastScrollRef = useRef(0)

  // Update screen size state on mount and when resized
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 480)
    }
    // Set initial value
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Set initial scroll position (client-side only)
  useEffect(() => {
    lastScrollRef.current = window.pageYOffset
  }, [])

  useEffect(() => {
    const handleNavbarScroll = () => {
      const currentScroll = window.pageYOffset

      if (isSmallScreen) {
        const navbarHeight = (document.querySelector('.navbar') as HTMLElement)?.offsetHeight || 60
        const delta = currentScroll - lastScrollRef.current

        setNavOffset((prevOffset) => {
          let newOffset = prevOffset + delta
          // Clamp between 0 (fully visible) and navbarHeight (fully hidden)
          newOffset = Math.max(0, Math.min(navbarHeight, newOffset))
          // Snap to 0 if nearly visible, so it stays stuck at the top
          if (newOffset < 10) newOffset = 0
          return newOffset
        })
      } else {
        // Ensure the navbar is fully visible on larger screens
        setNavOffset(0)
      }
      lastScrollRef.current = currentScroll
    }

    window.addEventListener('scroll', handleNavbarScroll)
    return () => window.removeEventListener('scroll', handleNavbarScroll)
  }, [isSmallScreen])

  return (
    <nav
      className="navbar"
      style={{
        transform: `translateY(-${navOffset}px)`,
        transition: 'transform 0.1s linear',
      }}
    >
      <div className="container nav-container">
        <div className="nav-header">
          <div className="logo-container">
            <Image
              src={logo}
              alt="Event Logo"
              width={60} // Explicit width matching your CSS
              height={60} // Explicit height matching your CSS
              style={{
                objectFit: 'cover', // Maintain your original cover style
                objectPosition: 'center', // Maintain your original positioning
              }}
            />
          </div>
          <h1 className="nav-title" style={{ pointerEvents: 'none' }}>
            {data.navTitle}
          </h1>
        </div>
        <div className="nav-actions">
          <ul className="nav-links">
            {data.links.map((link) => (
              <li key={link.sectionId}>
                <a
                  href={`#${link.sectionId}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleScroll(link.sectionId)
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="register-btn" onClick={() => handleScroll('hero')}>
            {data.buttonText}
          </button>
        </div>
      </div>
    </nav>
  )
}
