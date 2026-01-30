import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Hexagon, Sparkles, Shield, Zap } from 'lucide-react';

const HeroSection = () => {
  const features = [
    { icon: Shield, label: 'Secure', desc: 'Non-custodial' },
    { icon: Zap, label: 'Fast', desc: 'Instant connect' },
    { icon: Sparkles, label: 'Multi-chain', desc: '6+ networks' },
  ];

  return (
    <div className="relative text-center mb-12">
      {/* Background glow effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute top-1/2 right-1/4 w-[200px] h-[200px] bg-neon-pink/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Logo */}
      <div className="inline-flex items-center justify-center mb-8 animate-fade-up">
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow" />
          <div className="relative p-4 rounded-2xl gradient-border bg-card">
            <Hexagon className="w-12 h-12 text-primary" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* Title */}
      <h1 
        className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 animate-fade-up"
        style={{ animationDelay: '0.1s' }}
      >
        <span className="gradient-text">Web3</span>{' '}
        <span className="text-foreground">Wallet</span>
      </h1>

      {/* Subtitle */}
      <p 
        className="text-lg text-muted-foreground max-w-md mx-auto mb-8 animate-fade-up"
        style={{ animationDelay: '0.2s' }}
      >
        Connect your MetaMask wallet securely with RainbowKit & wagmi integration
      </p>

      {/* Features */}
      <div 
        className="flex justify-center gap-6 mb-10 animate-fade-up"
        style={{ animationDelay: '0.3s' }}
      >
        {features.map((feature) => (
          <div key={feature.label} className="flex flex-col items-center gap-1">
            <div className="p-2 rounded-lg bg-muted/50 border border-border">
              <feature.icon className="w-4 h-4 text-primary" />
            </div>
            <span className="text-xs font-medium text-foreground">{feature.label}</span>
            <span className="text-xs text-muted-foreground">{feature.desc}</span>
          </div>
        ))}
      </div>

      {/* Connect Button */}
      <div 
        className="flex justify-center animate-fade-up"
        style={{ animationDelay: '0.4s' }}
      >
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            mounted,
          }) => {
            const ready = mounted;
            const connected = ready && account && chain;

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none',
                  },
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        onClick={openConnectModal}
                        className="group relative px-8 py-4 rounded-xl font-display font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 neon-glow"
                        style={{
                          background: 'linear-gradient(135deg, hsl(180, 100%, 50%) 0%, hsl(270, 60%, 60%) 100%)',
                        }}
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          Connect Wallet
                          <Sparkles className="w-4 h-4" />
                        </span>
                      </button>
                    );
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        onClick={openChainModal}
                        className="px-6 py-3 rounded-xl bg-destructive text-destructive-foreground font-semibold"
                      >
                        Wrong network
                      </button>
                    );
                  }

                  return (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={openChainModal}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-muted border border-border hover:border-primary/50 transition-colors font-medium text-sm"
                      >
                        {chain.hasIcon && chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            className="w-5 h-5 rounded-full"
                          />
                        )}
                        <span className="hidden sm:inline">{chain.name}</span>
                      </button>

                      <button
                        onClick={openAccountModal}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 neon-glow"
                        style={{
                          background: 'linear-gradient(135deg, hsl(180, 100%, 50%) 0%, hsl(270, 60%, 60%) 100%)',
                          color: 'hsl(225, 25%, 6%)',
                        }}
                      >
                        {account.displayName}
                        {account.displayBalance && (
                          <span className="hidden sm:inline opacity-80">
                            ({account.displayBalance})
                          </span>
                        )}
                      </button>
                    </div>
                  );
                })()}
              </div>
            );
          }}
        </ConnectButton.Custom>
      </div>
    </div>
  );
};

export default HeroSection;
