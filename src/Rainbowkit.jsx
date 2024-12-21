import "@rainbow-me/rainbowkit/styles.css";
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiProvider, http } from "wagmi";
import {
  mainnet,
  bsc,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const projectId = "0a125e3a4251eb58c540988c282cdb2d";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: projectId,
  chains: [
    mainnet,
    bsc,
  ],
  transports: {
    [mainnet.id]: http('https://mainnet.infura.io/v3/6772dc525b264734b1067330708e9d34'),
    [bsc.id]: http('https://bsc-mainnet.infura.io/v3/6772dc525b264734b1067330708e9d34'),
  },
});

const queryClient = new QueryClient();

const Rainbowkit = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          initialChain={mainnet}
          modalSize="compact" //wide,compact
          theme={darkTheme({
            accentColor: "rgba(255, 255, 255, 0.2)",
            accentColorForeground: "white",
            borderRadius: "medium",
            fontStack: "system",
            overlayBlur: "small",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Rainbowkit;
