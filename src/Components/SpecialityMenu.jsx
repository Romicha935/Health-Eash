import React from 'react'
import { Link } from 'react-router-dom'


const specialityData = [
    {
        speacility: 'General physicians',
        image: "https://i.ibb.co.com/B2r4H89/speciality1.jpg"
    },
    {
        speacility: ' Gynecologist',
        image: "https://i.ibb.co.com/F4WZcsY/speciality2.png"
    },
    {
        speacility: 'Dermatologist',
        image: "https://i.ibb.co.com/kQWpxKH/speciality3.png"
    },
    {
        speacility: 'Pediatricians',
        image: 'https://i.ibb.co.com/t4HGLNd/speciality4.png'
    },
    {
        speacility: 'Neurologist',
        image: 'https://i.ibb.co.com/vsPQP95/speciality5.jpg'
    },
    {
        speacility: 'Gastroenterologist ',
        image: 'https://i.ibb.co.com/y6YjYfh/speciality6.png'
    }
]
const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='specility'>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll' >
            {specialityData.map((data,idx)=> (
                <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[10px] transition-all duration-500' key={idx} to={`/doctors/${data.speacility}`}>
                 <img className='w-16 h-16 rounded-full sm:w-24 mb-2' src={data.image} alt="" />
                 <p>{data.speacility}</p>
                </Link>
            ))}
        </div>

    </div>
  )
}

export default SpecialityMenu