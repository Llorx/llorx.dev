import type { Props } from "nesquick";

import "./Video.scss";

export function Video(props:Props<{src:string; poster?:string; class?:string}>) {
    return <video
            poster={props.poster?.() || ""}
            controls
            preload="auto"
            class={`video ${props.class?.() ?? ""}`}
        >
        <source src={props.src()} />
        Your browser does not support the video tag.
    </video>;
}