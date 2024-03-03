import { useState } from "react"

export function TwitterFollowCard ({ username, name }) {

    const [isFollowing, setIsFollowing] = useState(false)

    const imgSrc = `https://unavatar.io/${username}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassname = isFollowing 
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={imgSrc} 
                    alt="El avatar de midudev" />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-username'>@{username}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassname} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}