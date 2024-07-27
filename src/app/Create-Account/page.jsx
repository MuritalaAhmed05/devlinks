"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Log from "../Login/solar_link-circle-bold.svg";
import Lock from "../Login/Vector (1).svg";
import Email from "../Login/Vector.svg";
import Devlink from "../Login/devlinks.svg";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/app/firebase/config';

export default function CreateAccount() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const[burEmail, setBurEmail] = useState(false);
  const[burPassword, setBurPassword] = useState(false);
  const[hover, setHover] = useState(false);
  const[red, setRed] = useState(false);
  const[burConfirmPassword, setBurConfirmPassword] = useState(false);
  const [createUserWithEmailAndPassword, ] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter(); 

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(''); 
      

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (res) {
        console.log('Response:', res);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        router.push("/Login"); 
      }else{
        setError('Failed to create account');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError(error.message); 
    }
  };

  return (
    <main className="flex flex-col min-h-[100vh] justify-center items-center">
      <div className="flex flex-col ">
      <div className="flex justify-start sm:justify-center items-center sm:items-center mb-[51px]">
  <Image src={Log} alt="logo" className="mr-[10px]" />
  <Image src={Devlink} alt="devLink" />
</div>


        <div className="bg-[#fff] p-[40px]">
          <h1 className="text-left text-dark-grey font-instrument text-heading-m font-bold leading-heading-m">
            Create account
          </h1>
          <p className="text-grey font-instrument text-body-m font-normal leading-body-m mb-[40px]">
            Let’s get you started sharing your links!
          </p>
          <form onSubmit={handleSignUp}>
            <label htmlFor="email">
              <span className="text-body-s font-normal leading-body-s text-dark-grey">
                Email address
              </span>
              <div className={`relative flex items-center h-[48px] mb-[24px] rounded-custom bg-white border border-borders ${red ? 'border border-red' :'border border-borders'} ${burEmail ? 'border border-purple shadow-input-focus' :' border border-borders' }`}>
                <Image src={Email} alt="email" className="mr-[16px] ml-[12px]" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-[78%] h-[46px] py-[12px] outline-none border-none "
                  value={email}
                  onChange={(e) => setEmail(e.target.value) }
                  onFocus= {(e) => setBurEmail(true)}
                  onBlur = {(e) => setBurEmail(false)}
                />
              </div>
            </label>
            <label htmlFor="password">
              <span className="text-body-s font-normal leading-body-s text-dark-grey">
                Password
              </span>
              <div className={`relative flex items-center h-[48px] mb-[24px] rounded-[8px] bg-white border border-borders ${burPassword ? 'border border-purple shadow-input-focus' :' border border-borders' }`}>
                <Image src={Lock} alt="lock" className="mr-[16px] ml-[12px]" />
                <input
                  id="password"
                  type="password"
                  placeholder="At least 8 characters"
                  className="w-[78%] h-[46px] py-[12px] outline-none border-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus= {(e) => setBurPassword(true)}
                  onBlur = {(e) => setBurPassword(false)}
                />
              </div>
            </label>
            <label htmlFor="confirm-password">
              <span className="text-body-s font-normal leading-body-s text-dark-grey">
                Confirm password
              </span>
              <div className={`relative flex items-center h-[48px] mb-[24px] rounded-[8px] bg-white border border-borders ${burConfirmPassword ? 'border border-purple shadow-input-focus' :' border border-borders' }`}>
                <Image src={Lock} alt="lock" className="mr-[16px] ml-[12px]" />
                <input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-[78%] h-[46px] py-[12px] outline-none border-none"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onFocus= {(e) => setBurConfirmPassword(true)}
                  onBlur = {(e) => setBurConfirmPassword(false)}
                />
              </div>
            </label>
            {error && <p className="text-red-500">{error}</p>}
            <p className="text-gray-600 font-instrument-sans text-xs font-normal leading-[18px] mb-[24px]">
              Password must contain at least 8 characters
            </p>
            <button
              type="submit"
              className={`w-[100%] h-[46px] py-[11px] px-[27px] gap-[8px] mb-[24px] rounded-[8px] bg-[#633CFF] text-[#fff] ${hover ? 'bg-purple-hover' :' bg-purple' } `}
              onMouseEnter= {(e) => setHover(true)}
              onMouseLeave = {(e) => setHover(false)}
             
            >
              Create new account
            </button>
            <div className="flex flex-col items-center sm:flex-row">
              <span className="text-grey text-center self-center font-instrument text-body-m font-normal leading-body-m">
                Already have an account?{" "}
              </span>{" "}
              <Link href="/Login" className="text-purple font-instrument-sans text-body-m font-normal leading-body-m">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
