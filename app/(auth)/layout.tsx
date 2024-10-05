import Image from "next/image";
import Carousel from "@/components/Carousel";


  const images = [
 
  '/icons/auth-img-2.png',
  '/icons/auth-img-3.png',
  '/icons/auth-img-4.png',
  ];

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
          <Carousel images={images} />
           
            <div className="">
             
            </div>
          </div>
      </main>
    );
  }
  