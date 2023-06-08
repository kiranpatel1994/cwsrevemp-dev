import brand from '/public/images/foot-branding.png';
import telephoneImg from '/public/images/telephone.png';
import emailImg from '/public/images/email.png';
import pinPointImg from '/public/images/pin-point.png';
import callSignImg from '/public/images/calling_sign.png';
import Link from 'next/link';
export default function Footer({settings}) {
    
    return(
        <footer>
            <div className="d-flex">
                <div className="ft-child">
                    <div className="social-side">
                        <ul className="list-unstyled">
                            {settings.linkedinLink &&
                            <li data-aos="fade-right" data-aos-duration="1000">
                                <Link href={settings.linkedinLink}><span className="icon icon-linkedin"></span></Link>
                            </li>
                            }
                            {settings.facebookLink &&
                            <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                                <Link href={settings.facebookLink}>
                                    <span className="icon icon-facebook"></span>
                                </Link>
                            </li>
                            }
                            {settings.instagramLink &&
                            <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400">
                                <Link href={settings.instagramLink}>
                                    <span className="icon icon-instagram"></span> 
                                </Link>
                            </li>
                            }
                            {settings.twitterLink &&
                            <li data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                                <Link href={settings.twitterLink}>
                                    <span className="icon icon-twitter"></span>
                                </Link>
                            </li>
                            }
                        </ul>
                    </div>
                </div>
                <div className="ft-child w-100">
                    <div className="container-xl">
                        <div className="row adjust-container">
                            <div className="col-12 col-md-3">
                                <div className="foot-branding" data-aos="fade-up" data-aos-duration="1000">
                                    <Link href="/">
                                    
                                        <img src={settings.footerLogo.sourceUrl ? settings.footerLogo.sourceUrl : brand.src} alt=""/>
                                    
                                    </Link>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <ul className="list-unstyled placed-add mb-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                                    {settings.phone &&
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <img src={telephoneImg.src} alt=""/>
                                            <Link href={`tel:`+settings.phone}>
                                                {settings.phone}
                                            </Link>
                                        </div>
                                    </li>
                                    }
                                    {settings.email &&
                                    <li>
                                        <div className="d-flex align-items-center">
                                            <img src={emailImg.src} alt=""/>
                                            <a href={`mailto:`+settings.email}>{settings.email}</a>
                                        </div>
                                    </li>
                                    }
                                    {settings.addressLink &&
                                    <li>
                                        <div className="d-flex align-items-start">
                                            <img src={pinPointImg.src} alt=""/>
                                            <a href={settings.addressLink} dangerouslySetInnerHTML={{ __html: settings.addressText }}></a>
                                        </div>
                                    </li>
                                    }
                                </ul>
                            </div>
                            <div className="col-12 col-md-6">
                                <ul className="list-unstyled d-flex align-items-center letstalk" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                    <li>
                                        <img src={callSignImg.src} alt=""/>
                                    </li>
                                    <li className="text-center">
                                        <div className="contact-details">
                                            <span>Let’s talk innovation. </span> <a href="tel:201-212-6367" className="d-block w-100">{settings.phone}</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="last-footer">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-2" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="0">
                            <h6>Home</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="0">
                            <h6>Company</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-offset="0">
                            <h6>Services & Specialties</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-offset="0">
                            <h6>Solutions</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" data-aos-offset="0">
                            <h6>Contact Us</h6>
                            <ul className="list-unstyled">
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                                <li><a href="#">Lorem ipsum</a> </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-6 col-lg-2">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}