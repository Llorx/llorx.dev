import "./Intro.scss";

import { ReactIcon } from "../icons/ReactIcon";
import { NodeJSIcon } from "../icons/NodeJSIcon";
import { SqlIcon } from "../icons/SqlIcon";
import { TSIcon } from "../icons/TSIcon";
import { MongoDbIcon } from "../icons/MongoDbIcon";
import { CppIcon } from "../icons/CppIcon";

const LOGO_DELAY = 1200;
const COLUMNS = 11;
const HIDE_DELAY = 700;
const DURATION = 800;
const STEP = HIDE_DELAY / COLUMNS;
const STEPS = new Array(COLUMNS).fill(0).map((_, i) => i * STEP).sort(() => 0.5 - Math.random());

function Title(props:{class:string, delay:number}) {
    return <div class={`title ${props.class}`} style={{animationDelay: `${LOGO_DELAY + props.delay}ms`}}>
        <div>Llorx's Portfolio</div>
        <div class="icons">
            <NodeJSIcon class="icon icon-0 nodejs-icon" />
            <ReactIcon class="icon icon-1 react-icon" />
            <TSIcon class="icon icon-2" />
            <MongoDbIcon class="icon icon-3 mongodb-icon" />
            <SqlIcon class="icon icon-4" />
            <CppIcon class="icon icon-5" />
        </div>
    </div>;
}
export function Intro(props:{onAnimationend:()=>void}) {
    setTimeout(() => {
        props.onAnimationend();
    }, LOGO_DELAY + HIDE_DELAY + DURATION);
    return <div class="intro">
        {new Array(COLUMNS).fill(0).map((_, i) => <Title class={`title title-${i}`} delay={STEPS[i]}></Title>)}
    </div>;
}