import SearchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../Movies/FilterCheckbox/FilterCheckbox.js";
import { useEffect, useState } from "react";

function SavedSearchForm(props) {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        const filtered = props.saveMovies.filter(saveCard =>
            saveCard.nameRU.toLowerCase().includes(props.filter.toLowerCase())
        );
        props.setFilteredMovies(filtered);
    };

    return (
        <>
            <form className="search">
                <div className="search__string">
                    <form className="search__input-button">
                        <img
                            className="search__icon"
                            src={SearchIcon}
                            alt="Поиск"
                        />
                        <input
                            className="search__input"
                            placeholder="Фильм"
                            value={props.filter}
                            onChange={props.handleFilterChange}
                        />
                        <span>{errorMessage}</span>
                        <button
                            className="search__button"
                            onClick={handleSubmit}
                        >
                            Найти
                        </button>
                    </form>
                    <FilterCheckbox />
                </div>
            </form>
        </>
    );
}

export default SavedSearchForm;
