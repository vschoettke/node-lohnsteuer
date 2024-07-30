/*jslint node:true*/
"use strict";

var BigDecimal = require("js-big-decimal");
if (typeof BigDecimal !== "function") {
    BigDecimal = BigDecimal.default;
}

// const BigDecimal[]
var TAB1 = [new BigDecimal("0"),
new BigDecimal("0.4"),
new BigDecimal("0.384"),
new BigDecimal("0.368"),
new BigDecimal("0.352"),
new BigDecimal("0.336"),
new BigDecimal("0.32"),
new BigDecimal("0.304"),
new BigDecimal("0.288"),
new BigDecimal("0.272"),
new BigDecimal("0.256"),
new BigDecimal("0.24"),
new BigDecimal("0.224"),
new BigDecimal("0.208"),
new BigDecimal("0.192"),
new BigDecimal("0.176"),
new BigDecimal("0.16"),
new BigDecimal("0.152"),
new BigDecimal("0.144"),
new BigDecimal("0.136"),
new BigDecimal("0.128"),
new BigDecimal("0.12"),
new BigDecimal("0.112"),
new BigDecimal("0.104"),
new BigDecimal("0.096"),
new BigDecimal("0.088"),
new BigDecimal("0.08"),
new BigDecimal("0.072"),
new BigDecimal("0.064"),
new BigDecimal("0.056"),
new BigDecimal("0.048"),
new BigDecimal("0.04"),
new BigDecimal("0.032"),
new BigDecimal("0.024"),
new BigDecimal("0.016"),
new BigDecimal("0.008"),
new BigDecimal("0")];
// const BigDecimal[]
var TAB2 = [new BigDecimal("0"),
new BigDecimal("3000"),
new BigDecimal("2880"),
new BigDecimal("2760"),
new BigDecimal("2640"),
new BigDecimal("2520"),
new BigDecimal("2400"),
new BigDecimal("2280"),
new BigDecimal("2160"),
new BigDecimal("2040"),
new BigDecimal("1920"),
new BigDecimal("1800"),
new BigDecimal("1680"),
new BigDecimal("1560"),
new BigDecimal("1440"),
new BigDecimal("1320"),
new BigDecimal("1200"),
new BigDecimal("1140"),
new BigDecimal("1080"),
new BigDecimal("1020"),
new BigDecimal("960"),
new BigDecimal("900"),
new BigDecimal("840"),
new BigDecimal("780"),
new BigDecimal("720"),
new BigDecimal("660"),
new BigDecimal("600"),
new BigDecimal("540"),
new BigDecimal("480"),
new BigDecimal("420"),
new BigDecimal("360"),
new BigDecimal("300"),
new BigDecimal("240"),
new BigDecimal("180"),
new BigDecimal("120"),
new BigDecimal("60"),
new BigDecimal("0")];
// const BigDecimal[]
var TAB3 = [new BigDecimal("0"),
new BigDecimal("900"),
new BigDecimal("864"),
new BigDecimal("828"),
new BigDecimal("792"),
new BigDecimal("756"),
new BigDecimal("720"),
new BigDecimal("684"),
new BigDecimal("648"),
new BigDecimal("612"),
new BigDecimal("576"),
new BigDecimal("540"),
new BigDecimal("504"),
new BigDecimal("468"),
new BigDecimal("432"),
new BigDecimal("396"),
new BigDecimal("360"),
new BigDecimal("342"),
new BigDecimal("324"),
new BigDecimal("306"),
new BigDecimal("288"),
new BigDecimal("270"),
new BigDecimal("252"),
new BigDecimal("234"),
new BigDecimal("216"),
new BigDecimal("198"),
new BigDecimal("180"),
new BigDecimal("162"),
new BigDecimal("144"),
new BigDecimal("126"),
new BigDecimal("108"),
new BigDecimal("90"),
new BigDecimal("72"),
new BigDecimal("54"),
new BigDecimal("36"),
new BigDecimal("18"),
new BigDecimal("0")];
// const BigDecimal[]
var TAB4 = [new BigDecimal("0"),
new BigDecimal("0.4"),
new BigDecimal("0.384"),
new BigDecimal("0.368"),
new BigDecimal("0.352"),
new BigDecimal("0.336"),
new BigDecimal("0.32"),
new BigDecimal("0.304"),
new BigDecimal("0.288"),
new BigDecimal("0.272"),
new BigDecimal("0.256"),
new BigDecimal("0.24"),
new BigDecimal("0.224"),
new BigDecimal("0.208"),
new BigDecimal("0.192"),
new BigDecimal("0.176"),
new BigDecimal("0.16"),
new BigDecimal("0.152"),
new BigDecimal("0.144"),
new BigDecimal("0.136"),
new BigDecimal("0.128"),
new BigDecimal("0.12"),
new BigDecimal("0.112"),
new BigDecimal("0.104"),
new BigDecimal("0.096"),
new BigDecimal("0.088"),
new BigDecimal("0.08"),
new BigDecimal("0.072"),
new BigDecimal("0.064"),
new BigDecimal("0.056"),
new BigDecimal("0.048"),
new BigDecimal("0.04"),
new BigDecimal("0.032"),
new BigDecimal("0.024"),
new BigDecimal("0.016"),
new BigDecimal("0.008"),
new BigDecimal("0")];
// const BigDecimal[]
var TAB5 = [new BigDecimal("0"),
new BigDecimal("1900"),
new BigDecimal("1824"),
new BigDecimal("1748"),
new BigDecimal("1672"),
new BigDecimal("1596"),
new BigDecimal("1520"),
new BigDecimal("1444"),
new BigDecimal("1368"),
new BigDecimal("1292"),
new BigDecimal("1216"),
new BigDecimal("1140"),
new BigDecimal("1064"),
new BigDecimal("988"),
new BigDecimal("912"),
new BigDecimal("836"),
new BigDecimal("760"),
new BigDecimal("722"),
new BigDecimal("684"),
new BigDecimal("646"),
new BigDecimal("608"),
new BigDecimal("570"),
new BigDecimal("532"),
new BigDecimal("494"),
new BigDecimal("456"),
new BigDecimal("418"),
new BigDecimal("380"),
new BigDecimal("342"),
new BigDecimal("304"),
new BigDecimal("266"),
new BigDecimal("228"),
new BigDecimal("190"),
new BigDecimal("152"),
new BigDecimal("114"),
new BigDecimal("76"),
new BigDecimal("38"),
new BigDecimal("0")];
// const BigDecimal
var ZAHL0 = new BigDecimal("0");
// const BigDecimal
var ZAHL1 = new BigDecimal("1");
// const BigDecimal
var ZAHL2 = new BigDecimal("2");
// const BigDecimal
var ZAHL3 = new BigDecimal("3");
// const BigDecimal
var ZAHL4 = new BigDecimal("4");
// const BigDecimal
var ZAHL5 = new BigDecimal("5");
// const BigDecimal
var ZAHL6 = new BigDecimal("6");
// const BigDecimal
var ZAHL7 = new BigDecimal("7");
// const BigDecimal
var ZAHL8 = new BigDecimal("8");
// const BigDecimal
var ZAHL9 = new BigDecimal("9");
// const BigDecimal
var ZAHL10 = BigDecimal.TEN;
// const BigDecimal
var ZAHL11 = new BigDecimal("11");
// const BigDecimal
var ZAHL12 = new BigDecimal("12");
// const BigDecimal
var ZAHL100 = new BigDecimal("100");
// const BigDecimal
var ZAHL360 = new BigDecimal("360");
// const BigDecimal
var ZAHL500 = new BigDecimal("500");
// const BigDecimal
var ZAHL700 = new BigDecimal("700");
// const BigDecimal
var ZAHL1000 = new BigDecimal("1000");
module.exports = function Lohnsteuer2015DezemberBig(args) {
    //  Stand: 2015-11-16
    //  ZIVIT Düsseldorf
    //   EINGABEPARAMETER
    //  1, wenn die Anwendung des Faktorverfahrens gewählt wurden (nur in Steuerklasse IV)
    // int
    var af = (args.af !== undefined) ? args.af : 1.0;

    //  Auf die Vollendung des 64. Lebensjahres folgende
    //              Kalenderjahr (erforderlich, wenn ALTER1=1)
    // int - Implicit Default
    var AJAHR = (args.AJAHR !== undefined) ? args.AJAHR : 0;

    //  1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
    //              der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0
    // int - Implicit Default
    var ALTER1 = (args.ALTER1 !== undefined) ? args.ALTER1 : 0;

    //  in VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent
    // BigDecimal
    var ENTSCH = (args.ENTSCH !== undefined) ? new BigDecimal(String(args.ENTSCH)) : new BigDecimal("0");

    //  eingetragener Faktor mit drei Nachkommastellen
    // double
    var f = (args.f !== undefined) ? args.f : 1.0;

    //  Jahresfreibetrag nach Maßgabe der Eintragungen auf der
    //              Lohnsteuerkarte in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JFREIB = (args.JFREIB !== undefined) ? new BigDecimal(String(args.JFREIB)) : new BigDecimal("0");

    //  Jahreshinzurechnungsbetrag in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JHINZU = (args.JHINZU !== undefined) ? new BigDecimal(String(args.JHINZU)) : new BigDecimal("0");

    //  Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent.
    //              Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingabe „sonsti-ger Bezüge“ (Feld SONSTB)
    //              oder bei Eingabe der „Vergütung für mehrjährige Tätigkeit“ (Feld VMT).
    //              Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem
    //              voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrere Jahres aus einem vorangegangenen
    //              Abrechnungszeitraum sind in voller Höhe hinzuzurechnen.
    // BigDecimal - Implicit Default
    var JRE4 = (args.JRE4 !== undefined) ? new BigDecimal(String(args.JRE4)) : new BigDecimal("0");

    //  In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var JVBEZ = (args.JVBEZ !== undefined) ? new BigDecimal(String(args.JVBEZ)) : new BigDecimal("0");

    // Merker für die Vorsorgepauschale
    //             2 = der Arbeitnehmer ist NICCHT in der gesetzlichen Rentenversicherung versichert.
    //
    //             1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
    //                 Beitragsbemessungsgrenze OST.
    //
    //             0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
    //                 Beitragsbemessungsgrenze WEST.
    // int - Implicit Default
    var KRV = (args.KRV !== undefined) ? args.KRV : 0;

    //  Einkommensbezogener Zusatzbeitragssatz eines gesetzlich krankenversicherten Arbeitnehmers,
    //          auf dessen Basis der an die Kran-kenkasse zu zahlende Zusatzbeitrag berechnet wird,
    //          in Prozent (bspw. 0,90 für 0,90 %) mit 2 Dezimalstellen.
    //          Der von der Kranken-kasse festgesetzte Zusatzbeitragssatz ist bei Abweichungen unmaßgeblich.
    // BigDecimal - Implicit Default
    var KVZ = (args.KVZ !== undefined) ? new BigDecimal(String(args.KVZ)) : new BigDecimal("0");

    //  Lohnzahlungszeitraum:
    //              1 = Jahr
    //              2 = Monat
    //              3 = Woche
    //              4 = Tag
    // int - Implicit Default
    var LZZ = (args.LZZ !== undefined) ? args.LZZ : 0;

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für
    //              den Lohnzahlungszeitraum in Cent
    // BigDecimal - Implicit Default
    var LZZFREIB = (args.LZZFREIB !== undefined) ? new BigDecimal(String(args.LZZFREIB)) : new BigDecimal("0");

    //  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
    //              für den Lohnzahlungszeitraum in Cent
    // BigDecimal - Implicit Default
    var LZZHINZU = (args.LZZHINZU !== undefined) ? new BigDecimal(String(args.LZZHINZU)) : new BigDecimal("0");

    //  Dem Arbeitgeber mitgeteilte Zahlungen des Arbeitnehmers zur privaten
    //              Kranken- bzw. Pflegeversicherung im Sinne des §10 Abs. 1 Nr. 3 EStG 2010
    //              als Monatsbetrag in Cent (der Wert ist inabhängig vom Lohnzahlungszeitraum immer
    //              als Monatsbetrag anzugeben).
    // BigDecimal
    var PKPV = (args.PKPV !== undefined) ? new BigDecimal(String(args.PKPV)) : new BigDecimal("0");

    //  Krankenversicherung:
    //              0 = gesetzlich krankenversicherte Arbeitnehmer
    //              1 = ausschließlich privat krankenversicherte Arbeitnehmer OHNE Arbeitgeberzuschuss
    //              2 = ausschließlich privat krankenversicherte Arbeitnehmer MIT Arbeitgeberzuschuss
    // int
    var PKV = (args.PKV !== undefined) ? args.PKV : 0;

    //  1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw.
    //                  zu berücksichtigen wären, sonst 0.
    // int
    var PVS = (args.PVS !== undefined) ? args.PVS : 0;

    //  1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung
    //                  zu zahlen hat, sonst 0.
    // int
    var PVZ = (args.PVZ !== undefined) ? args.PVZ : 0;

    //  Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
    //              keiner Religionszugehoerigkeit = 0)
    // int - Implicit Default
    var R = (args.R !== undefined) ? args.R : 0;

    //  Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
    //              fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
    //              der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
    //              Freibetrags in Cents.
    // BigDecimal - Implicit Default
    var RE4 = (args.RE4 !== undefined) ? new BigDecimal(String(args.RE4)) : new BigDecimal("0");

    //  Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
    //              Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //              soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var SONSTB = (args.SONSTB !== undefined) ? new BigDecimal(String(args.SONSTB)) : new BigDecimal("0");

    //  Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
    //              soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
    //              (in SONSTB enthalten) in Cents
    // BigDecimal - Implicit Default
    var STERBE = (args.STERBE !== undefined) ? new BigDecimal(String(args.STERBE)) : new BigDecimal("0");

    //  Steuerklasse:
    //              1 = I
    //              2 = II
    //              3 = III
    //              4 = IV
    //              5 = V
    //              6 = VI
    // int - Implicit Default
    var STKL = (args.STKL !== undefined) ? args.STKL : 0;

    //  In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBEZ = (args.VBEZ !== undefined) ? new BigDecimal(String(args.VBEZ)) : new BigDecimal("0");

    //  Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
    //              in Cents
    // BigDecimal - Implicit Default
    var VBEZM = (args.VBEZM !== undefined) ? new BigDecimal(String(args.VBEZM)) : new BigDecimal("0");

    //  Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
    //              bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
    //              bei Versorgungsbezuegen in Cents
    // BigDecimal - Implicit Default
    var VBEZS = (args.VBEZS !== undefined) ? new BigDecimal(String(args.VBEZS)) : new BigDecimal("0");

    //  In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
    //             in Cents (ggf. 0)
    // BigDecimal - Implicit Default
    var VBS = (args.VBS !== undefined) ? new BigDecimal(String(args.VBS)) : new BigDecimal("0");

    //  Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
    //              mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug
    // int - Implicit Default
    var VJAHR = (args.VJAHR !== undefined) ? args.VJAHR : 0;

    //  Kapitalauszahlungen / Abfindungen / Nachzahlungen bei Versorgungsbezügen
    //              für mehrere Jahre in Cent (ggf. 0)
    // BigDecimal - Implicit Default
    var VKAPA = (args.VKAPA !== undefined) ? new BigDecimal(String(args.VKAPA)) : new BigDecimal("0");

    //  Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen
    //              bei Versorgungsbezügen in Cent (ggf. 0)
    // BigDecimal - Implicit Default
    var VMT = (args.VMT !== undefined) ? new BigDecimal(String(args.VMT)) : new BigDecimal("0");

    //  Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
    //              I, II, III und IV)
    // BigDecimal - Implicit Default
    var ZKF = (args.ZKF !== undefined) ? new BigDecimal(String(args.ZKF)) : new BigDecimal("0");

    //  Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
    //              erforderlich bei Jahresberechnung (LZZ = 1)
    // int - Implicit Default
    var ZMVB = (args.ZMVB !== undefined) ? args.ZMVB : 0;

    //  In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
    // BigDecimal
    var JRE4ENT = (args.JRE4ENT !== undefined) ? new BigDecimal(String(args.JRE4ENT)) : new BigDecimal("0");

    //  In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent
    // BigDecimal
    var SONSTENT = (args.SONSTENT !== undefined) ? new BigDecimal(String(args.SONSTENT)) : new BigDecimal("0");

    //   AUSGABEPARAMETER
    //  Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents
    var BK = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
    //              fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents
    var BKS = new BigDecimal("0"); // BigDecimal

    var BKV = new BigDecimal("0"); // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents
    var LSTLZZ = new BigDecimal("0"); // BigDecimal

    //  Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
    //              in Cents
    var SOLZLZZ = new BigDecimal("0"); // BigDecimal

    //  Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
    //              Taetigkeit) in Cents
    var SOLZS = new BigDecimal("0"); // BigDecimal

    //  Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
    //              Cents
    var SOLZV = new BigDecimal("0"); // BigDecimal

    //  Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
    //              Taetigkeit) in Cents
    var STS = new BigDecimal("0"); // BigDecimal

    //  Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents
    var STV = new BigDecimal("0"); // BigDecimal

    //  Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur
    //              privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch
    //              die Mindestvorsorgepauschale) in Cent beim laufenden Arbeitslohn. Für Zwecke der Lohn-
    //              steuerbescheinigung sind die einzelnen Ausgabewerte außerhalb des eigentlichen Lohn-
    //              steuerbescheinigungsprogramms zu addieren; hinzuzurechnen sind auch die Ausgabewerte
    //              VKVSONST
    var VKVLZZ = new BigDecimal("0"); // BigDecimal

    //  Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers
    //              zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf.
    //              auch die Mindestvorsorgepauschale) in Cent bei sonstigen Bezügen. Der Ausgabewert kann
    //              auch negativ sein. Für tarifermäßigt zu besteuernde Vergütungen für mehrjährige
    //              Tätigkeiten enthält der PAP keinen entsprechenden Ausgabewert.
    var VKVSONST = new BigDecimal("0"); // BigDecimal

    //   INTERNE FELDER
    //  spezielles ZVE f. Einkommensteuer-Berechnung, dieses darf negativ werden.
    var zveEkSt = new BigDecimal("0"); // BigDecimal

    var zveGemeinsam = new BigDecimal("0"); // BigDecimal

    //  Altersentlastungsbetrag nach Alterseinkünftegesetz in €,
    //              Cent (2 Dezimalstellen)
    var ALTE = new BigDecimal("0"); // BigDecimal

    //  Arbeitnehmer-Pauschbetrag in EURO
    var ANP = new BigDecimal("0"); // BigDecimal

    //  Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
    //              auf ganze Cents abgerundet
    var ANTEIL1 = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage für Altersentlastungsbetrag in €, Cent
    //              (2 Dezimalstellen)
    var BMG = new BigDecimal("0"); // BigDecimal

    //  Beitragsbemessungsgrenze in der gesetzlichen Krankenversicherung
    //             und der sozialen Pflegeversicherung in Euro
    var BBGKVPV = new BigDecimal("0"); // BigDecimal

    //  allgemeine Beitragsbemessungsgrenze in der allgemeinen Renten-versicherung in Euro
    var BBGRV = new BigDecimal("0"); // BigDecimal

    //  Differenz zwischen ST1 und ST2 in EURO
    var DIFF = new BigDecimal("0"); // BigDecimal

    //  Entlastungsbetrag fuer Alleinerziehende in EURO
    var EFA = new BigDecimal("0"); // BigDecimal

    //  Versorgungsfreibetrag in €, Cent (2 Dezimalstellen)
    var FVB = new BigDecimal("0"); // BigDecimal

    //  Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) für die Berechnung
    //              der Lohnsteuer für den sonstigen Bezug
    var FVBSO = new BigDecimal("0"); // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in EURO
    var FVBZ = new BigDecimal("0"); // BigDecimal

    //  Zuschlag zum Versorgungsfreibetrag in EURO fuer die Berechnung
    //              der Lohnsteuer beim sonstigen Bezug
    var FVBZSO = new BigDecimal("0"); // BigDecimal

    //  Maximaler Altersentlastungsbetrag in €
    var HBALTE = new BigDecimal("0"); // BigDecimal

    //  Massgeblicher maximaler Versorgungsfreibetrag in €
    var HFVB = new BigDecimal("0"); // BigDecimal

    //  Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €,Cent
    //              (2 Dezimalstellen)
    var HFVBZ = new BigDecimal("0"); // BigDecimal

    //  Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €, Cent
    //              (2 Dezimalstellen) für die Berechnung der Lohnsteuer für den
    //              sonstigen Bezug
    var HFVBZSO = new BigDecimal("0"); // BigDecimal

    //  Nummer der Tabellenwerte fuer Versorgungsparameter
    var J = 0; // int

    //  Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
    //              Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO
    var JBMG = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechneter LZZFREIB in €, Cent
    //              (2 Dezimalstellen)
    var JLFREIB = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnete LZZHINZU in €, Cent
    //              (2 Dezimalstellen)
    var JLHINZU = new BigDecimal("0"); // BigDecimal

    //  Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
    //              UPANTEIL errechnet werden soll in Cents
    var JW = new BigDecimal("0"); // BigDecimal

    //  Jahreswert Lohnsteuer vor KiFBG in Cent
    var JWLSTA = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Jahreswert Lohnsteuer unter Berücksichtigung des KiFBG in Cent
    var JWLSTN = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Jahreswert Solidaritätszuschlag vor KiFBG in Cent
    var JWSOLZA = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Jahreswert Solidaritätszuschlag unter Berücksichtigung des KiFBG in Cent
    var JWSOLZN = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Jahreswert Bemessungsgrundlage Kirchensteuer vor KiFBG in Cent
    var JWBKA = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    // Jahreswert Bemessungsgrundlage Kirchensteuer unter Berücksich-tigung des KiFBG in Cent
    var JWBKN = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag
    var K = 0; // int

    //  Merker für Berechnung Lohnsteuer für mehrjährige Tätigkeit.
    //              0 = normale Steuerberechnung
    //              1 = Steuerberechnung für mehrjährige Tätigkeit
    //              2 = entfällt
    var KENNVMT = 0; // int

    //  Summe der Freibetraege fuer Kinder in EURO
    var KFB = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitgebers zur Krankenversicherung
    var KVSATZAG = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitnehmers zur Krankenversicherung
    var KVSATZAN = new BigDecimal("0"); // BigDecimal

    //  Kennzahl fuer die Einkommensteuer-Tabellenart:
    //              1 = Grundtabelle
    //              2 = Splittingtabelle
    var KZTAB = 0; // int

    //  Jahreslohnsteuer in EURO
    var LSTJAHR = new BigDecimal("0"); // BigDecimal

    //  Zwischenfelder der Jahreslohnsteuer in Cent
    var LST1 = new BigDecimal("0"); // BigDecimal

    var LST2 = new BigDecimal("0"); // BigDecimal

    var LST3 = new BigDecimal("0"); // BigDecimal

    var LSTOSO = new BigDecimal("0"); // BigDecimal

    var LSTSO = new BigDecimal("0"); // BigDecimal

    //  Mindeststeuer fuer die Steuerklassen V und VI in EURO
    var MIST = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitgebers zur Pflegeversicherung
    var PVSATZAG = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitnehmers zur Pflegeversicherung
    var PVSATZAN = new BigDecimal("0"); // BigDecimal

    //  Beitragssatz des Arbeitnehmers in der allgemeinen gesetzlichen Rentenversicherung (4 Dezimalstellen)
    var RVSATZAN = new BigDecimal("0"); // BigDecimal

    //  Rechenwert in Gleitkommadarstellung
    var RW = new BigDecimal("0"); // BigDecimal

    //  Sonderausgaben-Pauschbetrag in EURO
    var SAP = new BigDecimal("0"); // BigDecimal

    //  Schleifenzähler für Differenzberechnung
    var SCHLEIFZ = 0; // int

    //  Neu 2015
    //  Freigrenze fuer den Solidaritaetszuschlag in EURO
    var SOLZFREI = new BigDecimal("0"); // BigDecimal

    //  Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen)
    var SOLZJ = new BigDecimal("0"); // BigDecimal

    //  Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
    //              in EURO, C (2 Dezimalstellen)
    var SOLZMIN = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer in EURO
    var ST = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO
    var ST1 = new BigDecimal("0"); // BigDecimal

    //  Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO
    var ST2 = new BigDecimal("0"); // BigDecimal

    //  Zwischenfeld zur Ermittlung der Steuer auf Vergütungen für mehrjährige Tätigkeit
    var STOVMT = new BigDecimal("0"); // BigDecimal

    //  Teilbetragssatz der Vorsorgepauschale für die Rentenversicherung (2 Dezimalstellen)
    var TBSVORV = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents
    var VBEZB = new BigDecimal("0"); // BigDecimal

    //  Bemessungsgrundlage für den Versorgungsfreibetrag in Cent für
    //              den sonstigen Bezug
    var VBEZBSO = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VHB = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale in EURO, C (2 Dezimalstellen)
    var VSP = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C
    var VSPN = new BigDecimal("0"); // BigDecimal

    //  Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
    //              dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP1 = new BigDecimal("0"); // BigDecimal

    //  Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
    //              dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen)
    var VSP2 = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale mit Teilbeträgen für die gesetzliche Kranken- und
    //              soziale Pflegeversicherung nach fiktiven Beträgen oder ggf. für die
    //              private Basiskrankenversicherung und private Pflege-Pflichtversicherung
    //              in Euro, Cent (2 Dezimalstellen)
    var VSP3 = new BigDecimal("0"); // BigDecimal

    //  Erster Grenzwert in Steuerklasse V/VI in Euro
    var W1STKL5 = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Zweiter Grenzwert in Steuerklasse V/VI in Euro
    var W2STKL5 = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Dritter Grenzwert in Steuerklasse V/VI in Euro
    var W3STKL5 = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 3 EStG in EURO
    var VSPKURZ = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO
    var VSPMAX1 = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO
    var VSPMAX2 = new BigDecimal("0"); // BigDecimal

    //  Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
    //              in EURO, C (2 Dezimalstellen)
    var VSPO = new BigDecimal("0"); // BigDecimal

    //  Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
    //              Rest von VSPO in EURO, C (2 Dezimalstellen)
    var VSPREST = new BigDecimal("0"); // BigDecimal

    //  Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
    //              in EURO, C (2 Dezimalstellen)
    var VSPVOR = new BigDecimal("0"); // BigDecimal

    //  Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG €, C
    //              (2 Dezimalstellen)
    var X = new BigDecimal("0"); // BigDecimal

    //  gem. § 32a Abs. 1 EStG (6 Dezimalstellen)
    var Y = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
    //              nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4.
    var ZRE4 = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
    var ZRE4J = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
    //              nach Abzug des Versorgungsfreibetrags und des Alterentlastungsbetrags
    //              zur Berechnung der Vorsorgepauschale in €, Cent (2 Dezimalstellen)
    var ZRE4VP = new BigDecimal("0"); // BigDecimal

    //  Merkfeld ZRE4VP für Schleifenberechnung Dezember 2015 in Euro, Cent (2 Dezimalstellen)
    var ZRE4VPM = new BigDecimal("0"); // BigDecimal

    //  Neu 2015
    //  Feste Tabellenfreibeträge (ohne Vorsorgepauschale) in €, Cent
    //              (2 Dezimalstellen)
    var ZTABFB = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
    //              EURO, C (2 Dezimalstellen)
    var ZVBEZ = new BigDecimal("0"); // BigDecimal

    //  Auf einen Jahreslohn hochgerechnetes VBEZ in €, C (2 Dezimalstellen)
    var ZVBEZJ = new BigDecimal("0"); // BigDecimal

    //  Zu versteuerndes Einkommen in €, C (2 Dezimalstellen)
    var ZVE = new BigDecimal("0"); // BigDecimal

    //  Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
    //              Abs. 2 Satz 7 EStG in €
    var ZX = new BigDecimal("0"); // BigDecimal

    var ZZX = new BigDecimal("0"); // BigDecimal

    var HOCH = new BigDecimal("0"); // BigDecimal

    var VERGL = new BigDecimal("0"); // BigDecimal

    //  Jahreswert der berücksichtigten Beiträge zur privaten Basis-Krankenversicherung und
    //               privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent.
    var VKV = new BigDecimal("0"); // BigDecimal

    //  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags

    //  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags

    //  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag

    //  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags

    //  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags

    //  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte


















    //  PROGRAMMABLAUFPLAN, PAP Seite 14
    function main() {
        MPARA();
        MRE4JL();
        VBEZBSO = new BigDecimal("0");
        KENNVMT = 0;
        MRE4();
        MRE4ABZ();
        //  Anfang Neu 2015
        ZRE4VPM = ZRE4VP;
        SCHLEIFZ = 1;
        MBERECH();
        SCHLEIFZ = 2;
        W1STKL5 = new BigDecimal("9873");
        ZRE4VP = ZRE4VPM;
        MBERECH();
        MLST1215();
        //  Ende Neu 2015
        //
        //     <EXECUTE method="MZTABFB"/>
        //     <EXECUTE method="MLSTJAHR"/>
        //     <EVAL exec="LSTJAHR= ST.multiply(BigDecimal.valueOf(f)).setScale(0,BigDecimal.ROUND_DOWN)"/>
        //     <EVAL exec="JW= LSTJAHR.multiply(ZAHL100)"/>
        //     <EXECUTE method="UPLSTLZZ"/>
        //     <EXECUTE method="UPVKVLZZ"/>
        //
        //     <IF expr="ZKF.compareTo (BigDecimal.ZERO) == 1">
        //       <THEN>
        //             <EVAL exec="ZTABFB= (ZTABFB.add (KFB)).setScale (2, BigDecimal.ROUND_DOWN)"/>
        //             <EXECUTE method="MRE4ABZ"/>
        //             <EXECUTE method="MLSTJAHR"/>
        //             <EVAL exec="JBMG= ST.multiply(BigDecimal.valueOf(f)).setScale(0, BigDecimal.ROUND_DOWN)"/>
        //       </THEN>
        //       <ELSE>
        //             <EVAL exec="JBMG= LSTJAHR"/>
        //       </ELSE>
        //     </IF>
        //     <EXECUTE method="MSOLZ"/>
        //
        MSONST();
        MVMT();
    }

    //  Zuweisung von Werten für bestimmte Sozialversicherungsparameter  PAP Seite 15
    function MPARA() {
        if (KRV < 2)         //  &lt; = <
{
            if (KRV === 0) {
                BBGRV = new BigDecimal("72600");
            } else {
                BBGRV = new BigDecimal("62400");
            }
            RVSATZAN = new BigDecimal("0.0935");
            TBSVORV = new BigDecimal("0.60");
        } else {
            //  Nichts zu tun
        }
        BBGKVPV = new BigDecimal("49500");
        KVSATZAN = (KVZ.divide(ZAHL100)).add(new BigDecimal("0.07"));
        KVSATZAG = new BigDecimal("0.07");
        if (PVS === 1) {
            PVSATZAN = new BigDecimal("0.01675");
            PVSATZAG = new BigDecimal("0.00675");
        } else {
            PVSATZAN = new BigDecimal("0.01175");
            PVSATZAG = new BigDecimal("0.01175");
        }
        if (PVZ === 1) {
            PVSATZAN = PVSATZAN.add(new BigDecimal("0.0025"));
        }
        //  Anfang Neu 2015
        W1STKL5 = new BigDecimal("9763");
        W2STKL5 = new BigDecimal("26441");
        W3STKL5 = new BigDecimal("200584");
        //  Ende Neu 2015
    }

    //  Ermittlung des Jahresarbeitslohns nach § 39 b Abs. 2 Satz 2 EStG, PAP Seite 16
    function MRE4JL() {
        if (LZZ === 1) {
            ZRE4J = RE4.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            ZVBEZJ = VBEZ.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            JLFREIB = LZZFREIB.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            JLHINZU = LZZHINZU.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
        } else {
            if (LZZ === 2) {
                ZRE4J = (RE4.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                ZVBEZJ = (VBEZ.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                JLFREIB = (LZZFREIB.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                JLHINZU = (LZZHINZU.multiply(ZAHL12)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            } else {
                if (LZZ === 3) {
                    ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                    ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                    JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                    JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL700).round(2, BigDecimal.RoundingModes.DOWN);
                } else {
                    ZRE4J = (RE4.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                    ZVBEZJ = (VBEZ.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                    JLFREIB = (LZZFREIB.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                    JLHINZU = (LZZHINZU.multiply(ZAHL360)).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
                }
            }
        }
        if (af === 0) {
            f = 1;
        }
    }

    //  Freibeträge für Versorgungsbezüge, Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 17
    function MRE4() {
        if (ZVBEZJ.compareTo(new BigDecimal("0")) === 0) {
            FVBZ = new BigDecimal("0");
            FVB = new BigDecimal("0");
            FVBZSO = new BigDecimal("0");
            FVBSO = new BigDecimal("0");
        } else {
            if (VJAHR < 2006) {
                J = 1;
            } else {
                if (VJAHR < 2040) {
                    J = VJAHR - 2004;
                } else {
                    J = 36;
                }
            }
            if (LZZ === 1) {
                VBEZB = (VBEZM.multiply(new BigDecimal(String(ZMVB)))).add(VBEZS);
                HFVB = TAB2[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB)));
                FVBZ = TAB3[J].divide(ZAHL12).multiply(new BigDecimal(String(ZMVB))).round(0, BigDecimal.RoundingModes.UP);
            } else {
                VBEZB = ((VBEZM.multiply(ZAHL12)).add(VBEZS)).round(2, BigDecimal.RoundingModes.DOWN);
                HFVB = TAB2[J];
                FVBZ = TAB3[J];
            }
            FVB = ((VBEZB.multiply(TAB1[J]))).divide(ZAHL100).round(2, BigDecimal.RoundingModes.UP);
            if (FVB.compareTo(HFVB) === 1) {
                FVB = HFVB;
            }
            FVBSO = (FVB.add((VBEZBSO.multiply(TAB1[J])).divide(ZAHL100))).round(2, BigDecimal.RoundingModes.UP);
            if (FVBSO.compareTo(TAB2[J]) === 1) {
                FVBSO = TAB2[J];
            }
            HFVBZSO = (((VBEZB.add(VBEZBSO)).divide(ZAHL100)).subtract(FVBSO)).round(2, BigDecimal.RoundingModes.DOWN);
            FVBZSO = (FVBZ.add((VBEZBSO).divide(ZAHL100))).round(0, BigDecimal.RoundingModes.UP);
            if (FVBZSO.compareTo(HFVBZSO) === 1) {
                FVBZSO = HFVBZSO.round(0, BigDecimal.RoundingModes.UP);
            }
            if (FVBZSO.compareTo(TAB3[J]) === 1) {
                FVBZSO = TAB3[J];
            }
            HFVBZ = ((VBEZB.divide(ZAHL100)).subtract(FVB)).round(2, BigDecimal.RoundingModes.DOWN);
            if (FVBZ.compareTo(HFVBZ) === 1) {
                FVBZ = HFVBZ.round(0, BigDecimal.RoundingModes.UP);
            }
        }
        MRE4ALTE();
    }

    //  Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 18
    function MRE4ALTE() {
        if (ALTER1 === 0) {
            ALTE = new BigDecimal("0");
        } else {
            if (AJAHR < 2006) {
                K = 1;
            } else {
                if (AJAHR < 2040) {
                    K = AJAHR - 2004;
                } else {
                    K = 36;
                }
            }
            BMG = ZRE4J.subtract(ZVBEZJ);
            //  Lt. PAP muss hier auf ganze EUR gerundet werden
            ALTE = (BMG.multiply(TAB4[K])).round(0, BigDecimal.RoundingModes.UP);
            HBALTE = TAB5[K];
            if (ALTE.compareTo(HBALTE) === 1) {
                ALTE = HBALTE;
            }
        }
    }

    //  Ermittlung des Jahresarbeitslohns nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4 EStG, PAP Seite 20
    function MRE4ABZ() {
        ZRE4 = (ZRE4J.subtract(FVB).subtract(ALTE).subtract(JLFREIB).add(JLHINZU)).round(2, BigDecimal.RoundingModes.DOWN);
        if (ZRE4.compareTo(new BigDecimal("0")) === -1) {
            ZRE4 = new BigDecimal("0");
        }
        ZRE4VP = ZRE4J;
        if (KENNVMT === 2) {
            ZRE4VP = ZRE4VP.subtract(ENTSCH.divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
        }
        ZVBEZ = ZVBEZJ.subtract(FVB).round(2, BigDecimal.RoundingModes.DOWN);
        if (ZVBEZ.compareTo(new BigDecimal("0")) === -1) {
            ZVBEZ = new BigDecimal("0");
        }
    }

    //  Komplett Neu 2015
    //  LohnzahlungszeitraumSchleife für Differenzrechnung Dezember 2015 Seite 21
    function MBERECH() {
        if (SCHLEIFZ === 1) {
            MZTABFBA();
        } else {
            MZTABFBN();
        }
        MLSTJAHR();
        LSTJAHR = (ST.multiply(new BigDecimal(String(f)))).round(0, BigDecimal.RoundingModes.DOWN);
        UPLSTLZZ();
        UPVKVLZZ();
        if (ZKF.compareTo(new BigDecimal("0")) === 1)         //  ZKF > 0
{
            ZTABFB = ZTABFB.add(KFB);
            MRE4ABZ();
            MLSTJAHR();
            JBMG = (ST.multiply(new BigDecimal(String(f)))).round(0, BigDecimal.RoundingModes.DOWN);
        } else {
            JBMG = LSTJAHR;
        }
        MSOLZ();
    }

    //  Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 22
    function MZTABFBA() {
        //  Neu 2015 Nur Änderung an der Bezeichnung
        ANP = new BigDecimal("0");
        if (ZVBEZ.compareTo(new BigDecimal("0")) >= 0 && ZVBEZ.compareTo(FVBZ) === -1) {
            FVBZ = new BigDecimal(String(ZVBEZ.floor()));
        }
        if (STKL < 6) {
            if (ZVBEZ.compareTo(new BigDecimal("0")) === 1) {
                if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal("102")) === -1) {
                    ANP = (ZVBEZ.subtract(FVBZ)).round(0, BigDecimal.RoundingModes.UP);
                } else {
                    ANP = new BigDecimal("102");
                }
            }
        } else {
            FVBZ = new BigDecimal("0");
            FVBZSO = new BigDecimal("0");
        }
        if (STKL < 6) {
            if (ZRE4.compareTo(ZVBEZ) === 1) {
                if (ZRE4.subtract(ZVBEZ).compareTo(ZAHL1000) === -1) {
                    ANP = ANP.add(ZRE4).subtract(ZVBEZ).round(0, BigDecimal.RoundingModes.UP);
                } else {
                    ANP = ANP.add(ZAHL1000);
                }
            }
        }
        KZTAB = 1;
        if (STKL === 1) {
            SAP = new BigDecimal("36");
            KFB = (ZKF.multiply(new BigDecimal("7008"))).round(0, BigDecimal.RoundingModes.DOWN);
        } else {
            if (STKL === 2) {
                EFA = new BigDecimal("1308");
                SAP = new BigDecimal("36");
                KFB = (ZKF.multiply(new BigDecimal("7008"))).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (STKL === 3) {
                    KZTAB = 2;
                    SAP = new BigDecimal("36");
                    KFB = (ZKF.multiply(new BigDecimal("7008"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (STKL === 4) {
                        SAP = new BigDecimal("36");
                        KFB = (ZKF.multiply(new BigDecimal("3504"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        if (STKL === 5) {
                            SAP = new BigDecimal("36");
                            KFB = new BigDecimal("0");
                        } else {
                            KFB = new BigDecimal("0");
                        }
                    }
                }
            }
        }
        ZTABFB = (EFA.add(ANP).add(SAP).add(FVBZ)).round(2, BigDecimal.RoundingModes.DOWN);
    }

    //  Komplett Neu 2015
    //  Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 23
    function MZTABFBN() {
        ANP = new BigDecimal("0");
        if (ZVBEZ.compareTo(new BigDecimal("0")) >= 0 && ZVBEZ.compareTo(FVBZ) === -1) {
            FVBZ = new BigDecimal(String(ZVBEZ.floor()));
        }
        if (STKL < 6) {
            if (ZVBEZ.compareTo(new BigDecimal("0")) === 1) {
                if ((ZVBEZ.subtract(FVBZ)).compareTo(new BigDecimal("102")) === -1) {
                    ANP = (ZVBEZ.subtract(FVBZ)).round(0, BigDecimal.RoundingModes.UP);
                } else {
                    ANP = new BigDecimal("102");
                }
            }
        } else {
            FVBZ = new BigDecimal("0");
            FVBZSO = new BigDecimal("0");
        }
        if (STKL < 6) {
            if (ZRE4.compareTo(ZVBEZ) === 1) {
                if (ZRE4.subtract(ZVBEZ).compareTo(ZAHL1000) === -1) {
                    ANP = ANP.add(ZRE4).subtract(ZVBEZ).round(0, BigDecimal.RoundingModes.UP);
                } else {
                    ANP = ANP.add(ZAHL1000);
                }
            }
        }
        KZTAB = 1;
        if (STKL === 1) {
            SAP = new BigDecimal("36");
            KFB = (ZKF.multiply(new BigDecimal("7152"))).round(0, BigDecimal.RoundingModes.DOWN);
        } else {
            if (STKL === 2) {
                EFA = new BigDecimal("1908");
                SAP = new BigDecimal("36");
                KFB = (ZKF.multiply(new BigDecimal("7152"))).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (STKL === 3) {
                    KZTAB = 2;
                    SAP = new BigDecimal("36");
                    KFB = (ZKF.multiply(new BigDecimal("7152"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (STKL === 4) {
                        SAP = new BigDecimal("36");
                        KFB = (ZKF.multiply(new BigDecimal("3576"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        if (STKL === 5) {
                            SAP = new BigDecimal("36");
                            KFB = new BigDecimal("0");
                        } else {
                            KFB = new BigDecimal("0");
                        }
                    }
                }
            }
        }
        ZTABFB = (EFA.add(ANP).add(SAP).add(FVBZ)).round(2, BigDecimal.RoundingModes.DOWN);
    }

    //  Ermittlung Jahreslohnsteuer, PAP Seite 24
    function MLSTJAHR() {
        UPEVP();
        if (KENNVMT !== 1) {
            ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP)).round(2, BigDecimal.RoundingModes.DOWN);
            UPMLST();
        } else {
            ZVE = (ZRE4.subtract(ZTABFB).subtract(VSP).subtract((VMT).divide(ZAHL100)).subtract((VKAPA).divide(ZAHL100))).round(2, BigDecimal.RoundingModes.DOWN);
            if (ZVE.compareTo(new BigDecimal("0")) === -1) {
                ZVE = ZVE.add(VMT.divide(ZAHL100)).add(VKAPA.divide(ZAHL100)).divide(ZAHL5).round(2, BigDecimal.RoundingModes.DOWN);
                UPMLST();
                ST = (ST.multiply(ZAHL5)).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                UPMLST();
                STOVMT = ST;
                ZVE = (ZVE.add(((VMT.add(VKAPA)).divide(ZAHL500)))).round(2, BigDecimal.RoundingModes.DOWN);
                UPMLST();
                ST = (((ST.subtract(STOVMT)).multiply(ZAHL5)).add(STOVMT)).round(0, BigDecimal.RoundingModes.DOWN);
            }
        }
    }

    //  PAP Seite 25
    function UPVKVLZZ() {
        UPVKV();
        JW = VKV;
        UPANTEIL();
        VKVLZZ = ANTEIL1;
    }

    //  PAP Seite 25
    function UPVKV() {
        if (PKV > 0) {
            if (VSP2.compareTo(VSP3) === 1) {
                VKV = VSP2.multiply(ZAHL100);
            } else {
                VKV = VSP3.multiply(ZAHL100);
            }
        } else {
            VKV = new BigDecimal("0");
        }
    }

    //  PAP Seite 26
    function UPLSTLZZ() {
        JW = LSTJAHR.multiply(ZAHL100);
        //  Anfang Neu 2015
        if (SCHLEIFZ === 1) {
            JWLSTA = JW;
        } else {
            JWLSTN = JW;
        }
        //  Ende Neu 2015
        UPANTEIL();
        LSTLZZ = ANTEIL1;
    }

    //  Ermittlung der Jahreslohnsteuer aus dem Einkommensteuertarif. PAP Seite 27
    function UPMLST() {
        if (ZVE.compareTo(ZAHL1) === -1) {
            ZVE = new BigDecimal("0");
            X = new BigDecimal("0");
        } else {
            X = (ZVE.divide(new BigDecimal(String(KZTAB)))).round(0, BigDecimal.RoundingModes.DOWN);
        }
        if (STKL < 5) {
            //  Anfang Neu 2015
            if (SCHLEIFZ === 1) {
                UPTAB14();
            } else {
                UPTAB15();
            }
            //  Ende Neu 2015
        } else {
            MST5_6();
        }
    }

    //      Vorsorgepauschale (§ 39b Absatz 2 Satz 5 Nummer 3 und Absatz 4 EStG)
    //               Achtung: Es wird davon ausgegangen, dass
    //                   a) Es wird davon ausge-gangen, dassa) für die BBG (Ost) 60.000 Euro und für die BBG (West) 71.400 Euro festgelegt wird sowie
    //                   b) der Beitragssatz zur Rentenversicherung auf 18,9 % gesenkt wird.
    //
    //               PAP Seite 28
    function UPEVP() {
        if (KRV > 1)         //  &lt; = < &gt; = >
{
            VSP1 = new BigDecimal("0");
        } else {
            //  Neu 2015 Anfang
            if (ZRE4VP.compareTo(BBGRV) === 1) {
                ZRE4VP = BBGRV;
            }
            VSP1 = (TBSVORV.multiply(ZRE4VP)).round(2, BigDecimal.RoundingModes.DOWN);
            VSP1 = (VSP1.multiply(RVSATZAN)).round(2, BigDecimal.RoundingModes.DOWN);
            //  Neu 2015 Ende
        }
        VSP2 = (ZRE4VP.multiply(new BigDecimal("0.12"))).round(2, BigDecimal.RoundingModes.DOWN);
        if (STKL === 3) {
            VHB = new BigDecimal("3000");
        } else {
            VHB = new BigDecimal("1900");
        }
        if (VSP2.compareTo(VHB) === 1) {
            VSP2 = VHB;
        }
        VSPN = (VSP1.add(VSP2)).round(0, BigDecimal.RoundingModes.UP);
        MVSP();
        if (VSPN.compareTo(VSP) === 1) {
            VSP = VSPN.round(2, BigDecimal.RoundingModes.DOWN);
        }
    }

    //  Vorsorgepauschale (§39b Abs. 2 Satz 5 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 29
    function MVSP() {
        if (ZRE4VP.compareTo(BBGKVPV) === 1) {
            ZRE4VP = BBGKVPV;
        }
        if (PKV > 0) {
            if (STKL === 6) {
                VSP3 = new BigDecimal("0");
            } else {
                VSP3 = PKPV.multiply(ZAHL12).divide(ZAHL100);
                if (PKV === 2) {
                    VSP3 = VSP3.subtract(ZRE4VP.multiply(KVSATZAG.add(PVSATZAG))).round(2, BigDecimal.RoundingModes.DOWN);
                }
            }
        } else {
            VSP3 = ZRE4VP.multiply(KVSATZAN.add(PVSATZAN)).round(2, BigDecimal.RoundingModes.DOWN);
        }
        VSP = VSP3.add(VSP1).round(0, BigDecimal.RoundingModes.UP);
    }

    //
    function UMVSP() {
        VSPVOR = (VSPVOR.subtract(ZRE4VP.multiply(new BigDecimal("0.16")))).round(2, BigDecimal.RoundingModes.DOWN);
        if (VSPVOR.compareTo(new BigDecimal("0")) === -1) {
            VSPVOR = new BigDecimal("0");
        }
        if (VSPO.compareTo(VSPVOR) === 1) {
            VSP = VSPVOR;
            VSPREST = VSPO.subtract(VSPVOR);
            if (VSPREST.compareTo(VSPMAX1) === 1) {
                VSP = VSP.add(VSPMAX1);
                VSPREST = (VSPREST.subtract(VSPMAX1)).divide(ZAHL2).round(2, BigDecimal.RoundingModes.UP);
                if (VSPREST.compareTo(VSPMAX2) === 1) {
                    VSP = (VSP.add(VSPMAX2)).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    VSP = (VSP.add(VSPREST)).round(0, BigDecimal.RoundingModes.DOWN);
                }
            } else {
                VSP = (VSP.add(VSPREST)).round(0, BigDecimal.RoundingModes.DOWN);
            }
        } else {
            VSP = VSPO.round(0, BigDecimal.RoundingModes.DOWN);
        }
    }

    //  Neu 2015
    //  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 30
    function MST5_6() {
        ZZX = X;
        if (ZZX.compareTo(W2STKL5) === 1) {
            ZX = W2STKL5;
            UP5_6();
            if (ZZX.compareTo(W3STKL5) === 1) {
                ST = (ST.add((W3STKL5.subtract(W2STKL5)).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
                ST = (ST.add((ZZX.subtract(W3STKL5)).multiply(new BigDecimal("0.45")))).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                ST = (ST.add((ZZX.subtract(W2STKL5)).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
            }
        } else {
            ZX = ZZX;
            UP5_6();
            if (ZZX.compareTo(W1STKL5) === 1) {
                VERGL = ST;
                ZX = W1STKL5;
                UP5_6();
                HOCH = (ST.add((ZZX.subtract(W1STKL5)).multiply(new BigDecimal("0.42")))).round(0, BigDecimal.RoundingModes.DOWN);
                //  Neuer Wert 2014
                if (HOCH.compareTo(VERGL) === -1) {
                    ST = HOCH;
                } else {
                    ST = VERGL;
                }
            }
        }
    }

    //  Unterprogramm zur Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 31
    function UP5_6() {
        X = (ZX.multiply(new BigDecimal("1.25"))).round(2, BigDecimal.RoundingModes.DOWN);
        //  Anfang Neu 2015
        if (SCHLEIFZ === 1) {
            UPTAB14();
        } else {
            UPTAB15();
        }
        //  Ende Neu 2015
        ST1 = ST;
        X = (ZX.multiply(new BigDecimal("0.75"))).round(2, BigDecimal.RoundingModes.DOWN);
        //  Anfang Neu 2015
        if (SCHLEIFZ === 1) {
            UPTAB14();
        } else {
            UPTAB15();
        }
        //  Ende Neu 2015
        ST2 = ST;
        DIFF = (ST1.subtract(ST2)).multiply(ZAHL2);
        MIST = (ZX.multiply(new BigDecimal("0.14"))).round(0, BigDecimal.RoundingModes.DOWN);
        if (MIST.compareTo(DIFF) === 1) {
            ST = MIST;
        } else {
            ST = DIFF;
        }
    }

    //  Solidaritaetszuschlag, PAP Seite 32
    function MSOLZ() {
        SOLZFREI = new BigDecimal(String(972 * KZTAB));
        if (JBMG.compareTo(SOLZFREI) === 1) {
            SOLZJ = (JBMG.multiply(new BigDecimal("5.5"))).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            SOLZMIN = (JBMG.subtract(SOLZFREI)).multiply(new BigDecimal("20")).divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
            if (SOLZMIN.compareTo(SOLZJ) === -1) {
                SOLZJ = SOLZMIN;
            }
            JW = SOLZJ.multiply(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN);
            //  Anfang Neu 2015
            if (SCHLEIFZ === 1) {
                JWSOLZA = JW;
            } else {
                JWSOLZN = JW;
            }
            //  Ende Neu 2015
            UPANTEIL();
            SOLZLZZ = ANTEIL1;
        } else {
            SOLZLZZ = new BigDecimal("0");
        }
        if (R > 0) {
            JW = JBMG.multiply(ZAHL100);
            //  Anfang Neu 2015
            if (SCHLEIFZ === 1) {
                JWBKA = JW;
            } else {
                JWBKN = JW;
            }
            //  Ende Neu 2015
            UPANTEIL();
            BK = ANTEIL1;
        } else {
            BK = new BigDecimal("0");
        }
    }

    //  Komplett Neu 2015
    //  Differenzrechnung Dezember 2015, PAP Seite 33
    function MLST1215() {
        if (LZZ > 1) {
            JW = (JWLSTN.subtract(new BigDecimal("11").multiply((JWLSTA.subtract(JWLSTN))))).round(0, BigDecimal.RoundingModes.DOWN);
            if (JW.compareTo(new BigDecimal("0")) === -1)             //  JW < 0
{
                ANTEIL1 = new BigDecimal("0");
            } else {
                UPANTEIL();
            }
            LSTLZZ = ANTEIL1;
            JW = (JWSOLZN.subtract(new BigDecimal("11").multiply(JWSOLZA.subtract(JWSOLZN)))).round(0, BigDecimal.RoundingModes.DOWN);
            if (JW.compareTo(new BigDecimal("0")) === -1)             //  JW < 0
{
                ANTEIL1 = new BigDecimal("0");
            } else {
                UPANTEIL();
            }
            SOLZLZZ = ANTEIL1;
            JW = (JWBKN.subtract(new BigDecimal("11").multiply(JWBKA.subtract(JWBKN)))).round(0, BigDecimal.RoundingModes.DOWN);
            if (JW.compareTo(new BigDecimal("0")) === -1)             //  JW < 0
{
                ANTEIL1 = new BigDecimal("0");
            } else {
                UPANTEIL();
            }
            BK = ANTEIL1;
        }
    }

    //  Anteil von Jahresbetraegen fuer einen LZZ (§ 39b Abs. 2 Satz 9 EStG), PAP Seite 34
    function UPANTEIL() {
        if (LZZ === 1) {
            ANTEIL1 = JW;
        } else {
            if (LZZ === 2) {
                ANTEIL1 = JW.divide(ZAHL12).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (LZZ === 3) {
                    ANTEIL1 = (JW.multiply(ZAHL7)).divide(ZAHL360).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    ANTEIL1 = JW.divide(ZAHL360).round(0, BigDecimal.RoundingModes.DOWN);
                }
            }
        }
    }

    //  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 8 EStG), PAP Seite 35
    function MSONST() {
        LZZ = 1;
        if (ZMVB === 0) {
            ZMVB = 12;
        }
        if (SONSTB.compareTo(new BigDecimal("0")) === 0) {
            VKVSONST = new BigDecimal("0");
            LSTSO = new BigDecimal("0");
            STS = new BigDecimal("0");
            SOLZS = new BigDecimal("0");
            BKS = new BigDecimal("0");
        } else {
            MOSONST();
            UPVKV();
            VKVSONST = VKV;
            ZRE4J = ((JRE4.add(SONSTB)).divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
            ZVBEZJ = ((JVBEZ.add(VBS)).divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
            VBEZBSO = STERBE;
            MRE4SONST();
            MLSTJAHR();
            UPVKV();
            VKVSONST = VKV.subtract(VKVSONST);
            LSTSO = ST.multiply(ZAHL100);
            //      lt. PAP muss hier auf ganze EUR aufgerundet werden,
            //                     allerdings muss der Wert in Cent vorgehalten werden,
            //                     deshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
            //                     wieder die Multiplikation mit 100
            STS = LSTSO.subtract(LSTOSO).multiply(new BigDecimal(String(f))).divide(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN).multiply(ZAHL100);
            if (STS.compareTo(new BigDecimal("0")) === -1) {
                STS = new BigDecimal("0");
            }
            SOLZS = STS.multiply(new BigDecimal("5.5")).divide(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN);
            if (R > 0) {
                BKS = STS;
            } else {
                BKS = new BigDecimal("0");
            }
        }
    }

    //  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 und 10 EStG), PAP Seite 36
    function MVMT() {
        if (VKAPA.compareTo(new BigDecimal("0")) === -1) {
            VKAPA = new BigDecimal("0");
        }
        if ((VMT.add(VKAPA)).compareTo(new BigDecimal("0")) === 1) {
            if (LSTSO.compareTo(new BigDecimal("0")) === 0) {
                MOSONST();
                LST1 = LSTOSO;
            } else {
                LST1 = LSTSO;
            }
            VBEZBSO = STERBE.add(VKAPA);
            ZRE4J = ((JRE4.add(SONSTB).add(VMT).add(VKAPA)).divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
            ZVBEZJ = ((JVBEZ.add(VBS).add(VKAPA)).divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
            KENNVMT = 2;
            MRE4SONST();
            MLSTJAHR();
            LST3 = ST.multiply(ZAHL100);
            MRE4ABZ();
            ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100)).subtract(SONSTENT.divide(ZAHL100));
            KENNVMT = 1;
            MLSTJAHR();
            LST2 = ST.multiply(ZAHL100);
            STV = LST2.subtract(LST1);
            LST3 = LST3.subtract(LST1);
            if (LST3.compareTo(STV) === -1) {
                STV = LST3;
            }
            if (STV.compareTo(new BigDecimal("0")) === -1) {
                STV = new BigDecimal("0");
            } else {
                //
                //                     lt. PAP muss hier auf ganze EUR abgerundet werden.
                //                    Allerdings muss auch hier der Wert in Cent vorgehalten werden,
                //                     weshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
                //                     wieder die Multiplikation mit 100 erfolgt.
                //
                STV = STV.multiply(new BigDecimal(String(f))).divide(ZAHL100).round(0, BigDecimal.RoundingModes.DOWN).multiply(ZAHL100);
            }
            SOLZV = ((STV.multiply(new BigDecimal("5.5"))).divide(ZAHL100)).round(0, BigDecimal.RoundingModes.DOWN);
            if (R > 0) {
                BKV = STV;
            } else {
                BKV = new BigDecimal("0");
            }
        } else {
            STV = new BigDecimal("0");
            SOLZV = new BigDecimal("0");
            BKV = new BigDecimal("0");
        }
    }

    //  Sonderberechnung ohne sonstige Bezüge für Berechnung bei sonstigen Bezügen oder Vergütung für mehrjährige Tätigkeit, PAP Seite 37
    function MOSONST() {
        ZRE4J = (JRE4.divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
        ZVBEZJ = (JVBEZ.divide(ZAHL100)).round(2, BigDecimal.RoundingModes.DOWN);
        JLFREIB = JFREIB.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
        JLHINZU = JHINZU.divide(ZAHL100).round(2, BigDecimal.RoundingModes.DOWN);
        MRE4();
        MRE4ABZ();
        ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100));
        MZTABFBN();
        //  Anpassung 2015
        MLSTJAHR();
        LSTOSO = ST.multiply(ZAHL100);
    }

    //  Sonderberechnung mit sonstige Bezüge für Berechnung bei sonstigen Bezügen oder Vergütung für mehrjährige Tätigkeit, PAP Seite 38
    function MRE4SONST() {
        MRE4();
        FVB = FVBSO;
        MRE4ABZ();
        ZRE4VP = ZRE4VP.subtract(JRE4ENT.divide(ZAHL100)).subtract(SONSTENT.divide(ZAHL100));
        FVBZ = FVBZSO;
        MZTABFBN();
        //  Anpassung 2015
    }

    //  Tarifliche Einkommensteuer §32a EStG, PAP Seite 32
    function UPTAB14() {
        if (X.compareTo(new BigDecimal("8355")) === -1) {
            ST = new BigDecimal("0");
        } else {
            if (X.compareTo(new BigDecimal("13470")) === -1) {
                Y = (X.subtract(new BigDecimal("8354"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                RW = Y.multiply(new BigDecimal("974.58"));
                RW = RW.add(new BigDecimal("1400"));
                ST = (RW.multiply(Y)).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (X.compareTo(new BigDecimal("52882")) === -1) {
                    Y = (X.subtract(new BigDecimal("13469"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                    RW = Y.multiply(new BigDecimal("228.74"));
                    RW = RW.add(new BigDecimal("2397"));
                    RW = RW.multiply(Y);
                    ST = (RW.add(new BigDecimal("971"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (X.compareTo(new BigDecimal("250731")) === -1) {
                        ST = ((X.multiply(new BigDecimal("0.42"))).subtract(new BigDecimal("8239"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        ST = ((X.multiply(new BigDecimal("0.45"))).subtract(new BigDecimal("15761"))).round(0, BigDecimal.RoundingModes.DOWN);
                    }
                }
            }
        }
        ST = ST.multiply(new BigDecimal(String(KZTAB)));
    }

    //  Komplett Neu 2015
    //  Tarifliche Einkommensteuer §32a EStG, PAP Seite 39
    function UPTAB15() {
        if (X.compareTo(new BigDecimal("8473")) === -1) {
            ST = new BigDecimal("0");
        } else {
            if (X.compareTo(new BigDecimal("13470")) === -1) {
                Y = (X.subtract(new BigDecimal("8472"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                RW = Y.multiply(new BigDecimal("997.60"));
                RW = RW.add(new BigDecimal("1400"));
                ST = (RW.multiply(Y)).round(0, BigDecimal.RoundingModes.DOWN);
            } else {
                if (X.compareTo(new BigDecimal("52882")) === -1) {
                    Y = (X.subtract(new BigDecimal("13469"))).divide(new BigDecimal("10000"), 6, BigDecimal.ROUND_DOWN);
                    RW = Y.multiply(new BigDecimal("228.74"));
                    RW = RW.add(new BigDecimal("2397"));
                    RW = RW.multiply(Y);
                    ST = (RW.add(new BigDecimal("948.68"))).round(0, BigDecimal.RoundingModes.DOWN);
                } else {
                    if (X.compareTo(new BigDecimal("250731")) === -1) {
                        ST = ((X.multiply(new BigDecimal("0.42"))).subtract(new BigDecimal("8261.29"))).round(0, BigDecimal.RoundingModes.DOWN);
                    } else {
                        ST = ((X.multiply(new BigDecimal("0.45"))).subtract(new BigDecimal("15783.19"))).round(0, BigDecimal.RoundingModes.DOWN);
                    }
                }
            }
        }
        ST = ST.multiply(new BigDecimal(String(KZTAB)));
    }

    main();

    return {
        BK: BK,
        BKS: BKS,
        BKV: BKV,
        LSTLZZ: LSTLZZ,
        SOLZLZZ: SOLZLZZ,
        SOLZS: SOLZS,
        SOLZV: SOLZV,
        STS: STS,
        STV: STV,
        VKVLZZ: VKVLZZ,
        VKVSONST: VKVSONST
    };
};
