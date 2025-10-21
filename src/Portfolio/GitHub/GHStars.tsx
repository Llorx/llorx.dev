import { useState, type Props } from "nesquick";

import "./GHStars.scss";
import { GitHubIcon } from "../../icons/GitHubIcon";
import { StarIcon } from "../../icons/StarIcon";

function asyncTimeout(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
export function GHStars(props:Props<{class?:string; repo:string}>) {
    const [ getStars, setStars ] = useState<number|null>(null);
    async function loadStars() {
        let retries = 0;
        while (retries++ < 5) {
            try {
                const res = await (await fetch(`https://api.github.com/repos/${props.repo()}`)).json();
                if (!res || !("stargazers_count" in res) || typeof res.stargazers_count !== "number") {
                    throw new Error("Invalid json");
                }
                setStars(res.stargazers_count);
                return;
            } catch (e) {
                await asyncTimeout(3000);
            }
        }
        setStars(-1);
    }
    function renderStars() {
        const stars = getStars();
        if (stars == null) {
            return "-";
        }
        if (stars < 0) {
            return "X";
        }
        return stars;
    }
    loadStars();
    return <a target="blank" href={`https://github.com/${props.repo()}`} class={`github-stars ${props.class?.() || ""}`}>
        <GitHubIcon class="github-icon" />
        <StarIcon class="star-icon" />
        {renderStars()}
    </a>;
}