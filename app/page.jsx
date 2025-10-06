import { Header, Footer } from './components/guis';
import {HomeContent, HomeContent2, HomeContent3} from './ui';
export default function Home() {
  return (
    <div className="items-center">
      <div style={{background : "url('/cylinders_backdrop.png')"}}>
      <Header/>
      <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 backdrop-blur-2xl">
        <HomeContent />
        <HomeContent2/>
        <HomeContent3/>
      </div>
      
      <Footer />
      </div>
    </div>
    
  );
}
