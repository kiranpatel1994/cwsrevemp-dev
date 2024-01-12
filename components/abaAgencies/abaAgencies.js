/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useEffect } from "react";

export default function AbaAgencies() {
    useEffect(() => {
        document.body.classList.add("aba-agencies");
        return () => {
            document.body.classList.remove("aba-agencies");
        };
    }, []);
    
    return (
        <main>
            <h1>ABA Page</h1>
        </main>
    );
}