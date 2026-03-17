const DEFAULT_LANGUAGE = 'en';
const STORAGE_KEY = 'weplace_public_language';

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
        title: 'Discover nearby finds that make everyday life easier and more rewarding.',
        text: 'From good food and useful services to surprise vouchers and local deals, Weplace helps buyers discover more value close to home in one convenient place.',
        points: [
          'Spot nearby goods, foods, services, and timely local offers',
          'Enjoy a more convenient way to find potential great deals',
          'Stay close to sellers through simple, friendly direct chat'
        ]
      },
      seller: {
        chip: 'User as Seller',
        title: 'Start small, grow from home, and build with your neighbourhood.',
        text: 'Weplace makes it easy to set up, test new ideas, and receive real feedback from nearby neighbours, so small innovations can improve steadily and grow with confidence.',
        points: [
          'Start from home with an easy setup and low-friction workflow',
          'Manage sales, orders, and buyer conversations in one place',
          'Use neighbourhood feedback to refine ideas and grow with confidence'
        ]
      }
    },
    value: {
      eyebrow: 'How Weplace Creates Value',
      title: 'Three ways Weplace brings neighborhoods to life.',
      subtitle: 'Weplace connects people, shops, and opportunities within the same neighbourhood so daily life feels more useful, more affordable, and more connected.',
      cards: [
        {
          title: 'Resident to Resident',
          text: 'Buy, sell, help, and connect directly with neighbors nearby. From homemade food to everyday support, residents can create value for one another, help reduce living costs, and support each other through rising prices and inflation.'
        },
        {
          title: 'Resident to Commercial',
          text: 'Local shops and verified sellers can offer vouchers, promotions, and better neighbourhood deals that feel relevant to the people around them.'
        },
        {
          title: 'Resident to Office',
          text: 'Open up business opportunities between residents, workplaces, and nearby demand with a platform designed for local discovery and real participation.'
        }
      ]
    },
    trust: {
      eyebrow: 'Built on Trust',
      title: 'Built for trusted local participation in Malaysia.',
      subtitle: 'Trust matters in neighborhood communities. That is why Weplace is designed to support real local participation and clearer seller verification.',
      cards: [
        {
          title: 'Verified account registration',
          text: 'Users can register as personal accounts by uploading IC front and back. Companies register with an SSM certificate. All submissions are verified within a short period.'
        },
        {
          title: 'Verified Malaysian sellers',
          text: 'Personal and business sellers can join if they are Malaysian citizens aged 18 and above. Sellers with SSM registration can show their business verification for added buyer confidence.'
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
      eyebrow: 'Bagaimana Weplace Mencipta Nilai',
      title: 'Tiga cara Weplace menghidupkan kejiranan.',
      subtitle: 'Weplace menghubungkan orang, kedai, dan peluang dalam kejiranan yang sama supaya kehidupan harian terasa lebih berguna, lebih berpatutan, dan lebih terhubung.',
      cards: [
        {
          title: 'Penduduk kepada Penduduk',
          text: 'Beli, jual, bantu, dan berhubung terus dengan jiran berdekatan. Daripada makanan buatan sendiri hingga bantuan harian, penduduk boleh mencipta nilai sesama sendiri, membantu mengurangkan kos sara hidup, dan saling menyokong dalam keadaan harga yang meningkat.'
        },
        {
          title: 'Penduduk kepada Komersial',
          text: 'Kedai tempatan dan penjual yang disahkan boleh menawarkan baucar, promosi, dan tawaran kejiranan yang lebih baik dan relevan kepada penduduk di sekeliling mereka.'
        },
        {
          title: 'Penduduk kepada Pejabat',
          text: 'Buka peluang perniagaan antara penduduk, tempat kerja, dan permintaan berdekatan melalui platform yang direka untuk penemuan tempatan dan penyertaan sebenar.'
        }
      ]
    },
    trust: {
      eyebrow: 'Dibina atas Kepercayaan',
      title: 'Dibina untuk penyertaan tempatan yang dipercayai di Malaysia.',
      subtitle: 'Kepercayaan sangat penting dalam komuniti kejiranan. Itulah sebabnya Weplace direka untuk menyokong penyertaan tempatan yang sebenar dan pengesahan penjual yang lebih jelas.',
      cards: [
        {
          title: 'Pendaftaran akaun yang disahkan',
          text: 'Pengguna boleh mendaftar sebagai akaun peribadi dengan memuat naik IC depan dan belakang. Syarikat pula mendaftar dengan sijil SSM. Semua permohonan disahkan dalam tempoh yang singkat.'
        },
        {
          title: 'Penjual Malaysia yang disahkan',
          text: 'Penjual peribadi dan perniagaan boleh menyertai jika mereka merupakan warganegara Malaysia berumur 18 tahun ke atas. Penjual dengan pendaftaran SSM boleh menunjukkan pengesahan perniagaan mereka untuk meningkatkan keyakinan pembeli.'
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
    current.textContent = language.toUpperCase();
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
