'use client'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PcModel } from '@/Components/PcModel'
import { OrbitControls } from '@react-three/drei'

const AboutModel = () => {
    return (
        <div className="md:col-span-5 col-span-12 row-span-5">
            <div className='transparent hover:cursor-grab w-full h-full'>
                <div className="w-full h-full">

                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <PcModel scale={5} position={[0, -2, -2]} rotation={[0, -2, 0]} />
                    </Canvas>
                </div>
            </div>
        </div>
    )
}

export default AboutModel