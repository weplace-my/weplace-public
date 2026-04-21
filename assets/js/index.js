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
      body: '<b>Weplace connects neighbors with social and market platform to bring more value to our daily life.<br>By supporting each other, we can discover great peoples and unlock great deals.</b>',
      download: 'Discover the hidden potential within your community.'
    },
    logo: {
      home: {
        title: 'Home',
        text: 'The location marker represents our home, the place we live.'
      },
      connection: {
        title: 'Connection',
        text: 'The flower represents connection, growth, and community.'
      },
      weplace: {
        title: 'Weplace',
        text: 'Our goal is to unlock more values to place where everybody live.'
      }
    },
    about: {
      title: 'Built for Malaysian neighborhoods.',
      subtitle: 'Inspired by the "Kita Jaga Kita" spirit, Weplace helps neighbours discover more surprising goods, foods, services, and vouchers that make everyday life better and easier.',
      market: {
        title: 'Market for local ideas',
        text: 'Got a food idea that could be the next big hit? Nasi Goreng Durian? Matcha Toast Jam? Selling a great reseller product or running a small pasar setup? Start on Weplace with zero setup cost and let your neighbours be the first to discover it.'
      },
      events: {
        title: 'Events and help nearby',
        text: 'Need a badminton kaki? Create an event and invite someone nearby to join. Car battery suddenly died? Send a help request and a neighbour might step in to saves your day, you can always tip them as a appreciation.'
      }
    },
    journey: {
      eyebrow: 'One platform for buyers and sellers',
      title: 'Designed for buyers and sellers.',
      subtitle: 'Weplace is built for both sides in one platform. Sellers can manage sales and deliver orders more easily, while buyers enjoy a more convenient way to discover nearby products and potential great deals.',
      buyer: {
        chip: 'User as Buyer',
        title: 'Discover local finds that make our life easier and better',
        text: 'From good food and useful services to surprise vouchers and local deals, Weplace helps buyers discover more value close to home in one convenient place.',
        points: [
          'Spot nearby goods, foods, services, and timely local offers',
          'Enjoy a more convenient way to find potential great deals',
          'Stay close to sellers through simple, friendly direct chat'
        ]
      },
      seller: {
        chip: 'User as Seller',
        title: 'Start small, grow locally, and build with your neighborhood.',
        text: 'Weplace makes it easy to set up, test new ideas, and receive real feedback from neighbor buyers, so small innovations can improve steadily and grow with confidence.',
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
      title: 'Helping community sellers get seen.',
      subtitle: 'Priority Support gives selected sellers extra visibility so residents can discover and support businesses from people who may need a stronger starting point.',
      note: 'Priority Support is reviewed by Weplace and may apply to approved community cases such as persons with disabilities, single parents, and other local support needs.',
      cards: [
        {
          title: 'More visibility',
          text: 'Supported sellers can be highlighted more clearly so nearby residents know who they are helping.'
        },
        {
          title: 'Start from home',
          text: 'Great for small home-based foods, goods, services, vouchers, and everyday ideas that begin inside the neighbourhood.'
        },
        {
          title: 'Community-first support',
          text: 'Residents can choose to support local sellers with clearer context and a stronger sense of trust.'
        }
      ]
    },
    trust: {
      eyebrow: 'Built on Trust',
      title: 'Built for trusted local participation in Malaysia.',
      subtitle: 'Trust matters in neighborhood communities. That is why Weplace is designed to support real local participation and clearer seller verification.',
      cards: [
        {
          title: 'Personal Seller',
          text: 'Malaysian personal sellers can register by uploading IC front and back for verification.'
        },
        {
          title: 'Company Seller',
          text: 'Company sellers can register by providing SSM information, with halal certificate as an optional document.'
        },
        {
          title: 'Safer local interactions',
          text: 'With local residents and verified Malaysian sellers, everyday buying, selling, and helping feel more trusted and secure.'
        }
      ]
    },
    contact: {
      eyebrow: 'Contact Us',
      title: "Let's connect with Weplace.",
      subtitle: 'If you want to learn more about Weplace, early access, partnerships, or seller onboarding, reach us directly by email.',
      footer: 'We would love to hear from residents, local businesses, and potential partners.'
    },
    footer: {
      brand: 'Weplace',
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
      body: '<b>Weplace menghubungkan jiran melalui platform sosial dan pasaran untuk membawa lebih nilai dalam kehidupan harian kita.<br>Dengan saling menyokong, kita boleh menemui lebih ramai orang hebat dan membuka peluang tawaran yang menarik.</b>',
      download: 'Temui potensi tersembunyi dalam komuniti anda.'
    },
    logo: {
      home: {
        title: 'Rumah',
        text: 'Penanda lokasi melambangkan rumah kita, tempat kita tinggal.'
      },
      connection: {
        title: 'Hubungan',
        text: 'Bunga melambangkan hubungan, pertumbuhan, dan komuniti.'
      },
      weplace: {
        title: 'Weplace',
        text: 'Matlamat kami adalah membuka lebih banyak nilai kepada tempat di mana semua orang tinggal.'
      }
    },
    about: {
      title: 'Dibina untuk kejiranan Malaysia.',
      subtitle: 'Diilhamkan oleh semangat "Kita Jaga Kita", Weplace membantu jiran menemui barangan, makanan, perkhidmatan, dan baucar yang lebih menarik untuk menjadikan kehidupan harian lebih baik dan mudah.',
      market: {
        title: 'Pasaran untuk idea tempatan',
        text: 'Ada idea makanan yang boleh jadi hit seterusnya? Nasi Goreng Durian? Jem Roti Bakar Matcha? Menjual produk reseller yang bagus atau menjalankan perniagaan kecil? Mulakan di Weplace tanpa kos persediaan dan biarkan jiran anda menjadi orang pertama yang menemuinya.'
      },
      events: {
        title: 'Acara dan bantuan berdekatan',
        text: 'Perlukan kawan badminton? Cipta acara dan jemput seseorang berdekatan untuk sertai. Bateri kereta tiba-tiba kong? Hantar permintaan bantuan dan jiran mungkin tampil membantu hari anda, dan anda sentiasa boleh beri tip sebagai tanda penghargaan.'
      }
    },
    journey: {
      eyebrow: 'Satu platform untuk pembeli dan penjual',
      title: 'Direka untuk pembeli dan penjual.',
      subtitle: 'Weplace dibina untuk kedua-dua pihak dalam satu platform. Penjual boleh mengurus jualan dan penghantaran dengan lebih mudah, manakala pembeli menikmati cara yang lebih mudah untuk menemui produk berdekatan dan tawaran menarik.',
      buyer: {
        chip: 'Pengguna sebagai pembeli',
        title: 'Temui pilihan berdekatan yang menjadikan hidup harian lebih mudah dan lebih berbaloi.',
        text: 'Daripada makanan sedap dan perkhidmatan berguna hingga baucar kejutan dan tawaran tempatan, Weplace membantu pembeli menemui lebih banyak nilai dekat dengan rumah di satu tempat yang mudah.',
        points: [
          'Temui barangan, makanan, perkhidmatan, dan tawaran tempatan yang berdekatan',
          'Nikmati cara yang lebih mudah untuk mencari tawaran yang berpotensi menarik',
          'Kekal dekat dengan penjual melalui sembang terus yang mudah dan mesra'
        ]
      },
      seller: {
        chip: 'Pengguna sebagai penjual',
        title: 'Mulakan kecil, berkembang dari rumah, dan membina bersama kejiranan anda.',
        text: 'Weplace memudahkan anda untuk bermula, menguji idea baharu, dan menerima maklum balas sebenar daripada jiran berdekatan supaya inovasi kecil boleh bertambah baik secara konsisten dan berkembang dengan yakin.',
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
      title: 'Membantu penjual komuniti lebih mudah ditemui.',
      subtitle: 'Sokongan Keutamaan memberi keterlihatan tambahan kepada penjual terpilih supaya penduduk boleh menemui dan menyokong perniagaan daripada mereka yang mungkin memerlukan permulaan yang lebih kuat.',
      note: 'Sokongan Keutamaan disemak oleh Weplace dan boleh diberikan kepada kes komuniti yang diluluskan seperti OKU, ibu bapa tunggal, dan keperluan sokongan tempatan yang lain.',
      cards: [
        {
          title: 'Lebih keterlihatan',
          text: 'Penjual yang disokong boleh ditonjolkan dengan lebih jelas supaya penduduk berdekatan tahu siapa yang mereka bantu.'
        },
        {
          title: 'Bermula dari rumah',
          text: 'Sesuai untuk makanan, barangan, perkhidmatan, baucar, dan idea harian kecil yang bermula dalam kejiranan.'
        },
        {
          title: 'Sokongan mengutamakan komuniti',
          text: 'Penduduk boleh memilih untuk menyokong penjual tempatan dengan konteks yang lebih jelas dan rasa percaya yang lebih kuat.'
        }
      ]
    },
    trust: {
      eyebrow: 'Dibina atas Kepercayaan',
      title: 'Dibina untuk penyertaan tempatan yang dipercayai di Malaysia.',
      subtitle: 'Kepercayaan sangat penting dalam komuniti kejiranan. Itulah sebabnya Weplace direka untuk menyokong penyertaan tempatan yang sebenar dan pengesahan penjual yang lebih jelas.',
      cards: [
        {
          title: 'Penjual Peribadi',
          text: 'Penjual peribadi warganegara Malaysia boleh mendaftar dengan memuat naik IC depan dan belakang untuk pengesahan.'
        },
        {
          title: 'Penjual Syarikat',
          text: 'Penjual syarikat boleh mendaftar dengan memuat naik butiran alamat syarikat, dengan sijil halal sebagai dokumen pilihan.'
        },
        {
          title: 'Interaksi tempatan yang lebih selamat',
          text: 'Dengan penduduk tempatan dan penjual Malaysia yang disahkan, urusan membeli, menjual, dan membantu setiap hari terasa lebih dipercayai dan selamat.'
        }
      ]
    },
    contact: {
      eyebrow: 'Hubungi Kami',
      title: 'Mari berhubung dengan Weplace.',
      subtitle: 'Jika anda ingin mengetahui lebih lanjut tentang Weplace, akses awal, kerjasama, atau penyertaan penjual, hubungi kami terus melalui e-mel.',
      footer: 'Kami ingin mendengar daripada penduduk, perniagaan tempatan, dan bakal rakan kerjasama.'
    },
    footer: {
      brand: 'Weplace',
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

document.addEventListener('DOMContentLoaded', initTranslations);
