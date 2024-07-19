import React from 'react';
import { FaFacebook, FaTelegram, FaWhatsapp, FaInstagram, FaApple, FaGooglePlay } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className='footerimg'>
            <img src="https://oxu.az/media/img/logo-big.svg?v=1" alt="Logo" className="footer-logo" />
          </div>
          <div className='generalynews'>
            <p>Bütün hüquqlar qorunur © 2013-2024</p>
            <p className='aboutfooter'>
              Oxu.Az 24 saat ərzində, Azərbaycan və rus dillərində, ölkədə və
              dünyada baş verən ən aktual və maraqlı hadisələr barədə operativ
              xəbərlər, oxucuları və cəmiyyəti maraqlandıran suallara cavablar,
              analitik məqalələr, foto və video hesabatlar hazırlayır.
            </p>
            <div className="footer-icons">
              <a href="https://www.facebook.com/oxu.azz" target="_blank" rel="noopener noreferrer" className="facebook"><FaFacebook /></a>
              <a href="https://t.me/oxuaze" target="_blank" rel="noopener noreferrer" className="telegram"><FaTelegram /></a>
              <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="whatsapp"><FaWhatsapp /></a>
              <a href="https://www.instagram.com/oxuaz/" target="_blank" rel="noopener noreferrer" className="instagram"><FaInstagram /></a>
              <a href="https://apps.apple.com/us/app/oxu-az-azerbaycan-xeberleri/id634362981" target="_blank" rel="noopener noreferrer" className="apple"><FaApple /></a>
              <a href="https://play.google.com/store/apps/details?id=az.start.android.oxu&pli=1" target="_blank" rel="noopener noreferrer" className="google-play"><FaGooglePlay /></a>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className='karyeraandsorgu'>
            <div>
              <h4>Karyera</h4>
              <a href="mailto:cv@oxu.az">cv@oxu.az</a>
            </div>
            <div>
              <h4>Ümumi sorğular üçün</h4>
              <a href="mailto:editor@oxu.az">editor@oxu.az</a>
              <p>055 224 76 86</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="#">Saytda reklam</a>
            <a href="#">Bizimlə əlaqə</a>
            <a href="#">Məxfilik siyasəti</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
