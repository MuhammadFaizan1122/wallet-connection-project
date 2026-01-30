import { useChains } from 'wagmi';

const SupportedChains = () => {
  const chains = useChains();

  return (
    <div 
      className="glass-card p-6 animate-fade-up"
      style={{ animationDelay: '0.4s' }}
    >
      <h2 className="text-xl font-display font-semibold text-foreground mb-6">
        Supported Networks
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {chains.map((chain, index) => (
          <div
            key={chain.id}
            className="p-3 rounded-lg bg-muted/30 border border-border hover:border-primary/50 transition-all duration-300 hover:bg-muted/50 cursor-pointer group"
            style={{ animationDelay: `${0.5 + index * 0.05}s` }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <span className="text-xs font-bold text-primary">
                  {chain.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">{chain.name}</p>
                <p className="text-xs text-muted-foreground">
                  ID: {chain.id}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportedChains;
