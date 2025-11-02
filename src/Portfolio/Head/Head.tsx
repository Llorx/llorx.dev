import type { Children, Props } from "nesquick";

import "./Head.scss";

export function Head(props:Props<{title:Children; subtitle:Children;}>) {
    return <div class="head">
        <div class="title">
            {props.title()}
        </div>
        <div class="subtitle">
            {props.subtitle()}
        </div>
    </div>;
}