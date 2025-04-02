"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/sorveteria");
    }, [router]);
	
return (
	<p>Redirecting …</p>
);
}
