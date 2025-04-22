import Image from "next/image";
// ===============
import { AutoScrollSlider } from "@/components";
// ===============

type BannerProps = {
    title?: string;
    icons?: any[];
    anyClass?: string;
};

const IconSlider = (props: BannerProps) => {
    const { title, icons = [], anyClass } = props;
    return (
        <>
            <section className="py-5 md:py-10">
                <div className="container">
                    <div>
                        <h2 className="text-[26px] md:text-[30px] lg:text-[40px] leading-[36px] md:leading-[40px] lg:leading-[50px] font-semibold text-zinc-800 text-center">
                            {title}
                        </h2>
                        <div className="overflow-hidden mt-10">
                            <AutoScrollSlider>
                                {icons.map((src, index) => (
                                    <div key={index} className="grow-0 shrink-0 basis-[220px] min-w-0 pl-4">
                                        <Image
                                            src={src}
                                            alt="Customer Icon"
                                            priority
                                            className={`aspect-[15/4] object-contain w-[150px] ${anyClass}`}
                                        />
                                    </div>
                                ))}
                            </AutoScrollSlider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default IconSlider;
