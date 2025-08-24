import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';

const RelatedDoctors = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const [doctor, setDoctor] = useState(null);
  const [relatedDoctors, setRelatedDoctors] = useState([]);

  useEffect(() => {
    if (doctors && docId) {
      // docId string → number
      const selectedDoctor = doctors.find(d => d.id === Number(docId));
      setDoctor(selectedDoctor);

      if (selectedDoctor) {
        setRelatedDoctors(
          doctors.filter(
            d => d.speciality === selectedDoctor.speciality && d.id !== Number(docId)
          )
        );
      }
    }
  }, [doctors, docId]);

  if (!doctor) return <div className="text-center text-red-500 mt-10">Doctor Not Found</div>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
   

      {/* Related Doctors */}
     
      <div className="mt-12">
        <h2 className="text-2xl text-center font-semibold text-gray-800">Related Doctors</h2>
        <p className="text-gray-500 text-center mb-4">Browse all doctors with same speciality.</p>

        {relatedDoctors.length > 0 ? (
          <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedDoctors.map(d => (
              <div onClick={()=>navigate(`/appointment/${d.id}`)} key={d.id} className="border  rounded-xl overflow-hidden  hover:shadow-lg transition-all duration-300">
                <img src={d.image} alt={d.name} className="w-full bg-green-50 h-52 object-contain" />
                <div className="p-4">
                  <p className="text-gray-800 font-medium">{d.name}</p>
                  <p className="text-gray-500 text-sm">{d.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No related doctors found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedDoctors;
