export default function NewsItem({icon, text, link}){
    return(
        <div className="news-item">
            <img src={icon} alt="news icon" className="news-icon" />
            <a href={link} className="news-link">{text}</a>
        </div>
    )
}