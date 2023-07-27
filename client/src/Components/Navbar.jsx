import React from 'react'
import night2 from '../night2.png'
import NightWalker1 from '../NightWalker1.png'
const Navbar = () => {
    return (

        <nav class="gradient dark:gradient">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/home" class="flex items-center">
                    <img src={night2} class="h-11 mr-3 bg-gray border-purple" alt="Night Out Logo" />
                    {/* <span class="self-center text-2xl font-semibold whitespace-nowrap sm-hidden text-blue ">Night Out</span> */}
                </a>
                <div class="flex items-center md:order-2">
                    <button type="button" class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-purple" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <img class="w-8 h-8 rounded-full" src={NightWalker1} alt="user photo"></img>
                    </button>
                    {/* <!-- Dropdown menu --> */}
                    <div class="z-50 hidden my-4 text-base list-none reverse-gradient divide-y divide-indigo rounded-lg shadow" id="user-dropdown">
                        <div class="px-4 py-3">
                            <span class="block font-medium text-indigo">Brittany Dame</span>
                            <span class="block text-blue truncate">Bubbles</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-blue hover:bg-indigo">What's Poppin!</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-blue hover:bg-indigo">Friends?</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-blue hover:bg-indigo">Pull Rank</a>
                            </li>
                            <li>
                                <a href="#" class="block px-4 py-2 text-sm text-blue hover:bg-indigo">Sign out</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple" aria-controls="navbar-user" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 " id="navbar-user">
                    <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                        <li>
                            <a href="/home" class="hover:bg-indigo block py-2 pl-3 pr-4 text-blue bg-indigo-600 rounded" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/userform" class="hover:bg-indigo block py-2 pl-3 pr-4 text-blue bg-indigo-600 rounded" aria-current="page">userform</a>
                        </li>
                        <li>
                            <a href="/companyform" class="hover:bg-indigo block py-2 pl-3 pr-4 text-blue bg-indigo-600 rounded" aria-current="page">companyForm</a>
                        </li>
                        <li>
                            <a href="/intro" class="hover:bg-indigo block py-2 pl-3 pr-4 text-blue bg-indigo-600 rounded" aria-current="page">info</a>
                        </li>
                        <li>
                            <a href="/" class="hover:bg-indigo block py-2 pl-3 pr-4 text-blue bg-indigo-600 rounded" aria-current="page">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;