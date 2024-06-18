import React from 'react'
import { Link } from 'react-router-dom'

const KidExplore = () => {
  return (
    <div className='Explore'>
        <h1 className="text-3xl font-semibold ml-24 tracking-wider pt-10 text-gray-700">
            EXPLORE MORE
          </h1>
        <div className="cards flex flex-wrap">
        
           <div className="card w-[754px] "><Link to='/kids/KidsWear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/630c5d84-b4fa-4ba8-aa92-c91cd134b9201604906586823-39-Banner-LogoMania.jpg" /></Link></div>
           <div className="card w-[754px]"><Link to='/kids/KidsWear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/7e5d76b3-afd1-4e82-8eee-179269cbab1c1604906586871-40-Banner-CharacterStore.jpg" /></Link></div>
           <div className="card w-[754px]"><Link to='/kids/KidsWear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/cd843509-16fe-4437-a814-90f3eea6bb4b1604906586922-41-Banner-AllOrganic.jpg" /></Link></div>
           <div className="card w-[754px]"><Link to='/kids/KidsWear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/d878e27a-f64d-45c9-bd9b-ee257b49894f1604906586980-42-Banner-EssentialStore.jpg" /></Link></div>
           <div className="card w-[754px]"><Link to='/kids/KidsWear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/bb420f64-fea8-4d66-87b7-03c7f7fb6e621604906587041-43-Banner-Uniquely-Myntra.jpg" /></Link></div>
           <div className="card w-[754px]"><Link to='/kids/KidsWear'><img draggable="false" class="image-image undefined image-hand" src="https://assets.myntassets.com/w_490,c_limit,fl_progressive,dpr_2.0/assets/images/2020/11/9/1ac6219d-54b8-484e-813b-c239bb9880141604906587091-44-Banner-ActiveWearStore.jpg" /></Link></div>
        </div>
      
    </div>
  )
}

export default KidExplore
