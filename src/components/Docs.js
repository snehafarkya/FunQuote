import React from 'react'
import Footer from './Footer'
import Head from './Head'
import Navbar from './Navbar'

export default function Docs() {
  return (
    <div className='docss'>
        <Navbar/>
        <section class="text-gray-900 body-font ">
        <div class="container px-5 py-24 mx-auto flex flex-col">
    <div class="lg:w-4/6 mx-auto">
      <div class="rounded-lg h-64 overflow-hidden">
        <img alt="content" class="object-cover object-center h-full w-full" src="https://www.thebalancesmb.com/thmb/6ffE69pHETOeo5eaCFq49b6Tdwk=/5082x2859/smart/filters:no_upscale()/inspiration-quote---if-not-now--when--958923808-6c009ca6987147418d79075b5b186b8b.jpg" />
      </div>
      <div class="flex flex-col sm:flex-row mt-10">
        <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/William_James_b1842c.jpg" alt="" />
          </div>
          <div class="flex flex-col items-center text-center justify-center">
            <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">William James</h2>
            <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p class="text-base"><i><b>Act as if what you do makes a difference. IT DOES!</b></i></p>
          </div>
        </div>
        <div class="sm:w-2/3  sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left " >
          <p class="leading-relaxed text-black-600 text-lg mb-4"><b>Growing up, we've all listen to some great <b><i>"Quotes"</i></b> and asked to follow them. But, ever wondered why? Does it make any difference to my life? ABSOLUTELY YES! If you believe in something , Universe will help you to Manifest it just like Alia Manifested Ranbir😉! <br></br> <b>FunQuote</b> is a website which will inspire and motivate you to manifest life! It throws random quotes by famous personalities who've done something different in their life. Implementation is what maakes things look easier thereby, make sure to apply concepts in your routine! <br></br> <b><u>Happy Reading!</u></b></b></p>
          
        </div>
      </div>
    </div>
  </div>
</section>
      <Footer />
    </div>
  )
}
