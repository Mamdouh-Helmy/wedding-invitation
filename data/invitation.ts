const mapQuery = encodeURIComponent("Royal Garden Palace New Cairo Egypt");

export const invitation = {
  couple: { groom: "آدم", bride: "ليلى", letters: ["آ", "ل"] },
  date: "2026-12-20T20:00:00+02:00",
  rsvpDeadline: "٥ ديسمبر ٢٠٢٦",
  spoken: {
    weekday: "الأحد",
    day: "عشرين ديسمبر",
    year: "ألفين وستة وعشرين",
    time: "الساعة تمانية بالليل",
  },
  copy: {
    bismillah: "بسم الله الرحمن الرحيم",
    request: ["بقلوب مليانة فرحة بنتشرف", "بدعوتكم تشاركونا فرحتنا"],
    backMessage: ["قلبين وفرحة واحدة،", "ودعواتكم تكمّل فرحتنا."],
  },
  venue: {
    name: "قصر الحديقة الملكية",
    short: "القاهرة الجديدة · مصر",
    area: "القاهرة الجديدة، القاهرة، مصر",
    coordinates: "٣٠٫٠٣٠٠° شمالًا، ٣١٫٤٧٠٠° شرقًا",
    mapUrl: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  },
  whatsapp: { phone: "201000000000", display: "+٢٠ ١٠٠ ٠٠٠ ٠٠٠٠" },
  music: "/audio/wedding-theme.mp3",
  heroImage: "/images/hero.jpg",
  footerImage: "/images/footer.png",
  story: {
    headline: ["كل حكاية حب حلوة، بس حكايتنا هي", "الأحلى", "عندنا."],
    paragraphs: [
      "الحمد لله اللي جمع بين قلبينا على الخير، وكتب لنا نبدأ بيت مليان مودة ورحمة وسكن.",
      "وفرحتنا مش هتكمل غير بوجودكم، يا أهلنا وأحبابنا. دعواتكم هي أغلى هدية، ووجودكم جنبنا هو أحلى حاجة في اليوم ده.",
    ],
    images: ["/images/story-1.png", "/images/story-2.png"],
  },
  details: {
    ceremony: {
      time: "٨:٠٠",
      period: "م",
      text: "كتب الكتاب في فناء القصر وسط الأهل والأحباب وضوء الشموع.",
    },
    celebration: {
      title: "بعد كتب الكتاب",
      text: "زفة وموسيقى ورقص في جناح الحديقة لحد آخر الليل.",
    },
  },
  evening: [
    {
      time: "٠٨:٠٠",
      period: "م",
      title: "نورتونا",
      note: "عصير ومشروبات وزغاريد على باب القصر لحد ما الكل يوصل.",
    },
    {
      time: "٠٨:٣٠",
      period: "م",
      title: "كتب الكتاب",
      note: "المأذون والفاتحة والدبل في الحوش، وسط الأهل والشموع.",
    },
    {
      time: "٠٩:٠٠",
      period: "م",
      title: "دخول العروسين",
      note: "زفة بالزغاريد والطبل، وبعدها الكوشة والتورتة وصور الذكرى.",
    },
    {
      time: "١٠:٠٠",
      period: "م",
      title: "الرقص والسهر",
      note: "الفرقة بتغني والأرضية بتاعتكم، ونرقص سوا لحد آخر أغنية.",
    },
  ],
} as const;