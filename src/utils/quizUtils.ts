import { QuizQuestion } from "../types/quiz";

const quizQuestions: QuizQuestion[] = [
	{
		targetWord: "Glade",
		correctSynonym: "Lykkelige",
		paragraph: "Det lykkelige barnet lo mens hun lekte i parken på den solrike ettermiddagen. Hun løp rundt med et stort smil og en ballong i hånden. Hennes glede var smittsom, og alle rundt henne kunne ikke unngå å smile. Hun klatret opp på lekeplassen og ropte av begeistring. Foreldrene hennes tok bilder for å fange øyeblikket. Det var en perfekt dag for henne i solskinnet.",
	},
	{
		targetWord: "Kjempestore",
		correctSynonym: "Enorme",
		paragraph: "Elefanten raget over de andre dyrene i dyrehagen. Barn pekte og stirret i forbauselse over dyrets størrelse. Elefanten beveget seg sakte, men med en majestetisk holdning. Den brukte snabelen til å samle vann fra dammen. Besøkende samlet seg for å ta bilder av den imponerende skapningen. Alle snakket om elefantens kraft og eleganse.",
	},
	{
		targetWord: "Fredfulle",
		correctSynonym: "Rolige",
		paragraph: "Den fortryllende solnedgangen malte himmelen i rosa, oransje og lilla toner. Havet glitret som gull under solens siste stråler. Folk samlet seg på stranden for å beundre dette magiske øyeblikket. Fugler fløy forbi horisonten og skapte en følelse av fred. Barn løp rundt og fanget dette vakre synet med sine smil. Alle følte seg lykkelige og rolige mens solen gikk ned.",
	},
	{
		targetWord: "Sint",
		correctSynonym: "Rasende",
		paragraph: "Den rasende kunden krevde å snakke med butikksjefen. Han slo hånden på disken for å uttrykke sin frustrasjon. De ansatte prøvde å roe ham ned med høflige unnskyldninger. Andre kunder i butikken så nervøst på. Etter noen minutter kom sjefen for å snakke med kunden. Til slutt roet han seg ned og forlot butikken.",
	},
	{
		targetWord: "Overrasket",
		correctSynonym: "Imponert",
		paragraph: "Den kloke studenten løste enkelt det vanskelige matteproblemet. Læreren ble imponert over hennes evne til å tenke raskt. Hun forklarte løsningen til de andre i klassen på en enkel måte. Klassen hørte nøye etter mens hun underviste. Etterpå hjalp hun klassekameratene med å forstå metoden. Hun var en inspirasjon for alle rundt seg.",
	},
	{
		targetWord: "Klangen",
		correctSynonym: "Lyden",
		paragraph: "Etter den lange fotturen var de slitne turgåerne klare for hvile. De satte seg ved leirbålet og delte historier fra dagen. Solnedgangen markerte slutten på en krevende, men fantastisk tur. Noen sovnet nesten umiddelbart etter å ha satt opp teltene. Lyden av vinden i trærne fylte natten. Alle gledet seg til en god natts søvn.",
	},
	{
		targetWord: "Hastighet",
		correctSynonym: "Fart.",
		paragraph: "Den kjappe geparden jaget byttet sitt med imponerende fart. Den navigerte gjennom buskene med presisjon. Byttet prøvde å rømme, men geparden var uovertruffen i hastighet. Besøkende i safariparken stirret i forbauselse over gepardens ferdigheter. Etter jakten hvilte den under et tre. Guiden forklarte gepardens evner for de fascinerte tilskuerne.",
	},
	{
		targetWord: "Fokus",
		correctSynonym: "Konsentrasjon",
		paragraph: "Biblioteket var rolig mens studentene studerte flittig. Lyden av pennene som skrapte på papir var nesten den eneste lyden. Sollys flommet gjennom vinduene og skapte en fredelig stemning. Bibliotekaren beveget seg stille mellom hyllene. Folk var fordypet i sine bøker og notater. Det var et perfekt sted for konsentrasjon og læring.",
	},
	{
		targetWord: "Tykke",
		correctSynonym: "Tunge",
		paragraph: "Den kraftige vektløfteren løftet den tunge stangen med letthet. Publikum heiet mens han fullførte løftet med stil. Musklene hans var et tydelig bevis på hans styrke. Han smilte og takket alle for støtten. Etter konkurransen ga han tips til andre vektløftere. Hans dedikasjon var en inspirasjon for mange.",
	},
	{
		targetWord: "Ro",
		correctSynonym: "Fred.",
		paragraph: "Det skremte barnet klamret seg til moren under det kraftige tordenværet. Lynet lyste opp himmelen, og torden brølte høyt. Barnet gjemte ansiktet i morens skuldre. Moren hvisket beroligende ord for å roe henne ned. Etter en stund stilnet stormen, og barnet begynte å føle seg tryggere. Lyden av regn som falt rolig på taket brakte fred.",
	},
	{
		targetWord: "Beundringsverdig",
		correctSynonym: "Imponerende",
		paragraph: "Den bittelille mauren bar en stor smule tilbake til kolonien. Andre maur fulgte etter og hjalp til med å rydde veien. Maurens utholdenhet var imponerende å se. Barn som så på, pekte og lo av de små skapningene. Naturen viste sin styrke selv i de minste ting. Det var et fascinerende syn for alle som så på.",
	},
	{
		targetWord: "Arbeid",
		correctSynonym: "innsats.",
		paragraph: "Den tapre brannmannen løp inn i den brennende bygningen for å redde familien som var fanget. Flammene raste, men han forble rolig og fokusert. Han fant familien og ledet dem trygt ut. Folk som sto utenfor, jublet og takket ham for hans heroiske innsats. Han sa at det bare var en del av jobben hans. Hans mot og dedikasjon inspirerte mange.",
	},
];

export function getRandomQuestions(count: number): QuizQuestion[] {
	const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, count);
}
