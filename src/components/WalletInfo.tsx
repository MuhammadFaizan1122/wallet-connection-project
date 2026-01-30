import { useAccount, useChainId, useChains } from 'wagmi';
import { useBalance } from 'wagmi';
import { formatUnits } from 'viem';
import { Wallet, Activity, Coins, Network } from 'lucide-react';

const WalletInfo = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const chains = useChains();
  const { data: balance } = useBalance({ address });

  const currentChain = chains.find((c) => c.id === chainId);

  if (!isConnected) return null;

  const formatAddress = (addr: string) => 
    `${addr.slice(0, 6)}...${addr.slice(-4)}`;

  const stats = [
    {
      icon: Wallet,
      label: 'Address',
      value: address ? formatAddress(address) : 'N/A',
    },
    {
      icon: Network,
      label: 'Network',
      value: currentChain?.name || 'Unknown',
    },
    {
      icon: Coins,
      label: 'Balance',
      value: balance ? `${parseFloat(formatUnits(balance.value, balance.decimals)).toFixed(4)} ${balance.symbol}` : '0.0000',
    },
    {
      icon: Activity,
      label: 'Status',
      value: 'Connected',
    },
  ];

  return (
    <div className="glass-card p-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
      <h2 className="text-xl font-display font-semibold text-foreground mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        Wallet Details
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="p-4 rounded-lg bg-muted/50 border border-border hover:border-primary/50 transition-colors duration-300"
            style={{ animationDelay: `${0.3 + index * 0.1}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <stat.icon className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="text-sm font-medium text-foreground mt-0.5 font-mono">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WalletInfo;
