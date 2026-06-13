export default function GameBoyFrame() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[200]">
      {/* Top-left corner bracket */}
      <div className="absolute top-4 left-4">
        <div className="w-5 h-[2px] bg-[#ffffff] opacity-50" />
        <div className="w-[2px] h-5 bg-[#ffffff] opacity-50 mt-0" />
      </div>

      {/* Top-right corner bracket */}
      <div className="absolute top-4 right-4 flex flex-col items-end">
        <div className="w-5 h-[2px] bg-[#ffffff] opacity-50" />
        <div className="w-[2px] h-5 bg-[#ffffff] opacity-50" />
      </div>

      {/* Bottom-left corner bracket */}
      <div className="absolute bottom-4 left-4 flex flex-col justify-end">
        <div className="w-[2px] h-5 bg-[#ffffff] opacity-50" />
        <div className="w-5 h-[2px] bg-[#ffffff] opacity-50" />
      </div>

      {/* Bottom-right corner bracket */}
      <div className="absolute bottom-4 right-4 flex flex-col items-end justify-end">
        <div className="w-[2px] h-5 bg-[#ffffff] opacity-50" />
        <div className="w-5 h-[2px] bg-[#ffffff] opacity-50" />
      </div>

      {/* DMG dot-matrix scanline texture */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}
