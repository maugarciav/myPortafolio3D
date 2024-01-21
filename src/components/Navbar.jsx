import  {useState} from 'react'
import {Link} from 'react-router-dom'
import {styles} from '../styles'
import { navLinks } from '../constants'
import {logo, menu, close} from '../assets'


const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToogle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center mx-auto'>
        <Link 
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="Logo" className='w-10 h-10 object-contain' />
          <p className='text-white text-[18px] font-bold cursos-pointer'>Mauricio Garcia</p>
        </Link>
        <ul className='list-non hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => {
            return (
              <li key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary" 
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          })}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end time-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28] object-contain cursor-pointer hover:scale-110' onClick={() => setToogle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-tertiary opacity-95 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-md`}>
          <ul className='list-non flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => {
            return (
              <li key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary" 
                }font-poppins font-medium cursor-pointer text-[16px] hover:text-secondary hover:scale-110`}
                onClick={() => {
                  setToogle(!toggle)
                  setActive(link.title)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            )
          })}
        </ul>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar