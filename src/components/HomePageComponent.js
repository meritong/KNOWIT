import React, {Component} from 'react';
import { Jumbotron} from 'reactstrap';

class HomePage extends Component {

    render(){

        return(
            <React.Fragment>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h3> Hjemmeoppgave </h3>
                                <p> Oppgaven: </p>

                                <p>Følgende API-kall lister noen av de mest populære  <a href="https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100">JavaScript-repositoryene på GitHub:</a>  <br />(N.B. Vi ønsker ikke at du endrer på per_page parameteren. La den stå på per_page=100.) </p>

                                <p>Lag en nettside som presenterer repositoryene i en stylet tabell med minst 4 kolonner med informasjon om repositoryene. Tabellen skal kun vise 20 repositories omgangen, men det skal være mulig å bla gjennom alle repositoryene API-kallet returnerer ved hjelp av paginering. </p>
                            
                                    
                            </div>
                            <div className="col-12 col-sm-6">
                                <h5> Noen krav: </h5>
                                <ul>
                                    <li>Selve logikken til paginering ønsker vi at du skriver uten bruk av et paginerings bibliotek/plugin.</li>

                                    <li>Vi forventer at tabellen og resten av innholdet på siden skal være stylet.</li>

                                    <li>Løsningen trenger kun å støtte moderne nettlesere (Chrome, Edge, Firefox, etc).</li>

                                    <li>Kjente feil/mangler/tolkninger bør redegjøres ved levering.</li>
                                </ul>

                                <h5>Noen tips:</h5>
                                <ul>
                                    <li>Det er lov å bruke biblioteker til utvikling av siden (f.eks. React, Vue, Angular, etc).</li>

                                    <li>Bruk ES2015 så lenge du er komfortabel med det (N.B. dette er ikke et krav).</li>

                                    <li>Bruk heller tid på å gjøre koden lesbar og modulær framfor å bruke tid på "fancy" funksjonalitet/styling</li>

                                    <li>Siden løsningen kun skal støtte moderne nettlesere, burde det ikke være behov for biblioteker som jQuery.</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );

    };

    
}

export default HomePage;