import React from "react"
import temporaryLogoImg from '../assets/img/CBC.svg'

function MarketTrendsCard() {

return (
  <div className="p-4 max-w-lg w-64 rounded-lg border border-lime-700 bg-neutral-50" >
        <div className="flex items-center justify-center gap-3 rounded-lg" >
          <div className=" w-8 h-8 flex items-center text-neutral-900 " ><img src=
          {temporaryLogoImg} alt="" /></div>
          <h4 className="text-neutral-900" >BTC</h4>
          <h5 className="p-1 text-xs uppercase font-medium bg-neutral-400 rounded-sm ">bitcoin</h5>
        </div>
      <div className=" my-4 border-t border-neutral-700"></div>
        <div className="mt-3" >
            <p className="text-xl text-neutral-900 ">15,000,000</p>
            <span className="mt-2  text-md inline-block text-neutral-900 " >1.45%</span>
        </div>
  </div>
  )
}

export default MarketTrendsCard