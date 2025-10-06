"use client";
import Image from "next/image";
import { Georama } from "next/font/google";

export function HomeContent() {
    
  return (
        <div className="flex flex-col items-center justify-center text-center">
            <a className="mt-24"/>
            <div className="flex flex-col p-16 rounded-2xl ml-4 items-center justify-items-center">
                    <a className="mt-24"/>
                    <h2 className={`font-extrabold text-8xl text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-white mb-4`}>Welcome to a New Era of Digital Art</h2>
                    <h2 className={`font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-white mb-4`}>Curated</h2>
                    <h2 className={`font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-white mb-4`}>Exclusive and yours....</h2>
                </div>
            <a className="px-6 py-3 mt-16 bg-gradient-to-bl from-gray-900 to-white text-black font-semibold rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-w transition" href="/create_account">Get Started</a>
            <a className="mt-11"/>
            <div className='text-center mt-24'>
                    <p className="font-normal text-[16px] leading-[24px] text-white mb-8 sm:text-[20px] sm:leading-[30px] max-w-2xl p-4">
                    Seamlessly powered by Polygon for speed and security. A premium, curated marketplace crafted for discerning collectors—where blockchain integrity meets a streamlined experience.
                    </p>
                </div>
            
        </div>

    );
}

export function HomeContent2(){
    return (
        <div className=" flex flex-wrap flex-col items-center justify-center text-center p-8 backdrop-blur-xl bg-transparent rounded-2xl">
        <h3 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-white mb-4">WHY JOIN EARLY</h3>
        <div className="flex flex-wrap flex-row justify-center text-center rounded-2xl shadow-2xl mt-16 p-8 px-6 py-3 bg-white transition">
            <Image src="/landing/nft.svg" alt="Early Access" width={300} height={300} className="mx-auto my-16 rounded-2xl shadow-2xl hover:animate-rotate bg-white" />
            <div className="ml-8 text-left">
                
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md hover:animate-bounce shadow-2xl bg-white p-3 rounded">
                   Curated Excellence — Only the finest, hand-selected NFTs
                </h4>
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md hover:animate-bounce shadow-2xl bg-white p-3 rounded">
                    Powered by Polygon — Fast, low-cost, and secure transactions
                </h4>
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md hover:animate-bounce shadow-2xl bg-white p-3 rounded">
                    Streamlined Experience — Centralized UX with blockchain integrity
                </h4>
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md hover:animate-bounce shadow-2xl bg-white p-3 rounded">
                    Exclusive Access — VIP previews, launches, and special events
                </h4>
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md hover:animate-bounce shadow-2xl bg-white p-3 rounded">
                    Be First — Early community perks and insider updates
                </h4>
                <div className="mt-8">
                  <a className="ml-6 px-4 py-2 bg-black text-white rounded-2xl hover:bg-white hover:text-black transition mr-4" href='/create_account'>Join Early</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export function HomeContent3(){
    return (
        <div className=" flex flex-col mt-8 items-center justify-center text-center bg-transparent p-8 backdrop-blur-xl rounded-2xl">
        <h1 className="font-extrabold text-3xl text-transparent bg-clip-text bg-gradient-to-t from-gray-900 to-gray-300 mb-4">The Journey has begun - and you are invited</h1>
        <div className="flex flex-col justify-center text-center rounded-2xl shadow-2xl mt-16 p-8 bg-white">
            
            <div className="ml-8 text-left">
                
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md p-3 ">
                   We’re crafting something extraordinary—a premium, curated NFT marketplace powered by Polygon, designed to redefine how you discover and collect digital art. Though the gallery doors aren’t open just yet, our vision is already taking shape.
                </h4>
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md bg-white p-3">
                    Greatness takes time, and we’re dedicated to delivering an experience that exceeds expectations. While we put the finishing touches on this exclusive space, you have a special opportunity to join us early—become part of our community and witness innovation unfold from the very start.
                </h4>
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md bg-white p-3">
                    Sign up now to receive insider updates, early previews, and VIP access to launches and special events. This is your chance to claim a front-row seat to the next evolution in digital art ownership.
                </h4>
                <h4 className="font-normal text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md bg-white p-3">
                    We’re creating a legacy—a realm where rarity meets ease, where curated excellence thrives, and where you belong. Your journey into this new world begins with a simple step: joining us today.
                </h4>
                <h4 className="font-normal  text-[16px] leading-[24px] text-[#6b7280] mb-4 max-w-md bg-white p-3">
                    We’re creating a legacy—a realm where rarity meets ease, where curated excellence thrives, and where you belong. Your journey into this new world begins with a simple step: joining us today.
                </h4>
                <div className="mt-8">
                  <a className="ml-6 px-4 py-2 bg-black text-white rounded-2xl hover:bg-white hover:text-black transition mr-4" href='/create_account'>Get Early Access</a>
                </div>
            </div>
        </div>
        
      </div>
    )
}