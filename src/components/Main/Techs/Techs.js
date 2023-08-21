function Techs() {
    return (
        <>
            <section className="tech">
                <h3 className="tech__header">Технологии</h3>
                <div className="tech__inform">
                    <div className="tech__title-subtitle">
                        <h4 className="tech__title">7 технологий</h4>
                        <p className="tech__subtitle">
                            На курсе веб-разработки мы освоили технологии,
                            которые применили в дипломном проекте.
                        </p>
                    </div>
                    <ul className="tech__languages">
                        <li className="tech__lang">HTML</li>
                        <li className="tech__lang">CSS</li>
                        <li className="tech__lang">JS</li>
                        <li className="tech__lang">React</li>
                        <li className="tech__lang">Git</li>
                        <li className="tech__lang">Express.js</li>
                        <li className="tech__lang">mongoDB</li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Techs;
