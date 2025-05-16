import React from 'react'
import Threads from './Threads'

const TitleHeader = ({
    title, text, number
}) => {
  return (
    <div className='flex justify-between items-center'>
        <div className='md:px-5'>
            <h1 className='gradient-title font-semibold md:text-6xl text-4xl uppercase'>{title}</h1>
            <p className='md:text-3xl md:mt-5'>{text}</p>
        </div>
        <div className='md:flex hidden items-center justify-center'>
            
            <div className='w-full h-full relative' >
                <Threads
                    amplitude={1}
                    distance={0}
                    enableMouseInteraction={true}
                />
            <p className='gradient-title text-6xl absolute top-0 right-10'>{number}</p>
            </div>
        </div>
    </div>
  )
}

export default TitleHeader