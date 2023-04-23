import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import logo from "../public/images/logo.svg"
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


import imagefacebook from '../public/images/icon-facebook.svg'

import imageinstagram from '../public/images/icon-instagram.svg'


import imagetwitter from '../public/images/icon-twitter.svg'

import imagepinterest from '../public/images/icon-pinterest.svg'








function Layout (props){
    return(

        <>

<div>
    <header>  
           {/* hero section */}
        <section id="hero">
           {/* Hero Container */}
        <div className="container max-w-6xl mx-auto px-6 py-12 ">
            {/* Menu/logo container */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* Logo */}
           <Image src={logo} width={200} height={200}/>
            {/* Menu */}
            <div className=" hidden font-atala md:flex md: space-x-8">
                <div className="group">
                    <a href="#">About</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-100"></div>
                </div>

                <div className="group">
                    <a href="#">Careers</a>
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                </div>


                <div className="group">
                    <a href="#">Events</a>
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                </div>


                <div className="group">
                    <a href="#">Products</a>
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                </div>

                <div className="group">
                    <a href="#">Supports</a>
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                </div>
            </div>
            {/* @todo Hamburger Button */}

            <div className="md:hidden">
              <button id="menu-btn" type="button" className="open z-40 block hamburger
               md:hidden focus:outline:none">

                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>


               </button>
            </div>




          </nav>
          {/* @todo - Mobile Menu */}

          <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white
           uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experince That Deliver
           </div>
          </div>

        </section>

    </header>



    <main>{props.children}</main>


    <footer className="bg-black">

        {/* Container */}
        <div className="container mx-auto py-10 max-w-6xl">
             
             {/* footer flex Container */}

             <div className="flex flex-col itams-center mb-10 space-y-6
              md:flex-row md:space-y-0 md:justify-between md:items-start">
               
               {/* Menu & Logo Conatainer */}

               <div className="flex flex-col items-center space-y-8 
               md:items-start md:space-y-12 md:mb-10">
                
                <div className="h-8 ">
                    <Image src={logo} className="w-44 md:ml-3" />
                </div>

                {/* Menu Container */}

                <div className="flex flex-col items-center space-y-4 font-bold
                 text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3 ">
                   
                   {/* Item 1 */}

                   <div className="h-10 group">
                    <a href="#">about
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                    </a>
                   </div>


                      {/* Item 2 */}

                   <div className="h-10 group">
                    <a href="#">supports
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                    </a>
                   </div>



                      {/* Item 3 */}

                   <div className="h-10 group">
                    <a href="#">careers
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                    </a>
                   </div>


                      {/* Item 4 */}

                   <div className="h-10 group">
                    <a href="#">Event
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                    </a>
                   </div>


                      {/* Item 5 */}

                   <div className="h-10 group">
                    <a href="#">Products</a>
                    <div className="mx-2 group-hover:border-b
                     group-hover:border-blue-50"></div>
                   </div>
                 </div>
               </div>

                {/* Social & Copy Container */}
            
            <div className="flex flex-col items-center 
            justify-between space-y-4 text-gray-100">
                {/* icons Container  */}
                <div className="flex items-center 
                justify-center space-x-4 md:justify-end">
                  
                  {/* Icon 1 */}

                  <div className="h-8 group">
                    <a href="#">
                        <Image src={imagefacebook} className="h-6"/>
                    </a>
                  </div>

                    {/* Icon 2 */}

                    <div className="h-8 group">
                    <a href="#">
                        <Image src={imageinstagram} className="h-6"/>
                    </a>
                  </div>



                    {/* Icon 3 */}

                    <div className="h-8 group">
                    <a href="#">
                        <Image src={imagepinterest} className="h-6"/>
                    </a>
                  </div>


                    {/* Icon 4 */}

                    <div className="h-8 group">
                    <a href="#">
                        <Image src={imagetwitter} className="h-6"/>
                    </a>
                  </div>



                  
                  
                </div>
                
            </div>


            </div>

           
            
         
        </div>

    </footer>

</div>

</>
    )

}


export default Layout