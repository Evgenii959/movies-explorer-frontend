import SearchIcon from "../../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js"

function SearchForm() {
    return (
        <>
            <form className="search">
                <div className="search__string">
                    <div className="search__input-button">
                        <img
                            className="search__icon"
                            src={SearchIcon}
                            alt="Поиск"
                        />
                        <input className="search__input" placeholder="Фильм" />
                        <button className="search__button">Найти</button>
                    </div>
                    <FilterCheckbox />
                </div>
            </form>
        </>
    );
}

export default SearchForm;
