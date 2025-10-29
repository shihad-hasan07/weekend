import Banner from "@/components/Banner";
import ExplorePrograms from "@/components/ExplorePrograms";
import MeetTheHeroes from "@/components/MeetTheHeroes";
import OurServices from "@/components/OurServices";
import RecentBlogs from "@/components/RecentBlogs";
import Swipper_Reviews from "@/components/Swipper_Reviews";


export default function Homepage() {
  return (
    <div>
      <Banner></Banner>
      <OurServices></OurServices>
      <ExplorePrograms></ExplorePrograms>
      <MeetTheHeroes></MeetTheHeroes>
      <Swipper_Reviews></Swipper_Reviews>
      <RecentBlogs></RecentBlogs>
    </div>
  );
}
