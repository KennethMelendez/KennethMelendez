import nyc from "../Images/nyc.jpg";

export default function PixelBackground() {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
      <img
        src={nyc}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.25 }}
      />
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(30,30,30,0.7) 0%, rgba(14,14,12,0.85) 60%, rgba(14,14,12,0.97) 100%)",
        }}
      />
    </div>
  );
}
