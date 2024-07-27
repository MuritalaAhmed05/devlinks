"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaYoutube, FaTwitter, FaLinkedin, FaFacebook, FaArrowRight } from 'react-icons/fa';

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: ''
  });

  const [links, setLinks] = useState([]);

  useEffect(() => {
    
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }

    
    const storedLinks = localStorage.getItem('links');
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  
  const platformIcons = {
    GitHub: <FaGithub className="text-white" />,
    Twitter: <FaTwitter className="text-white" />,
    LinkedIn: <FaLinkedin className="text-white" />,
    Facebook: <FaFacebook className="text-white" />,
    YouTube: <FaYoutube className="text-white" />,
  };

  
  const platformColors = {
    GitHub: 'bg-gray-800',
    Twitter: 'bg-blue-500',
    LinkedIn: 'bg-blue-700',
    Facebook: 'bg-blue-600',
    YouTube: 'bg-red-600',
  };

  return (
    <div>
      <div className='h-[357px] bg-white sm:bg-purple rounded-plan'>
        <div className='p-[24px] bg-white sm:bg-purple h-[126px] z-10 gap-2'>
          <div className='bg-white rounded-customs flex justify-between items-center p-auto sm:p-pad-plan'>
            <Link href="./Addlink" className='flex flex-col items-center gap-2 p-[11px_27px] border border-purple rounded-custom h-[46px] sm:h-auto text-purple font-instrument text-body-m font-semibold leading-6'>
              Back to Editor
            </Link>
            <button className='text-white text-heading-s font-heading-s font-instrument-sans bg-[#633CFF] rounded-custom h-[46px] sm:h-auto flex p-[11px_27px] text-body-m flex-col items-start gap-2 leading-6'>
              Share Link
            </button>
          </div>
        </div>
      </div>

      <div className='w-[349px] h-[569px] p-main-pad gap-3 fixed inset-0 m-auto mt-[220px] rounded-custom-big bg-white shadow-pad-shade flex justify-center items-center'>

        <div className="relative flex flex-col items-center gap-6 z-10">
          <div className="relative w-[96px] h-[96px] bg-light z-100 rounded-full">
            {profile.profilePicture ? (
              <Image
                src={profile.profilePicture}
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <div className="flex items-center justify-center h-full w-full bg-gray-300 rounded-full">
                <span className="text-gray-500">No Image</span>
              </div>
            )}
          </div>
          <div className={`w-[160px] h-[16px] rounded-[104px] ${profile.firstName || profile.lastName ? 'bg-white' : 'bg-light'} flex items-center justify-center`}>
            {profile.firstName} <span style={{ marginLeft: '10px' }}>{profile.lastName}</span>
          </div>
          <div className={`w-[72px] h-[8px] text-center rounded-[104px] ${profile.email ? 'bg-white' : 'bg-light'} mb-[30px]`}>
            {profile.email}
          </div>

          <div className="flex flex-col gap-5 overflow-y-auto h-[300px]">
            {links.map((link, index) => (
              <div
                key={index}
                className={`flex items-center w-[237px] h-[44px] rounded-custom py-[11px] px-[16px] ${link.platform ? platformColors[link.platform] : 'bg-light'} gap-2`}
              >
                {link.platform && platformIcons[link.platform]}
                <span className="flex-1 text-white text-center">{link.platform}</span>
                <FaArrowRight className="text-white" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
