import Image from "next/image";
import headerImg from '../../public/img/header.jpg';

import Navbar from "@/components/Navbar";
import Productos from "@/components/Productos";

export default function Home() {
  return (
    <main className="home-container">
      <Navbar/>
      <header className="home-header__image">
        <Image src={headerImg}/>
        <div></div>
      </header>
      <Productos/>
    </main>
  );
}
