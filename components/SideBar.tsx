import React from 'react';

const SideBar: React.FC = () => {
  return (
    <div className="hidden md:block">
      <div className="w-80 h-screen flex overflow-hidden relative items-start flex-shrink-0 border-transparent">
        <div className="w-full h-full  p-8" style={{backgroundColor:"white"}}>
          <h2 className="text-2xl font-medium mb-8">Followers</h2>
      
          <div className="flex items-center mb-8">
            <img
              alt="Ellipse1121"
              src="https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg? 
                     auto=compress&cs=tinysrgb&w=600"
              className="w-20 h-20 rounded-full mr-4 items-center justify-items-center	"
            />
            <div>
              <h3 className="text-lg font-bold mb-1">Awonke Mnotoza</h3>
              <p className="text-gray-600">Full-time Student</p>
            </div>
          </div>

          <div className="flex mb-8">
            <div className="flex-1 mr-4">
              <p className="text-xl font-bold mb-1">12</p>
              <p className="text-gray-600">Posts</p>
            </div>
            <div className="flex-1">
              <p className="text-xl font-bold mb-1">23</p>
              <p className="text-gray-600">Followers</p>
            </div>
          </div>
          <button
            className="w-full text-center py-3    focus:outline-none my-1 text-white
              " style={{backgroundColor:"#C7C7C7",borderRadius: '10px'}}
          > See Account   </button>
          <div className="mt-6">
            <div className="flex items-center">
              <img
                alt="Ellipse2149"
                src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-bold mb-1">Mihle MAKAPELA</p>
                <p className="text-gray-600">view account</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex items-center">
              <img
                alt="Ellipse2154"
                src="https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg?          auto=compress&cs=tinysrgb&w=600"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-bold mb-1">Mora Katywa</p>
                <p className="text-gray-600">view account</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SideBar;
