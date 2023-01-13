import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
    return (
        <section className="App">
            <TwitterFollowCard isFollowing userName="midudev" name="Miguel Angel Durum" />
            <TwitterFollowCard isFollowing={false} userName="7hells" name="Usuario Anonimo" />
            <TwitterFollowCard isFollowing userName="socdimecres" name="Netflix Actriz" />
            <TwitterFollowCard isFollowing userName="dramaqueen" name="La Reinazzz" />
            <TwitterFollowCard isFollowing={false} userName="posello" name="El del LOL" />
        </section>
    );
}
