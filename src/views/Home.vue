<template>
    <div>
        <header class="vl-content-header vl-content-header--large vl-content-header--show-mobile">
            <div class="vl-content-header__wrapper">
                <picture class="vl-content-header__bg">
                    <img sizes="100vw"
                         src="//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg"
                         srcset="//www.vlaanderen.be/sites/default/files/ip_acm/page_banner_mobile_alt/header.jpg 320w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_narrow/header.jpg 1024w, //www.vlaanderen.be/sites/default/files/ip_acm/page_banner_wide_alt/header.jpg 1600w"
                         alt="Content Header">
                </picture>
                <div class="vl-layout">
                    <div class="vl-content-header__content">
                        <h2 class="vl-content-header__title ">
                            <span class="vl-content-header__title__content">Data.vlaanderen.be</span>
                        </h2>
                    </div>
                </div>
            </div>
        </header>

        <!-- Introduction section -->
        <vl-region>
            <vl-layout>
                <vl-grid>
                    <vl-column width="8">
                        <vl-introduction>
                            In de digitale samenleving wordt van de overheid verwacht dat ze overheidsdata ontsluit
                            volgens een breed gedragen methode.
                            Data.Vlaanderen.be is het domein waarop het <a
                                href="http://www.vlaanderen.be/informatievlaanderen">Agentschap Informatie
                            Vlaanderen</a> data ontsluit
                            volgens de principes beschreven in
                            de <a href="https://data.vlaanderen.be/cms/VlaamseURI-StandaardVoorData_V1.0.pdf">Vlaamse
                            URI standaard</a>. Naast enkele datasets biedt Data.Vlaanderen.be ook toegang tot de
                            standaarden, informatiemodellen,
                            tools en documentatie die gebruikers in staat stellen aan de slag te gaan met data.
                        </vl-introduction>
                    </vl-column>
                    <vl-column width="1"></vl-column>
                    <vl-column width="3">
                        <vl-side-navigation title="Inhoud">
                            <vl-side-navigation-list>
                                <vl-side-navigation-item v-scroll-to="'#over'" href="#over"
                                                         text="Over data.vlaanderen.be"/>
                                <vl-side-navigation-item v-scroll-to="'#standaarden'" href="#standaarden"
                                                         text="Standaarden"/>
                                <vl-side-navigation-item v-scroll-to="'#datasets'" href="#datasets" text="Datasets"/>
                                <vl-side-navigation-item v-scroll-to="'#tools'" href="#tools" text="Tools"/>
                                <vl-side-navigation-item v-scroll-to="'#vragen'" href="#vragen"
                                                         text="Veelgestelde vragen"/>
                            </vl-side-navigation-list>
                        </vl-side-navigation>
                    </vl-column>
                </vl-grid>
            </vl-layout>
        </vl-region>

        <vl-region>
            <vl-layout>
                <vl-grid>
                    <vl-column>
                        <vl-infoblock id="over" class="text" mod-type="publications" title="Over data.vlaanderen.be">
                            Dit domein past binnen de doelstelling van de Vlaamse overheid om in te zetten op een
                            éénduidige standaard voor de
                            uitwisseling van informatie. Alle identificatoren van informatieresources (bijvoorbeeld
                            adressen) die beschikbaar zijn
                            via dit domein in de vorm van een URI zijn persistent en semantisch éénduidig. Met andere
                            woorden,
                            gebruikers van de URI's met als domein data.vlaanderen.be kunnen ervan uitgaan dat deze
                            identificatoren steeds zullen
                            blijven bestaan en dat in de loop van de tijd deze identificatoren steeds zullen verwijzen
                            naar één en hetzelfde object.
                        </vl-infoblock>
                    </vl-column>

                    <!-- Sectie Standaarden -->
                    <vl-column>
                        <vl-infoblock
                                id="standaarden"
                                mod-type="news"
                                title="Standaarden">


                            <vl-grid mod-stacked v-vl-equal-height:container>

                                <!-- OSLO Standaarden -->
                                <vl-column width="12">
                                    <vl-title tag-name="h3" mod-border>
                                        OSLO Standaarden (kandidaat-standaarden)
                                    </vl-title>
                                </vl-column>
                                <vl-column width="12">
                                    <p class="text">Omvatten open semantische informatiestandaarden en specificaties
                                        voor
                                        gegevensuitwisseling.
                                        Op 31 maart 2017 werden een aantal vocabularia en applicatieprofielen als
                                        kandidaat-standaard gepubliceerd door
                                        de werkgroep OSLO van Informatie Vlaanderen. Vanaf deze datum startte een 6
                                        maanden
                                        durende evaluatieperiode
                                        van deze kandidaat-standaarden. Na deze evaluatieperiode, waarbij aan de hand
                                        van
                                        referentie implementaties de
                                        robuustheid en de volledigheid van de vocabularia en de applicatieprofielen
                                        worden
                                        getest, worden de OSLO
                                        specificaties gepromoot tot volwaardige standaarden.<br><br>
                                        Om feedback te geven, raden we aan om een topic aan te maken in onze <a href="https://github.com/Informatievlaanderen/OSLO-Public-Discussion">publieke reviewdiscussielijst</a>.
                                    </p>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-doormat
                                            v-vl-equal-height
                                            href="https://data.vlaanderen.be/standaarden"
                                            title="Standaardenregister">
                                        <p class="text">Het standaardenregister geeft een overzicht van alle lopende en
                                            afgewerkte
                                            trajecten
                                            die deel uitmaken
                                            van het initiatief Open Standaarden voor Linkende Organisaties (OSLO) van de
                                            Vlaamse
                                            overheid.</p>
                                    </vl-doormat>
                                </vl-column>
                                <vl-column v-vl-equal-height width="4">
                                    <vl-doormat
                                            v-vl-equal-height
                                            href="https://data.vlaanderen.be/ns#Vocabularia"
                                            target="_blank"
                                            title="Vocabularia">
                                        <p class="text">Vocabularia beschrijven semantiek, de concepten die beschreven
                                            worden zijn
                                            bruikbaar
                                            in verschillende
                                            toepassingsdomeinen. De OSLO&#178; vocabularia zijn gepubliceerd als
                                            kandidaat-standaarden.</p>
                                    </vl-doormat>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-doormat
                                            v-vl-equal-height
                                            href="https://data.vlaanderen.be/ns#Applicatieprofielen"
                                            target="_blank"
                                            title="Applicatieprofielen">
                                        <p class="text">Ontdek hier de beschikbare applicatieprofielen gepubliceerd als
                                            kandidaat-standaarden.
                                            Applicatieprofielen zijn specificaties voor gegevensuitwisseling in bepaalde
                                            use
                                            cases.</p>
                                    </vl-doormat>
                                </vl-column>

                                <!-- URI standaard -->
                                <vl-column width="12">
                                    <vl-title tag-name="h3" mod-border>
                                        URI standaard
                                    </vl-title>
                                </vl-column>
                                <vl-column>
                                    <p class="text">Centraal in de URI-standaard staan een aantal vormregels die
                                        omschrijven op welke
                                        wijze
                                        een URI moet gevormd worden om te dienen als identificator voor data.
                                        Gebruik makend van de vormregels voor URI’s licht de URI-standaard een lijst van
                                        resource-classificaties toe.
                                        Die moeten alle resource-aanbieders binnen de Vlaamse overheden gebruiken bij
                                        het
                                        opzetten van nieuwe URI’s om hun resources uniek en persistent te ontsluiten.
                                    </p>
                                </vl-column>
                                <vl-column width="6">
                                    <vl-doormat
                                            v-vl-equal-height
                                            href="https://data.vlaanderen.be/ns#Applicatieprofielen"
                                            target="_blank"
                                            title="Vlaamse URI standaard">
                                    </vl-doormat>
                                </vl-column>
                                <vl-column width="6">
                                    <vl-doormat
                                            v-vl-equal-height
                                            href="https://data.vlaanderen.be/ns#Applicatieprofielen"
                                            target="_blank"
                                            title="URI-richtlijnen voor data.vlaanderen.be">
                                    </vl-doormat>
                                </vl-column>

                                <!-- Proces en methode voor de ontwikkeling en erkenning van data standaarden -->
                                <vl-column width="12">
                                    <vl-title tag-name="h3" mod-border>
                                        Proces en methode voor de ontwikkeling en erkenning van data standaarden
                                    </vl-title>
                                </vl-column>
                                <vl-column width="12">
                                    <p class="text">Dit document beschrijft een schaalbaar proces en de methode voor het
                                        aanmelden,
                                        ontwikkelen, wijzigen en uitfaseren van data standaarden, en het beheren van de
                                        levenscyclus van deze standaarden. Het proces en de methode zijn gebaseerd op
                                        internationale best practices van onder meer ISA, W3C en OpenStand. Dit proces
                                        is
                                        gericht op het bouwen van consensus tussen verschillende publieke
                                        administraties, en
                                        het
                                        faciliteren van semantische, syntactische en technische interoperabiliteit. Hoe
                                        dit
                                        proces kan worden ingericht wordt onderbouwd aan de hand van een methode, deze
                                        beschrijft een manier van werken om doorheen het proces te zorgen voor heldere
                                        communicatie en duidelijke documentatie, opdat de data standaard geïmplementeerd
                                        kan
                                        worden door alle belanghebbenden.</p>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-link-list>
                                        <vl-link-list-item>
                                            <vl-icon icon="link"/>
                                            <vl-link class="text" href="https://data.vlaanderen.be">
                                                Lees het document hier
                                            </vl-link>
                                        </vl-link-list-item>
                                    </vl-link-list>
                                </vl-column>

                                <!-- Standaard voor het metadateren en publiceren van linked open data -->
                                <vl-column width="12">
                                    <vl-title tag-name="h3" mod-border>
                                        Standaard voor het metadateren en publiceren van linked open data
                                    </vl-title>
                                </vl-column>
                                <vl-column width="12">
                                    <p class="text">De standaard bevat regels voor het metadateren van linked open data
                                        en het
                                        publiceren
                                        van linked data als open data. Een aantal regels zijn gemeenschappelijk, een
                                        aantal
                                        zeer
                                        specifiek. Vlaamse overheden worden dan ook aanbevolen deze standaard te volgen
                                        voor
                                        het
                                        opzetten van linked open data-producten.</p>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-link-list>
                                        <vl-link-list-item>
                                            <vl-icon icon="link"/>
                                            <vl-link class="text" href="https://data.vlaanderen.be">
                                                Lees het document hier
                                            </vl-link>
                                        </vl-link-list-item>
                                    </vl-link-list>
                                </vl-column>
                            </vl-grid>

                        </vl-infoblock>


                    </vl-column>

                    <!-- Sectie Datasets -->
                    <vl-column>
                        <vl-infoblock
                                id="datasets"
                                mod-type="news"
                                title="Datasets">

                            <vl-grid mod-stacked>
                                <vl-column width="12">
                                    <p class="text">Data.Vlaanderen.be voorziet de volgende toegangsmethoden tot de
                                        data:</p>
                                </vl-column>
                                <vl-column class="text" width="12">
                                    <vl-icon-list>
                                        <vl-icon-list-item icon="tag">
                                            <strong>Content negotiatie</strong><br>
                                            <p>De URI <a href="https://data.vlaanderen.be/id/adres/3706808">https://data.vlaanderen.be/id/adres/3706808</a>
                                                is de persistente
                                                identifier voor het adres Koningin Maria Hendrikaplein 70, Gent. Als
                                                deze
                                                URI opgevraagd wordt via een webbrowser dan verkrijgt men een menselijk
                                                leesbare webpagina waarop informatie over dit adres wordt weergegeven.
                                                Dezelfde informatie is ook aangeboden in machine-leesbare vorm zoals
                                                RDF.
                                                Reeds ondersteunde HTTP accept headers zijn text/html,
                                                application/rdf+xml,
                                                text/ntriples en text/turtle. Voor documenten en vocabularia worden de
                                                file-extenties .rdf, .nt en .ttl ook ondersteund als alternatief voor
                                                het
                                                instellen van de HTTP accept header.</p>
                                        </vl-icon-list-item>
                                        <vl-icon-list-item icon="tag" mod-light>
                                            <strong>SPARQL endpoint</strong><br>
                                            <p>Het <a href="https://data.vlaanderen.be/sparql">SPARQL-endpoint</a> biedt
                                                de
                                                mogelijkheid om complexe vragen in <a
                                                        href="https://www.w3.org/TR/sparql11-query/">SPARQL</a> te
                                                stellen over de beschikbare data. </p>
                                        </vl-icon-list-item>
                                        <vl-icon-list-item icon="tag">
                                            <strong>RDF dump</strong><br>
                                            <p>De publicatie van het linked open dataproduct, minimaal met
                                                dereferenceable
                                                URI’s aangeboden, is te vinden als RDF-dump op deze locatie
                                                <a href="data.vlaanderen.be/dumps">data.vlaanderen.be/dumps</a>.</p>
                                        </vl-icon-list-item>
                                        <vl-icon-list-item icon="tag">
                                            <strong>Vocabularia</strong><br>
                                            <p>De beschrijving van de gebruikte vocabularia is <a
                                                    href="https://data.vlaanderen.be/ns">hier</a> te vinden.</p>
                                        </vl-icon-list-item>
                                    </vl-icon-list>
                                </vl-column>
                                <vl-column>
                                    <vl-title tag-name="h3" mod-border>
                                        Beschikbare datasets
                                    </vl-title>
                                </vl-column>
                                <vl-column width="3">
                                    <vl-spotlight mod-no-border
                                                  title="Beta-release CRAB-LOD"
                                                  href="https://overheid.vlaanderen.be/oslo-wat-is-oslo#5-sterren-linked-data-van-de-vlaamse-overheid"
                                                  target="_blank"
                                                  subtitle=""
                                                  :image="{
                src: 'https://source.unsplash.com/random/600x300',
                alt: 'What a nice alt',
                position: 'bottom-bottom'
              }">
                                        <p class="text">Een eerste dataset die ontsloten wordt op dit domein zijn de
                                            adressen uit het
                                            adressenregister (CRAB). De beschikbare URI's van de CRAB-LOD dataset komen
                                            van een snapshot welke gedurende de BETA-periode op beperkte wijze
                                            gesynchroniseerd wordt gehouden met de gegevens uit het basisregister.
                                        </p>

                                    </vl-spotlight>
                                    <p class="text"><a target="_blank" href="https://data.vlaanderen.be/doc/adres/">Start
                                        exploratie</a></p>
                                </vl-column>
                                <vl-column width="3">
                                    <vl-spotlight mod-no-border
                                                  title="LBLOD"
                                                  target="_blank"
                                                  href="https://lokaalbestuur.vlaanderen.be/lokale-besluiten-als-gelinkte-open-data"
                                                  subtitle=""
                                                  :image="{
                src: 'https://source.unsplash.com/random/600x300',
                alt: 'What a nice alt',
                position: 'bottom-bottom'
              }">
                                        <p class="text">
                                            Het project heeft als doel informatie uit besluiten van lokale besturen
                                            vindbaar te maken en op een gestandaardiseerde manier aan te bieden waardoor
                                            iedereen (andere overheden, ondernemingen, …) rechtstreeks met de data aan
                                            de slag kan gaan.
                                        </p>

                                    </vl-spotlight>
                                    <p class="text"><a target="_blank"
                                                       href="https://lokaalbestuur.vlaanderen.be/lokale-besluiten-als-gelinkte-open-data">Lees
                                        meer</a></p>
                                </vl-column>
                                <vl-column width="3">
                                    <vl-spotlight mod-no-border
                                                  title="Organisatieregister"
                                                  href="https://overheid.vlaanderen.be/wegwijs-vlaamse-overheid"
                                                  target="_blank"
                                                  subtitle=""
                                                  :image="{
                src: 'https://source.unsplash.com/random/600x300',
                alt: 'What a nice alt',
                position: 'bottom-bottom'
              }">
                                        <p class="text">
                                            Het Organisatiesregister is een Vlaams basisregister van publieke
                                            organisaties. In een eerste fase wordt de basisinformatie van een
                                            organisatie ontsloten als LOD.
                                        </p>
                                    </vl-spotlight>
                                    <p class="text"><a target="_blank"
                                                       href="https://data.vlaanderen.be/doc/organisatie/">Start
                                        exploratie</a>
                                    </p>
                                </vl-column>
                                <vl-column width="3">
                                    <vl-spotlight mod-no-border
                                                  title="Open Data licenties"
                                                  href="https://overheid.vlaanderen.be/voorwaarden-voor-het-hergebruik-van-overheidsinformatie"
                                                  target="_blank"
                                                  subtitle=""
                                                  :image="{
                src: 'https://source.unsplash.com/random/600x300',
                alt: 'What a nice alt',
                position: 'bottom-bottom'
              }">
                                        <p class="text">
                                            De modellicenties van de Vlaamse Overheid voor Open Data
                                        </p>
                                    </vl-spotlight>
                                    <p class="text"><a target="_blank"
                                                       href="https://data.vlaanderen.be/doc/licentie/">Start
                                        exploratie</a></p>
                                </vl-column>
                            </vl-grid>
                        </vl-infoblock>
                    </vl-column>

                    <!-- Sectie Tools -->
                    <vl-column>
                        <vl-infoblock
                                id="tools"
                                mod-type="news"
                                title="Tools">
                            <vl-grid mod-stacked v-vl-equal-height:container>
                                <vl-column width="4">
                                    <vl-spotlight
                                            v-vl-equal-height
                                            title="OSLO Validator"
                                            href="https://data.vlaanderen.be/shacl-validator"
                                            target="_blank"
                                            subtitle=""
                                            mod-alt>
                                        <p class="text">Deze tool werd ontwikkeld als onderdeel van het OSLO project en
                                            biedt
                                            gerbuikers de mogelijkheid om
                                            hun data te valideren tegen de applicatieprofielen.
                                        </p>
                                    </vl-spotlight>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-spotlight
                                            v-vl-equal-height
                                            title="OSLO-EA-TO-RDF"
                                            href="https://github.com/Informatievlaanderen/OSLO-EA-to-RDF"
                                            target="_blank"
                                            subtitle=""
                                            mod-alt>
                                        <p class="text">
                                            Deze tool werd ontwikkeld als onderdeel van het OSLO project en biedt
                                            gebruikers een geautomatiseerde manier om vocabularia te creëren op basis
                                            van een Enterprise Architect bestand.
                                        </p>
                                    </vl-spotlight>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-spotlight
                                            v-vl-equal-height
                                            title="OSLO-Specificationgenerator"
                                            target="_blank"
                                            href="https://github.com/Informatievlaanderen/OSLO-SpecificationGenerator"
                                            subtitle=""
                                            mod-alt>
                                        <p class="text">
                                            Deze tool werd ontwikkeld als onderdeel van
                                            het OSLO project en dient om op basis van RDF vocabularia automatisch
                                            specificatiedocumenten in HTML te creëren via een Command Line Interface
                                            (CLI).

                                        </p>
                                    </vl-spotlight>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-spotlight
                                            v-vl-equal-height
                                            title="URI Validator"
                                            target="_blank"
                                            href="#"
                                            subtitle=""
                                            mod-alt>
                                        <p class="text">
                                            Deze tool werd ontwikkeld als onderdeel van de Vlaamse URI standaard en
                                            stelt gebruikers
                                            in staat om URI's te controleren of ze voldoen aan de Vlaamse URI standaard.

                                        </p>
                                    </vl-spotlight>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-spotlight
                                            v-vl-equal-height
                                            title="OSLO Playground"
                                            target="_blank"
                                            href="#"
                                            subtitle=""
                                            mod-alt>
                                        <p class="text">
                                            Deze tool werd ontwikkeld als onderdeel van het OSLO project en biedt de
                                            gebruikers de mogelijkheid
                                            om JSON-LD data op te stellen conform de OSLO applicatieprofielen. De data
                                            kan geparst en gevalideerd
                                            worden.
                                        </p>
                                    </vl-spotlight>
                                </vl-column>
                                <vl-column width="4">
                                    <vl-spotlight
                                            v-vl-equal-height
                                            title="Generieke Hypermedia API Demo"
                                            target="_blank"
                                            href="#"
                                            subtitle=""
                                            mod-alt>
                                        <p class="text">
                                            Een Generieke Hypermedia API beschrijft in elke respons de verdere stappen
                                            die vanaf dat punt kunnen worden genomen met behulp van <a
                                                href="https://martinfowler.com/articles/richardsonMaturityModel.html#level3">Hypermedia
                                            Controls</a>. Meer info over de bouwblokken vind je <a
                                                href="https://github.com/Informatievlaanderen/generieke-hypermedia-api">hier</a>.
                                            Informatie over de implementatie
                                            kan <a
                                                href="https://github.com/Informatievlaanderen/generic-hypermedia-api-client">hier</a>
                                            teruggevonden worden.
                                        </p>
                                    </vl-spotlight>
                                </vl-column>
                            </vl-grid>
                        </vl-infoblock>

                    </vl-column>

                    <!-- Sectie "Veelgestelde Vragen" -->
                    <vl-column>
                        <vl-infoblock
                                id="vragen"
                                mod-type="question"
                                title="Veelgestelde vragen">

                            <vl-grid mod-stacked>
                                <vl-column width="12">
                                    <vl-drawers class="text" id="drawer-1">
                                        <vl-drawer
                                                label="Wat zijn persistente en semantisch eenduidige identificatoren?"
                                                width="6" width-m="12">
                                            <p class="text">Identificatoren van informatieresources zijn persistent
                                                wanneer ze in
                                                de
                                                loop
                                                van tijd steeds verwijzen naar één en hetzelfde object. Bovendien
                                                zijn
                                                ze
                                                semantisch eenduidig wanneer ze de vormregels van de <a
                                                        class="link--icon--caret link--block"
                                                        href="https://overheid.vlaanderen.be/OSLO-URI-standaard">URI
                                                    standaard</a> volgen.</p>
                                        </vl-drawer>
                                        <vl-drawer
                                                label="Waar lees ik meer over vocabularia, applicatieprofielen en hoe deze zich verhouden tengenover elkaar?"
                                                width="6" width-m="12">
                                            <p class="text">Meer informatie lees je op een bevattelijke manier in deze
                                                <a
                                                        href="https://overheid.vlaanderen.be/sites/default/files/documenten/informatie-vlaanderen/producten/OSLO/OSLO%20Infodag%2031032017%20Final.pdf">presentatie</a>.
                                            </p>

                                        </vl-drawer>
                                        <vl-drawer
                                                label="Wat is het verschil tussen Data.Vlaanderen.be en het Vlaamse Open Data portaal?"
                                                width="6" width-m="12">
                                            <p class="text">Op Data.Vlaanderen.be vind je inhoud (de eigenlijke data)
                                                van <a
                                                        href="https://overheid.vlaanderen.be/basisregisters-en-oslo"
                                                        target="_blank">Vlaamse basisregisters</a> geheel of
                                                gedeeltelijk ontsloten als Linked Data. Op het Vlaamse Open Data
                                                portaal vind je de beschrijving van de dataset met daarbij o.a. de
                                                gebruiksregels.</p>

                                        </vl-drawer>
                                        <vl-drawer
                                                label="Ik wil een nieuw traject opstarten voor data standaardisatie."
                                                width="6" width-m="12">
                                            <p class="text">Het document <a
                                                    href="#"
                                                    target="_blank">proces en methode voor de ontwikkeling en
                                                erkennings van data standaarden</a> zet een stappenplan uiteen voor
                                                nieuwe werkgroepen die het initatief willen nemen om een nieuwe
                                                standaard uit te werken of een bestaande standaard te adopteren.</p>

                                        </vl-drawer>
                                        <vl-drawer
                                                label="Wat is een informatieresource?"
                                                width="6" width-m="12">
                                            <p class="text">Informatieresource zijn dingen die een digitale
                                                representatie (kunnen)
                                                hebben zoals data en webservices. Informatieresources kunnen ook
                                                niet-informatieresources (zaken of gebeurtenissen uit de 'echte wereld')
                                                <strong>beschrijven</strong>, bijvoorbeeld een webpagina kan een gebouw
                                                beschrijven. Meer hierover lees je in de <a
                                                        href="https://overheid.vlaanderen.be/OSLO-URI-standaard">URI
                                                    standaard</a>.</p>

                                        </vl-drawer>
                                        <vl-drawer
                                                label="Hoe gebruik ik de vocabularia en applicatieprofielen om interoperabele toepassingen en web services te ontwikkelen?"
                                                width="6" width-m="12">
                                            <p class="text">Hoe je de vocabularia en applicatieprofielen kan gebruiken
                                                in praktijk
                                                lees je in het document <a
                                                        href="https://docs.google.com/document/d/1tbK17wmgkIlNOXjYRE3Arf3PMI--8TvidBprKOcgcvQ"
                                                        target="_blank">Ontwikkelen van interoperabele toepassingen en
                                                    web services via Open Standaarden voor Linkende Organisaties
                                                    (OSLO)</a>.</p>
                                        </vl-drawer>
                                        <vl-drawer
                                                label="Welke datasets kan ik terug vinden op Data.Vlaanderen.be?"
                                                width="6" width-m="12"
                                                class="text">
                                            <p class="text">Een overzicht van beschikbare datasets vind je <a href="#">hier</a>.
                                            </p>
                                        </vl-drawer>
                                    </vl-drawers>
                                </vl-column>
                            </vl-grid>
                        </vl-infoblock>

                    </vl-column>
                </vl-grid>
            </vl-layout>
        </vl-region>


    </div>
</template>

<script>
    // @ is an alias to /src

</script>

<style lang="scss">
    @import "~@govflanders/vl-ui-core/src/scss/core";
    @import "~@govflanders/vl-ui-content-header/src/scss/content-header";
    @import "~@govflanders/vl-ui-typography/src/scss/typography";
    @import "~@govflanders/vl-ui-introduction/src/scss/introduction";
    @import "~@govflanders/vl-ui-side-navigation/src/scss/side-navigation";
    @import "~@govflanders/vl-ui-util/src/scss/util";
    @import "~@govflanders/vl-ui-icon/src/scss/icon";
    @import "~@govflanders/vl-ui-button/src/scss/button";
    @import "~@govflanders/vl-ui-infoblock/src/scss/infoblock";
    @import "~@govflanders/vl-ui-doormat/src/scss/doormat";
    @import "~@govflanders/vl-ui-titles/src/scss/titles";
    @import "~@govflanders/vl-ui-link-list/src/scss/link-list";
    @import "~@govflanders/vl-ui-icon/src/scss/icon";
    @import "~@govflanders/vl-ui-drawer/src/scss/drawer";
    @import "~@govflanders/vl-ui-toggle/src/scss/toggle";
    @import "~@govflanders/vl-ui-link/src/scss/link";
    @import "~@govflanders/vl-ui-dynamic-drawer/src/scss/dynamic-drawer";
    @import "~@govflanders/vl-ui-spotlight/src/scss/spotlight";
    @import "~@govflanders/vl-ui-icon-list/src/scss/icon-list";

    .text {
        font-size: 108% !important;
    }


</style>
