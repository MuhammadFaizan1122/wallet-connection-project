import { useAccount } from 'wagmi';
import HeroSection from '@/components/HeroSection';
import WalletInfo from '@/components/WalletInfo';
import SupportedChains from '@/components/SupportedChains';

const Index = () => {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(180, 100%, 50%) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(180, 100%, 50%) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      <div className="container max-w-4xl mx-auto px-4 py-16">
        <HeroSection />

        {isConnected && (
          <div className="space-y-6">
            <WalletInfo />
            <SupportedChains />
          </div>
        )}

        {!isConnected && (
          <div 
            className="glass-card p-8 text-center animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-muted-foreground mb-2">
              Click "Connect Wallet" to get started
            </p>
            <p className="text-sm text-muted-foreground/60">
              MetaMask, WalletConnect, Coinbase Wallet, and more supported
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
