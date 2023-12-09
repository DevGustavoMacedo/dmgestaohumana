'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const path = usePathname()

  return (
    <>
      { path !== '/' && (
        <header className="flex items-center justify-between text-brand-yellow py-2 px-4 text-xl bg-brand-darkGray md:text-2xl lg:text-3xl">
          <Link href="/" className="z-40">
            <Image
              src="/logo.svg"
              alt="DM Gestão Humana"
              width={400}
              height={245}
              className="w-auto h-8"
            />
          </Link>
        </header>
      )}
    </>
  )
}
