import { useEffect } from "react";
import { useRouter } from "next/router";
//import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import ConnectWallet from "../components/Buttons/ConnectWallet";

export default function Home() {
  //const address = useAddress();
  // const router = useRouter();

  // useEffect(() => {
  //   if (address) {
  //     router.push("/create");
  //   }
  // }, [address, router]);

  return (
    <div className="flex flex-row h-screen bg-[#699BF7] px-[166px] pt-[186px] gap-[177px] ">
      <div className="flex flex-col">
        <img className="h-[653px] w-[673px]" src="/images/landing.png" alt="" />
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-[96px] w-[469px] mt-[70px] text-white leading-[102px]">
          welcome to{" "}
          <span className="italic relative inline-block pb-[2px]">
            ALLY
            <span className="absolute inset-x-0 bottom-0 h-[5px] bg-current"></span>
          </span>
        </p>
        <ConnectWallet />
        <p className="w-[333px] mt-[48px] text-white text-opacity-50 text-[36px] font-bold leading-[48px]">
          create your ally in 3 steps.
        </p>
      </div>
    </div>
  );
}
