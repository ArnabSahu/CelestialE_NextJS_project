"use server"
import { Header2, Footer } from '../components/guis';
import {AdminDashboardContent} from './ui';
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function Home() {
  const tk = (await cookies()).get('celestiale_admin_token')?.value
    if (tk !== process.env.ADMIN_TOKEN) {
        redirect('/unauthorized')
    }
  return (
    <div className="items-center">
      <div style={{background : "url('/cylinders_backdrop.png')"}}>
        <Header2/>
        <div className="font-sans items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 backdrop-blur-2xl">
          <AdminDashboardContent />
        </div>
      
        <Footer />
      </div>
    </div>
    
  );
}
