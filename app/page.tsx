import { cookies } from "next/headers";
import ProductList from "../components/ProductList";
import ToolsCarousel from "../components/ToolsCarusel";

export default async function Home() {
  const cookiesStore = await cookies();
  const variant = cookiesStore.get("variant")?.value;

  return (
    <main className="flex flex-col pt-[118px] pb-[110px] items-center w-screen min-h-screen bg-[url('/images/bg-pattern.webp'),linear-gradient(252.75deg,#E3FFFE_23.91%,#E6EDFD_78.01%)]">
      <h1 className=" text-textMain text-center text-[28px] leading-9 md:text-[45px] md:leading-[52px] font-semibold -tracking-[0.25px]">
        Choose Your Plan:
      </h1>

      <ToolsCarousel />
      <ProductList variant={variant!} />

      <p className="text-center text-textLight pt-6 px-3 text-xs leading-5 tracking-[0.1px]">
        Automatic renewal of $29.99 per month. <br />
        You may cancel by{" "}
        <a
          className=" underline underline-offset-[3px]"
          href="mailto:support@justdone.ai"
        >
          support@justdone.ai
        </a>
        . Our goal is customer satisfaction
      </p>
    </main>
  );
}
