import "./LoadingScreen.scss";
import { For, useState, afterRender } from "nesquick";

const ANIMATION_DURATION = 1500;
const START_DELAY = 700;
const BASH_PROMPT = "llorx@portfolio:~$ ";
const MESSAGES = [
    { text: "npm ci", delay: 0, hasPrompt: true },
    { text: "Installing...", delay: 0, hasPrompt: false },
    { text: "✓ Nesquick installed", delay: 300, hasPrompt: false },
    { text: "npm run build", delay: 400, hasPrompt: true },
    { text: "Compiling...", delay: 400, hasPrompt: false },
    { text: "✓ Build completed successfully", delay: 900, hasPrompt: false },
    { text: "npm run start", delay: 1000, hasPrompt: true },
    { text: "Starting portfolio...", delay: 1100, hasPrompt: false },
];

export function LoadingScreen(props: { onComplete: () => void }) {
    const [ getVisibleMessages, setVisibleMessages ] = useState<number>(0);
    const [ getProgress, setProgress ] = useState(0);
    let terminalBodyRef:HTMLDivElement|null = null;

    // Progress jumps tied to messages
    const progressSteps = [0, 15, 30, 45, 60, 70, 85, 95, 100];

    // Show messages progressively
    MESSAGES.forEach((msg, index) => {
        setTimeout(() => {
            setVisibleMessages(index + 1);
            // Update progress with message
            setProgress(progressSteps[index + 1] || 100);
            afterRender(() => {
                if (terminalBodyRef) {
                    terminalBodyRef.scrollTop = terminalBodyRef.scrollHeight;
                }
            });
        }, START_DELAY + msg.delay);
    });

    // Set initial progress
    setTimeout(() => {
        setProgress(progressSteps[0]);
    }, START_DELAY);

    setTimeout(() => {
        props.onComplete();
    }, START_DELAY + ANIMATION_DURATION + 600);

    return (
        <div class="loading-screen">
            <div class="terminal-window">
                <div class="terminal-header">
                    <div class="terminal-buttons">
                        <span class="btn btn-close"></span>
                        <span class="btn btn-minimize"></span>
                        <span class="btn btn-maximize"></span>
                    </div>
                    <div class="terminal-title">llorx@portfolio:~</div>
                </div>
                <div class="terminal-body" nq:ref={el => terminalBodyRef = el}>
                    <For each={MESSAGES.slice(0, getVisibleMessages())}>
                        {msg => (
                            <div class={`terminal-line ${!msg.hasPrompt ? 'no-prompt' : ''}`} style={{ animationDelay: `${msg.delay}ms` }}>
                                {msg.hasPrompt ? <span class="bash-prompt">{BASH_PROMPT}</span> : null}
                                {msg.text}
                            </div>
                        )}
                    </For>
                    <div class="terminal-line">
                        <span class="terminal-cursor"></span>
                    </div>
                </div>
                <div class="progress-container">
                    <div class="progress-bar">
                        <div class="progress-fill" style={{ width: `${getProgress()}%` }}></div>
                    </div>
                    <div class="progress-text">{getProgress()}%</div>
                </div>
            </div>
        </div>
    );
}
