import { useState } from "react"

const Header = () => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)

function handleToggleMobileMenu() {
  setIsMenuToggled((prevState => !prevState))
}


 const updateMobileMenuIcon = isMenuToggled ? <svg className="w-10" xmlns="http://www.w3.org/2000/svg"     fill="none" viewBox="0 0 24 24" stroke-width="1.5"      stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg> : <svg className="w-10"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /> </svg>


  return (
    <>
    <header className=" fixed top-0 w-full bg-neutral-50 shadow-md ">
          <div className=" relative flex z-50  bg-neutral-50 justify-between items-center p-3 w-full ">
              <div>
                <img src="#" alt="" />
                <h4 className="text-lg font-bold text-lime-600 ">Bloko.io</h4>
              </div>
                  <button onClick={handleToggleMobileMenu}
                  className="text-neutral-900" >
                    {updateMobileMenuIcon}
                  </button>
              </div> 
           <div className={` absolute z-0  w-full bg-neutral-900  p text-neutral-50 ${isMenuToggled ? 'mobile-menu-hidden': 'mobile-menu-visible'  } `} >
                    <nav>
                      <ul className=" nav-hover-item flex flex-col text-center text-lg ">
                          <li className=" p-3 " ><a href="#">Explore</a></li>
                          <li className="p-3 border-y-2 border-zinc-700" ><a href="#">News</a></li>
                          <li className="p-3" ><a href="#">Learn more</a></li>
                      </ul>
                    </nav>
                </div> 
    </header>
    </>
  )
}


export default Header