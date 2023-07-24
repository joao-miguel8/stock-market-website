import { useState } from "react"


const FeaturesSection = () => {

const [toggleIndex, setToggleIndex] = useState(null)


 const benefitsData =[
  {
    title: "Explore the market",
    benefit: "Easily delve into various stocks, industries, and sectors. Whether you're a seasoned investor or a newcomer, our market exploration tools provide insights and data to make informed decisions.",
  },
  {
    title: "Live Stock Prices",
    benefit: "Stay up to date with real-time, live stock prices. Our feature section offers up-to-the-minute updates, ensuring that you have access to the most accurate and current stock prices. This real-time data empowers you to make swift decisions and seize opportunities as they arise in the fast-paced world of stock trading.",
  },
  {
    title: "Make a personal watch-list",
    benefit: "Create and manage a personalized watch-list of stocks that interest you. By curating a watch-list of your preferred stocks, you can easily monitor their performance, track price movements, and assess potential investments. ",
  },
  {
    title: "Stay up to date with recent stock news",
    benefit: "Stay informed and up to date with the latest stock news. We provide recent news articles of company updates, market trends, and expert analysis to keep you in the loop, staying informed allows you to make strategic decisions and adapt to market changes effectively",
  }
 ]

  return (
<section className="px-4 py-20  bg-neutral-900  " >
    <div className=" md:mx-auto md:w-3/4 " >
      <h3 className=" mb-4 font-bold text-neutral-50" >Benefits</h3>
    {benefitsData.map((card, index) => {
      return (
        <div className=" p-2 border-y border-neutral-700 hover:bg-neutral-800" >
          <div >
            <button onClick={() => setToggleIndex(toggleIndex === index ? null : index )}  className=" relative z-10 flex justify-between items-center py-2 w-full text-lime-300" >
        <h2 className="text-xs md:text-lg text-left font-bold ">{card.title}</h2>
        <svg className={` w-6   ${toggleIndex === index && "rotate-90 transition ease-in"  }`}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

            </button>
          </div>
      { toggleIndex === index ? <p className="text-lg spacing-4 text-neutral-50">{card.benefit}</p> : null}
        </div>
        )
      })}
  </div>
</section>
  
  )
}


export default FeaturesSection
