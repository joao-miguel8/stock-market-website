import heroImg from '@/assets/img/hero-img.png'


function HeroSection() {

  return (
    <>
<section className=" max-w-lg  mt-28 mx-auto flex flex-col items-center text-center" >
  <h1 className="max-w-xs text-3xl font-medium  ">Bitcoin & Altcoins Portfolio app</h1>
      <div className="flex mt-5 ">
        <input className="p-1 border border-r-0 border-gray-300 rounded-l-sm" type="text" />
        <button className="p-2 text-xs font-medium  rounded-l-sm rounded-r-sm  bg-lime-400">Search</button>
      </div>
  <p className=" mt-3 text-xs text-gray-400 ">👌 search here for a detailed search overview</p>
    <div className='mt-2 ' >
      <img  src={heroImg} alt="image of iphone displaying stock market" />
    </div>
</section>
    <div className='w-full h-10 bg-lime-400 ' ></div>
    </>
  )
}

export default HeroSection