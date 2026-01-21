import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { locations } from './locations'; 
import SavingsCalculator from './Calculator';
import markerIcon from './assets/pin.svg';
const DefaultIcon = L.icon({ 
  iconUrl: markerIcon, 
  iconSize: [25, 41], 
  iconAnchor: [12, 41] 
});
L.Marker.prototype.options.icon = DefaultIcon;

const App: React.FC = () => {
  const [selected, setSelected] = useState(locations[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = locations.filter(loc =>
    loc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

    const eventImages = [
    '/events/1.jpg',
    '/events/2.jpg',
    '/events/3.jpg',
    '/events/4.jpg',
    '/events/5.jpg',
    '/events/6.jpg',
  ];

  
  return (

    <>
    <div className="min-h-screen w-screen flex flex-col bg-[linear-gradient(45deg,#60918E_0%,#95A3AD_100%)] px-2 md:p-10">
<div className='pt-7 md:pt-10 flex flex-col items-center text-center mb-4 px-4'>
  <img 
    src="/wlucsa logo.svg" 
    alt="WLU CSA Logo" 
    className="w-20 md:w-32 pb-5" 
  />
  
  <h2 className="!text-white text-xs md:text-lg tracking-wide">
    WILFRID LAURIER UNIVERSITY CHINESE STUDENT ASSOCIATION
  </h2>
  
  <h1 className="!text-white text-2xl md:text-4xl font-bold">
    MEMBERSHIP CARD
  </h1>
</div>

<div className='flex flex-col md:flex-row'>
     
      <div className="w-full md:w-2/3 h-[40vh] md:h-[80vh] rounded-t-xl md:rounded-l-xl md:rounded-tr-none overflow-hidden shadow-2xl border-b-4 md:border-b-0 md:border-r-4 border-[#60918E]/30 relative">
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-[1000] w-11/12 md:w-3/4">
          <input
            type="text"
            placeholder="Search locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg shadow-lg border-2 border-[#60918E]/30 focus:border-[#60918E] focus:outline-none bg-white/95 backdrop-blur-sm"
          />
        </div>
        <MapContainer center={[43.473, -80.535]} zoom={15} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://carto.com/attributions">CartoDB</a>'
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          />
          {filteredLocations.map((loc) => (
            <Marker 
              key={loc.id} 
              position={loc.coordinates}
              eventHandlers={{ click: () => setSelected(loc) }}
            >
              <Popup className="custom-popup">
                <div className="text-center p-1">
                  {loc.logo && <img src={loc.logo} alt="logo" className="w-12 h-12 mx-auto mb-2 rounded-full border border-gray-200" />}
                  <h3 className="font-bold text-[#60918E] uppercase leading-tight">{loc.title}</h3>
                  <p className="text-[10px] text-gray-500 mt-1">{loc.address}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* 2. SIDE VIEW */}
      <div className="w-full md:w-1/3 h-auto md:h-[80vh] bg-white/95 backdrop-blur-md p-6 rounded-b-xl md:rounded-r-xl md:rounded-bl-none shadow-2xl flex flex-col justify-between border-r-8 border-b-8 border-[#E9C46A]/40 overflow-y-auto">
        
        <div className="space-y-6">
<div className="border-4 border-[#60918E] p-3 text-center flex items-center justify-center min-h-[80px]">
  <h1 className="text-base md:text-xl font-black tracking-widest text-[#60918E] uppercase break-words overflow-hidden">
    {selected.title}
  </h1>
</div>


          <div className="space-y-4 text-sm text-[#60918E]">
            <div className="flex justify-between items-start border-b border-[#60918E]/20 pb-2">
              <span className="font-bold uppercase opacity-60 w-24 text-[10px]">Discount:</span>
              <div className="text-right flex-1">
                <span className="font-black text-xl leading-none block">{selected.discount}</span>
                <p className="text-[10px] italic opacity-70 mt-1">{selected.discountNote}</p>
              </div>
            </div>

            <div className="flex justify-between items-start border-b border-[#60918E]/20 pb-2">
              <span className="font-bold uppercase opacity-60 w-24 text-[10px]">Location:</span>
              <span className="font-medium text-right flex-1">{selected.address}</span>
            </div>

            <div className="flex flex-col border-b border-[#60918E]/20 pb-2">
              <span className="font-bold uppercase opacity-60 mb-1 text-[10px]">About:</span>
              <p className="italic leading-relaxed text-[#557a78]">{selected.about}</p>
            </div>

            <div className="flex justify-between items-center pt-2">
              <span className="font-bold uppercase opacity-60 text-[10px]">CSA's Rec:</span>
              <span className="font-black border-b-2 border-[#E9C46A]">{selected.csaRec}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center ">
          <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selected.title + ' ' + selected.address)}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="px-4 py-2 !bg-[#61918e] text-white text-xs font-bold rounded-lg hover:bg-[#4a736f] transition-colors shadow-md flex items-center gap-2"
        >
    <span className='!text-white'>Open in Maps</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  </a>
          </div>
      </div>
      </div>

      {/* LOCATIONS TABLE */}
      <div className="w-full mt-6 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border-4 border-[#60918E]/30">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#60918E] text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider">Title</th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider">Address</th>
                <th className="px-4 py-3 text-left text-sm font-bold uppercase tracking-wider">Discount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {locations.map((loc, index) => (
                <tr 
                  key={loc.id} 
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-[#60918E]/10 cursor-pointer transition-colors`}
                  onClick={() => setSelected(loc)}
                >
                  <td className="px-4 py-3 text-sm font-semibold text-[#60918E]">{loc.title}</td>
                  <td className="px-4 py-3 text-sm text-gray-700">{loc.address}</td>
                  <td className="px-4 py-3 text-sm font-bold text-[#E9C46A]">{loc.discount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

       
      

    </div>


    <div className="mt-10 relative bg-[#61918e] p-8 md:p-16 min-h-[250px] flex flex-col md:flex-row items-center overflow-hidden md:overflow-visible border-4 border-[#ccdbdb]/60 rounded-xl ">
  
  <div className='flex flex-col z-20 md:w-3/5 lg:w-1/2'>
    <h2 className="font-medium !text-white uppercase tracking-wide text-sm">
      Save and Support Local! Membership Card Costs:
    </h2>
    <h1 className="text-4xl md:text-6xl font-black !text-white my-2">
      $10 
    </h1>
    <p className="!text-white mb-4 text-sm md:text-base leading-relaxed">
      Prepare for the school year with the WLUCSA Membership Card! Enjoy exclusive discounts at local Waterloo businesses and save while supporting the community.
    </p>
    <p className="!text-white text-xs md:text-sm opacity-90 italic">
      Purchase during WLUCSA events or boothing. <br/><b>2025-26 cards valid only from September 2025 to April 2026.</b>
    </p>

  {/* Email Button */}
  <a 
    href="mailto:csa.laurier@gmail.com"
    className=" w-full md:w-[60%] mt-3 flex items-center gap-2 px-6 py-3 bg-white text-[#60918E] font-bold rounded-lg hover:bg-[#f8f9fa] transition-colors shadow-lg"
  >
    <i className="fas !text-[#60918E]  fa-envelope text-xl"></i>
    <span className='!text-[#60918E] '>Want to partner with us?</span>
  </a>
  </div>

  {/* 2. Cards Container: Responsive positioning */}
  <div className="
    relative mt-12 mb-8 
    md:absolute md:mt-0 md:mb-0 md:-top-16 md:-right-4 lg:right-10 
    flex shrink-0
  ">
    {/* Back Card */}
    <img 
      src="/oldmembershipBack.svg"
      alt="Membership Card Back" 
      className="w-32 md:w-48 lg:w-64 object-contain transition-transform hover:scale-105 duration-300
                 rotate-[15deg] translate-x-12 translate-y-4"
      style={{ filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))' }}
    />
    
    {/* Front Card */}
    <img 
      src="/oldmembershipFront.svg"
      alt="Membership Card Front" 
      className="w-32 md:w-48 lg:w-64 object-contain transition-transform hover:scale-105 duration-300
                 -rotate-[10deg] z-10"
      style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))' }}
    />
  </div>
</div>

<SavingsCalculator/>
      {/* MORE THAN JUST A CLUB SECTION */}
      <div className="w-full mt-6 bg-white/95 backdrop-blur-md border-4 border-[#ccdbdb]/60 rounded-xl  shadow-2xl overflow-hidden border-4 border-[#60918E]/30">
        {/* Header Image */}
        <div className="w-full h-80 md:h-120 overflow-hidden">
          <img 
            src="/events/header.jpg" 
            alt="CSA Events" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#60918E] text-center mb-6">
            More than just a club
          </h1>
          
          <p className="text-center text-gray-700 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            The WLU Chinese Student Association is a vibrant community that brings students together through cultural celebrations and social events. From our popular Night Market showcasing authentic Asian cuisine to cozy Matcha Nights, we create memorable experiences that celebrate Chinese culture and foster lasting friendships.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            
 

  {/* Instagram Button */}
  <a 
    href="https://instagram.com/wlucsa" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-[#60918E] text-white font-bold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
  >
    <i className="fab !text-white fa-instagram text-xl"></i>
    <span className='!text-white '>Instagram</span>
  </a>

  {/* Email Button */}
  <a 
    href="mailto:csa.laurier@gmail.com"
    className="flex items-center gap-2 px-6 py-3 bg-[#60918E] text-white font-bold rounded-lg hover:bg-[#4a736f] transition-colors shadow-lg"
  >
    <i className="fas !text-white  fa-envelope text-xl"></i>
    <span className='!text-white '>Email</span>
  </a>
</div>

          {/* Event Images Gallery */}
          <div className="flex flex-wrap gap-4 justify-center">
            {eventImages.map((img, index) => (
              <div 
                key={index} 
                className="w-64 h-64 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={img} 
                  alt={`CSA Event ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  
    </div>
    
    {/* Removal of this footer with credit violates terms of use */}
        <footer id="developer-credit" className="w-full bg-[#212121] py-8">
  <div className="max-w-7xl mx-auto px-4 flex justify-center items-center">
    <p className="text-gray-400 text-sm">
      Website developed by  <span className="!text-white font-bold"> <a href="https://twotoque.com" target="_blank" rel="noopener noreferrer" className='!text-white'>Derek Song</a></span>
    </p>
  </div>
</footer>
</>
  );
};

export default App;