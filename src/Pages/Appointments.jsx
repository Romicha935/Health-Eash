import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { MdVerified } from 'react-icons/md';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import RelatedDoctors from '../Components/RelatedDoctors';

const Appointments = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, setAppointments } = useContext(AppContext);
  const navigate = useNavigate();

  const daysOfWeek = ["SUN", "MON", "TUE","WED","THU","FRI","SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSolts, setDocSolts] = useState([]);
  const [selectedDayIndex, setSelectedDayIndex] = useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchDocInfo = () => {
    const doc = doctors.find(d => d.id === Number(docId));
    setDocInfo(doc);
    setLoading(false);
  };

  const getAvailableSolts = () => {
    if (!docInfo) return;
    let today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10, 0, 0, 0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({ datetime: new Date(currentDate), time: formattedTime });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSolts(allSlots);
  };

  useEffect(() => { if (doctors.length && docId) fetchDocInfo(); }, [doctors, docId]);
  useEffect(() => { getAvailableSolts(); }, [docInfo]);

  const handleConfirm = () => {
    if (selectedDayIndex === null || selectedTimeIndex === null) {
      setError("Please select date and time before booking!");
      return;
    }
    setError('');
    const selectedSlot = docSolts[selectedDayIndex][selectedTimeIndex];
     setAppointments(prev => [...prev, { doctor: docInfo, slot: selectedSlot }]); // add appointment

    // Navigate to My Appointment page and pass selected appointment data
    navigate("/my-appointments", { state: { doctor: docInfo, appointment: selectedSlot } });
  };

  if (loading) return <div>Loading...</div>;
  if (!docInfo) return <div>No Doctor Found</div>;

  return (
    <div className="p-4">
      {/* Doctor Info */}
      <div className="flex flex-col sm:flex-row gap-6">
        <div className="w-full sm:w-1/3">
          <img className="bg-primary w-full sm:max-w-72 rounded-lg shadow" src={docInfo.image} alt="" />
        </div>

        <div className="flex w-full sm:w-2/3 flex-col border border-gray-300 rounded-lg p-6 bg-white gap-3">
          <p className="flex items-center gap-2 text-2xl font-medium">{docInfo.name} <MdVerified className="text-blue-500" /></p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <span className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</span>
          </div>

          <div>
            <p className="flex items-center gap-1 text-sm font-semibold text-gray-900 mt-3">About <IoMdInformationCircleOutline /></p>
            <p className="text-gray-500 mt-1">{docInfo.about}</p>
          </div>

          <p className="text-gray-500 font-medium mt-3">
            Appointment fee: <span className="text-gray-700 font-bold">{currencySymbol}{docInfo.appointmentFee}</span>
          </p>
        </div>
      </div>

      {/* Booking Days */}
      <div className='ml-80 mt-10'>
        <h2 className='font-bold text-xl pl-14'>Appointment Booking</h2>
        <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
          {docSolts.slice(0,7).map((daySlots,index)=>{
            const dateObj = daySlots[0].datetime;
            const dayName = daysOfWeek[dateObj.getDay()];
            const date = dateObj.getDate();
            return (
              <div 
                key={index} 
                onClick={() => { setSelectedDayIndex(index); setSelectedTimeIndex(null); }}
                className={`flex flex-col items-center justify-center min-w-[60px] h-20 border rounded-xl shadow-md cursor-pointer transition-all
                  ${selectedDayIndex===index ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-500 hover:text-white`}
              >
                <span className="text-xs font-semibold">{dayName}</span>
                <span className="text-lg font-bold">{date}</span>
              </div>
            )
          })}
        </div>

        {/* Time Slots Horizontal Scroll */}
        {selectedDayIndex !== null && (
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {docSolts[selectedDayIndex]?.map((slot,i) => (
              <div 
                key={i} 
                onClick={() => setSelectedTimeIndex(i)}
                className={`flex-shrink-0 px-4 py-2 border rounded-lg shadow cursor-pointer transition
                  ${selectedTimeIndex===i ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'} hover:bg-blue-500 hover:text-white`}
              >
                {slot.time}
              </div>
            ))}
          </div>
        )}

        {/* Error Message */}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Confirm Appointment Button */}
        <button 
          onClick={handleConfirm}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
        >
          Book Appointment
        </button>
      </div>
      <RelatedDoctors/>
    </div>
  );
};

export default Appointments;
