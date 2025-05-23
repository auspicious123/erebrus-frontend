"use client"
import HeroSection from "../components/HeroSection"
import DePINRevolutionComponent from "@/components/ui/map"
import SubscriptionCard from "@/components/subs"
import CyreneAISection from "@/components/ui/cyrene"
import VPNContentSection from "@/components/ui/vpnContent"
import PartnersMarquee from "@/components/ui/PartnersMarquee"
import Image from "next/image"
import { ScrollProgress } from "@/components/ui/scroll-progress"

function Page() {
  return (
    <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
      {/* <ErebrusNavbar /> */}
            <ScrollProgress color="#3b82f6" height={4} />
      
      <HeroSection />
      <div className="pt-12">
        <PartnersMarquee />
      </div>
      <DePINRevolutionComponent />
      <CyreneAISection />
      <VPNContentSection />

      {/* New Uncensored Section - Improved spacing and layout */}
      <section className="w-full py-20 flex flex-col items-center justify-center text-white">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Decentralized for Speed and Privacy
          </h2>
          <div className="relative w-full max-w-md mx-auto h-64 md:h-96 mb-8">
            <Image src="/Uncensored.webp" alt="Uncensored Globe" fill className="object-contain" />
          </div>
        </div>
      </section>

      <SubscriptionCard />

      {/* Recognition Section - Improved spacing and layout */}
      <section className="w-full py-24 flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-900 to-black">
        <div className="container max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
            Recognition
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            {/* First row */}
            <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <Image
                src="/recognition/radarthack_white.webp"
                alt="RADAR"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <Image
                src="/recognition/ethsea_white.webp"
                alt="ETH SEA"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center col-span-2 md:col-span-1 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-left space-y-3">
                <div className="flex items-center group">
                  <span className="mr-2 group-hover:text-blue-300 transition-colors">
                    4th Place Solana Radarhack DePIN
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
                <div className="flex items-center group">
                  <span className="mr-2 group-hover:text-blue-300 transition-colors">
                    Grand Prize at ETH SEA Demoday, Bali
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </div>

            {/* Second row */}
            <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <Image
                src="/recognition/ivscrypto_white.webp"
                alt="IVS"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <Image
                src="/recognition/aptos_white.webp"
                alt="APTOS"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center col-span-2 md:col-span-1 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-left space-y-3">
                <div className="flex items-center group">
                  <span className="mr-2 group-hover:text-blue-300 transition-colors">
                    Grand Prize at IVS Crypto Demoday, Japan
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
                <div className="flex items-center group">
                  <span className="mr-2 group-hover:text-blue-300 transition-colors">
                    Grand Prize at Aptos Hackathon, Singapore
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </div>

            {/* Third row */}
            <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <Image
                src="/recognition/soonami_white.webp"
                alt="soonami.io"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <Image
                src="/recognition/akindo_white.webp"
                alt="AKINDO"
                width={150}
                height={80}
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-center col-span-2 md:col-span-1 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-all duration-300">
              <div className="text-left space-y-3">
                <div className="flex items-center group">
                  <span className="mr-2 group-hover:text-blue-300 transition-colors">
                    On the Fast Track Prize at Soonaml Ventureshare
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
                <div className="flex items-center group">
                  <span className="mr-2 group-hover:text-blue-300 transition-colors">
                    Several Prizes at Akindo WaveCheck
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">↗</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg mb-16 text-blue-100">+ many more!!</p>

          {/* Erebrus Logo */}
          <div className="flex flex-col items-center justify-center space-y-4 mb-10">
            <Image
              src="/images/Erebrus_logo_wordmark.webp"
              alt="Erebrus powered by NetSepio"
              width={300}
              height={100}
              className="object-contain"
            />
          </div>

          <div className="text-2xl font-medium text-blue-100 mb-8">Join the Movement. Get Started Now.</div>

          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/30">
            Get Started
          </button>
        </div>
      </section>

      {/* <DarkFooter /> */}
    </div>
  )
}

export default Page
