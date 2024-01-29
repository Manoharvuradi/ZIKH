import Link from 'next/link';

const navbar = [
    { 
        name: "Home",
        path: "home", 
        href: "/" 
    },
    {
        name: "Map",
        path: "map",
        href: "/",
    },
    { 
        name: "Browse By State",
        path:"broseByState",
        href: "/browe-by-state"
    },
];

const Navbar = () => {
  return (
    <header>
          <nav className='flex items-center justify-between border-b border-gray-300 h-[80px]'>
            <div className='flex items-center justify-center ml-40'>
              {navbar.map((item)=>{
                return(
                    <Link
                        key={item.path}
                        href={item.href}
                    >
                        <span className='m-6 text-xl'>{item.name}</span>
                    </Link>
                )
              })}
            </div>
            <div className='flex items-center justify-center mr-20'>
                  <Link
                      key={"getAlets"}
                      href={"alerts/new"}
                  >
                    <span className='m-6 text-white bg-red-900 p-2 text-xl rounded-md'>Get Alerts</span>
                  </Link>
                  <Link
                      key={"submitCrimeTip"}
                      href={"/crimetip"}
                  >
                      <span className='m-6 text-xl'>Submit Crime tip</span>
                  </Link>
                  <Link
                      key={"Login"}
                      href={"/login"}
                  >
                      <span className='m-6 text-xl'>Login</span>
                  </Link>
                  {/* <div>
                    Sign Out
                  </div> */}
            </div>
        </nav>
    </header>
  )
}

export default Navbar;