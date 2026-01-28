// export function MainStageCard({ stage }: any) {
//     const Icon = stage.icon;

//     return (
//         <div className="flex justify-center mb-12">
//             <div className="w-72 h-72 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-xl flex flex-col items-center justify-center text-white transition-all duration-500">
//                 <Icon size={64} className="mb-4" />
//                 <div className="text-4xl font-bold">{stage.id}</div>
//                 <div className="text-xl font-semibold mt-1">
//                     {stage.title}
//                 </div>
//             </div>
//         </div>
//     );
// }

import Image from "next/image";
import { Stage } from "../app/products/page";

interface Props {
    stage: Stage;
    onClick: () => void;
}

export function MainStageCard({ stage, onClick }: Props) {
    const Icon = stage.icon;

    return (
        <div className="flex justify-center mb-16">
            <div
                onClick={onClick}
                className="
          relative
          w-[420px] h-[420px]
          rounded-3xl
          shadow-2xl
          overflow-hidden
          transition-all
          duration-700
        "
            >
                {/* 🔹 FULL SIZE BACKGROUND IMAGE */}
                <Image
                    src={stage.image}
                    alt={stage.title}
                    fill
                    priority
                    className="object-cover"
                />

                {/* 🔹 DARK GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* 🔹 CONTENT */}
                <div className="relative z-10 h-full flex flex-col items-center justify-end pb-8 text-white text-center px-6">
                    <Icon size={40} className="mb-3 opacity-90" />

                    <div className="text-4xl font-bold">
                        {stage.id}
                    </div>

                    <div className="text-2xl font-semibold mt-1">
                        {stage.title}
                    </div>
                </div>
            </div>
        </div>
    );
}


