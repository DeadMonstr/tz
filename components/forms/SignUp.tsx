"use client"


import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Checkbox} from "@/components/ui/checkbox";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {signUpAction} from "@/lib/actions";
import {User} from "@/lib/types";


export default function SignUp() {

    const [error, setError] = useState("");
    const router = useRouter();

    const handleSignUp = async (formData: FormData) => {
        setError("");

        const user: User = {
            username: formData.get("username") as string,
            password: formData.get("password") as string
        }


        try {
            const res = await signUpAction(user);
            if (!res.success) {
                setError(res.message);
                return;
            }
            router.push("/platform/orders");
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        }
    };


    return (
        <form action={handleSignUp} className={"w-full flex flex-col gap-5"}>
            <h2 className={"text-red-500"}>{error}</h2>
            <div className={"flex flex-col gap-4 text-white/70"}>
                <Label  htmlFor="username">Username</Label>
                <Input required name={"username"} className={"border-neutral-600"} type="username" id="username" placeholder="Username" />
            </div>
            <div className={"flex flex-col gap-4 text-white/70"}>
                <Label htmlFor="password">Password</Label>
                <Input required name={"password"} className={"border-neutral-600"} type="password" id="password" placeholder="Password" />
            </div>

            {/*<div className={"flex items-center justify-between"}>*/}
            {/*    <div className={" flex gap-4"}>*/}
            {/*        <Checkbox id="remember"/>*/}
            {/*        <Label  className={"text-white"} htmlFor="remember">Remember me</Label>*/}
            {/*    </div>*/}

            {/*    /!*<Link className={"text-blue-500"} href={"/forgot-password"}>Forgot your password?</Link>*!/*/}

            {/*</div>*/}

            <Button className={"w-full bg-blue-500"} type={"submit"} >Sign up</Button>
        </form>
    )
}