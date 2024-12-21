'use client'

import React, { useEffect, useState } from 'react'

export default function ViewportIndicator () {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)

    const handleResize = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className='fixed bottom-0 right-0 p-2 text-[10px] font-mono'>
      <div className='bg-white text-black sm:hidden p-1'>
        mobile <span className='opacity-50'>{'<'}640</span> • {width}{' '}
        <span className='font-bold'>• phone</span>
      </div>
      <div className='bg-gray-300 text-black hidden sm:block md:hidden p-1'>
        sm: <span className='opacity-50'>640-767</span> • {width}{' '}
        <span className='font-bold'>• phone/tablet</span>
      </div>
      <div className='bg-purple-500 text-white hidden md:block lg:hidden p-1'>
        md: <span className='opacity-50'>768-1023</span> • {width}{' '}
        <span className='font-bold'>• tablet</span>
      </div>
      <div className='bg-orange-500 text-white hidden lg:block xl:hidden p-1'>
        lg: <span className='opacity-50'>1024-1279</span> • {width} • laptop
      </div>
      <div className='bg-green-500 text-white hidden xl:block 2xl:hidden p-1'>
        xl: <span className='opacity-50'>1280-1535</span> • {width} • desktop
      </div>
      <div className='bg-blue-500 text-white hidden 2xl:block p-1'>
        2xl: <span className='opacity-50'>1536+</span> • {width} • large screen
      </div>
    </div>
  )
}
