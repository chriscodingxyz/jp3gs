'use client'

import Image from 'next/image'
import React from 'react'
import { toast } from 'sonner'

export default function ComputerIcon () {
  return (
    <Image
      onClick={() => toast.success('Hello World')}
      src='https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png'
      alt=''
      width={42}
      height={42}
      className='cursor-pointer'
    />
  )
}
