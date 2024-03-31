import { printFooter } from './src/components/Footer/Footer'
import { printHeader } from './src/components/Header/Header'
import { printMain } from './src/components/Main/Main'
import { loadProfileFromLocalStorage } from './src/components/Profile/Profile'

import './style.css'


printHeader()
printMain()
printFooter()
loadProfileFromLocalStorage()


    



console.log('main')