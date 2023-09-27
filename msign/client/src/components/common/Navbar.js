import React from "react";
const Navbar = () => {
	return (
		<div id="page-top"> 
<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div class="container">
            <a class="navbar-brand" href="#page-top"><img src="img/logos/logo.png" alt="..." /></a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars ms-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link" href="#page-top">Accueil</a></li>
                    <li class="nav-item"><a class="nav-link" href="#about">A propos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#services">Solution</a></li>
                    <li class="nav-item"><a class="nav-link" href="#information">Information</a></li>
                    <li class="nav-item"><a class="nav-link" href="#team">Notre équipe</a></li>
                    <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
	
    <header class="masthead">

        <div class="container">

            <div class="masthead-subheading">Bienvenue sur notre application.</div>

        </div>
    </header>

    <section class="page-section" id="about">
        <div class="d-flex container">
            <div>
                <img src="img/portfolio/bravo.gif" alt="1" height="500px" width="500px" />
            </div>
        <div>
              <br />
              <br />
        <span class=" firas">
            Je suis Msign et je suis ici pour aider les personnes sourdes.<br />
        </span>
        <br />
        <br />
        <span class=" firas1">
            MSign est un traducteur virtuel de textes et audio en langue des signes tunisienne animé en 3D.<br />
        </span>
        </div>
        </div>
		
    </section>
	<section class="page-section" id="services">
        <div class="container">
            <div class="">
                <h2 class="section-heading text-uppercase ">Nos Solutions</h2>
                <br />
                <br />
                <br />
                <div className="d-flex">
                    <div>
                        <h4 class="my-3">Plugin</h4>
                        <br />
                        <br />
                        <p class="text-muted">
                            Rendre votre site web accessible aux sourds. Intégrer notre traducteur virtuel en langue des signes tunisienne sous la forme d'un plugin simple qui n'a aucune dépendance et n'a pas besoin d'être mis à jour ou réinitialisé lorsque le contenu de la page est modifié.
                        </p>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <img src="/img/nrp.gif" alt="2" height="365px" width="400px" />
                        <div class="app">
                            <img src="/img/app.gif" alt="3" height="65px" width="70px" />
                        </div>
                    </div>


                    <div>
                        <br />
                        <br />
                        <img src="/img/Device.png" alt="4" height="300px" width="500px" />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <h4 class="my-3">Application</h4>
                        <br />
                        <br />
                        <p class="text-muted">
                            Une application mobile sert à traduire le contenu textuel et auditif de réseaux sociaux  en langue des signes tunisienne animée en 3D.
                        </p>
                    </div>
                </div>
            </div>
            </div>

    </section>
    <section class="page-section" id="information">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Quelques informations</h2>
                <br /> <br /> <br /> <br />
                <div class="text-left">
                    <h4 >Besoin</h4>
                    <p>
                        466 millions de personnes ont besoin de services de réadaptation en raison d’une déficience auditive incapacitante ( OMS, 2021 ).
                        Environ 300mille personnes sourds et malentendant en Tunisie ( ASEST ).
                    </p>
                </div>
				
                <div class="text-left">
                    <h4 >Analphabétismes</h4>
                    <p>80% des personnes sourdes dans le monde sont des analphabétismes et 97% en Tunisie.</p>
                </div>


                <div class="text-left" >
                    <h4 >Droit d’accès à l’information</h4>
                    <p>Loi organique n° 2016-22 du 24 mars 2016, relative au droit d’accès à l’information.</p>
                </div>

                <div class="text-left">
                    <h4 >Contribution au développement durable</h4>
                    <p>
                     Dans le cadre du grand intérêt mondial aux critères environnementaux, sociaux et de gouvernance (ESG), nos services ont un fort impact sociétal contribution à deux objectifs de développement durable sont l'éducation de qualité et l'inégalité réduite.
                    </p>
                </div>
            </div>
        </div>

    </section>
    <div class="page-section bg-light" id="team">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">notre equipe</h2>
                <br />
            </div>
            <div class="row">
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="/img/team/1.png" alt="..." />
                        <h4>Firas Rouine </h4>
                        <p class="text-muted">CTO</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="https://www.facebook.com/firas.rouine.9" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="/img/team/2.png" alt="..." />
                        <h4>Montassar Moussa</h4>
                        <p class="text-muted">CEO</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="team-member">
                        <img class="mx-auto rounded-circle" src="/img/team/3.png" alt="..." />
                        <h4>Mhamed Moncer</h4>
                        <p class="text-muted">CAIO</p>

                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div class="text-center">
                <img src="/img/portfolio/bonjour.gif"  alt="5" height="500px" width="500px" />
            </div>
        </div>
    </ div>
	
    <section class="page-section" id="contact">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Contactez-nous</h2>
            </div>
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input class="form-control" id="name" type="text" placeholder="Votre Nom *" data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="name:required">
                                Un nom est requis.
                            </div>
                        </div>
                        <div class="form-group">
                            <input class="form-control" id="email" type="email" placeholder="Votre Email *" data-sb-validations="required,email" />
                            <div class="invalid-feedback" data-sb-feedback="email:required">
                                Un e-mail est requis.
                            </div>
                            <div class="invalid-feedback" data-sb-feedback="email:email">
                                L'email n'est pas valide.
                            </div>
                        </div>
                        <div class="form-group mb-md-0">
                            <input class="form-control" id="phone" type="tel" placeholder="Votre Telephone *" data-sb-validations="required" />
                            <div class="invalid-feedback" data-sb-feedback="phone:required">Un numéro de téléphone est requis.</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                            <textarea class="form-control" id="message" placeholder="Votre Message *" data-sb-validations="required"></textarea>
                            <div class="invalid-feedback" data-sb-feedback="message:required">
                                Un message est requis.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-none" id="submitSuccessMessage">
                    <div class="text-center text-white mb-3">
                        <div class="fw-bolder">
                            Envoi du formulaire réussi !
                        </div>

                        Pour activer ce formulaire, inscrivez-vous sur
                        <br />
                    </div>
                </div>
                <div class="d-none" id="submitErrorMessage">
                    <div class="text-center text-danger mb-3">
                    </div>
                </div>
                <div class="text-center">
                    <button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">
                        Envoyer le message
                    </button>
                </div>
                <img src="/img/logos/logo2.png" alt="..."  height="50px" width="80px"/>
            </form>
        </div>
    </section>
		</div>
	);
};

export default Navbar;
