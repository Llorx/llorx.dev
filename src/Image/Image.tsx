import { useState, type Props } from "nesquick";

import "./Image.scss";

export function Image(props:Props<{src:string, class?:string}>) {
    const [ getVisible, setVisible ] = useState(false);
    return <img
        draggable={false}
        onLoad={() => setVisible(true)}
        src={props.src()}
        class={`image ${getVisible() ? "visible": ""} ${props.class?.() ?? ""}`}
    />;
}