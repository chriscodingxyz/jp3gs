'use client'

import * as React from 'react'
import { LampDesk, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function ThemeToggle () {
  const { resolvedTheme, setTheme } = useTheme()
  const [hasToggled, setHasToggled] = React.useState(false)

  const toggleTheme = () => {
    setHasToggled(true)
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button variant='ghost' size='icon' onClick={toggleTheme}>
      {!hasToggled ? (
        <LampDesk className='h-[1.2rem] w-[1.2rem]' />
      ) : resolvedTheme === 'dark' ? (
        <Moon className='h-[1.2rem] w-[1.2rem]' />
      ) : (
        <Sun className='h-[1.2rem] w-[1.2rem]' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
