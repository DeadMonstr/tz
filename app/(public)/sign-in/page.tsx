
import Image from "next/image";
import bg from "@/public/images/bg.jpg"
import Link from "next/link";
import SignIn from "@/components/forms/SignIn";
import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "Sign In",
    description: "Sign In",
};



export default function SignInPage() {

    return (
        <section className={"w-full h-dvh flex "}>
            <div className={"w-[50%] h-full bg-black p-5 flex flex-col gap-5"}>
                <header>
                    <h1>
                        Logo
                    </h1>
                    <div>
                    </div>
                </header>

                <main className={"w-full flex flex-col items-center justify-center  grow"}>

                    <div className={"w-[25rem] flex flex-col gap-3"}>
                        <h1 className={"text-3xl text-white font-bold"}>Sign in</h1>
                        <h2 className={"text-white"}>Don&apos;t have an account? <Link className={"text-blue-400"} href={"/sign-up"}>Sign up!</Link></h2>

                        <div className={'flex items-center justify-center gap-2 text-white/50'}>
                            <hr className={"border-white/40 w-full"}/>
                            <span>or</span>
                            <hr className={"border-white/40  w-full"}/>
                        </div>

                        <SignIn/>

                    </div>

                </main>
            </div>
            <div className={"w-[50%] h-full relative"}>
                <Image src={bg} alt={"Sand image"} layout={"fill"} objectFit={"cover"} />
            </div>
        </section>
    )
}
