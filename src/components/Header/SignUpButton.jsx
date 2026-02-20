import React from 'react';
import { UserCircle } from 'lucide-react';

const SignUpButton = () => {
  return (
    <button className='h-11 px-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 flex items-center gap-3 transition active:scale-95'>
      <UserCircle size={24} />
      <span className="text-sm hidden md:block">Kirish</span>
    </button>
  );
};

export default SignUpButton;