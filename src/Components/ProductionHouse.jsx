import React from 'react'
import disney from './../assets/images/disney.png'
import marvel from './../assets/images/marvel.png'
import natgeo from './../assets/images/nationalG.png'
import pixar from './../assets/images/pixar.png'
import starwars from './../assets/images/starwar.png'

import disneyVid from './../assets/Videos/disney.mp4'
import marvelVid from './../assets/Videos/marvel.mp4'
import natgeoVid from './../assets/Videos/national-geographic.mp4'
import starwarsVid from './../assets/Videos/star-wars.mp4'
import pixarVid from './../assets/Videos/pixar.mp4'



function ProductionHouse() {
    const productionHouseList =[
        {
        id:1,
        image:disney,
        video: disneyVid
        },
        {
            id:2,
            image:pixar,
            video:pixarVid
        },
        {
            id:3,
            image:marvel,
            video:marvelVid
        },
        {
            id:4,
            image:starwars,
            video:starwarsVid
        },
        {
            id:4,
            image:natgeo,
            video:natgeoVid
        },
        
    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16'>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
                <video src={item.video} autoPlay loop playsInline muted 
                className='absolute top-0 rounded-md z-0 opacity-0
                hover:opacity-50'/>

                <img src={item.image} 
                className='w-full z-[1] opacity:100'/>
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse