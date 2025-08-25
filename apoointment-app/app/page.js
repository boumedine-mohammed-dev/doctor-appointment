
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Section from "./_component/Section";
import SearchCategories from "./_component/SearchCategories";
import Doctor from "./_component/Doctor";
export default function Home() {
  return (
    <div>
      <Section />
      <SearchCategories />
      <Doctor />
    </div>
  );
}