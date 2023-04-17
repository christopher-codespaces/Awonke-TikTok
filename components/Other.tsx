import React from 'react';

const Other: React.FC = () => {
  return (
    <div className="hidden md:block" style={{ position: "fixed", right: 0 }}>
      <div className="w-80 h-screen flex overflow-hidden relative items-start flex-shrink-0 border-transparent">
        <div className="w-full h-full  p-8" style={{ backgroundColor: "red" }}>
          <h2 className="text-2xl font-medium mb-8">Other Accounts</h2>
              
        </div>
      </div>
    </div>
  );
};

export default Other;
