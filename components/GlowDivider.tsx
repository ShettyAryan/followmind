export default function GlowDivider({ dim = false }: { dim?: boolean }) {
  return (
    <div className="px-8 py-0 max-w-6xl mx-auto">
      <div
        className="glow-divider w-full"
        style={
          dim
            ? { background: "linear-gradient(90deg, transparent 0%, rgba(74,158,255,0.15) 50%, transparent 100%)" }
            : undefined
        }
      />
    </div>
  );
}
