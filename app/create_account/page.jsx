import { Header, Footer } from '../components/guis';
import {CreateAccountContent} from './ui';
export default function Home() {
  return (
    <div>
      <div style={{background : "url('/cylinders_backdrop.png')"}}>
      <Header />
      <div className="font-sans items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 backdrop-blur-2xl">
        <CreateAccountContent />
      </div>
      
      <Footer />
      </div>
    </div>
    
  );
}
