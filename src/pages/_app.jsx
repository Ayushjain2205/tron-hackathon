import "@/styles/globals.css";
import React, { useState } from "react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import {
  OptimismGoerli,
  BaseGoerli,
  ZoraTestnet,
  ModeTestnet,
} from "@thirdweb-dev/chains";
import { metamaskWallet, localWallet, paperWallet } from "@thirdweb-dev/react";
import { EcoSystemContext } from "../contexts/EcoSystemContext";

function App({ Component, pageProps }) {
  const [ecosystem, setEcosystem] = useState("optimism");
  return (
    <ThirdwebProvider
      activeChain={OptimismGoerli}
      supportedChains={[OptimismGoerli, BaseGoerli, ZoraTestnet, ModeTestnet]}
      clientId="5dbb8f1abc71686e44ab6ff02c6a9a92"
      supportedWallets={[
        metamaskWallet(),
        localWallet(),
        paperWallet({
          clientId: "7f3a5a69-a739-40cd-b62d-8ef3667a81b8",
        }),
      ]}
    >
      <EcoSystemContext.Provider value={{ ecosystem, setEcosystem }}>
        <Component {...pageProps} />
      </EcoSystemContext.Provider>
    </ThirdwebProvider>
  );
}

export default App;
