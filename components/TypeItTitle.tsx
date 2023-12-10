'use client'

import TypeIt from 'typeit-react'

export default function TypeItTitle() {
  return (
    <h1
      className="font-title text-brand-yellow text-3xl bg-brand-darkGray w-fit px-4 py-2 bg-opacity-50 backdrop-blur-md rounded-md text-center 
    md:text-5xl 3xl:text-7xl"
    >
      <TypeIt
        options={{
          speed: 150,
          waitUntilVisible: true,
        }}
        getBeforeInit={(instance) => {
          instance
            .type('Mais que RH.')
            .pause(600)
            .delete(12)
            .type('Somos<br />Gestão Humana.')

          return instance
        }}
      />
    </h1>
  )
}
