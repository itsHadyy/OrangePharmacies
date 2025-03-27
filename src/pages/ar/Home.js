import Slideshow from '../../components/ar/Slideshow';
import Slider from '../../components/en/Slider';
import { Link } from 'react-router-dom';

function ArHome() {
    const img01 = '/media/bannersEnglish/about-us-first-p.png';
    const img02 = '/media/GooglePlay.png';
    const img03 = '/media/AppStore.png';
    const img04 = '/media/hand-phone.png';
    return (
        <div className="App">
            <Slideshow />
            <div className='home01 ar'>
                <div>
                    <h1>
                        صيدليات أورانج
                    </h1>
                    <p>
                        تأسست شركة أورانج لخدمات الصيدليات بهدف سد الفجوة بين الصيدليات المستقلة وشبكات التأمين الطبي، مما يتيح لها فرصًا أكبر للنمو والتوسع. منذ انطلاقتها، ركزت الشركة على تقديم حلول مبتكرة تدعم الصيدليات في إدارة عملياتها المالية، وتحسين كفاءتها التشغيلية، وتعزيز علاقتها بشركات التأمين الطبي. من خلال الاعتماد على التكنولوجيا الحديثة، والخدمات المالية المرنة، والتدريب المستمر، استطاعت أورانج أن تصبح شريكًا استراتيجيًا موثوقًا للصيدليات، مما يضمن استدامتها وتنافسيتها في سوق الرعاية الصحية المتغير.
                    </p>

                    <span>
                        <Link to="/ar-about">
                            المزيد
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </Link>
                    </span>
                </div>
                <div>
                    <img src={img01} alt="Orange Pharmacies" />
                </div>
            </div>

            <div className='home02'>

                <h1>القيم</h1>

                <div className='cardsContainer'>
                    <div className='card'>
                        <h2>التعاون</h2>
                        <div className='cardContent'>
                            <p>
                                نؤمن ببناء علاقات قوية مع الصيدليات وأصحاب المصلحة لتحقيق نمو مشترك وشراكات ناجحة.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>الكفاءة</h2>
                        <div className='cardContent'>
                            <p>
                                نلتزم بتبسيط العمليات وتسهيل الإجراءات لتوفير الوقت وتقليل التعقيد على شركائنا.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>الشفافية</h2>
                        <div className='cardContent'>
                            <p>
                                نعمل بوضوح وأمانة لتعزيز الثقة والمصداقية.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>التركيز على العملاء</h2>
                        <div className='cardContent'>
                            <p>
                                نضع احتياجات الصيدليات وعملائها في صميم اهتمامنا لتقديم خدمة متميزة.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home03'>
                <div className='hand-phone'>
                    <img src={img04} alt="Orange Pharmacies" />
                </div>
                <div>
                    <h1>حمل التطبيق الان</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Turpis feugiat pellentesque elementum a lorem pretium. Vitae eu rhoncus vivamus ultrices placerat est dui. Ut aliquet amet tempus facilisis ullamcorper dolor sem. Blandit dolor sociis quam turpis. Eget sit at nibh sagittis amet vulputate.
                    </p>
                    <div className='appStoreContainer'>
                        <a href='https://www.apple.com/app-store/' target=''>
                            <img src={img02} alt="Orange Pharmacies" />
                        </a>
                        <a href='https://www.apple.com/app-store/' target=''>
                            <img src={img03} alt="Orange Pharmacies" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='home04 ar'>
                <h1>شركات التأمين</h1>

                <Slider direction="left" />

                <span>
                    <Link to="/ar-insurance">
                        المزيد
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default ArHome;