import "./Portfolio.scss";
import { Projects } from "./Projects/Projects";
import { Hobbies } from "./Hobbies/Hobbies";

export function Portfolio() {
    function getDeveloperYears() {
        const started = Date.parse("2000-09-05T12:00:00.000Z");
        return Math.floor((Date.now() - started) / (365 * 24 * 60 * 60 * 1000));
    }
    function getProfessionYears() {
        const started = Date.parse("2010-01-01T12:00:00.000Z");
        return Math.floor((Date.now() - started) / (365 * 24 * 60 * 60 * 1000));
    }
    /*
    <div class="personal">
        <div>
            Passionate developer for <strong>{getDeveloperYears()}+</strong> years.
        </div>
        <div>
            Professional developer for <strong>{getProfessionYears()}+</strong> years.
        </div>
    </div>
    */
    return <div class="portfolio">
        <Projects />
        <Hobbies />
    </div>;
}