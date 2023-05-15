import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";
export function App() {
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo H.',
            isFollowing: false
        },
        {
            userName: 'PacoHdezs',
            name: 'Paco Hdez',
            isFollowing: true
        },
        {
            userName: 'TMChein',
            name: 'Tomas',
            isFollowing: false
        }
    ]
    return (
        <section className="App">
            {
                users.map(({ userName, name, isFollowing }) =>
                (
                    <TwitterFollowCard
                        userName={userName}
                        isFollowing={isFollowing}
                        key={userName}
                    >
                        {name}
                    </TwitterFollowCard>
                )
                )
            }
        </section>
    );
}
