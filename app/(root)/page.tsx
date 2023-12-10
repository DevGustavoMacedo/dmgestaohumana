import Link from 'next/link'
import Image from 'next/image'

import TypeItTitle from '@/components/TypeItTitle'

export default function Home() {
  return (
    <main className="bg-mobile bg-cover bg-center h-screen lg:bg-desktop">
      <div className="h-screen w-screen bg-brand-darkGray bg-opacity-50 flex flex-col justify-around items-center px-4">
        <Image
          width={750}
          height={450}
          src={'/logo.svg'}
          alt="Logo DM Gestão Humana"
          className="h-24 w-auto md:h-32 3xl:h-44"
        />
        <TypeItTitle />
        <Link
          href={'/'}
          className="text-brand-yellow font-bold text-md uppercase bg-brand-darkGray w-fit px-4 py-2 bg-opacity-60 rounded-2xl animate-shake backdrop-blur-md cursor-pointer
        md:text-2xl 3xl:text-4xl items-center flex gap-2"
        >
          <span>Conheça mais</span>
          <Image
            src={'/assets/arrow-down.svg'}
            width={64}
            height={64}
            alt="Seta pra baixo"
            className="w-auto h-6 md:h-8"
          />
        </Link>
      </div>
    </main>
  )
}
