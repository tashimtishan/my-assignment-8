import Banner from "@/Components/Banner";
import Highrated from "@/Components/Highrated";
import Learningjourney from "@/Components/Learningjourney";
import Learningtips from "@/Components/Learningtips";
import Teacherssection from "@/Components/Teacherssection";
import TrendingCouse from "@/Components/TrendingCouse";
import Whychooseus from "@/Components/Whychooseus";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-[#F7F7F7]">
    <Banner></Banner>
    <Highrated></Highrated>
    <TrendingCouse></TrendingCouse>
    <Learningtips></Learningtips>
    <Teacherssection></Teacherssection>
    <Whychooseus></Whychooseus>
    <Learningjourney></Learningjourney>
   </main>
  );
}
