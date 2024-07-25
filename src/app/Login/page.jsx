"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Log from "./solar_link-circle-bold.svg";
import Lock from "./Vector (1).svg";
import Email from "./Vector.svg";
import Devlink from "./devlinks.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      
      router.push("/GetStarted");
    }
  }, [user, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Error signing in:", error.message);
    }
  };

  return (
    <main className="flex flex-col min-h-[100vh] justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-between items-center mb-[51px]">
          <Image src={Log} alt="logo" className="mr-[10px]" />
          <Image src={Devlink} alt="devLink" />
        </div>
        <div className="bg-[#fff] p-[40px] rounded-custom">
          <h1 className="text-left text-dark-grey font-instrument text-heading-m font-bold leading-heading-m">
            Login
          </h1>
          <p className="text-grey font-instrument text-body-m font-normal leading-body-m mb-[40px]">
            Add your details below to get back into the app
          </p>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">
              <span className="text-body-s font-normal leading-body-s text-dark-grey">Email address</span>
              <div className="relative flex items-center h-[48px] mb-[24px] rounded-custom bg-white border border-borders">
                <Image src={Email} alt="email" className="mr-[16px] ml-[12px]" />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-[78%] h-[46px] py-[12px] outline-none border-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
            <label htmlFor="password">
              <span className="text-body-s font-normal leading-body-s text-dark-grey">Password</span>
              <div className="relative flex items-center h-[48px] mb-[24px] rounded-[8px] bg-white border border-borders">
                <Image src={Lock} alt="lock" className="mr-[16px] ml-[12px]" />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-[78%] h-[46px] py-[12px] outline-none border-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </label>
            {error && <p className="text-red-500 text-xs">{error.message}</p>}
            <button
              type="submit"
              className="w-[100%] h-[46px] py-[11px] px-[27px] gap-[8px] mb-[24px] rounded-[8px] bg-[#633CFF] text-[#fff]"
            >
              Login
            </button>
            <div className="flex items-center justify-center flex-col sm:flex-row">
              <span className="text-grey text-center self-center font-instrument text-body-m font-normal leading-body-m">
                Dont have an account?{" "}
              </span>
              <Link href="/Create-Account" className="text-purple font-instrument-sans text-body-m font-normal leading-body-m">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
