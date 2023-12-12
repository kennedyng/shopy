import Input from "@/components/ui/Input";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h4 className="text-[#34333A] text-[26px] font-medium">
          <span className="text-primary-main">Shoppingify</span> allows you take
          your <br /> shopping list wherever you go
        </h4>
        <Input />
        <div>
          <input type="search" />
        </div>
      </div>
    </main>
  );
}
