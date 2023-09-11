// import { useState } from 'react';
// import * as ToggleGroup from '@radix-ui/react-toggle-group';
// import {
//     AlignCenterIcon,
//     AlignLeftIcon,
//     AlignRightIcon,
//     BoxIcon,
// } from 'lucide-solid';

// type AlignValues = 'left' | 'center' | 'right';

const Misc = () => {
    return null;
    // const [align, setAlign] = useState<AlignValues>('left');

    // return (
    //     <>
    //         <div className="mb-2">Uncontrolled</div>
    //         <div className="mb-8">
    //             <ToggleGroup.Root
    //                 aria-label="Text alignment"
    //                 className="inline-flex border border-neutral-300 bg-amber-800 rounded-md shadow-md"
    //                 defaultValue="left"
    //                 type="single"
    //             >
    //                 <ToggleGroup.Item
    //                     aria-label="Left aligned"
    //                     className="data-[state=on]:bg-red-800 rounded-l-md focus:border focus:border-fuchsia-700"
    //                     value="left"
    //                 >
    //                     <AlignLeftIcon />
    //                 </ToggleGroup.Item>
    //                 <ToggleGroup.Item
    //                     aria-label="Center aligned"
    //                     className="data-[state=on]:bg-red-800 focus:border focus:border-fuchsia-700"
    //                     value="center"
    //                 >
    //                     <AlignCenterIcon />
    //                 </ToggleGroup.Item>
    //                 <ToggleGroup.Item
    //                     aria-label="Right aligned"
    //                     className="data-[state=on]:bg-red-800 rounded-r-md focus:border focus:border-fuchsia-700"
    //                     value="right"
    //                 >
    //                     <AlignRightIcon />
    //                 </ToggleGroup.Item>
    //             </ToggleGroup.Root>
    //         </div>

    //         <div className="mb-2">Controlled</div>
    //         <div className="mb-8">
    //             <ToggleGroup.Root
    //                 aria-label="Text alignment"
    //                 className="inline-flex border border-neutral-300 bg-amber-800 rounded-md shadow-md"
    //                 onValueChange={(value: AlignValues) => {
    //                     if (value) setAlign(value);
    //                 }}
    //                 type="single"
    //                 value={align}
    //             >
    //                 <ToggleGroup.Item
    //                     aria-label="Left aligned"
    //                     className="data-[state=on]:bg-red-800 rounded-l-md focus:border focus:border-fuchsia-700"
    //                     value="left"
    //                 >
    //                     <AlignLeftIcon />
    //                 </ToggleGroup.Item>
    //                 <ToggleGroup.Item
    //                     aria-label="Center aligned"
    //                     className="data-[state=on]:bg-red-800 focus:border focus:border-fuchsia-700"
    //                     value="center"
    //                 >
    //                     <AlignCenterIcon />
    //                 </ToggleGroup.Item>
    //                 <ToggleGroup.Item
    //                     aria-label="Right aligned"
    //                     className="data-[state=on]:bg-red-800 rounded-r-md focus:border focus:border-fuchsia-700"
    //                     value="right"
    //                 >
    //                     <AlignRightIcon />
    //                 </ToggleGroup.Item>
    //             </ToggleGroup.Root>
    //         </div>

    //         {/* hero icons: adjustments-vertical */}
    //         <svg
    //             className="w-6 h-6"
    //             fill="none"
    //             stroke="currentColor"
    //             strokeWidth={1.5}
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //         >
    //             <path
    //                 d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
    //                 strokeLinecap="round"
    //                 strokeLinejoin="round"
    //             />
    //         </svg>

    //         <BoxIcon className="h-10 w-10" strokeWidth="1" />
    //     </>
    // );
};

export default Misc;
