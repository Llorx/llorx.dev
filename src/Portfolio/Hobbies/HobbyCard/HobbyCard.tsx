import { useState, type Children, type JSX, type Props } from "nesquick";

import "./HobbyCard.scss";
import { ChevronLeft } from "../../../icons/ChevronLeft";

export type HobbyCardProps = {
    media:JSX.Element[];
    icon:JSX.Element;
    title:string;
    description:Children;
};
export function HobbyCard(props:Props<HobbyCardProps>) {
    const [ currentElement, _, updateElement ] = useState(0);
    function previousElement() {
        updateElement(element => Math.max(0, element - 1));
    }
    function nextElement() {
        updateElement(element => Math.min(Math.max(0, props.media().length - 1), element + 1));
    }
    let currentTouch:Touch|null = null;
    let currentContainer:HTMLDivElement|null = null;
    function setContainer(el:HTMLDivElement) {
        currentContainer = el;
    }
    function touchStart(event:TouchEvent) {
        if (currentTouch != null) {
            return;
        }
        currentTouch = event.changedTouches.item(0);
    }
    function touchEnd(event:TouchEvent) {
        if (currentTouch != null) {
            for (const touch of event.changedTouches) {
                if (touch.identifier === currentTouch.identifier) {
                    handleTouch(currentTouch, touch);
                    currentTouch = null;
                    break;
                }
            }
        }
    }
    function handleTouch(start:Touch, end:Touch) {
        if (currentContainer) {
            const width = currentContainer.offsetWidth;
            const diff = end.clientX - start.clientX;
            if (Math.abs(diff) > width * 0.1) {
                if (diff < 0) {
                    nextElement();
                } else {
                    previousElement();
                }
            }
        }
    }
    return <div class="hobby">
        <div class="media" ref={setContainer} onTouchstart={touchStart} onTouchend={touchEnd}>
            <div class="elements" style={{left: `${currentElement() * -100}%`}}>{props.media().length === 0 ? <div class="tbd"><div>Media</div><div>to be done</div></div> : props.media().map(media => <div class="element">{media}</div>)}</div>
            <div class={`control left ${currentElement() === 0 ? "disabled" : ""}`} onClick={previousElement}><ChevronLeft /></div>
            <div class={`control right ${currentElement() >= (props.media().length - 1) ? "disabled" : ""}`} onClick={nextElement}><ChevronLeft class="rotate-180" /></div>
        </div>
        <div class="content">
            <div class="title">
                <div class="icon">{props.icon()}</div>
                <div>{props.title()}</div>
            </div>
            <div class="description">{props.description()}</div>
        </div>
    </div>;
}