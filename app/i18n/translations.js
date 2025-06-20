// app/i18n/translations.js
const t = {
  de: {
    // Allgemein
    bookingTitle:          "Transfer buchen",
    bookingSubtitle:       "Bitte geben Sie Ihre Reisedaten ein.",
    stepIndicator:         "Schritt {step} von {total}",
    tourRequestBtn:        "Tour anfragen",

    // RouteStep (Schritt 1)
    routeTitle:            "Abholung & Ziel",
    routeSubtitle:         "Bitte geben Sie Ihre Abholadresse und das Reisedatum ein.",
    pickupLabel:           "Abholort",
    pickupPlaceholder:     "Ort auswählen oder eingeben…",
    destinationLabel:      "Zielort",
    destinationPlaceholder:"Ort auswählen oder eingeben…",
    dateTimeLabel:         "Datum & Uhrzeit",
    flightNoLabel:         "Flugnummer (optional)",
    flightNoPlaceholder:   "Flugnummer eingeben…",
    returnTripLabel:       "Rückfahrt (10 $)",
    returnDateTimeLabel:   "Rückfahrt: Datum & Uhrzeit",
    distanceLabel:         "Distanz: {km} km",

    // PassengerStep (Schritt 2)
    passengerTitle:        "Passagiere & Fahrzeug",
    passengerSubtitle:     "Bitte Anzahl Passagiere eingeben und Fahrzeug wählen.",
    adultsLabel:           "Erwachsene",
    childrenLabel:         "Kinder",
    vehicleLabel:          "Fahrzeug",
    vehicleEconomy:        "Economy",
    vehicleBusiness:       "Business",
    vehicleFamilyVan:      "Family Van",
    vehicleDisabledHint:   "Ab 5 Personen nur Family Van möglich.",
    backBtn:               "Zurück",
    nextBtn:               "Weiter",

    // VehicleSelection (Schritt 3)
    vehicleTitle:          "Fahrzeug wählen",
    vehicleSubtitle:       "Wählen Sie Ihr Fahrzeug für den Transfer aus.",
    vehicleEconomyDesc:    "Komfort für bis zu 3 Personen",
    vehicleBusinessDesc:   "Luxus mit Premium-Fahrzeug",
    vehicleFamilyVanDesc:  "Platz für bis zu 5 Personen",
    vehicleSurchargeLabel: "Aufschlag",
    vehicleNoSurcharge:    "Kein Aufschlag",
    selectVehicleBtn:      "Wählen",
    selectedLabel:         "Ausgewählt",

    // SeatExtras (Schritt 4)
    seatsTitle:            "Kindersitze – Auswahl",
    seatsSubtitle:         "Wählen Sie Ihre Kindersitze aus.",
    babyLabel:             "Babyschale",
    childLabel:            "Kindersitz",
    boosterLabel:          "Sitzerhöhung",
    selectPrompt:          "Auswählen…",
    freeBadgeText:         "Erster Sitz kostenlos",
    extrasTotalLabel:      "Extras gesamt",
    currencySymbol:        "$",

    // ExtrasStep (Schritt 5)
    extrasStepTitle:       "Weitere Extras",
    extrasStepSubtitle:    "Wählen Sie weitere Extras aus.",
    flowers:               "Blumen",
    wine:                  "Wein",
    whiskey:               "Whiskey",
    beer:                  "Bier",
    redbull:               "Red Bull",
    obstplatte:            "Obstplatte",
    pralinen:              "Pralinen",
    vodka:                 "Vodka",

    // ContactStep (Schritt 6)
    checkoutTitle:         "Übersicht & Buchen",
    voucherLabel:          "Gutscheincode (10 %):",
    voucherPlaceholder:    "AMDGC2025",
    minimumFareLabel:      "Zwischensumme vor Gutschein",
    ridePriceLabel:        "Fahrtpreis",
    extrasTotalLabel:      "Extras gesamt",
    returnDiscountLabel:   "Rückfahrtrabatt",
    totalLabel:            "Gesamtpreis",
    firstNameLabel:        "Vorname",
    lastNameLabel:         "Nachname",
    emailLabel:            "E-Mail-Adresse",
    phoneLabel:            "Telefonnummer",
    paymentTitle:          "Zahlung",
    creditCardBtn:         "Kreditkarte",
    wishBtn:               "WISH",
    cashBtn:               "Barzahlung beim Fahrer",
    sendBtn:               "Anfrage absenden",
    whatsappBtn:           "WhatsApp senden",

    // Mail/WhatsApp (Basis)
    emailSubject:          "Transfer-Anfrage",
    emailGreeting:         "Hallo, ich möchte eine Transfer-Anfrage stellen:",

    // WISH-Info (übersetzbar)
    wishInfoTitle:         "Zahlen per WISH:",
    wishStep1:             "Öffnen Sie Ihre WISH-App.",
    wishStep2:             "Wählen Sie „Scan to Pay“ oder „Send Money“.",
    wishStep3:             "Geben Sie als Empfänger-Nummer ein: {number}",
    wishStep4:             "Bestätigen Sie den zu zahlenden Betrag.",
    wishToggleToText: {
      qr:   "Einfacher Modus (ohne QR-Code)",
      text: "QR-Code anzeigen"
    },
  },

  en: {
    bookingTitle:          "Book your transfer",
    bookingSubtitle:       "Please enter your travel details.",
    stepIndicator:         "Step {step} of {total}",
    tourRequestBtn:        "Request a tour",

    routeTitle:            "Pickup & Destination",
    routeSubtitle:         "Please enter your pickup address and travel date.",
    pickupLabel:           "Pickup Location",
    pickupPlaceholder:     "Select or type a location…",
    destinationLabel:      "Destination",
    destinationPlaceholder:"Select or type a location…",
    dateTimeLabel:         "Date & Time",
    flightNoLabel:         "Flight No. (optional)",
    flightNoPlaceholder:   "Enter flight no.…",
    returnTripLabel:       "Return trip (10 $)",
    returnDateTimeLabel:   "Return: Date & Time",
    distanceLabel:         "Distance: {km} km",

    passengerTitle:        "Passengers & Vehicle",
    passengerSubtitle:     "Enter number of passengers and select vehicle.",
    adultsLabel:           "Adults",
    childrenLabel:         "Children",
    vehicleLabel:          "Vehicle",
    vehicleEconomy:        "Economy",
    vehicleBusiness:       "Business",
    vehicleFamilyVan:      "Family Van",
    vehicleDisabledHint:   "Only Family Van for 5+ passengers.",
    backBtn:               "Back",
    nextBtn:               "Next",

    vehicleTitle:          "Select Vehicle",
    vehicleSubtitle:       "Choose your transfer vehicle.",
    vehicleEconomyDesc:    "Comfort for up to 3 people",
    vehicleBusinessDesc:   "Executive transfer with premium vehicle",
    vehicleFamilyVanDesc:  "Space for up to 5 people",
    vehicleSurchargeLabel: "Surcharge",
    vehicleNoSurcharge:    "No surcharge",
    selectVehicleBtn:      "Select",
    selectedLabel:         "Selected",

    seatsTitle:            "Child Seats",
    seatsSubtitle:         "Select your child seats.",
    babyLabel:             "Baby seat",
    childLabel:            "Child seat",
    boosterLabel:          "Booster seat",
    selectPrompt:          "Select…",
    freeBadgeText:         "First seat free",
    extrasTotalLabel:      "Extras total",
    currencySymbol:        "$",

    extrasStepTitle:       "Additional Extras",
    extrasStepSubtitle:    "Select additional extras.",
    flowers:               "Bouquet",
    wine:                  "Wine",
    whiskey:               "Whiskey",
    beer:                  "Beer",
    redbull:               "Red Bull",
    obstplatte:            "Fruit Platter",
    pralinen:              "Pralines",
    vodka:                 "Vodka",

    checkoutTitle:         "Summary & Book",
    voucherLabel:          "Voucher code (10 %):",
    voucherPlaceholder:    "AMDGC2025",
    minimumFareLabel:      "Subtotal before voucher",
    ridePriceLabel:        "Ride price",
    extrasTotalLabel:      "Extras total",
    returnDiscountLabel:   "Return discount",
    totalLabel:            "Total price",
    firstNameLabel:        "First name",
    lastNameLabel:         "Last name",
    emailLabel:            "Email",
    phoneLabel:            "Phone number",
    paymentTitle:          "Payment",
    creditCardBtn:         "Credit Card",
    wishBtn:               "WISH",
    cashBtn:               "Cash payment",
    sendBtn:               "Submit request",
    whatsappBtn:           "Send via WhatsApp",

    emailSubject:          "Transfer Request",
    emailGreeting:         "Hello, I would like to request a transfer:",

    wishInfoTitle:         "Pay via WISH:",
    wishStep1:             "Open your WISH app.",
    wishStep2:             "Select “Scan to Pay” or “Send Money.”",
    wishStep3:             "Enter recipient number: {number}",
    wishStep4:             "Confirm the amount to pay.",
    wishToggleToText: {
      qr:   "Simple mode (no QR code)",
      text: "Show QR code"
    },
  },

  ar: {
    bookingTitle:          "حجز النقل",
    bookingSubtitle:       "يرجى إدخال تفاصيل رحلتك.",
    stepIndicator:         "الخطوة {step} من {total}",
    tourRequestBtn:        "طلب جولة",

    routeTitle:            "موقع الاستلام والوجهة",
    routeSubtitle:         "الرجاء إدخال عنوان الاستلام وتاريخ الرحلة.",
    pickupLabel:           "موقع الاستلام",
    pickupPlaceholder:     "اختر أو اكتب موقع…",
    destinationLabel:      "الوجهة",
    destinationPlaceholder:"اختر أو اكتب وجهة…",
    dateTimeLabel:         "التاريخ والوقت",
    flightNoLabel:         "رقم الرحلة (اختياري)",
    flightNoPlaceholder:   "أدخل رقم الرحلة…",
    returnTripLabel:       "رحلة العودة (10 $)",
    returnDateTimeLabel:   "العودة: التاريخ والوقت",
    distanceLabel:         "المسافة: {km} كم",

    passengerTitle:        "الركاب والمركبة",
    passengerSubtitle:     "أدخل عدد الركاب واختر المركبة.",
    adultsLabel:           "البالغون",
    childrenLabel:         "الأطفال",
    vehicleLabel:          "المركبة",
    vehicleEconomy:        "اقتصادي",
    vehicleBusiness:       "أعمال",
    vehicleFamilyVan:      "Family Van",
    vehicleDisabledHint:   "فقط Family Van لـ5+ ركاب.",
    backBtn:               "رجوع",
    nextBtn:               "التالي",

    vehicleTitle:          "اختر مركبتك",
    vehicleSubtitle:       "حدد مركبة النقل.",
    vehicleEconomyDesc:    "راحة حتى 3 أشخاص",
    vehicleBusinessDesc:   "نقل فاخر بمركبة مميزة",
    vehicleFamilyVanDesc:  "مساحة حتى 5 أشخاص",
    vehicleSurchargeLabel: "رسوم إضافية",
    vehicleNoSurcharge:    "بدون رسوم",
    selectVehicleBtn:      "اختر",
    selectedLabel:         "تم الاختيار",

    seatsTitle:            "اختيار مقاعد الأطفال",
    seatsSubtitle:         "حدد مقاعد الأطفال.",
    babyLabel:             "مقعد للرضع",
    childLabel:            "مقعد طفل",
    boosterLabel:          "مقعد مرتفع",
    selectPrompt:          "اختر…",
    freeBadgeText:         "المقعد الأول مجاني",
    extrasTotalLabel:      "إجمالي الإضافات",
    currencySymbol:        "$",

    extrasStepTitle:       "إضافات إضافية",
    extrasStepSubtitle:    "اختر الإضافات.",
    flowers:               "باقة زهور",
    wine:                  "نبيذ",
    whiskey:               "ويسكي",
    beer:                  "بيرة",
    redbull:               "ريد بول",
    obstplatte:            "صحن فواكه",
    pralinen:              "تشكيلة شوكولاتة",
    vodka:                 "فودكا",

    checkoutTitle:         "ملخص وحجز",
    voucherLabel:          "رمز القسيمة (10 %):",
    voucherPlaceholder:    "AMDGC2025",
    minimumFareLabel:      "الإجمالي قبل القسيمة",
    ridePriceLabel:        "سعر الرحلة",
    extrasTotalLabel:      "إجمالي الإضافات",
    returnDiscountLabel:   "خصم العودة",
    totalLabel:            "الإجمالي",
    firstNameLabel:        "الاسم الأول",
    lastNameLabel:         "اسم العائلة",
    emailLabel:            "البريد الإلكتروني",
    phoneLabel:            "رقم الهاتف",
    paymentTitle:          "الدفع",
    creditCardBtn:         "بطاقة ائتمان",
    wishBtn:               "WISH",
    cashBtn:               "الدفع نقداً",
    sendBtn:               "إرسال الطلب",
    whatsappBtn:           "إرسال عبر واتساب",

    emailSubject:          "طلب نقل",
    emailGreeting:         "مرحباً، أود طلب نقل:",

    wishInfoTitle:         "الدفع عبر WISH:",
    wishStep1:             "افتح تطبيق WISH الخاص بك.",
    wishStep2:             "اختر “Scan to Pay” أو “Send Money”.",
    wishStep3:             "أدخل رقم المستلم: {number}",
    wishStep4:             "أكد المبلغ المراد دفعه.",
    wishToggleToText: {
      qr:   "الوضع البسيط (بدون رمز QR)",
      text: "عرض رمز QR"
    },
  },
};

export default t;
