export default function Popular({category, text}){
    return(
        <div className="popular-item">
            <span className="category">{category}</span>
            <span className="text">{`—${text}`}</span>
        </div>
    )
}