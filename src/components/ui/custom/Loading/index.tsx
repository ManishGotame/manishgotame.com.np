'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

interface LoadingProps {
  text?: string
}

const loadingTexts = [
  // Coding/Programming
  'Hunting down that elusive semicolon...',
  'Convincing the compiler to cooperate...',
  'Untangling spaghetti code...',
  'Debugging in production (wish me luck)...',

  // Bugs
  'Squashing bugs one by one...',
  'Following the trail of undefined...',
  'Catching exceptions before they catch us...',

  // Cycling
  'Spinning up those pedals...',
  'Conquering the uphill segments...',
  'Checking the chain tension...',

  // Motorcycling
  'Warming up the engines...',
  'Leaning into the digital curves...',
  'Kick-starting the servers...',

  // Trekking/Mountains
  'Climbing up Mount Database...',
  'Almost at the base camp...',
  'Planning the summit route...',

  // Network
  'Waiting for packets to arrive...',
  'Negotiating with the DNS...',
  'Battling the 404 wilderness...',

  // Loadshedding
  'Surviving another power cut...',
  'Racing against the backup battery...',
  'Keeping the servers cool in the dark...'
]

const Loading = ({
  text = loadingTexts[Math.floor(Math.random() * loadingTexts.length)]
}: LoadingProps) => {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='relative flex flex-col gap-2 items-center'>
      <div className='z-[1] absolute animate-ping'>
        <div className='w-8 h-8 bg-primary/50 rounded-full' />
      </div>
      <div className='z-[2]'>
        <Image src='/logo.png' alt='logo' width={32} height={32} />
      </div>
      {showText ? (
        <div className='mt-4 text-md text-gray-700 dark:text-gray-400'>
          {text}
        </div>
      ) : (
        <div className='mt-10' />
      )}
    </div>
  )
}

export default Loading
