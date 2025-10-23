import "./Portfolio.scss";
import { BookIcon } from "../icons/BookIcon.tsx";
import { CodeIcon } from "../icons/CodeIcon.tsx";
import { Card, CardTags, type CardProps } from "./Card/Card.tsx";
import { CubesIcon } from "../icons/CubesIcon.tsx";
import { ListCheckIcon } from "../icons/ListCheckIcon.tsx";
import type { JSX, Props } from "nesquick/jsx-runtime";
import { MapIcon } from "../icons/MapIcon.tsx";
import { PhoneIcon } from "../icons/PhoneIcon.tsx";
import { FileCheckIcon } from "../icons/FileCheckIcon.tsx";
import { VideoIcon } from "../icons/VideoIcon.tsx";
import { StopwatchIcon } from "../icons/StopwatchIcon.tsx";
import { ScrewdriverWrenchIcon } from "../icons/ScrewdriverWrenchIcon.tsx";
import { GamepadIcon } from "../icons/GamepadIcon.tsx";
import { DiceIcon } from "../icons/DiceIcon.tsx";
import { BasketballIcon } from "../icons/BasketballIcon.tsx";
import { TabIcon } from "../icons/TabIcon.tsx";
import { StarIcon } from "../icons/StarIcon.tsx";
import { HelpingIcon } from "../icons/HelpingIcon.tsx";
import { SatelliteIcon } from "../icons/SatelliteIcon.tsx";
import { CoinIcon } from "../icons/CoinIcon.tsx";
import { SMSIcon } from "../icons/SMSIcon.tsx";
import { PlayCircle } from "../icons/PlayCircle.tsx";
import { ArrowsLineIcon } from "../icons/ArrowsLineIcon.tsx";
import { MinimizeIcon } from "../icons/MinimizeIcon.tsx";
import { KeyboardIcon } from "../icons/KeyboardIcon.tsx";
import { TwoArrowsIcon } from "../icons/TwoArrowsIcon.tsx";
import { DatabaseIcon } from "../icons/DatabaseIcon.tsx";

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
        <div class="head">
            <div class="title">
                My projects
            </div>
            <div class="subtitle">
                Explore a <strong>curated selection of projects</strong> spanning libraries, tools, games, and experimental work. Each project represents a unique challenge and innovative solution.
            </div>
        </div>
        <div class="projects">
            <Section
                class="libraries"
                title="Libraries"
                subtitle="Carefully crafted libraries, with love."
                icon={<BookIcon />}
                projects={[{
                    icon: <CodeIcon />,
                    title: "nesquick",
                    repo: "Llorx/nesquick",
                    description: ["React-like web rendering library, but faster than react.", "This website is entirely done in nesquick.", "Zero dependencies."],
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript ]
                }, {
                    icon: <CubesIcon />,
                    title: "iso-bench",
                    repo: "Llorx/iso-bench",
                    description: ["Benchmarking tool that isolates contexts to avoid V8 optimization pollution.", "Zero dependencies."],
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript ]
                }, {
                    icon: <ListCheckIcon />,
                    title: "arrange-act-assert",
                    repo: "Llorx/arrange-act-assert",
                    description: ["Testing framework where tests follow the Arrange/Act/Assert pattern by design.", "Zero dependencies."],
                    links: [{
                        label: "How I Created My Own Testing Framework",
                        link: "https://medium.com/@Llorx/how-i-created-my-own-testing-framework-13d998ef5c73"
                    }, {
                        label: "The Golden Rule",
                        link: "https://github.com/goldbergyoni/javascript-testing-best-practices?tab=readme-ov-file#section-0%EF%B8%8F%E2%83%A3-the-golden-rule"
                    }],
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript ]
                }, {
                    icon: <FileCheckIcon />,
                    title: "persistency",
                    repo: "Llorx/persistency",
                    description: ["Key-value library that reduces data corruption chances to virtually zero when saving/updating data to disk.", "Zero dependencies."],
                    links: [{
                        label: "How I created this Crash-Safe Persistence System",
                        link: "https://medium.com/@Llorx/this-one-flaw-could-destroy-your-data-an-analysis-on-resilient-data-persistence-node-js-cd33d8835346"
                    }],
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript ]
                }, {
                    icon: <MinimizeIcon />,
                    title: "bitpack",
                    description: ["Library to serialize data to the minimum representable bit possible following a schema, reducing serialization size and improving performance.", "Faster than protobuf.js and with smaller payload results.", "Zero dependencies."],
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript ]
                }, {
                    icon: <TwoArrowsIcon />,
                    title: "pacopack",
                    repo: "Llorx/pacopack",
                    description: ["Library to serialize schemaless data but faster than JSON native methods.", "Zero dependencies."],
                    links: [{
                        label: "Performance details",
                        link: "https://github.com/Llorx/pacopack/blob/main/peformance.md"
                    }],
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript ]
                }, {
                    icon: <KeyboardIcon />,
                    title: "streamdeck",
                    description: "Library to help create Elgato's Stream Deck interfaces and connect physical buttons to scripts.",
                    tags: [ CardTags.NodeJS, CardTags.TypeScript ]
                }, {
                    icon: <DatabaseIcon />,
                    title: "realtime-lmdb",
                    description: "Wrapper over LMDB to create a blazing fast realtime key-store database.",
                    tags: [ CardTags.NodeJS, CardTags.TypeScript, CardTags.CPP ]
                }]}
            />
            <Section
                class="tools"
                title="Tools"
                subtitle="Productivity and utility applications."
                icon={<ScrewdriverWrenchIcon />}
                projects={[{
                    icon: <MapIcon />,
                    title: "gps-tracker",
                    description: "On-field camera operator tracker over a map, with labelling, time and track controls. Connected to the production software to show on-screen information in realtime.",
                    tags: [ CardTags.NodeJS, CardTags.TypeScript, CardTags.HTML5 ]
                }, {
                    icon: <PhoneIcon />,
                    title: "voip-central",
                    description: "VoIP manager to connect field operators and the producer between them, with auto-redial, individual input-output options and multiple remote session management.",
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript, CardTags.HTML5 ]
                }, {
                    icon: <VideoIcon />,
                    title: "liveu-manager",
                    description: "Improved LiveU Solo and lu-central manager, all in one place. With a compact interface for quick access to all the needed features.",
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript, CardTags.HTML5 ]
                }, {
                    icon: <StopwatchIcon />,
                    title: "race-times",
                    description: "Ranking connector for multiple race tracking systems, connected to the production software to render rankings in realtime.",
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript, CardTags.HTML5 ]
                }, {
                    icon: <PlayCircle />,
                    title: "YouTube AF",
                    description: "Sync YouTube videos with your friends, so everyone watches the same scene at the same time while commenting over it, like everyone watching a single screen in a room.",
                    tags: [ CardTags.NodeJS, CardTags.ZeroDependencies, CardTags.TypeScript, CardTags.HTML5 ]
                }, {
                    icon: <ArrowsLineIcon class="rotate-90" />,
                    title: "rebond",
                    description: "Multiple unstable WAN connections broadcaster to always have the best latency and bandwidth possible as long as a single WAN connection is alive.",
                    tags: [ CardTags.ZeroDependencies, CardTags.Rust, CardTags.CPP ]
                }]}
            />
            <Section
                class="games"
                title="Games"
                subtitle="Interactive entertainment."
                icon={<GamepadIcon />}
                projects={[{
                    icon: <DiceIcon />,
                    title: "Parchís",
                    description: ["Spanish ludo-like multiplayer game featuring leaderboards, coin management, betting system, friedlists, chat sessions and an avatar designer.", "10k+ monthly users back in 2010."]
                }, {
                    icon: <TabIcon />,
                    title: "Alter Tap",
                    description: "Small skill game where you have to tap the screen alternativaly (or arrow keys) to skip through obstacles."
                }, {
                    icon: <BasketballIcon />,
                    title: "Curveball",
                    description: "Physics game in Unreal Engine where two teams have to score using a ball that can spin applying the Magnus effect."
                }]}
            />
            <Section
                class="extra"
                title="Extra"
                subtitle="Special projects and experimental work."
                icon={<StarIcon />}
                projects={[{
                    icon: <HelpingIcon />,
                    title: "Codementor",
                    description: ["I mentor junior and senior developers to grow into exceptional engineers.", "5 out of 5 stars in 100+ reviews."]
                }, {
                    icon: <SatelliteIcon />,
                    title: "Earth & Space Weather",
                    description: "I received an honour mention for my 'Earth & Space Weather' realtime data channel in the discontinued Satori data analytics platform."
                }, {
                    icon: <CoinIcon />,
                    title: "canvascoin",
                    description: "Crypto coin where I implemented in my own blockchain a Proof of Stake algorithm that I designed."
                }, {
                    icon: <SMSIcon />,
                    title: "Zas Mobile",
                    description: ["A legacy platform for users to buy digital content by sending SMS's to premium short numbers. Created when micropayments with smartphones didn't exist.", "5k+ monthly users."]
                }]}
            />
        </div>
    </div>;
}

function Section(props:Props<{class:string; title:string; subtitle:string; icon:JSX.Element; projects:CardProps[];}>) {
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
            {props.projects().map(props => <Card {...props}/>)}
        </div>
    </div>;
}