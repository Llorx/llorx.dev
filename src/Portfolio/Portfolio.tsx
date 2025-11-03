import "./Portfolio.scss";
import { Projects } from "./Projects/Projects";
import { Hobbies } from "./Hobbies/Hobbies";

export function Portfolio() {
    return <div class="portfolio">
        <Projects />
        <Hobbies />
    </div>;
}