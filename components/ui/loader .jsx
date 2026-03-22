import Image from "next/image";
export default function Loader() {
  return (
    <>
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes gold_im {
          0% { transform: translate(0); }
          10% { transform: translate(-30px); }
          80% { transform: translate(-30px); }
          100% { transform: translate(0); }
        }
        @keyframes blue_im {
          0% { transform: translate(0); }
          10% { transform: translate(33px); }
          80% { transform: translate(33px); }
          100% { transform: translate(0); }
        }
        .rotate { animation: orbit 2s ease-in-out infinite; transform-origin: center; }
        .goldenn { animation: gold_im 2s ease-in-out infinite; }
        .bluee { animation: blue_im 2s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen flex items-center justify-center">
        <div className="relative h-[100px] w-[100px]">
          <Image className="absolute top-0 left-0 h-[100px] mix-blend-multiply" src="/6.png" alt="" width={100} height={100} />
          <div className="rotate absolute top-0 left-0 h-[100px] mix-blend-multiply">
            <Image className="goldenn mix-blend-multiply" src="/7.png" alt="" width={100} height={100} />
          </div>
          <div className="rotate absolute top-0 left-0 h-[100px] mix-blend-multiply">
            <Image className="bluee mix-blend-multiply" src="/8.png" alt="" width={100} height={100}/>
          </div>
        </div>
      </div>
    </>
  );
}