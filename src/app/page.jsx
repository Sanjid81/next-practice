// src/app/page.jsx
import Banner from "@/components/Home/Banner";
import Card from "@/components/Home/Card";
import Category from "@/components/Home/Category";
export default async function HomePage() {

  return (
   <div>
    <Banner />
    <Card />
    <Category />
   </div>
  );
}
