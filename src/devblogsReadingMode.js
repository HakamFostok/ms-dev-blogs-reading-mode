// remove social media button on the left
var element = document.querySelector('div.social-icon-general');
element.parentElement.removeChild(element);

// remove header
var element = document.querySelector('header.c-uhfh');
element.parentElement.removeChild(element);

// remove comments button on the side
var element = document.querySelector('div.back-comment-buttons');
element.parentElement.removeChild(element);

// remove feedback button on the side
var element = document.querySelector('div.vscom-usabilla-button');
element.parentElement.removeChild(element);

// remove feedback button on the side
var element = document.querySelector('div.related-postssection');
element.parentElement.removeChild(element);

// remove comments area
var element = document.querySelector('div.comments-area');
element.parentElement.removeChild(element);

// remove footer region
var element = document.querySelector('#footerRegion');
element.parentElement.removeChild(element);

// remove footer region
var element = document.querySelector('#wrapper-footer-1');
element.parentElement.removeChild(element);

// remove footer region
var element = document.querySelector('footer.cattagsarea');
element.parentElement.removeChild(element);

// remove paddings and margins
var element = document.querySelector('#single-wrapper');
element.style.paddingTop = '0px';
element.style.paddingBottom = '0px';

// remove email subscription
var element = document.querySelector('div.alert-banner');
element.parentElement.removeChild(element);

// remove image of author at the top of the blog
var element = document.querySelector('div.author-header');
element.parentElement.removeChild(element);

// remove image of author at the top of the blog
var element = document.querySelector('span.entry-meta-comment');
element.parentElement.removeChild(element);

// this statement is duplicated and executed for the second-time, this is not a bug
// we need to execute this for the second time
var element = document.querySelector('span.entry-meta-comment');
element.parentElement.removeChild(element);

// remove the social links at the bottom of the blog
var element = document.querySelector('div.social-links');
element.parentElement.removeChild(element);

var element = document.querySelector('div.entry-meta-layout');
element.style.marginBottom = '0px';

var element = document.querySelector('#featured');
element.style.paddingLeft = '0px';
element.style.paddingRight = '0px';
element.style.marginRight = '0px';
element.style.marginLeft = '0px';
element.style.paddingTop = '0px';