import { useState } from 'react';

function Locations() {
    const img01 = '/media/bannersEnglish/LOCATIONS-IN.png';

    const pharmacies = [
        {
            "id": 1,
            "name": "ابرام هانى فيصل",
            "city": "الجيزة",
            "workingHours": "N/A",
            "district": "فيصل",
            "googleMapsUrl": "https://www.google.com/maps/place/صيدلية+د%2F+إبرام+هاني%E2%80%AD/@30.0146067,31.1957486,17z/data=!4m6!3m5!1s0x1458470e2a5c0d0b:0x186cef4d7b73db9b!8m2!3d30.014607!4d31.1958094!16s%2Fg%2F11h3c4yncg?entry=ttu&g_ep=EgoyMDI1MDQwNi4wIKXMDSoASAFQAw%3D%3D",
            "phoneNumber": "N/A",
            "address": "7أ ش محمود حسن إسماعيل - من المساكن - فيصل"
        },
        {
            "id": 2,
            "name": "صيدلية الشربينى",
            "city": "القليوبية",
            "workingHours": "N/A",
            "district": "بنها",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "ش كلية الطب أمام باب مستشفى الرمد - خلف مركز شباب مدينة بنها - بنها - القليوبية"
        },
        {
            "id": 3,
            "name": "ص . عبد المنطلب حسان - الاقصر",
            "city": "الاقصر",
            "workingHours": "N/A",
            "district": "الأقصر",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "شارع طراد النيل - الكرنك - شارع الهيلتون - أمام مسجد عمرو بن العاص - الأقصر"
        },
        {
            "id": 4,
            "name": "صيدلية ابراهيم الخولى",
            "city": "الغربية",
            "workingHours": "N/A",
            "district": "زفتى",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "امتداد شارع الجيش القبلي - أمام كوبري المصرف ومسجد أبو داوود - زفتى - الغربية"
        },
        {
            "id": 5,
            "name": "صيدليه رومانى عاطف",
            "city": "اسيوط",
            "workingHours": "N/A",
            "district": "أسيوط",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "طريق العصارة - خلف مصنع الورق - مركز الفتح - عزبة التحرير - شارع رقم 1 - أسيوط"
        },
        {
            "id": 6,
            "name": "صيدلية ناردين ماهر",
            "city": "البحيرة",
            "workingHours": "N/A",
            "district": "أبو المطامير",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "ش عبد القادر طه - خلف مركز الشرطة - مركز أبو المطامير - البحيرة"
        },
        {
            "id": 7,
            "name": "صيدلية د / بيتر فوزى -بنى مزار",
            "city": "المنيا",
            "workingHours": "N/A",
            "district": "بني مزار",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "شارع رقم 4 - متفرع من طريق البحر - تقسيم القصبي - خلف مستشفى حنا فهيم شرق المحطة - بني مزار - المنيا"
        },
        {
            "id": 8,
            "name": "صيدلية احمد السياف",
            "city": "القليوبية",
            "workingHours": "N/A",
            "district": "سنديون\nقليوب",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "1ش الوحدة المحلية - داير الناحية - بجوار مسجد الدوني - سنديون - قليوب - القليوبية"
        },
        {
            "id": 9,
            "name": "صيدلية جون عدلى",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "مصر الجديدة",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "108ش الحجاز- مصر الجديدة"
        },
        {
            "id": 10,
            "name": "ص. محب الجديدة - المرج الجديدة",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "المرج الجديدة",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "20مدينة التوحيد - ش الجمهورية - من شارع محمد نجيب - المرج الجديدة"
        },
        {
            "id": 11,
            "name": "صيدلية طارق محمد فتوح سلامة - المنصورة",
            "city": "الدقهلية",
            "workingHours": "N/A",
            "district": "المنصورة",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "70ش قناة السويس - برج الصديق - توريل - المنصورة - الدقهلية"
        },
        {
            "id": 12,
            "name": "صيدلية قنديل (د/ أحمد قنديل)",
            "city": "السويس",
            "workingHours": "N/A",
            "district": "السويس",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "قطعة 1046 -  ش عمر بن الخطاب (خالد بن الوليد) - السلام 1 - السويس"
        },
        {
            "id": 13,
            "name": "ص . ايمن عبد العظيم- المنيا",
            "city": "المنيا",
            "workingHours": "N/A",
            "district": "المنيا",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "19ش الترعة الدماريسيه - حي الأخصاص - خلف مدينة الطالبات - المنيا"
        },
        {
            "id": 14,
            "name": "ص. نهال الليثى - مصطفى محمد",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "المقطم",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "القطعة 5617 - الحي الرابع - الهضبة الوسطى - المقطم"
        },
        {
            "id": 15,
            "name": "صيدليه خالد فوزى",
            "city": "المنوفية",
            "workingHours": "N/A",
            "district": "قويسنا",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "شارع العهد الجديد - قويسنا - المنوفية"
        },
        {
            "id": 16,
            "name": "ص . رحاب درويش - حدائق الاهرام",
            "city": "الجيزة",
            "workingHours": "N/A",
            "district": "حدائق أكتوبر",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "محل 7- السوق التجاري - قطاع 266 - الإسكان الاجتماعي - حدئق أكتوبر"
        },
        {
            "id": 17,
            "name": "صيدلية بروتكت ( ايمن )",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "مصر الجديدة",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "4شارع محمد بك رمزي - مصر الجديدة - القاهرة"
        },
        {
            "id": 18,
            "name": "صيدلية هديل",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "الظاهر",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "1ش ابن الغنام المتفرع من ش ذهني - بالظاهر"
        },
        {
            "id": 19,
            "name": "صيدلية رخا",
            "city": "الدقهلية",
            "workingHours": "N/A",
            "district": "ديكرنس",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "ش النقراشي - أمام بنك مصر - موقف القاهرة - دكرنس - الدقهلية"
        },
        {
            "id": 20,
            "name": "صيدلية ابو حمدة",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "المعادي",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "28ش مصر حلوان الزراعي- برج المهندسين العسكريين - بجوار وزارة البيئة- أمام الأنوار- المعادي"
        },
        {
            "id": 21,
            "name": "صيدلية جون فتحى",
            "city": "الجيزة",
            "workingHours": "N/A",
            "district": "6أكتوبر",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "الحي الثامن - مول فايف ستارز - 6أكتوبر - الجيزة"
        },
        {
            "id": 22,
            "name": "صيدلية غلاب",
            "city": "كفر الشيخ",
            "workingHours": "N/A",
            "district": "كفر الشيخ",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "الأوقاف 4 - ش تقسيم النيابة الإدارية - برج غلاب - كفر الشيخ - كفر الشيخ"
        },
        {
            "id": 23,
            "name": "صيدلية الدنف",
            "city": "الدقهلية",
            "workingHours": "N/A",
            "district": "شربين",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": " شارع القومية العربية - أمام التأمينات بجوار مسجد عصر - شربين - الدقهلية"
        },
        {
            "id": 24,
            "name": " صيدلية ريفولى د لبيب فايز لبيب",
            "city": "المنيا",
            "workingHours": "N/A",
            "district": "المنيا",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "100ش محمود عبد الرازق  - المنيا"
        },
        {
            "id": 25,
            "name": "صيدليه كيرلس صفوت",
            "city": "الإسكندرية",
            "workingHours": "N/A",
            "district": "سيدي بشر",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "608ش أبو موسى الأشعري - من شارع سيف - سيدي بشر قبلي - الأسكندرية"
        },
        {
            "id": 26,
            "name": "ص. ام النور - وائل جمال - اسيوط",
            "city": "اسيوط",
            "workingHours": "N/A",
            "district": "أسيوط",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "شارع الوحدة القومية (مستجد) - المتفرع من شارع المحافظة - مدينة أسيوط - أسيوط"
        },
        {
            "id": 27,
            "name": "ص . محمود لطفى عميش- تلا",
            "city": "المنوفية",
            "workingHours": "N/A",
            "district": "تلا",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "طوخ دلكا - أمام المعهد الديني للفتيات - تلا - المنوفية"
        },
        {
            "id": 28,
            "name": "صيدلية عصام المقطم",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "المقطم",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "قطعة 7122 تقسيم المنطقة س - شارع 81 - الهضبة العليا - المقطم"
        },
        {
            "id": 29,
            "name": "صيدلية فيكتور",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "النزهة الجديدة",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "1ش مصر للطيران - مربع 1309 قطعة (1) - أمام السندباد - النزهة الجديدة - القاهرة"
        },
        {
            "id": 30,
            "name": "ص .لايت  تامر الحسينى - ناهيا",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "مدينة نصر",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "49ش مصطفى النحاس - قطعة 18 - بلوك 1 - المنطقة الثامنة - مدينة نصر"
        },
        {
            "id": 31,
            "name": "صيدلية وائل حافظ الكبرى",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "مدينة السلام",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "مساكن القاهرة ج - بلوك 56 م1 - أمام المطحن بالسلام - مدينة السلام"
        },
        {
            "id": 32,
            "name": "صيدلية ريموندا طلعت",
            "city": "القاهرة",
            "workingHours": "N/A",
            "district": "النزهة 2",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "قطعة 98ش المعهد الأزهري -امتداد ش الخمسين -تقسيم الخالدي -محل (1) يمين مدخل العقار- النزهة 2"
        },
        {
            "id": 33,
            "name": "صيدليه محمود عبد الحميد - بلبيس",
            "city": "الشرقية",
            "workingHours": "N/A",
            "district": "بلبيس",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "ش المظلوم بجوار ماكينة الاهواني - بلبيس - الشرقية"
        },
        {
            "id": 34,
            "name": "صيدلية سامح صابر ( اسيوط) - \nمجدى عبده مهنى عفدرى",
            "city": "اسيوط",
            "workingHours": "N/A",
            "district": "أسيوط",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "المعلمين - المدخل الرئيسي - بجوار سيراميك التلاوي - أسيوط"
        },
        {
            "id": 35,
            "name": "صيدلية مروة صادق",
            "city": "الشرقية",
            "workingHours": "N/A",
            "district": "العاشر من رمضان",
            "googleMapsUrl": "N/A",
            "phoneNumber": "N/A",
            "address": "قطعة 16 - مجاورة 20 - 2 مول سينكو التجاري - جوار التأمين الصحي - خلف مول الدوحة - العاشر من رمضان"
        },
        {
            "id": 36,
            "name": "صيدلية الهلال اسامة الشبراوى",
            "city": "الدقهلية",
            "workingHours": "N/A",
            "district": "أجا",
            "googleMapsUrl": "N/A",
        },
    ];

    const [selectedPharmacy, setSelectedPharmacy] = useState(pharmacies[0]);
    const [expandedPharmacy, setExpandedPharmacy] = useState(null);

    const toggleExpand = (pharmacyId) => {
        setExpandedPharmacy(expandedPharmacy === pharmacyId ? null : pharmacyId);
    };

    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="Banner" />
            </div>

            <div className="locations">
                <h1>Our Pharmacies</h1>

                <div className='locationsContainer'>
                    <div className='pharmaciesList'>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {pharmacies.map(pharmacy => (
                                <li
                                    key={pharmacy.id}
                                    style={{
                                        marginBottom: '15px',
                                        padding: '15px',
                                        border: '1px solid #ddd',
                                        borderRadius: '5px',
                                        backgroundColor: selectedPharmacy?.id === pharmacy.id ? '#f0f8ff' : 'white',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setSelectedPharmacy(pharmacy)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <h3 style={{ margin: '0 0 5px 0' }}>{pharmacy.name}</h3>
                                            <p style={{ margin: '0 0 5px 0' }}><strong>District:</strong> {pharmacy.district}</p>
                                            <p style={{ margin: '0 0 5px 0' }}><strong>Working Hours:</strong> {pharmacy.workingHours}</p>

                                            {expandedPharmacy === pharmacy.id && (
                                                <div style={{ marginTop: '10px' }}>
                                                    <p><strong>Address:</strong> {pharmacy.address}</p>
                                                    <p><strong>Phone:</strong> {pharmacy.phoneNumber}</p>
                                                    <a
                                                        href={pharmacy.googleMapsUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: '#0066cc' }}
                                                    >
                                                        View on Google Maps
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleExpand(pharmacy.id);
                                            }}
                                            style={{
                                                alignSelf: 'flex-start',
                                                padding: '5px 10px',
                                                backgroundColor: '#f0f0f0',
                                                border: '1px solid #ccc',
                                                borderRadius: '3px',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {expandedPharmacy === pharmacy.id ? 'Hide' : 'Show'}
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='map'>
                        {/* Google Map - No API Key version */}
                        {selectedPharmacy && (
                            <div>
                                <iframe
                                    title="Google Map"
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedPharmacy.address)}&output=embed`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Locations;