"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Log from "../Login/solar_link-circle-bold.svg";
import Devlink from "../Login/devlinks.svg";
import linkIcon from "../GetStarted/ph_link-bold.svg";
import User from "../GetStarted/ph_user-circle-bold.svg";
import Case from "../GetStarted/Rectangle 15.svg";
import Inner from "../GetStarted/Subtract.svg";
import CustomDropdown from '../Addlink/CustomDropdown'; 
import Equal from "./Frame 248.svg";
import { FaGithub, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';

const platforms = [
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'YouTube', icon: <FaYoutube /> },
  { name: 'Facebook', icon: <FaFacebook /> },
  { name: 'Twitter', icon: <FaTwitter /> },
];

const platformColors = {
  GitHub: 'bg-black',
  YouTube: 'bg-red-600',
  Facebook: 'bg-blue-600',
  Twitter: 'bg-blue-400',
};

export default function Addlink() {
  const [purple, setPurple] = useState(false);
  const [preview, setPreview] = useState(false);
  const [link, setLink] = useState(false);
  const [save, setSave] = useState(false);
  const [currentPromptIndex, setCurrentPromptIndex] = useState(null);
  const [currentPlatform, setCurrentPlatform] = useState('');
  const [currentLink, setCurrentLink] = useState('');


  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    profilePicture: ''
  });
  const handleAddLink = () => {
    setCurrentPromptIndex(1); 
    setCurrentPlatform('');
    setCurrentLink('');
  };

  const handleSaveLink = () => {
    if (currentPlatform && currentLink) {
      const newLink = { platform: currentPlatform, link: currentLink, index: Date.now() };
      const existingLinks = JSON.parse(localStorage.getItem('links')) || [];
      localStorage.setItem('links', JSON.stringify([...existingLinks, newLink]));
      setCurrentPromptIndex(null);
    }
  };

  const handleRemoveLink = (indexToRemove) => {
    const existingLinks = JSON.parse(localStorage.getItem('links')) || [];
    const updatedLinks = existingLinks.filter(link => link.index !== indexToRemove);
    localStorage.setItem('links', JSON.stringify(updatedLinks));
  };

  const handleRemovePrompt = () => {
    setCurrentPromptIndex(null);
  };
  useEffect(() => {
    
    const storedProfile = localStorage.getItem('profile');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    }

    
  }, []);
  return (
    <main className="p-6 bg-light-grey">
      <div className="flex items-start justify-between p-6 bg-white mb-12">
        <div className="flex items-center">
          <Image src={Log} alt="logo" className="mr-[10px]" />
          <Image src={Devlink} alt="devLink" />
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 p-[11px_27px] rounded-custom bg-light-purple">
            <Image src={linkIcon} alt="links" />
            <span className="text-purple font-instrument text-lg font-semibold leading-6">
              Links
            </span>
          </div>
          <Link
            href="/UpdateProfile"
            className={`flex items-center gap-2 p-2 rounded-lg ${purple ? 'text-purple' : 'text-grey'}`}
            onMouseEnter={() => setPurple(true)}
            onMouseLeave={() => setPurple(false)}
          >
            <Image
              src={User}
              alt="profile"
              style={{
                filter: purple
                  ? "brightness(0) saturate(100%) invert(30%) sepia(50%) saturate(6000%) hue-rotate(240deg) brightness(90%) contrast(100%)"
                  : "none"
              }}
            />
            <span className="font-instrument text-lg font-semibold leading-6">
              Profile Details
            </span>
          </Link>
        </div>
        <Link href="/Previewprofile"
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
        <div className="relative flex items-center justify-center gap-2 p-6 bg-white rounded-lg w-[560px]">
          <Image src={Case} alt="case" />
          <Image src={Inner} alt="inner" className="absolute" />
          <div className="absolute flex-col items-center gap-6 z-10 flex">
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

            <div className="flex flex-col gap-5 overflow-y-auto scrollbar-hidden h-[300px] w-[237px]">
              {JSON.parse(localStorage.getItem('links') || '[]').map(({ platform, link, index }) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 p-4 rounded-lg ${platformColors[platform]} text-white`}
                  style={{ position: 'relative' }}
                >
                  <span className="mr-2">
                    {platforms.find(p => p.name === platform)?.icon}
                  </span>
                  <span>{platform}</span>
                 
                  <MdArrowForward className="absolute right-2" width={10} height={10}/>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col p-10 bg-white rounded-t-lg">
            <h1 className="text-heading-m font-heading-m text-dark-grey font-instrument-sans font-bold">
              Customize your links
            </h1>
            <p className="text-body-m font-body-m text-grey font-instrument-sans mb-10">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>

            <button
              className={`flex px-6 py-2.5 items-center justify-center gap-2 border border-purple rounded-lg text-purple font-semibold font-instrument mb-6
              ${link ? 'bg-light-purple' : 'bg-white'}`}
              onMouseEnter={() => setLink(true)}
              onMouseLeave={() => setLink(false)}
              onClick={handleAddLink}
            >
              + Add new link
            </button>

            <div className="flex flex-col items-center gap-3 mb-5 bg-white rounded-lg">
              {currentPromptIndex !== null && (
                <div className="bg-light-grey p-5 w-full gap-3 mt-4 relative rounded-lg">
                  <div className="flex items-center justify-between flex-row-reverse">
                    <button
                      onClick={handleRemovePrompt}
                      className="text-body-m font-normal font-instrument text-grey"
                    >
                      Remove
                    </button>
                    <p className="text-body-m font-semibold font-instrument flex items-center justify-between text-grey mb-2">
                      <span className="mr-2">
                        <Image src={Equal} alt="equal" />
                      </span>
                      <span>   </span> Link #{currentPromptIndex}
                    </p>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-normal font-instrument text-xs text-grey">Platform:</label>
                    <CustomDropdown
                      options={platforms}
                      value={currentPlatform}
                      onChange={setCurrentPlatform}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-normal font-instrument text-xs text-grey">Link:</label>
                    <input
                      type="text"
                      value={currentLink}
                      onChange={(e) => setCurrentLink(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex px-10 py-6 flex-col items-end gap-2 bg-white rounded-b-lg">
            <button
              className={`text-white text-heading-s font-heading-s font-instrument-sans bg-purple rounded-lg flex px-6 py-2.5 ${save ? 'bg-light-purple' : 'bg-purple'}`}
              onMouseEnter={() => setSave(true)}
              onMouseLeave={() => setSave(false)}
              onClick={handleSaveLink}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
