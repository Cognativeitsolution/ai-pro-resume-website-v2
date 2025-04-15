import Client1 from "media/images/client-1.svg";
import Client2 from "media/images/client-2.svg";
import Client3 from "media/images/client-3.svg";
import Client4 from "media/images/client-4.svg";
import Client5 from "media/images/client-5.svg";
import Client6 from "media/images/client-6.svg";
import Client7 from "media/images/client-7.svg";
import Client8 from "media/images/client-8.svg";
import Client9 from "media/images/client-9.svg";
import Client10 from "media/images/client-10.svg";
import Client11 from "media/images/client-11.svg";


export const BannerData = {
    user: { token: "exampleToken" },
    subtitle: "Careers",
    title: (
        <>
            Innovate Your Career Path
            <br className="hidden lg:block" /> Explore Rewarding opportunities with AI Pro Resume
        </>
    ),
    description: (
        <>
            Join our dynamic team at AI Pro Resume and be at the forefront ofartificial intelligence innovation. With cutting-edge technology <br className="hidden lg:block" /> and a collaborative, forward-thinking work atmosphere, you can shape the future of resumes and job success.
        </>
    ),
};


export const CareerData = {
    title: (
        <>
            Revitalize Your Career Journey,
            <br className="hidden lg:block" /> Discover Fulfilling Prospects with AI Pro Resume
        </>
    ),
    apply: (
        <>
            Apply For
        </>
    ),
};


const clientList = [
    { image: Client1, alt: "our-client 1" },
    { image: Client2, alt: "our-client 2" },
    { image: Client3, alt: "our-client 3" },
    { image: Client4, alt: "our-client 4" },
    { image: Client5, alt: "our-client 5" },
    { image: Client6, alt: "our-client 6" },
    { image: Client7, alt: "our-client 7" },
    { image: Client8, alt: "our-client 8" },
    { image: Client9, alt: "our-client 9" },
    { image: Client10, alt: "our-client 10" },
    { image: Client11, alt: "our-client 11" },
];

export const ClientData = {
    title: "Our Valuable Clients",
    description: (
        <>
            Our Clients are our top priority and we are committed to providing them <br className="hidden lg:block" /> best service.
        </>
    ),
    clientList: clientList

}
