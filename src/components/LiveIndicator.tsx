const LiveIndicator = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
        <div className="absolute inset-0 w-3 h-3 rounded-full bg-red-500 animate-ping opacity-75" />
      </div>
      <span className="text-xs font-semibold uppercase tracking-widest text-red-400">
        Live
      </span>
    </div>
  );
};

export default LiveIndicator;
