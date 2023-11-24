import dynamic from "next/dynamic";
const DynamicHeader = dynamic(() => import("../components/map"), {
    ssr: false
});
export default function Home() {
    return (
        <DynamicHeader />
    )
}