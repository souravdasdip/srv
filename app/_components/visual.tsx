import { useFeatureStore } from "@/store/store";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";

export const Visual = ({ id, img }: { id: string; img: string }) => {
  const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);
  const setFullScreenFeature = useFeatureStore(
    (state) => state.setfullScreenFeature
  );

  return (
    <div
      className={classNames(
        "w-screen h-screen overflow-hidden pointer-events-none opacity-0 fixed inset-0 flex items-center justify-center",
        `visual-${id}`,
        fullScreenFeature && "z-[99999]"
      )}
    >
      {fullScreenFeature && (
        <motion.div
          layoutId={`visual-${id}`}
          className="max-w-6xl h-screen px-4"
        >
          <Image
            className="object-cover h-[100%] w-[100%] rounded-[10px] p-[1px] shadow-lg"
            width={1000}
            height={1000}
            src={img}
            alt="img"
          />
        </motion.div>
      )}

      {/* Back to site button */}
      <button
        onClick={() => setFullScreenFeature(null)}
        className={classNames(
          "back-to-site-btn bg-black text-white px-4 opacity-0 py-2 rounded-full shadow-lg translate-y-[300%] fixed bottom-6 left-1/2 z-10 -translate-x-1/2",
          fullScreenFeature ? "block" : "hidden"
        )}
      >
        Back to site
      </button>
    </div>
  );
};

// export const MusicVisual = ({ id }: { id: string }) => {
//   const fullScreenFeature = useFeatureStore((state) => state.fullScreenFeature);

//   return (
//     <Visual id={id}>
//       {fullScreenFeature && <motion.div layoutId={"visual-img"}></motion.div>}
//     </Visual>
//   );
// };

// export const OtherVisual = ({ id }: { id: string }) => {
//   return (
//     <Visual id={id}>
//       <Image
//         width={700}
//         height={700}
//         src={
//           "https://images.unsplash.com/photo-1704635021570-fd5af2fadf77?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         }
//         alt="img"
//       />
//     </Visual>
//   );
// };
