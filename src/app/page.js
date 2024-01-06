import {
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";

import { MdLockOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-200">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              {" "}
              <span className="text-teal-500">Compagny</span>Logo
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-teal-500 mb-2">
                Sign in to account
              </h2>
              <div className="border-2 w-10 border-teal-500 inline-block mb-2"></div>
              {/* social login section */}
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-300 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-300 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-300 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-500" my-3>
                Or use your email account
              </p>

              {/* form section */}
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 mr-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none text-sm flex-1"
                  />
                </div>
              </div>

              <div className="flex w-64 mb-5 justify-between">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember Me
                </label>
                <a href="#" className="text-xs">
                  Forgot Password?
                </a>
              </div>

              <a
                href="#"
                className="border-2 border-teal-500 text-teal-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-teal-500 hover:text-white"
              >
                Sign In
              </a>
            </div>
          </div>
          {/**sign in section */}

          <div className="w-2/5 bg-teal-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-teal-500"
            >
              Sign Up
            </a>
          </div>
          {/** sign up section */}
        </div>
      </main>
    </div>
  );
}
