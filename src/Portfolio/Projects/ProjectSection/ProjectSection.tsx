import type { JSX, Props } from "nesquick";

import "./ProjectSection.scss";
import { ProjectCard, type ProjectCardProps } from "../ProjectCard/ProjectCard";

export function ProjectSection(props:Props<{class:string; title:string; subtitle:string; icon:JSX.Element; projects:ProjectCardProps[];}>) {
    function getColumns() {
        const length = props.projects().length;
        const multipleOfTwo = length % 2 === 0;
        const multipleOfThree = length % 3 === 0;
        if (multipleOfTwo) {
            if (multipleOfThree) {
                return "3-2-1";
            } else {
                return "2-1";
            }
        } else if (length === 1) {
            return "1";
        } else {
            return "3-1";
        }
    }
    return <div class={`section ${props.class()}`}>
        <div class="title">
            <div class="icon">
                {props.icon()}
            </div>
            <div class="text">
                <div class="title">
                    {props.title()}
                </div>
                <div class="subtitle">
                    {props.subtitle()}
                </div>
            </div>
        </div>
        <div class={`cards columns-${getColumns()}`}>
            {props.projects().map(props => <ProjectCard {...props}/>)}
        </div>
    </div>;
}