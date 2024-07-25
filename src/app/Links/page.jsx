"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaYoutube, FaTwitter, FaArrowRight } from 'react-icons/fa';

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: ''
  });

  const [links, setLinks] = useState([]);

  useEffect(() => {
    // Retrieve profile data from local storage
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }

    // Retrieve links from local storage
    const storedLinks = localStorage.getItem('links');
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  const platformIcons = {
    github: <FaGithub className="w-6 h-6 text-gray-800" />, // Dark Gray for GitHub
    youtube: <FaYoutube className="w-6 h-6 text-red-600" />, // YouTube Red
    twitter: <FaTwitter className="w-6 h-6 text-blue-500" />, // Twitter Blue
    // Add more platforms and their icons here
  };

  const platformColors = {
    github: 'bg-gray-800',
    youtube: 'bg-red-600',
    twitter: 'bg-blue-500',
    // Add more platforms and their colors here
  };

  return (
    <div>
      <div className='h-[357px] bg-purple rounded-plan'>
        <div className='p-[24px] bg-purple h-[126px] z-10 gap-2'>
          <div className='bg-white rounded-customs flex justify-between items-center p-pad-plan'>
            <button className='flex flex-col items-start gap-2 p-[11px_27px] border border-purple rounded-custom text-purple font-instrument text-lg font-semibold leading-6'>
              Back to Editor
            </button>
            <button className='text-white text-heading-s font-heading-s font-instrument-sans bg-[#633CFF] rounded-custom flex px-6 py-2.5 flex-col items-start gap-2'>
              Share Link
            </button>
          </div>
        </div>
      </div>

      <div className='w-[349px] h-[569px] p-main-pad gap-3 absolute top-[208px] left-[546px] rounded-custom-big bg-white shadow-pad-shade'>
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
                className={`flex items-center w-[237px] h-[44px] rounded-custom py-[11px] px-[16px] ${link.platform ? platformColors[link.platform] : 'bg-black'} gap-2`}
              >
                {/* Display the platform icon */}
                {link.platform && platformIcons[link.platform.toLowerCase()]}
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
