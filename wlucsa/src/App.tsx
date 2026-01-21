import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { locations } from './locations'; 

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
const DefaultIcon = L.icon({ 
  iconUrl: markerIcon, 
  shadowUrl: markerShadow, 
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

  return (
    <div className="min-h-screen w-screen flex flex-col bg-[linear-gradient(45deg,#60918E_0%,#95A3AD_100%)] p-2 md:p-10">
      
     <div className='flex flex-col items-center mb-4'>
      <img src="/wlucsa logo.svg" alt="WLU CSA Logo" className="self-center pb-5" />
     <h2 className="!text-white">WILFRID LAURIER UNIVERSITY CHINESE STUDENT ASSOCIATION</h2>
     <h1  className="!text-white">MEMBERSHIP CARD</h1>
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
  <h1 className="text-xl font-black tracking-widest text-[#60918E] uppercase break-words overflow-hidden">
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

        <div className="mt-8 pt-4 border-t border-gray-200 flex justify-between items-center opacity-40 grayscale">
          <span className="text-xs font-bold tracking-widest">WLU CSA</span>
          <div className="w-8 h-8 border border-black rounded-full flex items-center justify-center">🐉</div>
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
    </div>
  );
};

export default App;