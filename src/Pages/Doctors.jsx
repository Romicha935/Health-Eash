import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { useEffect } from 'react'

const Doctors = () => {
  //const {specility } = useParams()
  const { specility } = useParams();
console.log("Specility:", specility);

  const [filterDoc,setFilterDoc] = useState([])
  const navigate = useNavigate()
  const  {doctors} = useContext(AppContext)
 
  
  console.log(doctors)
  console.log(specility)


  // useEffect(()=> {
  //   applyFilter()
  // },[doctors,specility])

  useEffect(() => {
    const applyFilter = () => {
      if (specility) {
        setFilterDoc(doctors.filter(doc => doc.speciality === specility))
      } else {
        setFilterDoc(doctors)
      }
    }
  
    
    
    if (doctors) {  // doctors ডেটা অ্যাভেলেবল কিনা চেক করা হচ্ছে
      applyFilter()
    }
  }, [doctors, specility])


  return (
    <div>
     <p className='text-gray-600 '>Browse through the doctors specialist</p>
       <div className=' flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          
          <p onClick={()=> specility === 'General Physician' ? navigate('/doctors') : navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specility === "General Physician" ?  "bg-green-00 text-black" :"" }`}>General Physician</p>
          <p onClick={()=> specility === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specility === "Gynecologist" ?  "bg-green-100 text-black" :"" }`}>Gynecologist</p>
          <p onClick={()=> specility === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specility === "Dermatologist" ?  "bg-green-100 text-black" :"" }`}>Dermatologist</p>
          <p onClick={()=> specility === 'Padiatricians' ? navigate('/doctors') :navigate('/doctors/Padiatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specility === "Padiatricians" ?  "bg-green-100 text-black" :"" }`}>Padiatricians</p>
          <p onClick={()=> specility === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specility === "Neurologist" ?  "bg-green-100 text-black" :"" }`}>Neurologist</p>
          <p onClick={()=> specility === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${specility === "Gastroenterologist" ?  "bg-green-100 text-black" :"" }`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
        {filterDoc.map((item,idx)=> (
        <div onClick={() => { console.log("Navigating to:", item._id); navigate(`/appointment/${item._id}`); }}
 className='border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all duration-500 ' key={idx}>
            <img className='w-full h-52 object-contain bg-green-50 ' src={item.image} alt="" />
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                </div>
                <p className='text-gray-900 font-medium text-lg'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
        </div>
      ))}
        </div>
       </div>
      
    </div>
  )
}

export default Doctors