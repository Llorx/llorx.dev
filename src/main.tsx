import { Nesquick, useState } from "nesquick";

import "./main.scss";
import { Portfolio } from "./Portfolio/Portfolio";
import { Intro } from "./Intro/Intro";

function Main() {
    const [ showIntro, setShowIntro ] = useState(false);
    const [ showMain, setShowmain ] = useState(false);
    window.addEventListener("beforeunload", () => {
        // Smooth exit
        setShowmain(false);
    });
    document.addEventListener("DOMContentLoaded", () => {
        setShowmain(true);
        setShowIntro(true);
    });
    return <div class={`main dark ${showMain() ? "show" : ""}`}>
        <Portfolio />
        {showIntro() ? <Intro onAnimationend={() => setShowIntro(false)} /> : null}
    </div>;
}
Nesquick.render(<Main />);