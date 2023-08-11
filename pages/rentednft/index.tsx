import React from 'react'
import MarketplaceCard from '../../src/components/MarketplaceCard'

const index = () => {
  return (
    <div className='text-white'>
        <div className='flex gap-[16px] m-20'>   
         <MarketplaceCard />
         <MarketplaceCard />
         <MarketplaceCard />
         <MarketplaceCard />
        </div>
    </div>
  )
}

export default index

