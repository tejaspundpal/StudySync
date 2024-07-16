import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/StudySync.png'
import { NavLink, BrowserRouter } from "react-router-dom";
import landingImg from '../assets/images/landingImg.png';

const navigation = [
  // { name: 'About', to: '/about' },
  // { name: 'Team', to: '/team' },
]


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="bg-white min-h-screen">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-4 lg:px-8 bg-white shadow-md fixed z-10 w-full" aria-label="Global">
            <div className="flex lg:flex-1">
              <NavLink to="/" className="-m-1.5">
                {/* <span className="sr-only">DigiHealthlocker</span> */}
                <img
                  className="h-12 w-auto"
                  src={logo}
                  alt="logo"
                />
              </NavLink>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <NavLink key={item.name} to={item.to} className="text-sm font-semibold leading-6 text-gray-800 hover:font-bold hover:text-purple-700">
                  {item.name}
                </NavLink>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6">
              <NavLink
                to="/student-login"
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Student
              </NavLink>
              <NavLink
                to='/teacher-login'
                className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Teacher
              </NavLink>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <NavLink to="/" className="-m-1.5">
                  {/* <span className="sr-only">DigiHealthlocker</span> */}
                  <img
                    className="h-10 w-auto"
                    src={logo}
                    alt=""
                  />
                </NavLink>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                  <div className="py-6">
                    <NavLink
                      to="/student-login"
                      className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                    >
                      Student
                    </NavLink>
                    <NavLink
                      to="/teacher-login"
                      className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 ml-5"
                    >
                      Teacher
                    </NavLink>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div className="mx-auto flex mt-24 max-w-7xl px-4 lg:px-8">
            <div className="text-center lg:text-left lg:pr-12 flex-1 mt-3">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                <span className='text-purple-700'>StudySync</span> - Gateway to Academic Success
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Your ultimate academic companion, providing seamless access to study materials, personalized learning paths, and collaborative tools. Empowering you to achieve academic excellence, effortlessly.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
                <NavLink
                  to="/student-login"
                  className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Student
                </NavLink>
                <NavLink
                  to="/teacher-login"
                  className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Teacher
                </NavLink>
              </div>
            </div>
            <div className="flex-1 mt-10 lg:mt-0 lg:flex lg:justify-center lg:items-center">
              <img className='w-full h-auto max-w-md lg:max-w-lg object-cover' alt='landing-page-img' src={landingImg} />
            </div>
          </div>

          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f96fa9] to-[#857df4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </>

  )
}

// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header