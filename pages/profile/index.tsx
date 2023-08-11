import React from 'react'
import Card from '../../src/components/ProfileCard'
import Link from 'next/link'

const index = () => {
  return (
    <div className='px-20 mx-10'>
      <div className='text-white  my-10'>
        <ul className='flex gap-[24px] text-lg'>
            <li><Link href='/profile/mynftsnfts'>My NFTs</Link></li>
            <li><Link href='/profile/listednfts'>Listed NFTs</Link></li>
        </ul>
      </div>

      <div className='flex gap-[16px]'>
       
        <Card />
        <Card />
        <Card />
        <Card />
      </div> 
    </div>
  )
}

export default index
