import type { Children } from "nesquick";

import "./SectionHead.scss";

export function SectionHead(props:{title:Children; subtitle:Children;}) {
    return <div class="section-head">
        <div class="title">
            {props.title}
        </div>
        <div class="subtitle">
            {props.subtitle}
        </div>
    </div>;
}