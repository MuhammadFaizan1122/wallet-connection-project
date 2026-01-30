import { useChainId, useChains } from 'wagmi';

const NetworkBadge = () => {
  const chainId = useChainId();
  const chains = useChains();
  const currentChain = chains.find((c) => c.id === chainId);

  if (!currentChain) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted border border-border text-xs font-medium">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
      <span className="text-foreground">{currentChain.name}</span>
    </div>
  );
};

export default NetworkBadge;
