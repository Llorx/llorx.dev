import "./Hobbies.scss";
import { SectionHead } from "../SectionHead/SectionHead";
import { HobbyCard } from "./HobbyCard/HobbyCard";
import { VideoIcon } from "../../icons/VideoIcon";
import { Image } from "../../Image/Image";
import { Video } from "../../Video/Video";
import { MountainIcon } from "../../icons/MountainIcon";
import { GamepadIcon } from "../../icons/GamepadIcon";
import { KeyIcon } from "../../icons/KeyIcon";
import { DiceIcon } from "../../icons/DiceIcon";
import { HammerIcon } from "../../icons/HammerIcon";
import { ShoesIcon } from "../../icons/ShoesIcon";
import { LinkIcon } from "../../icons/LinkIcon";
import { GolfIcon } from "../../icons/GolfIcon";
import { TennisIcon } from "../../icons/TennisIcon";
import { FistIcon } from "../../icons/FistIcon";
import { HeartIcon } from "../../icons/HeartIcon";

export function Hobbies() {
    return <div class="hobbies">
        <SectionHead
            title="My hobbies"
            subtitle={<>I believe maintaining a <strong>healthy work-life balance</strong> is key to preventing burnout (<i>Mens sana in corpore sano</i>). Here is a list of activities I enjoy beyond the programming world, even though coding will always be my greatest passion<HeartIcon class="love" /></>}
        />
        <div class="list">
            <HobbyCard
                media={[
                    <Video src="./metalworks-video.mp4"></Video>
                ]}
                icon={<HammerIcon class="redish-icon" />}
                title="Craftworks"
                description="Woodworking, metalworking and creating things with my hands, in general."
            />
            <HobbyCard
                media={[
                    <Image src="./padel-photo1.jpg"></Image>
                ]}
                icon={<TennisIcon class="greenish-icon" />}
                title="Racket sports"
                description="I like almost any kind of racket sport: Tennis, squash, pádel, table tennis... pádel being by weekly pick currently."
            />
            <HobbyCard
                media={[
                    <Image src="./escape-photo1.jpg"></Image>,
                    <Image src="./escape-photo2.jpg"></Image>,
                    <Image src="./escape-photo3.jpg"></Image>
                ]}
                icon={<KeyIcon class="blue-icon" />}
                title="Escape rooms"
                description="I'm lucky that my city has almost a hundred of them, and constantly evolving, so I have an endless source of fun going a couple times a month."
            />
            <HobbyCard
                media={[
                    <Video src="./t34-video.mp4" poster="./t34-video-poster.jpg"></Video>,
                    <Video src="./ny-video.mp4" poster="./ny-video-poster.jpg"></Video>
                ]}
                icon={<VideoIcon class="red-icon" />}
                title="Content creation"
                description={<>Since I got my first video camera when I was a kid, I always created content. My last one being <a class="link" target="_blank" href="https://www.youtube.com/@Microdetalles/shorts">Microdetalles <LinkIcon class="open-icon" /></a>, a YouTube channel with a couple millions of views.</>}
            />
            <HobbyCard
                media={[]}
                icon={<GolfIcon class="purple-icon" />}
                title="Golf"
                description="Skills, outdoor and relaxing. I have no more to ask for."
            />
            <HobbyCard
                media={[]}
                icon={<FistIcon class="pink-icon" />}
                title="Boxing"
                description="I wasn't a fan of boxing at first, but after giving it a try, I grew to love friendly, tactical sparring sessions with friends. Always light and safe."
            />
            <HobbyCard
                media={[]}
                icon={<ShoesIcon class="orange-icon" />}
                title="Dancing"
                description="My all-time favorite non-engineering hobby. When the music hits just right, I can't resist moving my feet to the rythym, even in the grocery line. I specially enjoy dancing to electronic, latin, and funky beats."
            />
            <HobbyCard
                media={[]}
                icon={<DiceIcon class="yellow-icon" />}
                title="Tabletop games"
                description="I like to play a couple times a week to tabletop games with my friends at the games club. Euro games, wargames, Warhammer 40k, role-playing... anything."
            />
            <HobbyCard
                media={[
                    <Image src="./ksp-screen1.jpg"></Image>,
                    <Image src="./ksp-screen2.jpg"></Image>
                ]}
                icon={<GamepadIcon class="purple-icon" />}
                title="Gaming"
                description="And meanwhile I also play computer games. Currently I'm playing FPS games, although my all-time favourite is Kerbal Space Program."
            />
            <HobbyCard
                media={[
                    <Video src="./snow-video.mp4" poster="./snow-video-poster.jpg"></Video>,
                    <Image src="./snow-photo.jpg"></Image>
                ]}
                icon={<MountainIcon class="green-icon" />}
                title="Extreme sports"
                description="Although I don't do extreme sports as often as the previous hobbies, snowboarding and kitesurfing are my top picks right now."
            />
        </div>
    </div>;
}