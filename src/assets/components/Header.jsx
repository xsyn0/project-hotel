import './Header.css'
import  Logo  from './../images/Logo.png'
import { CgProfile } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  return (
    <>
        <div className="flex min-w-350px items-center justify-between mt-1 font-semibold font-montserrat lg:flex-row">
            <div className='ml-76 flex-shrink-0'>
                <a href="#"><img src={Logo} href="#"></img></a>
            </div>
            <div className="flex items-center space-x-6 mr-2 text-slate-900">
                <a href="#">Find a Property</a>
                <a href="#">Share Stories</a>
                <a href="#">Rental Guides</a>
                <button className='rounded-3xl bg-color1 py-2 px-3 text-color2'>
                    <a href="#">Become a Host</a>
                </button>
                <button className='text-4xl text-center flex space-x-4 text-slate-600'>
                    <HiMenu />
                    <CgProfile></CgProfile>
                </button>
                <a href='#'>Hello</a>
            </div>
        </div>
    </>
  )
}

export default Header