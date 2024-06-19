// remove social media button on the left
removeElement('div.social-icon-general');

// remove header
removeElement('header.c-uhfh');

// remove comments button on the side
removeElement('div.back-comment-buttons');

// remove feedback button on the side
removeElement('div.vscom-usabilla-button');

// remove feedback button on the side
removeElement('div.related-postssection');

// remove comments area
removeElement('div.comments-area');

// remove footer region
removeElement('#footerRegion');

// remove footer region
removeElement('#wrapper-footer-1');

// remove footer region
removeElement('footer.cattagsarea');

// remove email subscription
removeElement('div.alert-banner');

// remove image of author at the top of the blog
removeElement('div.author-header');

// remove image of author at the top of the blog
removeElement('span.entry-meta-comment');

// this statement is duplicated and executed for the second-time, this is not a bug
// we need to execute this for the second time
removeElement('span.entry-meta-comment');

// remove the social links at the bottom of the blog
removeElement('div.social-links');

// remove paddings and margins
let element = document.querySelector('#single-wrapper');
element.style.paddingTop = '0px';
element.style.paddingBottom = '0px';

element = document.querySelector('div.entry-meta-layout');
element.style.marginBottom = '0px';

element = document.querySelector('#featured');
element.style.paddingLeft = '0px';
element.style.paddingRight = '0px';
element.style.marginRight = '0px';
element.style.marginLeft = '0px';
element.style.paddingTop = '0px';

function removeElement(elementName) {
    try {
        const element = document.querySelector(elementName);
        if (element && element.parentElement)
            element.parentElement.removeChild(element);
    } catch (ex) {
        console.log(`Exception when removing element "${elementName}"`);
        console.log(`Exception : ${ex}`);
    }
}