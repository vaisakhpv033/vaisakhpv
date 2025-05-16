import React from 'react'
import TitleHeader from '@/Components/TitleHeader';
import { Timeline } from '@/Components/TimeLine';
const data = [
  {
    title: "Brototype",
    subtitle: "Mar 2024 | Present",
    content: (
      <div>
        <div className='flex flex-col justify-center gap-2 mb-8'>
          <h1 className="gradient-title text-xl md:text-3xl font-semibold">
            Full Stack Development with Django and React
          </h1>
          <p className='text-lg md:text-2xl font-semibold'>Apprenticeship</p>
        </div>
        <ul className='list-disc pl-5 flex flex-col justify-center gap-3 mb-8 px-8'>
          {[
            "Intensive, project-based self-learning program focused on full-stack development with Django for backend and React/Next.js for frontend, guided by weekly evaluations and feedback from industry experts.",
            "Developed major projects including 'Feastrove' (multi-vendor food platform) and 'Skillexa' (e-learning & AI interview platform) from conception to deployment.",
            "Learned and worked with technologies such as HTML, CSS, JavaScript, PostgreSQL, MongoDB, database design, Figma, data structures and algorithms, AWS, React, and Next.js.",
            "Completed numerous small projects to strengthen understanding of full-stack development concepts and best practices.",
            "Gained practical experience in agile development methodologies, version control with Git, and deploying applications to cloud platforms.",
          ].map((items, index) => (
            <li key={index} className='max-w-5xl text-justify text-lg'>{items}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Inmakes",
    subtitle: "Oct 2023 | Feb 2024",
    content: (
      <div>
        <div className='flex flex-col justify-center gap-2 mb-8'>
          <h1 className="gradient-title text-xl md:text-3xl font-semibold">
            Python Full Stack Intern
          </h1>
          <p className='text-lg md:text-2xl font-semibold'>Internship</p>
        </div>
        <ul className='list-disc pl-5 flex flex-col justify-center gap-3 mb-8 px-8'>
          {[
            "Developed and contributed to full-stack web applications, enhancing skills in both front-end and back-end technologies.",
            "Developed proficiency in HTML, CSS, and Bootstrap for responsive UI design.",
            "Gained hands-on experience with Python, Django, and Django REST Framework for building robust back-end systems and RESTful APIs.",
            "Utilized Python libraries (NumPy, Pandas) for data handling tasks.",
            "Developed and deployed projects including a ToDo application (Django) and a school website (Django, hosted on PythonAnywhere).",
            "Worked with MySQL for database management.",
          ].map((items, index) => (
            <li key={index} className='max-w-5xl text-justify text-lg'>{items}</li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Education",
    content: (
      <div>
        <div className='flex flex-col justify-center gap-3 mb-8'>
          <h1 className="gradient-title text-xl md:text-3xl font-semibold">
            Bachelor of Technology in Electrical and Electronics Engineering
          </h1>
          <p className='text-lg md:text-2xl font-semibold px-2 text-amber-50/80'>
            Government Engineering College Idukki
          </p>
          <p className='text-lg md:text-xl font-semibold px-2 text-amber-50/60'>
            Jul 2019 – Jul 2023
          </p>
        </div>
        <ul className='list-disc pl-5 flex flex-col justify-center gap-2 mb-8 px-8'>
          {[
            "Graduated with First Class. Gained a solid foundation in programming languages, problem-solving, and analytical skills.",
          ].map((items, index) => (
            <li key={index} className='max-w-5xl text-justify'>{items}</li>
          ))}
        </ul>
        <div className='flex flex-col justify-center gap-3 mb-8'>
          <h1 className="gradient-title text-xl md:text-3xl font-semibold">
            Higher Secondary Education (Bio-Maths Stream)
          </h1>
          <p className='text-lg md:text-2xl font-semibold px-2 text-amber-50/80'>
            SRKGVMHSS Purnattukara
          </p>
          <p className='text-lg md:text-xl font-semibold px-2 text-amber-50/60'>
            Jun 2017 – Mar 2019
          </p>
        </div>
        <ul className='flex flex-col justify-center gap-2 mb-8 px-8'>
          {[
            "Achieved 90%, developing strong analytical and problem-solving skills through a focus on mathematics.",
          ].map((items, index) => (
            <li key={index} className='max-w-5xl text-justify'>{items}</li>
          ))}
        </ul>
      </div>
    ),
  },
];

const MyTimeLine = () => {
  return (
    <section id="timeline" className='flex-center relative px-5 md:px-2'>

      <div className='container w-full h-full md:my-40 my-20 relative z-10'>
        <TitleHeader title="TimeLine" text="My Journey till now" number="02" />

        <div className=' w-full h-full'>
          <div className=" w-full overflow-clip">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MyTimeLine



