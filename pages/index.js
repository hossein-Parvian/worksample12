import Image from "next/image"

import Layout from "../components/Layout"

import imageinteractive from '../public/images/desktop/image-interactive.jpg'
import imagedeepdes from '../public/images/desktop/image-deep-earth.jpg'
import imagedeepmo from '../public/images/mobile/image-deep-earth.jpg'

import imagenightpdes from '../public/images/desktop/image-night-arcade.jpg'
import imagenightpmo from '../public/images/mobile/image-night-arcade.jpg'


import imageSoccerdes from '../public/images/desktop/image-soccer-team.jpg'
import imageSoccermo from '../public/images/mobile/image-soccer-team.jpg'

import imageGriddes from '../public/images/desktop/image-grid.jpg'
import imageGridmo from '../public/images/mobile/image-grid.jpg'


import imagecuriositydes from '../public/images/desktop/image-curiosity.jpg'
import imagecuriositymo from '../public/images/mobile/image-curiosity.jpg'


import imagefisheyedes from '../public/images/desktop/image-fisheye.jpg'
import imagefisheyemo from '../public/images/mobile/image-fisheye.jpg'


import imagefromdes from '../public/images/desktop/image-from-above.jpg'
import imagefrommo from '../public/images/mobile/image-from-above.jpg'


import imagepocketdes from '../public/images/desktop/image-pocket-borealis.jpg'
import imagepocketmo from '../public/images/mobile/image-pocket-borealis.jpg'



function Home() {
  return (
   <Layout>
     {/* Feature Section */}

     <section id="freature">

{/* feature Container */}

<div className="relative container flex flex-col max-w-6xl mx-auto
my-32 px-6 text-gray-900 md:flex-row md:px-0">

    {/* Image */}
    
    <Image src={imageinteractive} alt=""  width={800} height={800}/>

    {/* Text Container */}
    
    <div className="top-48 pr-0 bg-white md:absolute md:right-0 
    md:py-20 md:pl-20">
        <h2 className="max-w-lg mt-10 mb-6 font-sans text-4xl text-center
         text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
            The Leader In Intractive VR
         </h2>

         <p className="max-w-md text-center md:text-left ">
         Founded in 2011, Loopstudios has been producing world-class virtual
    reality projects for some of the best companies around the globe.
    Our award-winning creations have transformed businesses through
    digital experiences that bind to their brand.
         </p>
    </div>

</div>
</section>

{/* Creations Section */}

<section id="creations">

{/* Creations Container 1 */}

<div className="container max-w-6xl mx-auto my-32 px-6 mb-20
 text-gray-900 md:px-0">

    {/* Creations Header */}

    <div className="flex justify-center mb-20 md:justify-between">
        <h2 className="text-4xl text-center uppercase
         md:text-center md:text-5xl">
            Our Crations
         </h2>
         <button className="hidden btn md:block">
            See All
          </button>
    </div>

    {/* Items Container 1 */}

    <div className="flex flex-col justify-between w-full space-y-6 text-2xl
     text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
        {/* Item 1 */}
        <div className="group item" >
          {/* Desktop Image */}
       <Image src={imageGriddes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imageGridmo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
          The Grid
        </h5>
        </div>


          {/* Item 2 */}
          <div className="group item" >
          {/* Desktop Image */}
       <Image src={imagedeepdes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imagedeepmo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
          Deep Earth
        </h5>
        </div>



        {/* Item 3 */}
        <div className="group item" >
          {/* Desktop Image */}
       <Image src={imagenightpdes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imagenightpmo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
         Night Arcade
        </h5>
        </div>


         {/* Item 4 */}
         <div className="group item" >
          {/* Desktop Image */}
       <Image src={imageSoccerdes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imageSoccermo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
          Soccer Team VR
        </h5>
        </div>
     </div>

     
      {/* Items Container 2 */}

    <div className="flex flex-col justify-between w-full space-y-6 text-2xl mt-10
     text-white uppercase md:flex-row md:space-y-0 md:space-x-8">
        {/* Item 1 */}
        <div className="group item" >
          {/* Desktop Image */}
       <Image src={imagecuriositydes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imagecuriositymo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
          The Grid
        </h5>
        </div>


          {/* Item 2 */}
          <div className="group item" >
          {/* Desktop Image */}
       <Image src={imagefisheyedes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imagefisheyemo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
          Deep Earth
        </h5>
        </div>



        {/* Item 3 */}
        <div className="group item" >
          {/* Desktop Image */}
       <Image src={imagefromdes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imagefrommo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
         Night Arcade
        </h5>
        </div>


         {/* Item 4 */}
         <div className="group item" >
          {/* Desktop Image */}
       <Image src={imagepocketdes} 
       alt="" 
       className="hidden duration-200 md:block 
       group-hover:scale-110"/>
        {/* Mobile Image */} 
        <Image src={imagepocketmo} 
        alt="" 
        className="w-full md:hidden"
        />
        {/* Item Text */}
        <h5 className="absolute px-4 duration-200 w-58 
        bottom-4 md:bottom-8 md:px-10 group-hover:scale-110
         group-hover:text-black text-center ">
          Soccer Team VR
        </h5>
        </div>
     </div>
</div>





</section>

   </Layout>
  )
}


export default Home