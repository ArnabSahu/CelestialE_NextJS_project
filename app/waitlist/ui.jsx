"use client"
import Image from 'next/image';
import { Accordion } from '../components/guis';
export function WaitlistContent() {
  return (
        <div className="flex flex-wrap flex-col items-center justify-center text-center">
            <h2 className="font-bold text-xl leading-[48px] text-white mb-4 sm:text-[64px] sm:leading-[76.8px]">Waitlist</h2>
            <h2 className="font-bold text-5xl leading-[48px] mb-4 animate-pulse font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">Beyond Art, Beyond Imagination—NFTs Redefine Value</h2>
            <div className='flex flex-row'>
                <a className="font-semibold text-2xl text-gray-700 mb-4 hover:text-black mr-1" href='/create_account'>Join Early </a>
                <h1 className='font-semibold text-2xl text-gray-700 mb-4'> or Watch the Future Pass You By</h1>
            </div>
            <Image src="/landing/providers.png" alt="Hero Image" width={400} height={400} className="mx-4 my-16 rounded-2xl" />
            <a className='mt-24'/>
            <div className='flex flex-col flex-wrap text-center items-center'>
                <h2 className="font-bold text-4xl leading-[48px] mb-4 animate-pulse font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-purple-600">Welcome to a New Era of Digital Art </h2>
                <p className='font-normal text-[16px] leading-[24px] text-white mb-8 sm:text-[20px] sm:leading-[30px] max-w-2xl p-4'>
                    Step into a world where every digital creation is handpicked for its uniqueness 
                    and artistic excellence. Our marketplace isn’t just another platform—it’s a 
                    sanctuary for the truly exceptional.
                </p>
                <a className="px-6 py-3 bg-black text-white rounded-2xl hover:bg-white hover:text-black transition" href="/create_account">Join Early</a>
            </div>
            <Image src="/landing/nft.svg" alt="Hero Image" width={400} height={400} className="mx-4 my-16 rounded-2xl" />
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl leading-[48px] mb-4 mt-24 font-bold bg-clip-text text-transparent bg-gradient-to-l from-white to-purple-800'>Powered by Polygon, Designed for You </h1>
                    <p className='text-lg font-light font-sans max-w-2xl mb-8'>
                        Seamlessly harnessing the power of Polygon’s blockchain, we deliver speed 
                        and security without compromise. Experience effortless transactions that feel 
                        as natural as owning art itself.
                    </p>
                    <a className="px-6 py-3 bg-gradient-to-r from-purple-800 to-white text-white rounded-2xl hover:bg-white hover:text-black transition" href="/create_account">Join Early</a>
                    </div>
                    <Image src="/nfts/1.png" alt="Hero Image" width={400} height={400} className="mx-4 my-16 rounded-2xl ml-24" />
                </div>

                <div className='flex flex-row'>
                    <Image src="/nfts/2.png" alt="Hero Image" width={400} height={400} className="mx-4 my-16 rounded-2xl mr-24" />
                    <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl leading-[48px] mb-4 mt-24 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-800'>Curated for the Discerning Collector</h1>
                    <p className='text-lg font-light font-sans max-w-2xl mb-8'>
                        Here, exclusivity is not an afterthought—it’s the essence. Each NFT will be 
                        passed through a meticulous selection process, ensuring that only the finest 
                        meet your gaze and your collection. 

                    </p>
                    <a className="px-6 py-3 bg-gradient-to-l from-blue-800 to-white text-white rounded-2xl hover:bg-white hover:text-black transition" href="/create_account">Join Early</a>
                    </div>
                </div>

                <div className='flex flex-row'>
                    <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl leading-[48px] mb-4 mt-24 font-bold bg-clip-text text-transparent bg-gradient-to-l from-white to-green-800'>A Centralized Touch with Blockchain Integrity </h1>
                    <p className='text-lg font-light font-sans max-w-2xl mb-8'>
                        Enjoy the best of both worlds—the trust and transparency of blockchain 
                        wrapped in a streamlined, intuitive experience curated just for you. Collect, 
                        trade, and showcase with confidence and ease.
                    </p>
                    <a className="px-6 py-3 bg-gradient-to-r from-green-800 to-white text-white rounded-2xl hover:bg-white hover:text-black transition" href="/create_account">Join Early</a>
                    </div>
                    <Image src="/nfts/3.png" alt="Hero Image" width={400} height={400} className="mx-4 my-16 rounded-2xl ml-24" />
                </div>

                <div className='flex flex-row'>
                    <Image src="/nfts/4.png" alt="Hero Image" width={400} height={400} className="mx-4 my-16 rounded-2xl mr-24" />
                    <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-4xl leading-[48px] mb-4 mt-24 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-800'>Join Us in Shaping Tomorrow’s Legacy</h1>
                    <p className='text-lg font-light font-sans max-w-2xl mb-8'>
                        This is more than a marketplace. It’s a vibrant gallery, a dynamic community, 
                        and a future where art and innovation come alive. Your journey to owning 
                        exclusive digital masterpieces starts here.

                    </p>
                    <a className="px-6 py-3 bg-gradient-to-l from-teal-800 to-white text-white rounded-2xl hover:bg-white hover:text-black transition" href="/create_account">Join Early</a>
                    </div>
                </div>
            </div>
            
            
        </div>

    );
}