const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'weplace_public_language';
const LANGUAGE_LABELS = {
  en: 'EN',
  ms: 'BM'
};

const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About us',
      support: 'Support',
      contact: 'Contact'
    },
    hero: {
      title: 'Connecting Community. Improving Everyday Life.',
      body: 'Weplace helps neighbours buy, sell, support, and connect within their own communities — making daily life more convenient, affordable, and meaningful.',
      download: 'Available on iOS and Android.'
    },
    logo: {
      home: {
        title: 'Home',
        text: 'The marker stands for home - the place where daily life begins.'
      },
      connection: {
        title: 'Connection',
        text: 'The flower stands for connection, care, and growth in every community.'
      },
      weplace: {
        title: 'Weplace',
        text: 'Weplace is built to bring more value back to the places we call home.'
      }
    },
    about: {
      title: 'Made for Malaysian neighbourhoods.',
      subtitle: 'Inspired by the Kita Jaga Kita spirit, Weplace helps neighbours discover local food, goods, services, vouchers, events, and support close to home.',
      market: {
        title: 'A place for local ideas',
        text: 'From home-cooked favourites to small reseller finds and weekend pasar ideas, Weplace gives local sellers a simple way to start and be discovered by nearby neighbours.'
      },
      events: {
        title: 'Help and moments nearby',
        text: 'Looking for a badminton kaki, a quick favour, or help when something goes wrong? Weplace makes it easier to reach people around you and keep community support moving.'
      }
    },
    journey: {
      eyebrow: 'For buyers, sellers, and neighbours',
      title: 'Built around everyday Malaysian life.',
      subtitle: 'Weplace connects local discovery with simple selling tools, so residents can find what they need nearby while small sellers grow from the communities that know them best.',
      buyer: {
        chip: 'For Buyers',
        title: 'Find useful things closer to home.',
        text: 'From lauk and kuih to services, vouchers, and local deals, Weplace helps buyers discover everyday value from people nearby.',
        points: [
          'Spot nearby goods, foods, services, and timely local offers',
          'Enjoy a more convenient way to find potential great deals',
          'Stay close to sellers through simple, friendly direct chat'
        ]
      },
      seller: {
        chip: 'For Sellers',
        title: 'Start from home, grow with your neighbourhood.',
        text: 'Test new ideas, manage orders, and learn from real neighbour feedback before growing your small business further.',
        points: [
          'Start from home with an easy setup and low-friction workflow',
          'Manage sales, orders, and buyer conversations in one place',
          'Use neighbourhood feedback to refine ideas and grow with confidence'
        ]
      }
    },
    value: {
      eyebrow: 'How Seller Plans Work',
      title: 'Start Small, Grow Bigger',
      subtitle: 'Start selling for free, then subscribe only when you need more products and wider reach.',
      note: 'Registration approved sellers can start immediately with a simple local setup.',
      visual: {
        live: 'Radius enabled',
        range: 'Up to 2km reach'
      },
      steps: [
        {
          title: 'Free User',
          text: 'Start selling as soon as your registration is approved, with up to 2 products and local neighbourhood visibility only.'
        },
        {
          title: 'Subscribed User',
          text: 'List more products and sales, and get discovered in nearby neighbourhoods.'
        }
      ]
    },
    priority: {
      eyebrow: 'Priority Support',
      title: 'Helping local sellers be seen.',
      subtitle: 'Priority Support gives extra visibility to community sellers who may need a stronger starting point, so residents can choose to support with clearer context.',
      note: 'Priority Support is reviewed by Weplace and may apply to approved community cases such as persons with disabilities, single parents, and other local support needs.',
      cards: [
        {
          title: 'Clearer visibility',
          text: 'Supported sellers can be highlighted so nearby residents understand who they are helping.'
        },
        {
          title: 'Start from home',
          text: 'Good for small home-based foods, goods, services, vouchers, and everyday ideas that begin in the neighbourhood.'
        },
        {
          title: 'Community-first support',
          text: 'Residents can support local sellers with more context, trust, and a stronger sense of shared community.'
        }
      ]
    },
    sellerIdeas: {
      eyebrow: 'Local seller ideas',
      title: 'Food, Goods, Services, and Vouchers',
      subtitle: 'Simple examples of what neighbours can offer from home, online, or around the community.'
    },
    proof: {
      eyebrow: 'Made for everyday Malaysian life',
      title: 'More value from the people and places nearby.',
      items: [
        {
          title: 'For nearby buyers',
          text: 'Discover foods, goods, services, vouchers, events, and help requests around your own area.'
        },
        {
          title: 'For home sellers',
          text: 'Start small, test ideas, manage orders, and grow with feedback from local buyers.'
        },
        {
          title: 'For community support',
          text: 'Help residents notice local sellers and support needs that might otherwise stay unseen.'
        }
      ]
    },
    trust: {
      eyebrow: 'Built on Trust',
      title: 'Trust for local participation in Malaysia.',
      subtitle: 'Neighbourhood commerce works better when people know who they are dealing with. Weplace supports clearer seller verification and more familiar local interactions.',
      cards: [
        {
          title: 'Personal Seller',
          text: 'Malaysian personal sellers can register by uploading IC front and back for verification.'
        },
        {
          title: 'Company Seller',
          text: 'Company sellers can register with SSM information, with halal certification as an optional supporting document.'
        },
        {
          title: 'More familiar interactions',
          text: 'With local residents and verified Malaysian sellers, everyday buying, selling, and helping can feel closer and more secure.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contact Us',
      title: "Let's connect with Weplace.",
      subtitle: 'If you want to learn more about Weplace, early access, partnerships, or seller onboarding, reach us directly by email.',
      footer: 'We would love to hear from residents, local businesses, and potential partners.'
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Good to know before you join.',
      subtitle: 'Quick answers for residents, home sellers, and local partners.',
      items: [
        {
          question: 'Is Weplace free to download?',
          answer: 'Yes. You can download Weplace from the App Store or Google Play using the buttons on this page.'
        },
        {
          question: 'Can I start selling from home?',
          answer: 'Yes. Approved sellers can start small from home, test ideas with nearby buyers, and grow steadily with feedback from their own neighbourhood.'
        },
        {
          question: 'How are sellers verified?',
          answer: 'Personal sellers can register with IC verification, while company sellers can provide SSM information and optional supporting documents such as halal certification.'
        },
        {
          question: 'Is it available in my area?',
          answer: 'Weplace is built for Malaysian communities and focuses on nearby discovery. Download the app to explore what is available around you.'
        }
      ]
    },
    finalCta: {
      eyebrow: 'Start close to home',
      title: 'Bring your neighbourhood closer.',
      subtitle: 'Download Weplace on iOS or Android and start discovering what is around you.'
    },
    footer: {
      brand: 'Weplace',
      tagline: 'A neighbourhood app for buying, selling, helping, and discovering more close to home.',
      brandLinks: ['About us', 'Contact us', 'FAQ'],
      modules: {
        title: 'Modules',
        links: ['Home', 'Market', 'Chat']
      },
      legal: {
        title: 'Legal',
        links: ['Privacy', 'Terms & Conditions', 'Security']
      },
      download: 'Download Our App',
      copyright: 'Copyright 2026 Weplace Technologies. Built for Malaysian communities.'
    }
  },
  ms: {
    nav: {
      home: 'Utama',
      about: 'Tentang kami',
      support: 'Sokongan',
      contact: 'Hubungi'
    },
    hero: {
      title: 'Menghubungkan Komuniti. Memperbaiki Kehidupan Harian.',
      body: 'Weplace membantu jiran membeli, menjual, menyokong, dan berhubung dalam komuniti sendiri - menjadikan kehidupan harian lebih mudah, berbaloi, dan bermakna.',
      download: 'Tersedia di iOS dan Android.'
    },
    logo: {
      home: {
        title: 'Rumah',
        text: 'Penanda lokasi melambangkan rumah - tempat bermulanya kehidupan harian kita.'
      },
      connection: {
        title: 'Hubungan',
        text: 'Bunga melambangkan hubungan, keprihatinan, dan pertumbuhan dalam komuniti.'
      },
      weplace: {
        title: 'Weplace',
        text: 'Weplace dibina untuk membawa lebih banyak nilai kembali kepada tempat yang kita panggil rumah.'
      }
    },
    about: {
      title: 'Dibina untuk kejiranan Malaysia.',
      subtitle: 'Diilhamkan oleh semangat Kita Jaga Kita, Weplace membantu jiran menemui makanan, barangan, perkhidmatan, baucar, acara, dan sokongan berdekatan.',
      market: {
        title: 'Tempat untuk idea tempatan',
        text: 'Daripada makanan dari rumah hingga produk reseller kecil dan idea pasar hujung minggu, Weplace memberi penjual tempatan cara mudah untuk bermula dan ditemui jiran berdekatan.'
      },
      events: {
        title: 'Bantuan dan aktiviti berdekatan',
        text: 'Perlukan kaki badminton, bantuan kecil, atau sokongan bila sesuatu berlaku? Weplace memudahkan anda menghubungi orang sekeliling dan menggerakkan semangat komuniti.'
      }
    },
    journey: {
      eyebrow: 'Untuk pembeli, penjual, dan jiran',
      title: 'Dibina mengikut kehidupan harian Malaysia.',
      subtitle: 'Weplace menghubungkan penemuan tempatan dengan alat jualan yang mudah, supaya penduduk boleh mencari apa yang diperlukan berdekatan dan penjual kecil boleh berkembang bersama komuniti yang mengenali mereka.',
      buyer: {
        chip: 'Untuk Pembeli',
        title: 'Cari perkara berguna dekat dengan rumah.',
        text: 'Daripada lauk dan kuih hingga perkhidmatan, baucar, dan tawaran tempatan, Weplace membantu pembeli menemui nilai harian daripada orang berdekatan.',
        points: [
          'Temui barangan, makanan, perkhidmatan, dan tawaran tempatan yang berdekatan',
          'Nikmati cara yang lebih mudah untuk mencari tawaran yang berpotensi menarik',
          'Kekal dekat dengan penjual melalui sembang terus yang mudah dan mesra'
        ]
      },
      seller: {
        chip: 'Untuk Penjual',
        title: 'Bermula dari rumah, berkembang bersama kejiranan.',
        text: 'Uji idea baharu, urus pesanan, dan belajar melalui maklum balas jiran sebelum mengembangkan perniagaan kecil anda.',
        points: [
          'Mulakan dari rumah dengan persediaan mudah dan aliran kerja yang ringan',
          'Urus jualan, pesanan, dan perbualan dengan pembeli di satu tempat',
          'Gunakan maklum balas kejiranan untuk menambah baik idea dan berkembang dengan yakin'
        ]
      }
    },
    value: {
      eyebrow: 'Bagaimana Pelan Penjual Berfungsi',
      title: 'Bayar hanya apabila anda mahu menjual lebih banyak.',
      subtitle: 'Mula menjual secara percuma, kemudian langgan hanya apabila anda perlukan lebih banyak produk dan capaian lebih luas.',
      note: 'Penjual yang pendaftaran diluluskan boleh mula segera dengan tetapan tempatan yang mudah.',
      visual: {
        live: 'Radius diaktifkan',
        range: 'Capaian sehingga 2km'
      },
      steps: [
        {
          title: 'Pengguna Percuma',
          text: 'Mula menjual sebaik sahaja pendaftaran anda diluluskan, dengan had sehingga 2 produk dan paparan di kejiranan tempatan sahaja.'
        },
        {
          title: 'Pengguna Langganan',
          text: 'Senaraikan lebih banyak produk dan jualan, serta tingkatkan penemuan di kejiranan berdekatan.'
        }
      ]
    },
    priority: {
      eyebrow: 'Sokongan Keutamaan',
      title: 'Membantu penjual tempatan lebih mudah dilihat.',
      subtitle: 'Sokongan Keutamaan memberi keterlihatan tambahan kepada penjual komuniti yang memerlukan permulaan lebih kuat, supaya penduduk boleh menyokong dengan konteks yang lebih jelas.',
      note: 'Sokongan Keutamaan disemak oleh Weplace dan boleh diberikan kepada kes komuniti yang diluluskan seperti OKU, ibu bapa tunggal, dan keperluan sokongan tempatan yang lain.',
      cards: [
        {
          title: 'Lebih mudah dilihat',
          text: 'Penjual yang disokong boleh ditonjolkan supaya penduduk berdekatan lebih faham siapa yang mereka bantu.'
        },
        {
          title: 'Bermula dari rumah',
          text: 'Sesuai untuk makanan, barangan, perkhidmatan, baucar, dan idea harian kecil yang bermula di kejiranan.'
        },
        {
          title: 'Sokongan komuniti',
          text: 'Penduduk boleh menyokong penjual tempatan dengan lebih konteks, kepercayaan, dan rasa kebersamaan.'
        }
      ]
    },
    sellerIdeas: {
      eyebrow: 'Idea penjual tempatan',
      title: 'Makanan, Barangan, Perkhidmatan, dan Baucar',
      subtitle: 'Contoh mudah tentang apa yang jiran boleh tawarkan dari rumah, secara online, atau di sekitar komuniti.'
    },
    proof: {
      eyebrow: 'Dibina untuk kehidupan harian Malaysia',
      title: 'Lebih nilai daripada orang dan tempat berdekatan.',
      items: [
        {
          title: 'Untuk pembeli berdekatan',
          text: 'Temui makanan, barangan, perkhidmatan, baucar, acara, dan permintaan bantuan di kawasan anda.'
        },
        {
          title: 'Untuk penjual dari rumah',
          text: 'Mulakan kecil, uji idea, urus pesanan, dan berkembang melalui maklum balas pembeli tempatan.'
        },
        {
          title: 'Untuk sokongan komuniti',
          text: 'Bantu penduduk melihat penjual tempatan dan keperluan sokongan yang mungkin kurang kelihatan.'
        }
      ]
    },
    trust: {
      eyebrow: 'Dibina atas Kepercayaan',
      title: 'Kepercayaan untuk penyertaan tempatan di Malaysia.',
      subtitle: 'Urusan kejiranan lebih baik apabila orang tahu dengan siapa mereka berurusan. Weplace menyokong pengesahan penjual yang lebih jelas dan interaksi tempatan yang lebih dekat.',
      cards: [
        {
          title: 'Penjual Peribadi',
          text: 'Penjual peribadi warganegara Malaysia boleh mendaftar dengan memuat naik IC depan dan belakang untuk pengesahan.'
        },
        {
          title: 'Penjual Syarikat',
          text: 'Penjual syarikat boleh mendaftar dengan maklumat SSM, dengan sijil halal sebagai dokumen sokongan pilihan.'
        },
        {
          title: 'Interaksi yang lebih dekat',
          text: 'Dengan penduduk tempatan dan penjual Malaysia yang disahkan, urusan membeli, menjual, dan membantu harian boleh terasa lebih dekat dan selamat.'
        }
      ]
    },
    contact: {
      eyebrow: 'Hubungi Kami',
      title: 'Mari berhubung dengan Weplace.',
      subtitle: 'Jika anda ingin mengetahui lebih lanjut tentang Weplace, akses awal, kerjasama, atau penyertaan penjual, hubungi kami terus melalui e-mel.',
      footer: 'Kami ingin mendengar daripada penduduk, perniagaan tempatan, dan bakal rakan kerjasama.'
    },
    faq: {
      eyebrow: 'Soalan',
      title: 'Perkara yang baik untuk diketahui.',
      subtitle: 'Jawapan ringkas untuk penduduk, penjual dari rumah, dan rakan tempatan.',
      items: [
        {
          question: 'Adakah Weplace percuma untuk dimuat turun?',
          answer: 'Ya. Anda boleh memuat turun Weplace dari App Store atau Google Play menggunakan butang di halaman ini.'
        },
        {
          question: 'Bolehkah saya mula menjual dari rumah?',
          answer: 'Ya. Penjual yang diluluskan boleh bermula kecil dari rumah, menguji idea dengan pembeli berdekatan, dan berkembang secara berperingkat melalui maklum balas kejiranan.'
        },
        {
          question: 'Bagaimana penjual disahkan?',
          answer: 'Penjual peribadi boleh mendaftar dengan pengesahan IC, manakala penjual syarikat boleh memberikan maklumat SSM dan dokumen sokongan pilihan seperti sijil halal.'
        },
        {
          question: 'Adakah ia tersedia di kawasan saya?',
          answer: 'Weplace dibina untuk komuniti Malaysia dan memfokuskan penemuan berdekatan. Muat turun aplikasi untuk meneroka apa yang tersedia di sekitar anda.'
        }
      ]
    },
    finalCta: {
      eyebrow: 'Mula dekat dengan rumah',
      title: 'Dekatkan kejiranan anda.',
      subtitle: 'Muat turun Weplace di iOS atau Android dan mula temui apa yang ada di sekitar anda.'
    },
    footer: {
      brand: 'Weplace',
      tagline: 'Aplikasi kejiranan untuk membeli, menjual, membantu, dan menemui lebih banyak perkara dekat dengan rumah.',
      brandLinks: ['Tentang kami', 'Hubungi kami', 'FAQ'],
      modules: {
        title: 'Modul',
        links: ['Utama', 'Pasaran', 'Sembang']
      },
      legal: {
        title: 'Perundangan',
        links: ['Privasi', 'Terma & Syarat', 'Keselamatan']
      },
      download: 'Muat Turun Aplikasi Kami',
      copyright: 'Copyright 2026 Weplace Technologies. Dibina untuk komuniti Malaysia.'
    }
  }
};

const getValueByPath = (source, path) =>
  path.split('.').reduce((value, key) => {
    if (value == null) return undefined;
    if (Array.isArray(value)) {
      const index = Number(key);
      return Number.isNaN(index) ? undefined : value[index];
    }
    return value[key];
  }, source);

const setActiveLanguage = (language) => {
  const current = document.querySelector('[data-language-current]');
  if (current) {
    current.textContent = LANGUAGE_LABELS[language] || language.toUpperCase();
  }

  document.querySelectorAll('[data-language-option]').forEach((option) => {
    option.classList.toggle('active', option.dataset.languageOption === language);
  });
};

const applyTranslations = (language) => {
  const selected = TRANSLATIONS[language] || TRANSLATIONS[DEFAULT_LANGUAGE];
  if (!selected) return;

  document.documentElement.lang = language === 'ms' ? 'ms-MY' : 'en-US';
  document.title = language === 'ms'
    ? 'Weplace | Platform Sosial Komuniti untuk Malaysia'
    : 'Weplace | Neighborhood Social Commerce for Malaysia';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = getValueByPath(selected, element.dataset.i18n);
    if (typeof value === 'string') {
      element.textContent = value;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = getValueByPath(selected, element.dataset.i18nHtml);
    if (typeof value === 'string') {
      element.innerHTML = value;
    }
  });

  setActiveLanguage(language);
  localStorage.setItem(STORAGE_KEY, language);
};

const initTranslations = () => {
  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  const initialLanguage = savedLanguage && TRANSLATIONS[savedLanguage]
    ? savedLanguage
    : DEFAULT_LANGUAGE;

  applyTranslations(initialLanguage);

  document.querySelectorAll('[data-language-option]').forEach((option) => {
    option.addEventListener('click', () => {
      const nextLanguage = option.dataset.languageOption;
      if (!nextLanguage || !TRANSLATIONS[nextLanguage]) return;
      applyTranslations(nextLanguage);
    });
  });
};

const initHeroDownloadLinks = () => {
  const heroActions = document.querySelector('.hero-download-actions');
  if (!heroActions) return;

  document.addEventListener('click', (event) => {
    if (event.target.closest?.('.hero-download-actions .store-badge-link')) {
      return;
    }

    const x = event.clientX;
    const y = event.clientY;
    const link = Array.from(
      heroActions.querySelectorAll('.store-badge-link'),
    ).find((item) => {
      const rect = item.getBoundingClientRect();
      return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;
    });

    if (!link) return;
    event.preventDefault();
    window.open(link.href, link.target || '_self', 'noopener,noreferrer');
  }, true);
};

document.addEventListener('DOMContentLoaded', initTranslations);
document.addEventListener('DOMContentLoaded', initHeroDownloadLinks);
