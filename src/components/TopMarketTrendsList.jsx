import React from 'react'
import MarketTrendsCard from '@/components/MarketTrendsCard'



function TopMarketTrendingList() {
  return (
    <div className='py-4 px-4 bg-neutral-900' >

    <section className=' mx-auto md:w-3/4 ' >
      <h3 className='font-bold text-neutral-50'>Market Trend</h3>
        <div className=" trendingListScrollBar mt-4 flex gap-4 overflow-scroll ">
          <MarketTrendsCard/>
          <MarketTrendsCard/>
          <MarketTrendsCard/>
          <MarketTrendsCard/>
        </div>
    </section>
    </div>
  )
}

export default TopMarketTrendingList