import Link from 'next/link'
import Image from 'next/image'

import TypeItTitle from '@/components/TypeItTitle'

export default function Home() {
  return (
    <main className="bg-mobile bg-cover bg-center h-screen sm:bg-medium">
      <div className="h-screen w-screen bg-brand-darkGray bg-opacity-50 flex flex-col justify-around items-center px-4">
        <Image 
          width={750}
          height={450}
          src={'/logo.svg'}
          alt='Logo DM Gestão Humana'
          className='h-24 w-auto'
        />
        <TypeItTitle />
        <span
          className="font-title text-brand-yellow text-lg uppercase bg-brand-darkGray w-fit px-4 py-2 bg-opacity-60 rounded-2xl animate-shake backdrop-blur-md cursor-pointer
        md:text-3xl"
        >
          <Link href={'/'}>Conheça mais {'>>>'}</Link>
        </span>
      </div>
    </main>
  )
}
