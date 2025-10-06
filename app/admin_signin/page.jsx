import { Header, Footer } from '../components/guis';
import {AdminSigninContent} from './ui';
export default function Home() {
  return (
    <div>
      <div style={{background : "url('/cylinders_backdrop.png')"}}>
      <a className='mt-16'/>
      <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 backdrop-blur-2xl">
        <AdminSigninContent />
      </div>
      <Footer />
      </div>
    </div>
    
  );
}
