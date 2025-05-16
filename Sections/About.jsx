import React from 'react'
import GradientSphere from '@/Components/GradientSphere'
import TitleHeader from '@/Components/TitleHeader'
import StarBorder from '@/Components/StarBorder'
import { AboutQuotes, bentoSocialLinks } from '@/constants/index'
import { ArrowUpRight } from 'lucide-react'
import AboutModel from './AboutModel'
import Image from 'next/image'

const About = () => {
    return (
        <section id="about" className='flex-center relative px-5 md:px-2'>

            <GradientSphere sphere1Glass="about-gradient-sphere about-sphere-1" sphere2Glass="about-gradient-sphere about-sphere-2" />
            <div className='container w-full h-full md:my-40 my-20 relative z-10'>
                <TitleHeader title="About me" text="Curious Developer, Lifelong Learner" number="01" />

                <div className='md:mt-20 mt-10'>
                    <div className='grid grid-cols-12 md:grid-rows-12 gap-5'>
                        <div className='md:col-span-7 col-span-12 row-span-5'>
                            <StarBorder
                                as="div"
                                className="w-full h-full"
                                color="white"
                                speed="5s"
                            >
                                <div className='flex items-center gap-4'>
                                    <Image src="/images/profile.jpg" alt="profile" width={400} height={400} className='md:w-24 w-16 flower rounded-full' />

                                    <h1 className='text-blue-50 md:text-5xl text-3xl uppercase'>Vaisakh P V</h1>
                                </div>
                                <div className='mt-5'>
                                    <p className='md:text-2xl mt-2 text-justify'>An India-based Full Stack Developer passionate about creating innovative web solutions. My technical toolkit includes Django, React, Next.js, Python, PostgreSQL, coupled with expertise in database design and cloud deployment on AWS. I thrive on tackling diverse projects and am a firm believer in constant learning and growth in the tech landscape.</p>
                                </div>
                            </StarBorder>
                        </div>

                        {/* Room mode */}
                        <AboutModel />

                        {/* Card1 */}
                        <div className="md:col-span-6 col-span-12 row-span-3">
                            <StarBorder
                                as="div"
                                className="w-full h-full"
                                color="white"
                                speed="5s"
                            >
                                <div className='flex flex-col justify-center items-center gap-4 h-full'>
                                    <h1 className='gradient-title md:text-3xl text-2xl font-medium'>Front End Developer</h1>
                                    <p className='md:text-2xl max-w-96'>Cleanly Designed, Conversion-focused, and build for easy updates</p>
                                </div>
                            </StarBorder>
                        </div>

                        <div className="md:col-span-6 col-span-12 row-span-3">
                            <StarBorder
                                as="div"
                                className="w-full h-full"
                                color="white"
                                speed="5s"
                            >
                                <div className='flex flex-col justify-center items-center gap-4 h-full'>
                                    <h1 className='gradient-title md:text-3xl text-2xl font-medium'>Back End Developer</h1>
                                    <p className='md:text-2xl max-w-96'>Cleanly Designed, Conversion-focused, and build for easy updates</p>
                                </div>
                            </StarBorder>
                        </div>

                        {/* Card3 */}
                        <div className="md:col-span-4 col-span-12 row-span-4">
                            <StarBorder
                                as="div"
                                className="w-full h-full"
                                color="white"
                                speed="5s"
                            >
                                <div className="flex flex-col justify-center items-center gap-4 h-full">
                                    {
                                        AboutQuotes.map((text, index) => (
                                            <h1 className='gradient-title md:text-5xl text-3xl font-bold' key={index}>{text}</h1>
                                        ))
                                    }
                                </div>
                            </StarBorder>
                        </div>

                        {/* social links */}
                        {bentoSocialLinks.map((item, index) => (
                            <div key={index} className='md:col-span-4 col-span-12 row-span-2'>
                                <StarBorder
                                    as="div"
                                    className='w-full h-full'
                                    color='white'
                                    speed="3s"
                                >
                                    <div className='flex justify-between items-center h-full group cursor-pointer'>
                                        <div className='flex items-center justify-center md:gap-5'>
                                            <Image src={item.icon} width={300} height={300} alt='icon' className='w-8 h-8' />
                                            <h1 className='gradient-title md:text-3xl text-xl md:m-0 font-medium ms-5'>{item.name}</h1>
                                        </div>
                                        <div className='lg:block hidden'>
                                            <ArrowUpRight />
                                        </div>
                                    </div>
                                </StarBorder>
                            </div>
                        ))}


                    </div>





                </div>

            </div>

        </section>
    )
}

export default About