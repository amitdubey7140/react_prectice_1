import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useTheme } from '../../contexts'

export default function Header() {
    const {darkMode,modeChange} = useTheme()
    
  return (
    <header>
        <nav className='flex justify-between items-center px-5 py-5 shadow-xl'>
            <h1 className='text-2xl font-semibold text-gray-800 dark:text-gray-200'>MY TODO</h1>
            <button className='text-gray-800 dark:text-gray-200' onClick={modeChange}>{darkMode?<FontAwesomeIcon icon={faSun} />:<FontAwesomeIcon icon={faMoon} />}</button>
        </nav>
    </header>
  )
}

