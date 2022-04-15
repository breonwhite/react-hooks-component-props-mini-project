import React from "react";

function Article({
    title,
    date = "January 1, 1970",
    preview,
    minutes,
}) {
    
    function MinutesToRead(minutes) {
        const coffeeEmoji = "☕️";
        
        if (minutes < 30) {
            let emojiTotal = (Math.round(minutes /5) * 5);
            return (`${coffeeEmoji.repeat(emojiTotal)} ${minutes} min to read`);
        } else if (minutes > 30) {
            let emojiTotal = (Math.round(minutes /10) * 10);
            return (`${coffeeEmoji.repeat(emojiTotal)} ${minutes} min to read`);
        }
    };
    
    return (
        <article>
            <h3>{title}</h3>
                <small>
                    {date}
                    {MinutesToRead(minutes)}
                </small>
                <p>{preview}</p>
        </article>
    );
}

export default Article;