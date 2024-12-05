import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
  return (
    <div>
        <div className="flex rounded-3xl bg-white py-2 px-2  items-center justify-between  font-montserrat lg:flex-row ">
            <div className="flex items-center justify-between space-x-40 text-slate-500 ml-10 align-top grid-">
                <button>
                <p className="text-left">Location</p>
                <p className="text-xs text-slate-400">Which city do you prefer?</p>
                </button>
                 <button>
                <p className="text-left">Check-In</p>
                <p className="text-xs text-slate-400">Add dates</p>
                </button>
                 <button>
                <p className="text-left">Check-Out</p>
                <p className="text-xs text-slate-400">Add dates </p>
                </button>
                 <button>
                <p className="text-left">Location</p>
                <p className="text-xs text-slate-400">Add Guests</p>
                </button>
                <button className="text-2xl text-slate-50 py-1 px-1 rounded-full bg-color1">
                <CiSearch />
                </button>

                
            </div>

        </div>
    </div> 
  )
}

export default HeroSection