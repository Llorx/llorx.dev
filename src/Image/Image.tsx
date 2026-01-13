import { useState } from "nesquick";

import "./Image.scss";

export function Image(props:{src:string, class?:string}) {
    const [ getVisible, setVisible ] = useState(false);
    return <img
        draggable={false}
        onLoad={() => setVisible(true)}
        src={props.src}
        class={`image ${getVisible() ? "visible": ""} ${props.class ?? ""}`}
    />;
}