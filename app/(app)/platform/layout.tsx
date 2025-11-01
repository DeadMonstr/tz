import type {Metadata} from "next";
import "@/styles/globals.css";
import Sidebar from "@/components/Sidebar";



export const metadata: Metadata = {
    title: "Test project",
    description: "Test project for work",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"flex h-dvh"}>
            <Sidebar/>
            <main className={"flex grow"}>
                {children}
            </main>
        </div>
    );
}
