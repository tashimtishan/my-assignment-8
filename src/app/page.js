import Banner from "@/Components/Banner";
import Highrated from "@/Components/Highrated";
import Learningtips from "@/Components/Learningtips";
import Teacherssection from "@/Components/Teacherssection";
import TrendingCouse from "@/Components/TrendingCouse";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[#F7F7F7]">
    <Banner></Banner>
    <Highrated></Highrated>
    <TrendingCouse></TrendingCouse>
    <Learningtips></Learningtips>
    <Teacherssection></Teacherssection>
   </main>
  );
}
