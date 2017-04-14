import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'fontFace': {
    'fontFamily': 'FuturaPTBold',
    'src': 'url(../fonts/FuturaPTBold.otf)'
  },
  'fontFace': {
    'fontFamily': 'FuturaPTDemi',
    'src': 'url(../fonts/FuturaPTDemi.otf)'
  },
  'fontFace': {
    'fontFamily': 'FuturaPTMedium',
    'src': 'url(../fonts/FuturaPTMedium.otf)'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'fontFamily': '"FuturaPTMedium"'
  },
  'head-container': {
    'height': [{ 'unit': 'px', 'value': 130 }]
  },
  'logo-container': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }]
  },
  'nav-container': {
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'padding': [{ 'unit': 'px', 'value': 37 }, { 'unit': 'px', 'value': 35 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 35 }],
    '<w1070': {
      'display': 'none'
    }
  },
  'nav a': {
    'color': '#343839'
  },
  'nav li a:hover': {
    'background': 'white'
  },
  'dropdown-menu li a': {
    'color': '#343839',
    'fontWeight': '600',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 30 }]
  },
  'nav > li > a:focus': {
    'textDecoration': 'none',
    'backgroundColor': 'white',
    'color': '#0E69A0'
  },
  'nav > li > a:hover': {
    'textDecoration': 'none',
    'backgroundColor': 'white',
    'color': '#0E69A0'
  },
  'nav > li > a:active': {
    'textDecoration': 'none',
    'backgroundColor': 'white',
    'color': '#0E69A0'
  },
  'nav open > a': {
    'backgroundColor': 'white',
    'borderColor': 'white'
  },
  'nav open > a:focus': {
    'backgroundColor': 'white',
    'borderColor': 'white'
  },
  'nav open > a:hover': {
    'backgroundColor': 'white',
    'borderColor': 'white'
  },
  'main-navbar': {
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'dropdown-menu': {
    'top': [{ 'unit': 'px', 'value': 92 }],
    'left': [{ 'unit': 'px', 'value': -15 }],
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'boxShadow': [{ 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }, { 'unit': 'string', 'value': 'none' }]
  },
  'dropdown-menu li a': {
    'color': '#707477'
  },
  'side-menu__link': {
    'display': 'inline-block',
    'float': 'right !important',
    'fontWeight': '600'
  },
  'side-menu__link a': {
    'color': '#0E69A0',
    'fontWeight': '600',
    'fontSize': [{ 'unit': 'px', 'value': 19 }],
    'textAlign': 'right'
  },
  'side-menu__link a:hover': {
    'textDecoration': 'none'
  },
  'dot': {
    'width': [{ 'unit': 'px', 'value': 2 }],
    'height': [{ 'unit': 'px', 'value': 2 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'borderRadius': '5px',
    'backgroundColor': '#0E69A0',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }],
    'verticalAlign': 'middle'
  },
  'section-background': {
    'backgroundImage': 'url("../img/homepage-background.png")',
    'textAlign': 'center',
    'display': 'inline-block'
  },
  'section-title__container': {
    'marginTop': [{ 'unit': 'px', 'value': 120 }]
  },
  'section-title': {
    'color': '#0E69A0',
    'fontFamily': '"FuturaPTBold"'
  },
  'section-lead': {
    'marginTop': [{ 'unit': 'px', 'value': 30 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'color': '#707477',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'buy-insurance__container': {
    'background': 'white',
    'maxWidth': [{ 'unit': 'em', 'value': 84 }],
    'marginTop': [{ 'unit': 'px', 'value': 90 }],
    'minHeight': [{ 'unit': 'px', 'value': 395 }],
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }],
    'WebkitBoxShadow': '2px 6px 29px -10px rgba(0, 0, 0, 0.75)',
    'MozBoxShadow': '2px 6px 29px -10px rgba(0, 0, 0, 0.75)',
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 29 }, { 'unit': 'px', 'value': -10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.75)' }],
    'display': 'inline-block'
  },
  'buy-insurance__title': {
    'paddingTop': [{ 'unit': 'px', 'value': 10 }],
    'fontFamily': '"FuturaPTBold"',
    'fontSize': [{ 'unit': 'px', 'value': 38 }]
  },
  'insurance-options__container': {
    'display': 'inline-block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'verticalAlign': 'middle'
  },
  'insurance-options__container a': {
    'display': 'block',
    'height': [{ 'unit': '%V', 'value': 1 }],
    'textDecoration': 'none',
    'color': 'black'
  },
  'insurance-option': {
    'minWidth': [{ 'unit': 'px', 'value': 275 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'verticalAlign': 'middle',
    'height': [{ 'unit': 'px', 'value': 80 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'textAlign': 'left',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'fontFamily': '"FuturaPTDemi"',
    'color': '#707477',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'insurance-option img': {
    'width': [{ 'unit': 'px', 'value': 140 }],
    'display': 'inline-block'
  },
  'intro-container': {
    'marginTop': [{ 'unit': 'px', 'value': 170 }],
    'textAlign': 'center'
  },
  'intro-container__description h1': {
    'marginBottom': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 38 }],
    'fontFamily': '"FuturaPTBold"'
  },
  'intro-container__description__text': {
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#787B7E'
  },
  'insurance-options__container a': {
    'textDecoration': 'none'
  },
  'intro-container__tiles': {
    'display': 'block'
  },
  'intro-container__tiles__single': {
    'textAlign': 'left',
    'boxSizing': 'border-box',
    'display': 'inline-block',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'verticalAlign': 'bottom'
  },
  'intro-container__tiles__single__wrapper': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'height': [{ 'unit': 'px', 'value': 220 }],
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'blog-container__tiles__single__wrapper': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }]
  },
  'blog-container': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'blog-container blog-container__tiles': {
    'marginTop': [{ 'unit': 'px', 'value': 10 }]
  },
  'blog-container__title': {
    'fontFamily': '"FuturaPTBold"'
  },
  'blog-container__tiles__single': {
    'display': 'inline-block',
    'position': 'relative'
  },
  'blog-container__tiles__single > img': {
    'borderBottom': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#0E69A0' }]
  },
  'blog-container__tiles__single blog-post': {
    'textAlign': 'left',
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }]
  },
  'blog-container__tiles__single blog-post blog-post__title': {
    'textTransform': 'uppercase',
    'fontFamily': '"FuturaPTDemi"',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#3D4246',
    'letterSpacing': [{ 'unit': 'px', 'value': 1.5 }]
  },
  'blog-container__tiles__single blog-post blog-post__lead': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'color': '#787B7E'
  },
  'blog-container__tiles__single blog-post blog-post__date': {
    'color': '#A7AEB4'
  },
  'blog-container__tiles__single img': {
    'opacity': '1',
    'display': 'block',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'height': [{ 'unit': 'string', 'value': 'auto' }],
    'transition': '.5s ease',
    'backfaceVisibility': 'hidden'
  },
  'blog-container__tiles__single middle': {
    'transition': '.5s ease',
    'opacity': '0',
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'marginTop': [{ 'unit': 'px', 'value': -80 }],
    'transform': 'translate(-50%, -50%)',
    'MsTransform': 'translate(-50%, -50%)'
  },
  'blog-container__tiles__single:hover img': {
    'opacity': '0.7'
  },
  'blog-container__tiles__single:hover middle': {
    'opacity': '1'
  },
  // .active-tile
  // background: blue
  // z-index: 10
  // height: 220px
  // width: 18%
  // position: absolute
  // top: 120px
  // left: 20%
  // opacity: 0.2
  // 
  'contact-form__wrapper': {
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'absolute',
    'textAlign': 'center',
    'bottom': [{ 'unit': 'px', 'value': -30 }]
  },
  'contact-form__container': {
    'background': 'white',
    'marginTop': [{ 'unit': 'px', 'value': 50 }],
    'position': 'relative',
    'WebkitBoxShadow': '2px 6px 29px -10px rgba(0, 0, 0, 0.75)',
    'MozBoxShadow': '2px 6px 29px -10px rgba(0, 0, 0, 0.75)',
    'boxShadow': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 6 }, { 'unit': 'px', 'value': 29 }, { 'unit': 'px', 'value': -10 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.75)' }],
    'display': 'inline-block'
  },
  'contact-form__container h2': {
    'fontFamily': '"FuturaPTBold"',
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }]
  },
  'contact-form__container form-group input': {
    'borderTop': [{ 'unit': 'string', 'value': 'none' }],
    'borderRight': [{ 'unit': 'string', 'value': 'none' }],
    'borderLeft': [{ 'unit': 'string', 'value': 'none' }],
    'WebkitBoxShadow': 'none',
    'borderRadius': '0',
    'borderBottom': [{ 'unit': 'px', 'value': 2 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'color': 'black'
  },
  'contact-form__container form-group label': {
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'fontFamily': '"FuturaPTDemi"',
    'marginBottom': [{ 'unit': 'px', 'value': 20 }],
    'color': '#A7AEB4'
  },
  'contact-form__container form-group': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }]
  },
  'contact-form__container form-group checkbox-agreement': {
    'paddingBottom': [{ 'unit': 'px', 'value': 20 }]
  },
  'contact-form__container form-group checkbox-agreement label': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }],
    'fontFamily': '"FuturaPTMedium"',
    'color': '#787B7E'
  },
  'contact-form__container form-group checkbox-agreement input': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  },
  'contact-form__container contact-btn': {
    'backgroundImage': 'url("../img/button.png")',
    'color': 'white',
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 25 }]
  },
  'insurance__container': {
    'textAlign': 'center',
    'marginTop': [{ 'unit': 'px', 'value': 80 }]
  },
  'insurance__container tile': {
    'display': 'inline-block',
    'height': [{ 'unit': 'px', 'value': 80 }],
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'minWidth': [{ 'unit': 'px', 'value': 200 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'margin': [{ 'unit': 'px', 'value': 30 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 25 }],
    'fontFamily': '"FuturaPTDemi"',
    'color': '#707477',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'letterSpacing': [{ 'unit': 'px', 'value': 1 }]
  },
  'footer': {
    'backgroundImage': 'url("../img/footer.png")',
    'marginTop': [{ 'unit': 'px', 'value': 100 }]
  },
  'footer footer-list': {
    'marginTop': [{ 'unit': 'px', 'value': 40 }]
  },
  'footer footer-list ul': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer footer-list ul li': {
    'listStyleType': 'none'
  },
  'footer footer-list footer-list__title': {
    'color': '#787B7E',
    'fontFamily': '"FuturaPTDemi"',
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'footer footer-list a': {
    'color': 'black',
    'fontSize': [{ 'unit': 'px', 'value': 16 }]
  },
  'footer footer-list a:hover': {
    'textDecoration': 'none'
  },
  'footer-newsletter': {
    'marginTop': [{ 'unit': 'px', 'value': 40 }],
    'paddingLeft': [{ 'unit': 'px', 'value': 20 }]
  },
  'footer-newsletter footer-newsletter__title': {
    'color': '#787B7E',
    'fontFamily': '"FuturaPTDemi"',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'marginTop': [{ 'unit': 'px', 'value': 0 }]
  },
  'footer-newsletter footer-newsletter__text': {
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'lineHeight': [{ 'unit': 'px', 'value': 25 }],
    'paddingRight': [{ 'unit': '%H', 'value': 0.2 }]
  },
  'footer-newsletter footer-newsletter__form__label': {
    'color': '#0E69A0',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'marginTop': [{ 'unit': 'px', 'value': 20 }]
  },
  'footer-newsletter footer-newsletter__form__btn': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'background': 'none',
    'textTransform': 'uppercase',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderRadius': '0'
  },
  'footer-newsletter footer-newsletter__form input': {
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'borderRadius': '0',
    'background': 'none',
    'WebkitBoxShadow': 'none',
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'footer-info__section': {
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ddd' }],
    'paddingBottom': [{ 'unit': 'px', 'value': 60 }]
  },
  'footer-logo__container': {
    'padding': [{ 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 70 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer-logo__container footer-logo__container__title': {
    'textTransform': 'uppercase',
    'color': '#A7AEB4',
    'fontFamily': '"FuturaPTDemi"',
    'fontSize': [{ 'unit': 'px', 'value': 13 }]
  },
  'main-menu__mobile': {
    'display': 'none'
  }
});
