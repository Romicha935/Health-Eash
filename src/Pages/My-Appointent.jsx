import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

const MyAppointments = () => {
  const { appointments, setAppointments } = useContext(AppContext);

  const handleCancel = (index) => {
    setAppointments(prev => prev.filter((_, i) => i !== index));
  };

  const handlePayOnline = (appointment) => {
    alert(`PayPal payment for ${appointment.doctor.name} - ${appointment.slot.time}`);
    // এখানে তুমি PayPal integration করতে পারবে
  };

  return (
    <div className="max-w-7xl mx-auto mt-10 p-4 sm:p-6">
      <h1 className="text-3xl font-bold mb-6 text-center sm:text-left">My Appointments</h1>

      {appointments.length === 0 ? (
        <p className="text-gray-500 text-center">No appointments yet.</p>
      ) : (
        <div className="grid gap-6">
          {appointments.map((a, idx) => (
            <div
              key={idx}
              className="border p-4 rounded shadow flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-start"
            >
              {/* Doctor Image */}
              <img
                src={a.doctor.image}
                alt={a.doctor.name}
                className="w-36 h-36 md:w-44 md:h-48 object-contain bg-green-100 rounded"
              />

              {/* Doctor Info */}
              <div className="flex-1 text-center md:text-left">
                <p className="font-medium text-2xl">{a.doctor.name}</p>
                <p className="text-gray-500">{a.doctor.speciality}</p>
                <p className="text-gray-500">Address: {a.doctor.address}</p>
                <p className="text-gray-500">
                  Date & Time: {new Date(a.slot.datetime).toLocaleDateString()} {a.slot.time}
                </p>
              </div>

              {/* Right Side Buttons */}
              <div className="flex flex-col items-center  gap-2 md:gap-4 mt-20 md:mt-0">
                <button
                  onClick={() => handlePayOnline(a)}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Pay Online
                </button>
                <button
                  onClick={() => handleCancel(idx)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
