"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Log from "../Login/solar_link-circle-bold.svg";
import Devlink from "../Login/devlinks.svg";
import linkIcon from "./Vector (5).svg";
import User from "../GetStarted/ph_user-circle-bold.svg";
import Case from "../GetStarted/Rectangle 15.svg";
import Inner from "../GetStarted/Subtract.svg";
import ImageAdder from "../UpdateProfile/ph_image.svg";
import WhiteImageAdder from "./Vector (3).svg"
import { FaArrowRight } from 'react-icons/fa'; 
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaYoutube } from 'react-icons/fa'; 

export default function UpdateProfile() {
  const [purple, setPurple] = useState(false);
  const [preview, setPreview] = useState(false);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: ''
  });
  const [links, setLinks] = useState([]);

  const [profileDisplay, setProfileDisplay] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

   useEffect(() => {
    
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      const parsedProfile = JSON.parse(storedProfile);
      setProfile(parsedProfile);
      setProfileDisplay({
        firstName: parsedProfile.firstName,
        lastName: parsedProfile.lastName,
        email: parsedProfile.email
      });
    }

    
    const storedLinks = localStorage.getItem('links');
    if (storedLinks) {
      setLinks(JSON.parse(storedLinks));
    }
  }, []);

  const handleSave = () => {
    
    localStorage.setItem('profile', JSON.stringify(profile));
  
    
    setProfileDisplay({
      firstName: profile.firstName,
      lastName: profile.lastName,
      email: profile.email
    });
  
    
    setProfile(prevProfile => ({
      ...prevProfile,
      firstName: '',
      lastName:'',
      email: ''
    }));
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        
        setProfile(prevProfile => ({
          ...prevProfile,
          profilePicture: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  

  const platformColors = {
    GitHub: 'bg-black',
    Twitter: 'bg-blue-500',
    LinkedIn: 'bg-blue-700',
    Facebook: 'bg-blue-600',
    YouTube: 'bg-red-600', 
    
  };

  const platformIcons = {
    GitHub: <FaGithub className="text-white" />,
    Twitter: <FaTwitter className="text-white" />,
    LinkedIn: <FaLinkedin className="text-white" />,
    Facebook: <FaFacebook className="text-white" />,
    YouTube: <FaYoutube className="text-white" />,
  };

  return (
    <main className="p-[24px] bg-light-grey">
      <div className="flex items-start justify-between p-[24px] self-stretch bg-white mb-[51px]">
        <div className="flex justify-between items-center">
          <Image src={Log} alt="logo" className="mr-[10px]" />
          <Image src={Devlink} alt="devLink" />
        </div>

        <Link href="/Addlink" 
         className={`flex  ${purple ? 'text-purple' : 'text-grey'}`}
         onMouseEnter={() => setPurple(true)}
         onMouseLeave={() => setPurple(false)}
        >
          <div className="flex items-center gap-2 p-[11px_27px] rounded-custom"
          >
            <Image src={linkIcon} alt="link" />
            <span className="text-grey font-instrument text-lg font-semibold leading-6">
              Links
            </span>
          </div>

          <div
            className="flex items-center gap-2 p-2 rounded-lg bg-light-purple"
            onMouseEnter={() => setPurple(true)}
            onMouseLeave={() => setPurple(false)}
          >
            <Image
              src={User}
              alt="profile"
              style={{
                filter: 'brightness(0) saturate(100%) invert(30%) sepia(50%) saturate(6000%) hue-rotate(240deg) brightness(90%) contrast(100%)'
              }}
            />
            <span className="text-purple font-instrument text-lg font-semibold leading-6">
              Profile Details
            </span>
          </div>
        </Link>

        <Link href="./Previewprofile"
          className={`flex flex-col items-start gap-2 p-[11px_27px] border border-purple rounded-custom text-purple font-instrument text-lg font-semibold leading-6 ${
            preview ? 'bg-light-purple' : 'bg-white'
          }`}
          onMouseEnter={() => setPreview(true)}
          onMouseLeave={() => setPreview(false)}
          onClick={() => {
            setPreview(true);
            handleSave();
          }}
        >
          Preview
        </Link>
      </div>

      <div className="flex gap-6">
        <div className="relative flex items-center justify-center gap-2 p-6 bg-white rounded-customs w-[560px]">
          <Image src={Case} alt="case" />
          <Image src={Inner} alt="inner" className="absolute" />
          <div className="absolute flex-col items-center gap-6 z-10 flex">
            <div className="w-[96px] h-[96px] bg-light z-100 rounded-full">
            {profile.profilePicture && (
  <Image
    src={profile.profilePicture}
    alt="profile picture"
    className="w-full h-full object-cover rounded-full"
    width={96}
    height={96}
  />
)}

            </div>
            <div className={`w-[160px] h-[16px] rounded-[104px] ${profileDisplay.firstName || profileDisplay.lastName ? 'bg-white' : 'bg-light'} flex items-center justify-center`}>
  {profileDisplay.firstName} <span style={{ marginLeft: '10px' }}>{profileDisplay.lastName}</span>
</div>
<div className={`w-[72px] h-[8px] text-center rounded-[104px] ${profileDisplay.email ? 'bg-white' : 'bg-light'} mb-[30px]`}>
  {profileDisplay.email}
</div>


            <div className="flex flex-col gap-5 overflow-y-auto scrollbar-hidden h-[300px] w-[237px]">
              {links.map((link, index) => (
                <div
                  key={index}
                  className={`flex items-center p-[10px] rounded-custom mb-2 ${platformColors[link.platform]} text-white relative`}
                >
                  {platformIcons[link.platform] && (
                    <div className="mr-2">{platformIcons[link.platform]}</div>
                  )}
                  <a
                    href={link.url}
                    className="text-white hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                  <span className="text-white ml-2">{link.platform}</span>
                  <FaArrowRight className="text-white absolute right-4" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col p-[40px] bg-white rounded-custom-t">
            <h1 className="text-heading-m font-heading-m text-dark-grey font-instrument-sans font-bold">
              Profile Details
            </h1>
            <p className="text-body-m font-body-m text-grey font-instrument-sans mb-[40px]">
              Add your details to create a personal touch to your profile.
            </p>

            <div className="flex items-center p-[20px] gap-[12px] mb-[20px] bg-light-grey justify-around rounded-custom">
              <div>
                <p className="text-grey font-normal text-body-m">Profile picture</p>
              </div>

              <div className="flex justify-start items-center">
      <div 
        className={`h-[193px] w-[193px] rounded-customs bg-light-purple flex-col flex items-center justify-center mr-[15px] cursor-pointer relative`}
        onClick={() => document.getElementById('fileInput').click()}
        style={{
          backgroundImage: `url(${profile.profilePicture})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          className="absolute inset-0 h-[2px] opacity-0 cursor-pointer"
        />
        {!profile.profilePicture && (
          <>
            <Image
              src={ImageAdder}
              alt="imageadder"
              className="z-10"
               
            />
            <span className="font-instrument font-heading-s text-purple text-body-m  ">
              + Upload Image
            </span>
          </>
        )}
        {profile.profilePicture && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <Image
              src={WhiteImageAdder}
              alt="imageadder"
              className="z-10"
               
            />
            <span className="font-instrument font-heading-s text-white text-body-m  ">
              Change Image
            </span>
          </div>
        )}
      </div>
      <div>
        <p className="font-instrument font-normal text-xs text-grey">
          Image must be below 1024x1024px.<br /> Use PNG or JPG format.
        </p>
      </div>
    </div>

            </div>

            <div className="flex flex-col p-[20px] gap-[12px] mb-[20px] bg-light-grey rounded-custom">
              <div className="flex items-center justify-between">
                <label htmlFor="firstName" className="text-grey font-normal font-instrument text-body-m">
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="eg. John"
                  value={profile.firstName}
                  onChange={handleInputChange}
                  className="h-[48px] w-[432px] rounded-custom py-[12px] px-[16px] gap-3 border outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="lastName" className="text-grey font-normal font-instrument text-body-m">
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="eg. Appleseed"
                  value={profile.lastName}
                  onChange={handleInputChange}
                  className="h-[48px] w-[432px] rounded-custom py-[12px] px-[16px] gap-3 border outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="text-grey font-normal font-instrument text-body-m">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="eg. johnappleseed@gmail.com"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="h-[48px] w-[432px] rounded-custom py-[12px] px-[16px] gap-3 border outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleSave}
                className="flex items-center p-[10px_30px] rounded-custom bg-purple text-white font-instrument text-body-m font-semibold"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
