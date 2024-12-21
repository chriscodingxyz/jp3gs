import { ThemeToggle } from '@/components/Theme/ThemeToggle'
import Image from 'next/image'
import Link from 'next/link'

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
          <Image
            src='https://win98icons.alexmeub.com/icons/png/computer_explorer-5.png'
            alt=''
            width={42}
            height={42}
          />
        </div>
        <p className='text-xs'>
          <Link href='/crypto'>crypto</Link>, <Link href='/nft'>nfts</Link>, and
          more <ThemeToggle />
        </p>
      </div>
    </div>
  )
}
