import "./Contact.scss";

export function Contact() {
    function getDeveloperYears() {
        const started = Date.parse("2000-09-05T12:00:00.000Z");
        return Math.floor((Date.now() - started) / (365 * 24 * 60 * 60 * 1000));
    }
    return <div class="contact">
        <div>Passionate dev for <strong>{getDeveloperYears()}+</strong> years.</div>
        <a target="_blank" class="mailto" href="mailto:dallorx@gmail.com">dallorx@gmail.com</a>
    </div>;
}