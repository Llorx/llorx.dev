import { Nesquick, useState } from "nesquick";

import "./main.scss";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact/Contact";
import { LoadingScreen } from "./LoadingScreen/LoadingScreen";

function Main() {
    const [ showLoadingScreen, setShowLoadingScreen ] = useState(false);
    const [ showMain, setShowMain ] = useState(false);
    window.addEventListener("beforeunload", () => {
        setShowMain(false);
    });
    document.addEventListener("DOMContentLoaded", () => {
        setShowMain(true);
        setShowLoadingScreen(true);
    });
    return <div class={`main dark ${showMain() ? "show" : ""}`}>
        <Contact />
        <Portfolio />
        {showLoadingScreen() ? <LoadingScreen onComplete={() => {
            setShowLoadingScreen(false);
        }} /> : null}
    </div>;
}
Nesquick.render(<Main />);