import React from 'react'
import cardImg from '../assets/Rectangle 2.png'
import Image from 'next/image'
import Link from 'next/link'
import {FiExternalLink} from 'react-icons/fi'
import { useRouter } from 'next/router'

const Card = () => {

    const router = useRouter();
    const nftCardHandler = () => {
        
    }

  return (
    <div onClick={nftCardHandler} className='p-4 bg-[#785578] rounded-[8px] cursor-pointer shadow-lg'>
      <div >
        <Image className='w-full m-auto bg-[#785578]' src={cardImg} alt='cardImg' />
      </div>
      <div className='bg-[#785578] py-2'>
        <h1 className='text-[#F4AEF4] bg-[#785578] text-xl font-semibold'>Gold Rush Gary</h1>
        <p className='text-[#DEDEDE] bg-[#785578]'>
        Lorem ipsum dolor sit amet. Qui assume non illo voluptas id deserunt velit ut corrupti natus qui volmagnam
        </p>
        <p className='text-[#F4AEF4] bg-[#785578] '>Read more </p>
        <button className='w-full h-10 flex justify-center items-center bg-[#B177EB] rounded-[8px] mt-2'>
        <Link className='text-lg font-semibold text-white bg-[#B177EB]' href='https://opensea.io/'>OpenSea</Link> 
        <FiExternalLink className='text-lg font-semibold  bg-[#B177EB] text-white'/>

        </button>
      </div>
    </div>
  )
}

export default Card
