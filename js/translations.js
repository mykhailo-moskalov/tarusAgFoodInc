const translations = {
  en: {
    // HEADER
    headerLogo: 'TARUS ag food inc.',
    headerAnchor: 'Contact Us',

    //HERO
    heroTitle: 'Powerful movement. Reliable solutions. Growth without borders.',

    heroAnchor: 'Jump to Products',

    //ABOUT
    whoTitle: 'Who We Are',

    whoItemTitle1: 'Our Mission',
    whoItemText1:
      'Our mission is rooted in trust, quality, and lasting partnerships. We value reliability, transparency, and efficiency to ensure consistent service across the entire supply chain.',
    whoItemTitle2: 'Alternative investments',
    whoItemText2:
      'Real estate, construction. ESG approach (sustainable investing). Creating valuable and reliable assets in the real estate sector by investing in promising construction projects and ensuring sustainable capital growth.',
    whoItemTitle3: 'What We Do',
    whoItemText3:
      'We export agricultural goods and import food products worldwide. Our range includes grains, pulses, oils, feed, flour, and processed items for diverse international markets.',
    whoItemTitle4: 'Trusted Expert',
    whoItemText4:
      'Tarus ag food is more than just a supplier — we are your reliable global partner in agricultural trade, international logistics, and investments in construction and infrastructure projects.',
    whoItemTitle5: 'About Us',
    whoItemText5:
      'Tarus AG Food Inc. is an international company active in trade, transport, and construction investment, led by experts in global agricultural trade and multimodal logistics.',

    whoHintText: 'Swipe to see more',

    //PRODUCTS
    productsTitle: 'Products',

    productsItemTitle1: 'Grains',
    productsItemText1:
      'Wheat &bull; Corn &bull; Barley &bull; Oat Sorghum &bull; Millet',
    productsItemTitle2: 'Pulses',
    productsItemText2:
      'Yellow Peas &bull; Green Peas Chickpeas &bull; Red Lentils<br />Green Lentils',
    productsItemTitle3: 'Oilseeds',
    productsItemText3:
      'Sunflower Seeds<br />Soya Beans &bull; Rapeseeds<br />Mustard Seeds &bull; Flax Seeds',
    productsItemTitle4: 'Edible Oils',
    productsItemText4: 'Sunflower Oil &bull; Soybean Oil Rapeseed Oil',
    productsItemTitle5: 'Animal Feed & Meals',
    productsItemText5: 'Sunflower Meal<br />Soybean Meal &bull; DDGS<br />Bran',
    productsItemTitle6: 'Other Products',
    productsItemText6:
      'Wheat Flour<br />White Crystal Sugar<br />Fruit and vegetable &bull; Fish &bull; Meat Coffee',

    productsHintText: 'Swipe to see more',

    //WHY
    whyTitle: 'Why Us',

    whyItemText1: 'Over 10 years of experience in international trade',
    whyItemText2: 'Reliable network of trusted suppliers',
    whyItemText3: 'Focus on quality, trust, and long-term partnerships',
    whyItemText4: 'Efficient logistics and supply chain management',
    whyItemText5: 'Global market coverage and diverse product portfolio',
    whyItemText6: 'Customer-oriented and responsive team',

    //FOOTER
    footerText: 'Our Contacts',

    footerAdrTel1: '+1 (929) 501-3273',
    footerAdrTel2: '+1 (347) 421-0991',
    footerAdrMail: 'office@tarusagfood.com',
    footerAdrWeb: 'tarusagfood.com',

    formTextValid: 'Success&#33;',
    formTextInvalid: 'Invalid email, please try again&#33;',

    formBtn:
      'Send<svg class="form-btn-icon" width="18" height="18"><use href="./img/sprite.svg#send"></use></svg>',
  },
};

window.onload = () => {
  const t = translations.en;
  for (const key in t) {
    const elem = document.getElementById(key);
    if (elem) {
      elem.innerHTML = t[key];
      document.getElementById('email').placeholder = 'Email';
      document.getElementById('comment').placeholder = 'Comment';
    }
  }
};
