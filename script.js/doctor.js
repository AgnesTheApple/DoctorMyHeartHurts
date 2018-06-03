
var titre = document.querySelector("h4");
var p = document.querySelector("p");
var bt1 = document.querySelector(".epaule");
var bt2 = document.querySelector(".coude");
var bt3 = document.querySelector(".poignet");
var bt4 = document.querySelector(".hanche");
var bt5 = document.querySelector(".genou");
var bt6 = document.querySelector(".cheville");
var bt7 = document.querySelector("#reset");



bt1.addEventListener("click", function() {
	titre.textContent = "Epaule";
	p.innerHTML = "L'épaule est une des articulations du corps les plus complexes impliquant de nombreux ligaments et tendons dont la fameuse Coiffe des Rotateurs (oui je sais c'est un peu \"barbare\" comme dénomination!). La blessure la plus courante est la <strong>Luxation.</strong> ";
	p.innerHTML += "<br><br>";
	p.innerHTML += "<strong>CAT</strong> : une manipulation par un rhumatologue est nécessaire, (ne le faite pas vous même!) puis l'immobilisation TOTALE! Votre rôle sera d'éduquer le patient aux gestes de la vie courante avec seulement un bras et de planifier la rééducation."
});

bt2.addEventListener("click", function() {
	titre.textContent = "Coude";
	p.innerHTML = "Le coude et son articulation sont surtout célèbres pour cette douleur de type irradiation provoqué par un choc violent, ou pas, sur celui-ci! Les fractures sont rares mais vous pourriez en rencontrer en service surtout auprès de jeunes enfants. L'ostéoporose de l'articulation du coude est fréquente chez les personnes de plus de 60 ans.";
    p.innerHTML += "<br><br>";
	p.innerHTML += "<strong>CAT : </strong>Une fracture du coude est generalement tres douloureuse et angoissante donc il est conseiller de perfuser en VVP le patient avec des antalgiques et de le rassurer du mieux que vous puissiez en attendant que le médecin prenne les choses en mains!";
});

bt3.addEventListener("click", function() {
	titre.textContent = "Poignet"
	p.innerHTML = "Au total, pas moins de 10 os participent au fonctionnement du poignet. Souvent premier touché en cas de chute, nous avons tous eu dans nos vies de jeunes enfants des traumatismes de cette articulation mais qui resteront asymptomatiques.";
    p.innerHTML += "<br>";
    p.innerHTML += " Si votre patient présente des douleurs après une chute, commencez à appeler vos copines du service de radiologie car une fracture ne présente pas forcement une déformation visible.";
	p.innerHTML += "<br><br>";
	p.innerHTML += "<strong>CAT : </strong>Immobiliser le plus rapidement possible l'articulation et appliquer une poche froide de manière à éviter la formation d'un hématome.";
	p.innerHTML += "<br>";
	p.innerHTML += "Bien entendu, vous assisterez votre patient dans les tâches de la vie quotidienne, comme en ouvrant les opercules des anti-douleur au moment de la distribution des médicaments...parce que vraiment ce n'est pas facile a une main! ";
});

bt4.addEventListener("click", function() {
	titre.textContent = "Hanche"
	p.innerHTML = "Une hanche normalement constituée aura à subir en moyenne 2,5 fois le poids du corps au cours de la marche.  D'où les multiples fractures de la hanche chez la personne âgée que vous aurez à soigner durant votre carrière! ";
	p.innerHTML += "<br>";
	p.innerHTML += "Soit planifiée, en préventif, ou soit après une fracture due à une chute, les Prothèse Totale de Hanche (PTH) touchent 150 000 personnes par an en France! Au cours des dernières années, le séjour post-op à considérablement diminué, notamment grâce au lever précoce des patients.";
	p.innerHTML += "<br><br>";
	p.innerHTML += "<strong>CAT : </strong>Veillez à entretenir de bonnes relations avec les kiné de votre service car ils seront vos meilleurs alliées! Le premier lever du patient est une prescription médicale et à effectuer par le kiné, donc pas de décision hâtive! Ayez recours à toute la force de persuasion que vous possédez pour convaincre votre patient de ne pas bouger et de vous appeler en cas de besoins! " 
	p.innerHTML += "<br>";
	p.innerHTML += "L'évaluation et le traitement de la douleur est primordial car n'oubliez pas : un patient qui a mal est un patient peu compliant...ce qui peut se comprendre!"

});

bt5.addEventListener("click", function() {
	titre.textContent = "Genou"
	p.textContent = "Les genoux sont très vulnérables aux blessures. En effet, le genou est une articulation complexe, à la fois mobile, souple, solide et résistante. Il supporte le poids du corps et lui permet ses multiples activités sportives. La blessure la plus courante est bien  sur la déchirure des ligaments croisés du sportif.";
	p.innerHTML += "<br>";
	p.innerHTML += "L'arthrose, due vieillissement normal, touche plus d'1 millions de personnes par an!";
	p.innerHTML += "<br><br>";
	p.innerHTML += "<strong>CAT : </strong>Malheureusement vous aurez des patients jeunes et sportifs pour qui la prise en charge de l'aspect psychologique sera très importante...";
	p.innerHTML += "<br>";
	p.innerHTML += "Veillez à répondre à leurs nombreuses questions avec précision et à leur expliquer autant de fois que nécessaire le déroulement de l'intervention. Les médecins ne prennent pas toujours le temps de le faire.";
	p.innerHTML += "<br>";
	p.innerHTML += "L'utilisation de morphine en post op est courante donc évaluation des effets secondaires +++. Tout comme la hanche, pensez a communiquer avec votre meilleur ami le kiné du service!";
});

bt6.addEventListener("click", function() {
	titre.textContent = "Cheville"
	p.innerHTML = "Aie Aie Aie j'ai mal à la cheville! Nous avons tous expérimenter cette petite, ou plus importante, torsion de la cheville qui fait entendre comme un \"CRAK\"! Heureusement,  la cheville est apte à encaisser d’importants stress dus à des accidents ou des blessures pouvant survenir au fil du temps.";
	p.innerHTML += "<br>";
	p.innerHTML += " Cependant il faut rester attentif a la douleur et au traitement pour éviter l'apparition de douleurs chronique.";
	p.innerHTML += "<br><br>";
	p.innerHTML += "<strong>CAT</strong> : Tout comme le poignet, une fracture de la cheville  n'est pas forcément visible de l'extérieur donc en tant qu'infirmière prévoyante, on inscrit notre patient au service radio avant même que le médecin ne le demande! ";
	p.innerHTML += "<br>";
	p.innerHTML += "L'immobilisation immédiate, la poche froide à renouveler régulièrement et la surélévation de la jambe, éviteront la formation d'un hématome! ";
	p.innerHTML += "<br>";
	p.innerHTML += "Prenez le temps de sensibiliser votre patient sur l'importance d'un suivit de rééducation.";
});

bt7.addEventListener("click", function() {
	titre.textContent = "Infirmières, infirmiers, bonjour!";
	p.innerHTML = "Comme nous le savons tous, votre travail peut être stressant au quotidien. Entre le risque du \"burn out\" qui plane au dessus de votre tête, votre Cadre Sup qui oublie un de vos RTT ou vos internes qui sont injoignables, les journées peuvent être longues.<br>Ne bougez pas, ce petit outil est fait pour vous! En quelques clics, il vous fournira des infos et CAT sur différentes articulations du corps.<br>Cette application a été validé par le CLIN et la Direction Générale de Grobobos qui reconnaît enfin que notre téléphone est devenu un outil indispensable dans notre pratique quotidienne et peut désormais rester dans nos poches et être utilisé sans déclencher la fureur de votre Cadre de service. Nous vous recommandons quand même de le désinfecter a la fin de chaque service.<br>Bref, notre équipe de développeur espère mettre à votre disposition une application simple et ludique qui vous redonnera le sourire.<br><strong>Vous êtes au top!</strong>";
});

