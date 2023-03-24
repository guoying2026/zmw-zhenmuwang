<template>
  <div class="nav_header">
    <div class="nav">
      <span class="font-60-weight font-10-size">ZMW</span>
      <el-icon class="font-20-size"><search></search></el-icon>
      <UserLogin/>
    </div>
  </div>
  <div class="space">

  </div>
  <div class="mini-live-search-cont miniSlideDown">
    <label class="cf-one" for="mini-ls-input">搜索你想要的任何</label>
    <input type="text" id="mini-ls-input" name="live-posts-search" placeholder="加盟" @change="handleInput">
<!--    toShow这个样式就是展示搜索中 开始-->
    <div class="mini-ls-loader to-show" role="status">
      <span></span>
    </div>
<!--    搜索完成，只需要把 to-show去掉-->
<!--    展示搜索结果 开始-->
    <div class="mini-ls-results">
      <div class="mini-ls-scroller">
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/espandere-il-testo-al-click-con-css-e-jquery-in-modo-perfetto/" title="Vai a Espandere il testo al click con CSS e JQuery, in modo perfetto!">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2022/11/read_more-150x150.png" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2022/11/read_more-150x150.png 150w, https://www.minimamente.com/wp-content/uploads/2022/11/read_more-300x300.png 300w, https://www.minimamente.com/wp-content/uploads/2022/11/read_more-100x100.png 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Espandere il testo al click con CSS e JQuery, in modo perfetto!            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/multi-image-flip-effect-in-css/" title="Vai a Multi image Flip Effect in CSS">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2020/07/css_flip_effect_image-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2020/07/css_flip_effect_image-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2020/07/css_flip_effect_image-scaled-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2020/07/css_flip_effect_image-scaled-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Multi image Flip Effect in CSS            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/css-infinite-photo-carousel/" title="Vai a CSS Infinite Photo Carousel">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2020/06/css_infinite_photo_carousel-1-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2020/06/css_infinite_photo_carousel-1-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2020/06/css_infinite_photo_carousel-1-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2020/06/css_infinite_photo_carousel-1-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          CSS Infinite Photo Carousel            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/testo-con-gradiente-colorato-in-css/" title="Vai a Testo con gradiente colorato in CSS">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2018/05/css_gradient_text_color_css3-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2018/05/css_gradient_text_color_css3-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2018/05/css_gradient_text_color_css3-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2018/05/css_gradient_text_color_css3-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Testo con gradiente colorato in CSS            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/css-box-shadow-generator/" title="Vai a CSS Box Shadow Generator">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2017/10/cube-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2017/10/cube-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2017/10/cube-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2017/10/cube-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          CSS Box Shadow Generator            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/css-web-gradient-generator-by-minimamente/" title="Vai a CSS Web Gradient Generator by minimamente">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2016/06/css_gradient_generator-1-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2016/06/css_gradient_generator-1-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2016/06/css_gradient_generator-1-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2016/06/css_gradient_generator-1-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          CSS Web Gradient Generator by minimamente            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/rimuovere-lo-style-css-di-default-in-woocommerce/" title="Vai a Rimuovere lo style.css di default in WooCommerce">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-100x100.jpg 100w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-600x600.jpg 600w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-768x768.jpg 768w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce.jpg 800w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Rimuovere lo style.css di default in WooCommerce            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/pie-chart-css3-con-animazione-e-senza-javascript/" title="Vai a Pie Chart CSS3 con animazione e senza JavaScript">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2013/06/pie_chart_css3_animations_minimamente-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/06/pie_chart_css3_animations_minimamente-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2013/06/pie_chart_css3_animations_minimamente-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2013/06/pie_chart_css3_animations_minimamente-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Pie Chart CSS3 con animazione e senza JavaScript            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/ios7-background-esclusivamente-con-css3-e-html5/" title="Vai a iOS7 background esclusivamente con CSS3 e HTML5">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2013/06/ios7_background-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/06/ios7_background-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2013/06/ios7_background-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2013/06/ios7_background-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          iOS7 background esclusivamente con CSS3 e HTML5            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/come-rimuovere-leffetto-hover-su-ipad-ed-iphone-al-click-in-css-con-tap-highlight-color/" title="Vai a Come rimuovere l’effetto hover su iPad ed iPhone al click in CSS con tap-highlight-color">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2013/06/mobile-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/06/mobile-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2013/06/mobile-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2013/06/mobile-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Come rimuovere l’effetto hover su iPad ed iPhone al click in CSS con tap-highlight-color            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/sondaggio-box-css3-flat-design-quale-il-migliore-secondo-voi/" title="Vai a Sondaggio! Box CSS3 Flat Design, quale il migliore secondo voi?">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2013/06/flat_box_css3-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/06/flat_box_css3-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2013/06/flat_box_css3-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2013/06/flat_box_css3-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Sondaggio! Box CSS3 Flat Design, quale il migliore secondo voi?            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/approfondimento-tags-input-relativi-alle-date-ed-agli-orari-in-html5-e-css3-e-su-iphone/" title="Vai a Approfondimento tags Input relativi alle Date ed agli orari in HTML5 e CSS3 e su iPhone">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2013/06/code-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/06/code-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2013/06/code-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2013/06/code-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Approfondimento tags Input relativi alle Date ed agli orari in HTML5 e CSS3 e su iPhone            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/approfondimento-su-input-text-in-html5-e-css3/" title="Vai a Approfondimento su Input Text in HTML5 e CSS3">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2013/06/code-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/06/code-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2013/06/code-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2013/06/code-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Approfondimento su Input Text in HTML5 e CSS3            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/codici-css-e-css3-essenziali-per-lo-sviluppatore-web/" title="Vai a Codici CSS e CSS3 essenziali per lo sviluppatore web">
          <img width="114" height="114" src="https://www.minimamente.com/wp-content/uploads/2013/04/apple_touch_icon_1142.png" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/04/apple_touch_icon_1142.png 114w, https://www.minimamente.com/wp-content/uploads/2013/04/apple_touch_icon_1142-100x100.png 100w" sizes="(max-width: 114px) 100vw, 114px">            <div class="mini-ls-title">
          Codici CSS e CSS3 essenziali per lo sviluppatore web            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/full-background-image-con-css-e-quindi-responsive/" title="Vai a Full Background image con CSS e quindi Responsive">
          <img width="140" height="140" src="https://www.minimamente.com/wp-content/uploads/2013/05/fullscreen_css.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2013/05/fullscreen_css.jpg 140w, https://www.minimamente.com/wp-content/uploads/2013/05/fullscreen_css-100x100.jpg 100w" sizes="(max-width: 140px) 100vw, 140px">            <div class="mini-ls-title">
          Full Background image con CSS e quindi Responsive            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/robobutton-un-marchingegno-con-js-css-e-tanta-fantasia/" title="Vai a ROBObutton! Un marchingegno con JS, CSS e tanta fantasia!">
          <img width="145" height="145" src="https://www.minimamente.com/wp-content/uploads/2011/07/thumb1.png" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2011/07/thumb1.png 145w, https://www.minimamente.com/wp-content/uploads/2011/07/thumb1-100x100.png 100w" sizes="(max-width: 145px) 100vw, 145px">            <div class="mini-ls-title">
          ROBObutton! Un marchingegno con JS, CSS e tanta fantasia!            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/box-shadow-e-box-shadow-inset-con-css3/" title="Vai a Box Shadow e Box Shadow Inset con CSS3">
          <img width="150" height="125" src="https://www.minimamente.com/wp-content/uploads/2010/11/shadow1-150x125.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy">            <div class="mini-ls-title">
          Box Shadow e Box Shadow Inset con CSS3            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/come-inserire-manualmente-i-google-fonts-sul-proprio-sito-web/" title="Vai a Come inserire manualmente i Google Fonts sul proprio sito web">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2022/10/web_fonts_css-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2022/10/web_fonts_css-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2022/10/web_fonts_css-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2022/10/web_fonts_css-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Come inserire manualmente i Google Fonts sul proprio sito web            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/scaricare-un-intero-sito-web/" title="Vai a Scaricare un intero sito Web">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2022/09/wget-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2022/09/wget-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2022/09/wget-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2022/09/wget-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Scaricare un intero sito Web            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/1-e-piu-modi-per-includere-svg-nel-vostro-tema-per-wordpress/" title="Vai a 1 e più modi per includere SVG nel vostro tema per WordPress">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2022/02/svg_wordpress-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2022/02/svg_wordpress-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2022/02/svg_wordpress-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2022/02/svg_wordpress-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          1 e più modi per includere SVG nel vostro tema per WordPress            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/rendere-obbligatorio-il-numero-civico-nei-campi-checkout-di-woocommerce/" title="Vai a Rendere obbligatorio il numero civico nei campi Checkout di WooCommerce">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2020/09/checkout_woo-150x150.gif" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2020/09/checkout_woo-150x150.gif 150w, https://www.minimamente.com/wp-content/uploads/2020/09/checkout_woo-300x300.gif 300w, https://www.minimamente.com/wp-content/uploads/2020/09/checkout_woo-100x100.gif 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Rendere obbligatorio il numero civico nei campi Checkout di WooCommerce            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/svg-borders-cosa-sono-e-cosa-mi-sono-inventato/" title="Vai a SVG borders, cosa sono e cosa mi sono inventato">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2020/06/example_svg_1-1-150x150.png" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2020/06/example_svg_1-1-150x150.png 150w, https://www.minimamente.com/wp-content/uploads/2020/06/example_svg_1-1-300x300.png 300w, https://www.minimamente.com/wp-content/uploads/2020/06/example_svg_1-1-100x100.png 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          SVG borders, cosa sono e cosa mi sono inventato            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/inviare-un-codice-sconto-per-email-allutente-che-ha-effettuato-un-nuovo-ordine-in-woocommerce/" title="Vai a Inviare un Codice Sconto per email, all’utente che ha effettuato un nuovo ordine in WooCommerce">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2019/07/coupon_woocommerce-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2019/07/coupon_woocommerce-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2019/07/coupon_woocommerce-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2019/07/coupon_woocommerce-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Inviare un Codice Sconto per email, all’utente che ha effettuato un nuovo ordine in WooCommerce            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/mostrare-gli-ultimi-video-da-un-canale-youtube/" title="Vai a Mostrare gli ultimi video da un canale YouTube">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2018/12/youtube_last_video_from_channel-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2018/12/youtube_last_video_from_channel-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2018/12/youtube_last_video_from_channel-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2018/12/youtube_last_video_from_channel-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Mostrare gli ultimi video da un canale YouTube            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/inserire-un-carrello-per-woocommerce-in-qualsiasi-parte-del-sito/" title="Vai a Inserire un Carrello per WooCommerce in qualsiasi parte del sito!">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2018/11/wooocmmerce_cart-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2018/11/wooocmmerce_cart-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2018/11/wooocmmerce_cart-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2018/11/wooocmmerce_cart-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Inserire un Carrello per WooCommerce in qualsiasi parte del sito!            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/modificare-numero-colonne-dei-prodotti-default-woocommerce/" title="Vai a Modificare il numero di colonne dei prodotti di default in WooCommerce">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-100x100.jpg 100w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-600x600.jpg 600w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce-768x768.jpg 768w, https://www.minimamente.com/wp-content/uploads/2015/01/woocommerce.jpg 800w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Modificare il numero di colonne dei prodotti di default in WooCommerce            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/dritti-allobiettivo-con-un-ajax-live-search-su-wordpress-per-filtrare-velocemente-articoli-e-pagine/" title="Vai a Dritti all’obiettivo con un Ajax live search su WordPress, per filtrare velocemente Articoli e Pagine">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2017/09/live_search_query_ajax_wordpress-2-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2017/09/live_search_query_ajax_wordpress-2-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2017/09/live_search_query_ajax_wordpress-2-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2017/09/live_search_query_ajax_wordpress-2-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Dritti all’obiettivo con un Ajax live search su WordPress, per filtrare velocemente Articoli e Pagine            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/certificato-https-ssl-gratuito-wordpress-cloudflare/" title="Vai a Certificato https SSL gratuito con WordPress e Cloudflare">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2016/09/https_wordpress-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2016/09/https_wordpress-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2016/09/https_wordpress-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2016/09/https_wordpress-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Certificato https SSL gratuito con WordPress e Cloudflare            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/creare-un-sistema-di-recensioni-in-wordpress-system-reviews/" title="Vai a Creare un sistema di recensioni in WordPress (System Reviews)">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2016/09/system_reviews_wordpress_and_rating-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2016/09/system_reviews_wordpress_and_rating-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2016/09/system_reviews_wordpress_and_rating-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2016/09/system_reviews_wordpress_and_rating-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Creare un sistema di recensioni in WordPress (System Reviews)            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/come-velocizzare-al-massimo-un-sito-in-wordpress-per-google-page-speed/" title="Vai a Come velocizzare al massimo un sito in WordPress per Google Page Speed">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2016/07/google_page_speed_wordpress-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2016/07/google_page_speed_wordpress-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2016/07/google_page_speed_wordpress-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2016/07/google_page_speed_wordpress-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Come velocizzare al massimo un sito in WordPress per Google Page Speed            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/come-inserire-il-carrello-di-woocommerce-nel-menu-o-dove-preferite/" title="Vai a Come inserire il carrello di WooCommerce nel menu o dove preferite">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2016/03/cart_woocommerce-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2016/03/cart_woocommerce-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2016/03/cart_woocommerce-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2016/03/cart_woocommerce-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Come inserire il carrello di WooCommerce nel menu o dove preferite            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/gulp-e-wordpress-per-ottimizzare-e-velocizzare-il-sito/" title="Vai a Gulp e WordPress per ottimizzare e velocizzare il sito">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2016/02/wordpress_gulp-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2016/02/wordpress_gulp-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2016/02/wordpress_gulp-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2016/02/wordpress_gulp-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Gulp e WordPress per ottimizzare e velocizzare il sito            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/registrazione-e-login-in-ajax-con-wordpress-e-bootstrap-v4/" title="Vai a Registrazione e Login in Ajax con WordPress e BootStrap v4">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2015/09/wp_ajax_register_login-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2015/09/wp_ajax_register_login-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2015/09/wp_ajax_register_login-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2015/09/wp_ajax_register_login-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Registrazione e Login in Ajax con WordPress e BootStrap v4            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/introducing-rocket/" title="Vai a Introducing Rocket">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2015/06/rocket-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2015/06/rocket-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2015/06/rocket-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2015/06/rocket-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Introducing Rocket            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/random-rgba-gradients-in-jquery/" title="Vai a Random RGBA gradients in jQuery">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2014/03/Blur-1-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2014/03/Blur-1-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2014/03/Blur-1-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2014/03/Blur-1-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Random RGBA gradients in jQuery            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/generare-gradienti-colorati-in-base-a-determinati-colori/" title="Vai a Generare gradienti colorati in base a determinati colori">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2014/09/portfolio-150x150.png" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2014/09/portfolio-150x150.png 150w, https://www.minimamente.com/wp-content/uploads/2014/09/portfolio-300x300.png 300w, https://www.minimamente.com/wp-content/uploads/2014/09/portfolio-100x100.png 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Generare gradienti colorati in base a determinati colori            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/creare-un-contact-form-per-wordpress-in-jquery/" title="Vai a Creare un Contact Form per WordPress in jQuery">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2014/04/mailbox-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2014/04/mailbox-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2014/04/mailbox-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2014/04/mailbox-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Creare un Contact Form per WordPress in jQuery            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/tema-wordpress-grigo-by-minimac/" title="Vai a Tema WordPress Grigo by miniMAC">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2011/02/theme_wordpress4-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2011/02/theme_wordpress4-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2011/02/theme_wordpress4-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2011/02/theme_wordpress4-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Tema WordPress Grigo by miniMAC            </div>
        </a>
        <a class="mini-ls-item cf-one" href="https://www.minimamente.com/come-inserire-in-modo-corretto-un-font-personalizzato-nel-vostro-sito-font-face/" title="Vai a Come inserire, in modo corretto, un font personalizzato nel vostro sito! Font-face">
          <img width="150" height="150" src="https://www.minimamente.com/wp-content/uploads/2010/10/web_fonts_css-150x150.jpg" class="mini-ls-thumb wp-post-image" alt="" decoding="async" loading="lazy" srcset="https://www.minimamente.com/wp-content/uploads/2010/10/web_fonts_css-150x150.jpg 150w, https://www.minimamente.com/wp-content/uploads/2010/10/web_fonts_css-300x300.jpg 300w, https://www.minimamente.com/wp-content/uploads/2010/10/web_fonts_css-100x100.jpg 100w" sizes="(max-width: 150px) 100vw, 150px">            <div class="mini-ls-title">
          Come inserire, in modo corretto, un font personalizzato nel vostro sito! Font-face            </div>
        </a>
      </div>
    </div>
<!--  展示搜索结果结束  -->
  </div>
<!--  router-view和router-link是由vue-router注册的全局组件，
router-link负责跳转不同的页面，相当于vue世界中的超链接a标签
router-view负责渲染路由匹配的组件，可以通过把router-view放在不同的地方，实现复杂项目的页面布局-->
  <router-view/>
</template>
<script setup>
import { onMounted, ref } from "vue";

</script>
<style scoped>
.nav_header {
  position: fixed;
  top: 0;
  width: 100%;
  color:var(--navbar-color);
  background-color: var(--navbar-bg-color);
  opacity:0.8;
  z-index: 100;
}
.space{
  height: 42px;
  width: 100%;
}
.nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 0 20px;
}
</style>
<script>
import "./assets/liveSearch.scss"
// import SearchBar from "./components/SearchBar.vue";
import UserLogin from "./components/UserLogin.vue";
export default {
  components: {UserLogin}
}
</script>
