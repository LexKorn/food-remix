function tabs() {
    const tabContent = document.querySelectorAll('.tabcontent'),
          tabItems = document.querySelectorAll('.tabheader__item');

    tabContent.forEach(item => {
        item.classList.add('hide');
    });

    function showTabContent() {
        tabItems.forEach((item, i) => {
            if (item.classList.contains('tabheader__item_active')) {
                tabContent[i].classList.remove('hide');
            } else {
                tabContent[i].classList.add('hide');
            }
        });
    }    
    showTabContent();

    function hideTabContent() {
        tabItems.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    tabItems.forEach(item => {
        item.addEventListener('click', () => {
            hideTabContent();
            item.classList.add('tabheader__item_active');            
            showTabContent();            
        });
    });
}
// tabs();

export default tabs;