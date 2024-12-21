import { ThemeToggle } from '@/components/Theme/ThemeToggle'
import Link from 'next/link'
import ComputerIcon from './_components/ComputerIcon'

export default function Home () {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='cursor-default text-4xl font-bold tracking-normal hover:tracking-widest transition-all duration-300'>
          jp
          <span className='font-silkscreen'>3</span>
          gs
        </h1>

        <div className='flex items-center gap-2'>
          <ComputerIcon />
        </div>
        <p className='text-xs'>
          <Link href='/crypto'>crypto</Link>, <Link href='/nft'>nfts</Link>, and
          more <ThemeToggle />
        </p>
      </div>
    </div>
  )
}
