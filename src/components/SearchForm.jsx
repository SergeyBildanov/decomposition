export default function SearchForm({icon, menuList}){
    return(
        <div className="search-container">
            <img src={icon} alt="search icon" className="search-icon"/>
            <div className="search-wrapper">
                <ul className="menu">
                    {menuList.map((item, index)=>{
                            return(
                                <li className="menu-item" key={index}>
                                    <a href="#0">{item}</a>
                                </li>
                            )
                        })}
                </ul>
                <form action="search" className="search-form" name="search">
                    <input type="text" className="search-input" />
                    <button className="search-button">Поиск</button>
                </form>
            </div>
        </div>
    )
}