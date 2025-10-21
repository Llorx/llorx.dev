import { type Props } from "nesquick";

import "./Intro.scss";

import { ReactIcon } from "../icons/ReactIcon";
import { NodeJSIcon } from "../icons/NodeJSIcon";
import { SqlIcon } from "../icons/SqlIcon";
import { TSIcon } from "../icons/TSIcon";
import { MongoDbIcon } from "../icons/MongoDbIcon";
import { CppIcon } from "../icons/CppIcon";

export function Intro({onAnimationend}:Props<{onAnimationend:()=>void}>) {
    return <div onAnimationend={event => event.target === event.currentTarget && onAnimationend()} class="intro">
        <div class="line1 shadow"></div>
        <div class="line2"></div>
        <div class="line3 shadow"></div>
        <div class="content">
            <div>Llorx's Portfolio</div>
            <div class="photo">
                <NodeJSIcon class="icon-0 nodejs-icon" />
                <ReactIcon class="icon-1 react-icon" />
                <TSIcon class="icon-2" />
                <MongoDbIcon class="icon-3" />
                <SqlIcon class="icon-4" />
                <CppIcon class="icon-5" />
            </div>
        </div>
    </div>;
}