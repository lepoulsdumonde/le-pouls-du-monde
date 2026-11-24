import React from 'react';
import {createRoot} from 'react-dom/client';
import './footer.css';

function Footer(){
  return <footer className="site-footer">
    <div className="sf-inner">
      <div className="sf-col">
        <b className="sf-brand">LE POULS <span>DU MONDE</span></b>
        <p>Donner des clés pour lire le monde, depuis l’Afrique de l’Ouest.</p>
      </div>
      <div className="sf-col">
        <b>Informations</b>
        <a href="/a-propos.html">À propos</a>
        <a href="/contact.html">Contact</a>
        <a href="/confidentialite.html">Politique de confidentialité</a>
        <a href="/conditions.html">Conditions d’utilisation</a>
      </div>
      <div className="sf-col">
        <b>Nous contacter</b>
        <a href="mailto:lepoulsdumonde@gmail.com">📧 lepoulsdumonde@gmail.com</a>
        <a href="tel:+2290164604282">📞 +229 01 64 60 42 82</a>
        <span>📍 Bénin</span>
      </div>
    </div>
    <div className="sf-bottom">© 2026 Le Pouls du Monde. Tous droits réservés.</div>
  </footer>;
}

const el=document.createElement('div');
document.body.appendChild(el);
createRoot(el).render(<Footer/>);
