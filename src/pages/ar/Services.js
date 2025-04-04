function Services() {
    const img01 = '/media/bannersArabic/insur-main-S.png';
    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="Insurance Banner" />
            </div>

            <div className='incuranceContainer'>
                <h1>خدماتنا</h1>
                <div className='servicesContainer ar'>
                    <div className='card'>
                        <h2>خدمة الخط الساخن <br /> (19001)</h2>
                        <div className='cardContent'>
                            <p>
                                استقبال مكالمات العملاء وطلبات التوصيل وتحويلها مباشرة للصيدليات لتنفيذها بسهولة وسرعة.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>التكامل مع شبكات <br />
                            التأمين الطبي</h2>
                        <div className='cardContent'>
                            <ul>
                                <li>
                                    ربط الصيدليات بشركات التأمين الطبي الكبرى عبر كيان واحد، مما يوفر الوقت والجهد.
                                </li>
                                <li>
                                    إدارة المطالبات بكفاءة من خلال فريق متخصص لضمان السرعة والدقة.
                                </li>
                                <li>
                                    توفير حلول سداد مرنة لدعم السيولة المالية للصيدليات.
                                </li>
                                <li>
                                    تسهيل عمليات صرف الأدوية داخل الصيدليات عبر التأمين الطبي، مما يزيد من رضا العملاء ويعزز المبيعات.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>التحول الرقمي والتقنيات <br />
                            المبتكرة</h2>
                        <div className='cardContent'>
                            <ul>
                                <li>
                                    تقديم أدوات مثل تطبيق Orange Pharmacies لتسهيل العمليات وتحسين كفاءة الصيدليات.
                                </li>
                                <li>
                                    تطوير بنية تحتية رقمية تدعم الطلبات الإلكترونية وبرامج الولاء والتواصل الفعّال.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>الدعم التسويقي والتوسع <br />
                            في السوق</h2>
                        <div className='cardContent'>
                            <ul>
                                <li>
                                    تقديم حلول تسويقية للصيدليات لزيادة الوعي بخدمات التأمين الطبي وجذب المزيد من العملاء.
                                </li>
                                <li>
                                    مساعدة الصيدليات في بناء علامتها التجارية وتعزيز حضورها في السوق.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>التدريب والتأهيل <br />
                            للصيادلة</h2>
                        <div className='cardContent'>
                            <ul>
                                <li>
                                    تقديم برامج تدريبية دورية حول آليات الصرف والتعامل مع التأمين لضمان سهولة تفعيل الخدمة.
                                </li>
                                <li>
                                    دعم فني مستمر لضمان الامتثال لمتطلبات التأمين الطبي وتحقيق أفضل النتائج.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>إدارة العمليات <br />
                            المالية</h2>
                        <div className='cardContent'>
                            <ul>
                                <li>
                                    تقديم حلول دفع مرنة تناسب احتياجات الصيدليات لضمان السيولة المالية.
                                </li>
                                <li>
                                    تسهيل عمليات المراجعة، والتسليم، والتحصيل بالتعاون مع شركات التأمين.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='card lastCard'>
                        <h2> ضمان الجودة<br />
                            والموثوقية</h2>
                        <div className='cardContent'>
                            <p>
                                تقديم خدمات دقيقة وشفافة تعزز ثقة الصيدليات والعملاء في Orange Pharmacies.
                            </p>
                        </div>
                    </div>
                </div>

                <button className="btn">
                    إشترك الان
                </button>
            </div>
        </div>
    )
}

export default Services;