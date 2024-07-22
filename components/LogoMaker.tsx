import React, { ReactNode } from 'react';

interface LogoMakerProps {
  children: ReactNode;
}

const LogoMaker: React.FC<LogoMakerProps> = ({ children }) => {
  return (
    <div className=' w-[3vw] h-[6vh] text-yellow-400 border flex justify-center items-center rounded-full shadow-md'>
      {children}
    </div>
  );
}

export default LogoMaker;