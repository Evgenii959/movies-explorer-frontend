import { useState } from "react";

function FilterCheckbox(props) {
    const [isChecked, setIsChecked] = useState(props.checked);

    const handleToggle = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        props.onToggle(newChecked);
        props.onSubmit({ search: props.inputValue });
    };

    return (
        <div className="search__block-placeholder">
            <input
                className="search__switch"
                type="checkbox"
                checked={isChecked}
                onChange={handleToggle}
            />
            <div className="search__placeholder-description">
                Короткометражки
            </div>
        </div>
    );
}

export default FilterCheckbox;
