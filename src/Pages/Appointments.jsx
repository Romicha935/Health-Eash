import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

const Appointments = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)
  const [docInfo, setDocInfo] = useState(null) // Correct typo serDocInfo -> setDocInfo
  const [loading, setLoading] = useState(true) // Loading state added

  const fetchDocInfo = () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)
    setLoading(false) // After data is fetched, set loading to false
  }

  useEffect(() => {
    if (doctors && doctors.length > 0 && docId) {
      fetchDocInfo()
    }
  }, [doctors, docId])

  if (loading) {
    return <div>Loading...</div>
  }

  if (!docInfo) {
    return <div>No Doctor Found</div>
  }

  return (
    <div>
      <h1>{docInfo.name}</h1>
      <p>{docInfo.speciality}</p>
      {/* Add more doctor details here */}
    </div>
  )
}

export default Appointments
