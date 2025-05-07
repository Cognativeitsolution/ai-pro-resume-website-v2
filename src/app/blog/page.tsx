import { InnerBanner, Client, Blogs, Reviews, } from "@/components";
import { BannerData, ClientData, blogsData, } from "./data";
import { reviewData } from "../data";

export default function Page() {

    return (
        <>
            <InnerBanner {...BannerData} />
            <Blogs data={blogsData} />
            <Client data={ClientData} />
            <Reviews data={reviewData} />
        </>
    );
}
