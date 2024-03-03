import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard
                username="midudev"
                name="Miguel Angel Duran"
            />
            <TwitterFollowCard
                username="tomydaureli23" 
                name="Tomas D'Aureli"
            />
            <TwitterFollowCard 
                username="ezedaureli" 
                name="Ezequiel D'Aureli"
            />
        </section>
    )
}