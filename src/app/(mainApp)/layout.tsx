import Sidebar from "@/components/Sidebar";

import Drawers from "@/components/Drawers";
import { Providers } from "@/redux/provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <div className="flex flex-row">
        <Sidebar />
        <div className="h-screen overflow-y-scroll w-full flex flex-row">
          <div className="w-full px-2 py-[37px] md:px-[80px] lg:w-[calc(100%-386px)]">
            {children}
          </div>
          <Drawers />
        </div>
      </div>
    </Providers>
  );
}
