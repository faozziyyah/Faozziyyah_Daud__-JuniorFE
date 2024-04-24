import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const url = 'https://api.spacexdata.com/v3/capsules'

interface Capsule {
  capsule_id: string;
  capsule_serial: string;
  status: string;
  original_launch: string;
  type: string;
  details: string;
}

const Modal: React.FC<{ capsule: Capsule | null, onClose: () => void }> = ({ capsule, onClose }) => {
  if (!capsule) return null;

  return (
    <div className="modal flex flex-col absolute p-4 rounded-xl">
      <div className="modal-content">
        <span className="close cursor-pointer font-bold text-4xl" onClick={onClose}>&times;</span>
        <p className='mt-8'> <b>Serial:</b> {capsule.capsule_serial}</p>
        <p> <b>Status:</b> {capsule.status}</p>
        <p> <b>Original Launch:</b> {capsule.original_launch}</p>
        <p> <b>Type:</b> {capsule.type}</p>
        <p> <b>Details:</b> {capsule.details}</p>
      </div>
    </div>
  );
};

const Rockets = () => {

    const [capsules, setCapsules] = useState<Capsule[]>([]);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCapsule, setSelectedCapsule] = useState<Capsule | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const n = 10
    
    const handlePageChange = (selectedPage: { selected: number }) => {
      setCurrentPage(selectedPage.selected);
    };
  
    useEffect(() => {
      
      const fetchCapsules = async () => {

        try {
          
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data: Capsule[] = await response.json();
            setCapsules(data);
            setIsLoading(false);

        } catch (error) {
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
            setIsLoading(false);
        }
    };
  
      fetchCapsules()
    }, [ currentPage ])

    if (error) {
      return <div>Error: {error}</div>;
    } 

    const handleCapsuleClick = (capsule: Capsule) => {
      setSelectedCapsule(capsule);
    };
  
    const handleCloseModal = () => {
      setSelectedCapsule(null);
    };

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    };

    const filteredCapsules = searchQuery ? capsules.filter(capsule =>
      capsule.capsule_serial.toLowerCase().includes(searchQuery.toLowerCase()) ||
      capsule.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      capsule.type.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : capsules;

    const offset = currentPage * n;
    const paginatedData = filteredCapsules.slice(offset, offset + n);

  return (

    <div className='flex flex-col justify-center items-center'>
      
        <input type="text" value={searchQuery} onChange={handleSearchInputChange}
          placeholder="Search capsules by serial, status, or type..."
          className="flex-1 justify-center self-center mt-16 rounded-md border-0 outline-none bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600"
        />

        <h1 className='text-center mt-8 font-bold text-3xl'>List of Capsules</h1>

        {isLoading ? (
            <h1 className="loading">Loading...</h1>
        ) : (
          <section className="capsules-container flex flex-wrap justify-between items-center">

            {paginatedData.map((capsule) => (

              <div key={capsule.capsule_serial} 
                className="capsule-container mt-4 py-4 flex flex-col justify-center items-center rounded-2xl hover:border-2"
                onClick={() => handleCapsuleClick(capsule)}
              >
                <p className='font-bold text-xl'>{capsule.capsule_serial}</p>
                <p>{capsule.status}</p>
                <p>{capsule.original_launch}</p>
                <p>{capsule.type}</p>
                
              </div>

            ))}

          </section>
        )} 

        <ReactPaginate
          pageCount={Math.ceil(filteredCapsules.length / n)}
          onPageChange={handlePageChange}
          containerClassName="pagination"
          activeClassName="active"
        />

        <Modal capsule={selectedCapsule} onClose={handleCloseModal} />
        
          {/*<section className="capsules-container flex flex-wrap justify-between items-center">

                {capsules.map((capsule) => (

                      <div key={capsule.capsule_serial} className='capsule-container mt-4 py-4 flex flex-col justify-center items-center'>
                        <p>{capsule.capsule_serial}</p>
                        <p>{capsule.status}</p>
                        <p>{capsule.original_launch}</p>
                        <p>{capsule.type}</p>
                      </div>
                ) )}
            </section>*/}
    </div>
  )
}

export {Rockets}