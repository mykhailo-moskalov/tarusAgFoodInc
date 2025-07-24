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

    whoItemTitle1: 'About Us',
    whoItemText1:
      'Tarus AG Food Inc. is an international company active in trade, transport, and construction investment, led by experts in global agricultural trade and multimodal logistics.',
    whoItemTitle2: 'Our Mission',
    whoItemText2:
      'Our mission is rooted in trust, quality, and lasting partnerships. We value reliability, transparency, and efficiency to ensure consistent service across the entire supply chain.',
    whoItemTitle3: 'What We Do',
    whoItemText3:
      'We export agricultural goods and import food products worldwide. Our range includes grains, pulses, oils, feed, flour, and processed items for diverse international markets.',
    whoItemTitle4: 'Trusted Expert',
    whoItemText4:
      'Tarus ag food is more than just a supplier — we are your reliable global partner in agricultural trade, international logistics, and investments in construction and infrastructure projects.',
    whoItemTitle5: 'Alternative investments',
    whoItemText5:
      'Real estate, construction. ESG approach (sustainable investing). Creating valuable and reliable assets in the real estate sector by investing in promising construction projects and ensuring sustainable capital growth.',

    whoHintText: 'Scroll to see more',

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

    productsHintText: 'Scroll to see more',

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

function switchLanguage(languageCode) {
  console.log('Switching language to:', languageCode);
  const t = translations[languageCode];
  if (!t) return;

  // HEADER
  document.getElementById('headerLogo').innerText = t.headerLogo;
  document.getElementById('headerAnchor').innerText = t.headerAnchor;

  //HERO
  document.getElementById('heroTitle').innerHTML = t.heroTitle;

  document.getElementById('heroAnchor').innerText = t.heroAnchor;

  // //ABOUT
  document.getElementById('whoTitle').innerText = t.whoTitle;

  document.getElementById('whoItemTitle1').innerText = t.whoItemTitle1;
  document.getElementById('whoItemText1').innerText = t.whoItemText1;
  document.getElementById('whoItemTitle2').innerText = t.whoItemTitle2;
  document.getElementById('whoItemText2').innerText = t.whoItemText2;
  document.getElementById('whoItemTitle3').innerText = t.whoItemTitle3;
  document.getElementById('whoItemText3').innerText = t.whoItemText3;
  document.getElementById('whoItemTitle4').innerText = t.whoItemTitle4;
  document.getElementById('whoItemText4').innerText = t.whoItemText4;
  document.getElementById('whoItemTitle5').innerText = t.whoItemTitle5;
  document.getElementById('whoItemText5').innerText = t.whoItemText5;

  document.getElementById('whoHintText').innerText = t.whoHintText;

  //PRODUCTS
  document.getElementById('productsTitle').innerText = t.productsTitle;

  document.getElementById('productsItemTitle1').innerText =
    t.productsItemTitle1;
  document.getElementById('productsItemText1').innerHTML = t.productsItemText1;
  document.getElementById('productsItemTitle2').innerText =
    t.productsItemTitle2;
  document.getElementById('productsItemText2').innerHTML = t.productsItemText2;
  document.getElementById('productsItemTitle3').innerText =
    t.productsItemTitle3;
  document.getElementById('productsItemText3').innerHTML = t.productsItemText3;
  document.getElementById('productsItemTitle4').innerText =
    t.productsItemTitle4;
  document.getElementById('productsItemText4').innerHTML = t.productsItemText4;
  document.getElementById('productsItemTitle5').innerText =
    t.productsItemTitle5;
  document.getElementById('productsItemText5').innerHTML = t.productsItemText5;
  document.getElementById('productsItemTitle6').innerText =
    t.productsItemTitle6;
  document.getElementById('productsItemText6').innerHTML = t.productsItemText6;

  document.getElementById('productsHintText').innerText = t.productsHintText;

  //WHY
  document.getElementById('whyTitle').innerText = t.whyTitle;

  document.getElementById('whyItemText1').innerText = t.whyItemText1;
  document.getElementById('whyItemText2').innerText = t.whyItemText2;
  document.getElementById('whyItemText3').innerText = t.whyItemText3;
  document.getElementById('whyItemText4').innerText = t.whyItemText4;
  document.getElementById('whyItemText5').innerText = t.whyItemText5;
  document.getElementById('whyItemText6').innerText = t.whyItemText6;

  //FOOTER
  document.getElementById('footerText').innerText = t.footerText;

  document.getElementById('footerAdrTel1').innerText = t.footerAdrTel1;
  document.getElementById('footerAdrTel2').innerText = t.footerAdrTel2;
  document.getElementById('footerAdrMail').innerHTML = t.footerAdrMail;
  document.getElementById('footerAdrWeb').innerText = t.footerAdrWeb;

  document.getElementById('formTextValid').innerHTML = t.formTextValid;
  document.getElementById('formTextInvalid').innerHTML = t.formTextInvalid;

  document.getElementById('email').placeholder = 'Email';
  document.getElementById('comment').placeholder = 'Comment';

  document.getElementById('formBtn').innerHTML = t.formBtn;
}

window.onload = () => {
  switchLanguage('en'); // Default to English
};
