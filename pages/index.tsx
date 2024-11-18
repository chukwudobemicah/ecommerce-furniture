import FeaturedProducts from "@/components/Home/FeaturedProducts";
import Header from "@/components/Home/Header";
import { useIsLivePreview } from "next-sanity/hooks";
export default function Home() {
  const isLivePreview = useIsLivePreview();
  return (
    <main>
      <Header />
      <div>{isLivePreview ? "in p[ref mode" : "not prev mode"}</div>
      <FeaturedProducts />
    </main>
  );
}
