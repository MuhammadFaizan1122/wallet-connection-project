import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'Web3 Wallet Demo',
  projectId: 'demo-project-id', // Replace with your WalletConnect project ID for production
  chains: [mainnet, polygon, optimism, arbitrum, base, sepolia],
  ssr: false,
});
