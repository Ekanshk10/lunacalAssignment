import LeftSide from "./components/LeftSide.jsx";
import RightSide from "./components/RightSide.jsx";
export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center px-6 py-24 gap-6"
      style={{
        background: "linear-gradient(180deg, #373E44 -100%, #191B1F 100%)",
        backdropFilter: "blur(9.837px)",
      }}
    >
      <LeftSide />
      <RightSide />
    </div>
  );
}
