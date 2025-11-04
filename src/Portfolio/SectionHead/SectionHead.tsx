import type { Children, Props } from "nesquick";

import "./SectionHead.scss";

export function SectionHead(props:Props<{title:Children; subtitle:Children;}>) {
    return <div class="section-head">
        <div class="title">
            {props.title()}
        </div>
        <div class="subtitle">
            {props.subtitle()}
        </div>
    </div>;
}