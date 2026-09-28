import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}
      <h2 className="Maintitel">Fachhochschule Nordwestschweiz</h2>
      <div className="Maintext">
        <p className="Text">
          Die <span className="Text_bold">Fachhochschule Nordwestschweiz</span> 
          <span> (FHNW) ist eine <a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule">Fachhochschule</a> in 
          der <a className="Link" href="https://de.wikipedia.org/wiki/Schweiz">Schweiz</a> und ist in der Lehre, Forschung, Weiterbildung und Dienstleistung tätig. 
          Sie ist eine interkantonale öffentlich-rechtliche Anstalt mit eigener Rechtspersönlichkeit.<a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz#cite_note-4"> <sup className="Sups">[4] </sup></a> 
        Träger sind die Kantone <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Aargau">Aargau</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Basel-Landschaft">Basel-Landschaft</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Basel-Stadt">Basel-Stadt</a> und <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Solothurn">Solothurn</a>. 
        Die FHNW umfasst folgende zehn Hochschulen, die auf die Standorte <a className="Link" href="https://de.wikipedia.org/wiki/Basel">Basel</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Brugg">Brugg</a>-<a className="Link" href="https://de.wikipedia.org/wiki/Windisch_AG">Windisch</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Muttenz">Muttenz</a> und <a className="Link" href="https://de.wikipedia.org/wiki/Olten">Olten</a> konzentriert 
        sind: Angewandte Psychologie, Architektur, Bau und Geomatik, Gestaltung und Kunst, Informatik, 
        Life Sciences, Musik, Lehrerinnen- und Lehrerbildung, Soziale Arbeit, Technik und Umwelt sowie Wirtschaft. 
        Der Hauptsitz ist in Windisch.</span>
        </p>
        <div className="Quickfacts">
          <h3 className="Quickfacts_Titel">Fachhochschule Nordwestschweiz</h3>
          <img className="Quickfacts_image" src="https://upload.wikimedia.org/wikipedia/commons/d/d3/FHNW_Logo.svg?utm_source=de.wikipedia.org&utm_campaign=index&utm_content=original" alt="FHNW Logo" />
          <dl>
            <div>
              <dt className="Quickfacts_Text_bold">Gründung</dt>
              <dd className="Quickfacts_Text">1. Januar 2006</dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Trägerschaft</dt>
              <dd className="Quickfacts_Text">Kantone <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Aargau">Aargau</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Basel-Landschaft">Basel-Landschaft</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Basel-Stadt">Basel-Stadt</a> und <a className="Link" href="https://de.wikipedia.org/wiki/Kanton_Solothurn">Solothurn</a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Ort</dt>
              <dd className="Quickfacts_Text"><a className="Link" href="https://de.wikipedia.org/wiki/Basel">Basel</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Brugg">Brugg</a>-<a className="Link" href="https://de.wikipedia.org/wiki/Windisch_AG">Windisch</a>, <a className="Link" href="https://de.wikipedia.org/wiki/Muttenz">Muttenz</a> und <a className="Link" href="https://de.wikipedia.org/wiki/Olten">Olten</a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Land</dt>
              <dd className="Quickfacts_Text"><a className="Link" href="https://de.wikipedia.org/wiki/Schweiz">Schweiz</a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Direktionspräsident</dt>
              <dd className="Quickfacts_Text"><a className="Link" href="https://de.wikipedia.org/wiki/Crispino_Bergamaschi">Crispino Bergamaschi</a><a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz#cite_note-Crispino_Bergamaschi-1"> <sup className="Sups">[1] </sup></a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Studierende</dt>
              <dd className="Quickfacts_Text">14527 <span className="Text_tiny">(2025)</span><a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz#cite_note-Jahresberichte-2"> <sup className="Sups">[2] </sup></a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Mitarbeiter</dt>
              <dd className="Quickfacts_Text">3282 <span className="Text_tiny">(2025)</span><a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz#cite_note-Jahresberichte-2"> <sup className="Sups">[2] </sup></a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">davon Professoren</dt>
              <dd className="Quickfacts_Text">536 <span className="Text_tiny">(2025)</span><a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz#cite_note-Jahresberichte-2"> <sup className="Sups">[2] </sup></a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Jahresetat</dt>
              <dd className="Quickfacts_Text">CHF 526 Mio. <span className="Text_tiny">(2025)</span><a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz#cite_note-Jahresberichte-2"> <sup className="Sups">[2] </sup></a></dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Netzwerke</dt>
              <dd className="Quickfacts_Text"><a className="Link" href="https://de.wikipedia.org/wiki/Swissuniversities">Swissuniversities</a><a className="Link" href="https://de.wikipedia.org/wiki/Fachhochschule_Nordwestschweiz#cite_note-swiss-3"> <sup className="Sups">[3] </sup></a>, <a className="Link" href="https://de.wikipedia.org/wiki/TriRhenaTech">TriRhenaTech</a>, <a className="Link" href="https://de.wikipedia.org/wiki/European_University_Association">EUA</a>, ChallengeEU</dd>
            </div>
            <div>
              <dt className="Quickfacts_Text_bold">Webseite</dt>
              <dd className="Quickfacts_Text"><a className="Link" href="https://www.fhnw.ch">www.fhnw.ch</a></dd>
            </div>
          </dl>
        </div>    
      </div>
      {/*Dein Code über dieser Zeile  */}
    </div>
  );
}