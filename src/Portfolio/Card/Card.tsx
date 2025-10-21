import type { JSX, Props } from "nesquick";

import "./Card.scss";
import { GHStars } from "../GitHub/GHStars";
import { LinkIcon } from "../../icons/LinkIcon";

export type CardProps = {
    icon:JSX.Element;
    title:string;
    description:string|string[];
    repo?:string;
    links?:{
        label:string;
        link:string;
    }[];
};
export function Card(props:Props<CardProps>) {
    function getDescription() {
        const description = props.description();
        if (Array.isArray(description)) {
            return description.map(desc => <div class="text">{desc}</div>);
        }
        return <div class="text">{description}</div>;
    }
    return <div class="card">
        <div class="header">
            <div class="icon-container">
                <div class="icon">{props.icon()}</div>
            </div>
            {props.repo ? <GHStars class="stars" repo={props.repo()}/> : null}
        </div>
        <div class="title">
            {props.title()}
        </div>
        <div class="description">
            {getDescription}
        </div>
        <div class="links">
            {props.links?.().map((link, i) => <div class="link">
                <a target="_blank" href={link.link} class="link"><span class="position">{i + 1}.</span> {link.label}</a>
                <LinkIcon class="out-icon" />
            </div>)}
        </div>
    </div>;
}