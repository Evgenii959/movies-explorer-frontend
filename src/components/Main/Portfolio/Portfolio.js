function Portfolio() {
    return (
        <>
            <p className="portfolio__title">Портфолио</p>
            <nav className="portfolio__list-transit">
                <li className="portfolio__transit">
                    Статичный сайт
                    <span className="portfolio__arrow">&#8594;</span>
                </li>
                <li className="portfolio__transit">
                    Адаптивный сайт
                    <span className="portfolio__arrow">&#8594;</span>
                </li>
                <li className="portfolio__transit">
                    Одностраничное приложение
                    <span className="portfolio__arrow">&#8594;</span>
                </li>
            </nav>
        </>
    );
}

export default Portfolio;
