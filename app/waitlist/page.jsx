import {WaitlistContent} from './ui';
import {Header2, Footer} from '../components/guis';
export default function Home() {
  return (
    <div>
      <div style={{background : "url('/cylinders_backdrop.png')"}}>
      <Header2 />
      <a className='mt-16'/>
      <div className="mt-16 font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 backdrop-blur-xl" style={{background : "url('/cylinders_backdrop.png')"}}>
        <WaitlistContent />
      </div>
      <Footer />
      </div>
    </div>
    
  );
}
