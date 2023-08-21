function Portfolio() {
    return (
        <>
            <p className="portfolio__title">Портфолио</p>
            <nav className="portfolio__list-transit">
                <a
                    href="https://evgenii959.github.io/how-to-learn/"
                    className="portfolio__transit"
                    target="Научиться учиться"
                >
                    Статичный сайт
                    <span className="portfolio__arrow">&#8594;</span>
                </a>
                <a
                    href="https://evgenii959.github.io/russian-travel/"
                    className="portfolio__transit"
                    target="Путешествия"
                >
                    Адаптивный сайт
                    <span className="portfolio__arrow">&#8594;</span>
                </a>
                <a
                    href="https://evgenii959.github.io/mesto/"
                    className="portfolio__transit"
                    target="Жак Ив Кусто"
                >
                    Одностраничное приложение
                    <span className="portfolio__arrow">&#8594;</span>
                </a>
            </nav>
        </>
    );
}

export default Portfolio;
