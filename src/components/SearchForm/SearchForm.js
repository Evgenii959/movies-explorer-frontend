import SearchIcon from "../../images/search-icon.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox.js";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Validation } from "../Validation/validation";

function SearchForm(props) {
    const { register, handleSubmit, setValue } = Validation();
    const [inputValue, setInputValue] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/movies") {
            const savedQuery = localStorage.getItem("queryMovies");
            if (savedQuery) {
                setValue("search", savedQuery);
                setInputValue(savedQuery);
            }
        }
    }, [location.pathname]);

    const useSubmit = (data) => {
        props.onSearch(data.search);
    };

    return (
        <div className="search">
            <div className="search__string">
                <form
                    className="search__input-button"
                    noValidate
                    onSubmit={handleSubmit(useSubmit)}
                >
                    <img
                        className="search__icon"
                        src={SearchIcon}
                        alt="Поиск"
                    />
                    <input
                        className="search__input"
                        placeholder="Фильм"
                        name="search"
                        {...register("search")}
                        value={inputValue || ""}
                        onChange={(e) => setInputValue(e.target.value)}
                        type="text"
                    />
                    <button
                        type="submit"
                        className="search__button"
                        aria-label="Поиск"
                    >
                        Найти
                    </button>
                </form>
                <FilterCheckbox
                    onToggle={props.onToggle}
                    checked={props.checked}
                    onSubmit={useSubmit}
                    inputValue={inputValue}
                />
            </div>
        </div>
    );
}

export default SearchForm;
