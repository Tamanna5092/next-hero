import React from 'react'
// import img from '../../../public/image/1.jpeg'
import Image from 'next/image'

const ServicesPage = () => {
  return (
    <div className='min-h-screen p-10'>
      <h1>This is services page</h1>
      <Image src="/image/1.jpeg" alt="" height={1080} width={1920} />
    </div>
  )
}

export default ServicesPage
