import Banner from "@/Components/Banner";
import Highrated from "@/Components/Highrated";
import Learningjourney from "@/Components/Learningjourney";
import Learningtips from "@/Components/Learningtips";
import Teacherssection from "@/Components/Teacherssection";
import TrendingCouse from "@/Components/TrendingCouse";
import Whychooseus from "@/Components/Whychooseus";
import Image from "next/image";
import { Suspense } from 'react';

export default function Home() {
  return (
    <main className="bg-[#F7F7F7]">
      <Banner></Banner>
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>}>
        <Highrated />
      </Suspense>
      <Suspense fallback={
        <div className="flex justify-center items-center py-20">
          <span className="loading loading-spinner loading-lg text-blue-600"></span>
        </div>}>
      <TrendingCouse />
      </Suspense>
      <Learningtips></Learningtips>
      <Teacherssection></Teacherssection>
      <Whychooseus></Whychooseus>
      <Learningjourney></Learningjourney>
    </main>
  );
}
