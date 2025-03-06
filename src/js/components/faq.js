const faq = () => {
    const accordionItemHeaders = document.querySelectorAll('.faq__accordion-item');

    accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.addEventListener('click', () => {
            const currentlyActiveAccordionItemHeader = document.querySelector('.faq__accordion-item-header.active');
            if (
                currentlyActiveAccordionItemHeader &&
                currentlyActiveAccordionItemHeader !== accordionItemHeader.querySelector('.faq__accordion-item-header')
            ) {
                currentlyActiveAccordionItemHeader.classList.toggle('active');
                currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
            }
            accordionItemHeader.querySelector('.faq__accordion-item-header').classList.toggle('active');
            const accordionItemBody = accordionItemHeader.querySelector('.faq__accordion-item-header').nextElementSibling;
            if (accordionItemHeader.querySelector('.faq__accordion-item-header').classList.contains('active')) {
                accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px';
            } else {
                accordionItemBody.style.maxHeight = 0;
            }
        });
    });
};

export default faq;
