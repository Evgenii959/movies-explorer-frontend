function Project() {
    return (
        <>
            <section className="project">
                <h2 className="project__header">О проекте</h2>
                <div className="project__block">
                    <div className="project__text-one">
                        <h3 className="project__title">
                            Дипломный проект включал 5 этапов
                        </h3>
                        <p className="project__subtitle">
                            Составление плана, работу над бэкендом, вёрстку,
                            добавление функциональности и финальные доработки.
                        </p>
                    </div>
                    <div className="project__text-two">
                        <h3 className="project__title">
                            На выполнение диплома ушло 5 недель
                        </h3>
                        <p className="project__subtitle">
                            У каждого этапа был мягкий и жёсткий дедлайн,
                            которые нужно было соблюдать, чтобы успешно
                            защититься.
                        </p>
                    </div>
                    <div className="project__schedule">
                        <div className="project__plan">
                            <h4 className="project__schedule-title project__schedule-title_green">
                                1 неделя
                            </h4>
                            <p className="project__schedule-subtitle">
                                Back-end
                            </p>
                        </div>
                        <div className="project__plan">
                            <h4 className="project__schedule-title">
                                4 недели
                            </h4>
                            <p className="project__schedule-subtitle">
                                Front-end
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Project;
