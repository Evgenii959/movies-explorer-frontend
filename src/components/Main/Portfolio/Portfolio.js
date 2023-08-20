function Portfolio() {
    return (
        <>
            <p className="portfolio__title">Портфолио</p>
            <nav className="portfolio__list-transit">
                <a
                    href="https://www.airbnb.ru/"
                    className="portfolio__transit"
                    target="Airnbnb"
                >
                    Статичный сайт
                    <span className="portfolio__arrow">&#8594;</span>
                </a>
                <a
                    href="https://www.mdcraftbeerfestival.com/"
                    className="portfolio__transit"
                    target="mdcraft"
                >
                    Адаптивный сайт
                    <span className="portfolio__arrow">&#8594;</span>
                </a>
                <a
                    href="https://dribbble.com/shots"
                    className="portfolio__transit"
                    target="dribbble"
                >
                    Одностраничное приложение
                    <span className="portfolio__arrow">&#8594;</span>
                </a>
            </nav>
        </>
    );
}

export default Portfolio;
