import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
    arbitrum,
    base,
    mainnet,
    optimism,
    polygon,
    sepolia,
    bsc,
    bscTestnet
} from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: 'RainbowKit App',
    projectId: '7b773f71de40794cd5c3df797884bbb5',
    chains: [
        mainnet,
        polygon,
        optimism,
        arbitrum,
        base,
        bsc,
        sepolia,
        bscTestnet
    ],
    ssr: true,
});