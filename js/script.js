"use strict"

document.addEventListener('DOMContentLoaded', function () {

    //Бургер
    const burgerToggleBtn = document.querySelector('.burger-icon-wrapper');
    const burgerIcon = document.querySelector('.burger-icon');
    const burger = document.querySelector('.burger');
    const body = document.querySelector('body');
    burgerToggleBtn.onclick = function () {
        burgerIcon.classList.toggle('burger-icon-active');
        burger.classList.toggle('burger-mobile-active');
        body.classList.toggle('lock');
    };
    document.addEventListener ("click", function closeBurger (e) {
        if (!e.target.closest('.burger') && !e.target.closest('.burger-icon')) {
            burgerIcon.classList.remove('burger-icon-active');
            burger.classList.remove('burger-mobile-active');
            body.classList.remove('lock');
            }
    })

     /* SLIDE UP */
    let slideUp = (target, duration=500) => {
        target.style.transitionProperty = 'height, margin, padding';
        target.style.transitionDuration = duration + 'ms';
        target.style.boxSizing = 'border-box';
        target.style.height = target.offsetHeight + 'px';
        target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        window.setTimeout( () => {
                target.style.display = 'none';
                target.style.removeProperty('height');
                target.style.removeProperty('padding-top');
                target.style.removeProperty('padding-bottom');
                target.style.removeProperty('margin-top');
                target.style.removeProperty('margin-bottom');
                target.style.removeProperty('overflow');
                target.style.removeProperty('transition-duration');
                target.style.removeProperty('transition-property');
        }, duration);
    }

    /* SLIDE DOWN */
    let slideDown = (target, duration=500) => {
        target.style.removeProperty('display');
        let display = window.getComputedStyle(target).display;
        if (display === 'none') display = 'block';
        target.style.display = display;
        let height = target.offsetHeight;
        target.style.overflow = 'hidden';
        target.style.height = 0;
        target.style.paddingTop = 0;
        target.style.paddingBottom = 0;
        target.style.marginTop = 0;
        target.style.marginBottom = 0;
        target.offsetHeight;
        target.style.boxSizing = 'border-box';
        target.style.transitionProperty = "height, margin, padding";
        target.style.transitionDuration = duration + 'ms';
        target.style.height = height + 'px';
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        window.setTimeout( () => {
            target.style.removeProperty('height');
            target.style.removeProperty('overflow');
            target.style.removeProperty('transition-duration');
            target.style.removeProperty('transition-property');
        }, duration);
    }

    //Бургер aside
    const asideBurgerToggleBtn = document.querySelector('.menu-page_burger-icon-wrapper');
    const asideBurgerIcon = document.querySelector('.menu-page_burger-icon');
    const menuPage = document.querySelector('.menu-page_body')
    asideBurgerToggleBtn.onclick = function () {
        asideBurgerIcon.classList.toggle('menu-page_burger-icon-active');
        if (!menuPage.classList.contains('menu-page_active')) {
            menuPage.classList.add('menu-page_active');
            slideDown(document.getElementById("page-menu"), 300);
            
        } else {
            menuPage.classList.remove('menu-page_active');
            slideUp(document.getElementById("page-menu"), 300);
        }
    };

    //Submenu
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
        const menuParents = document.querySelectorAll('.menu-page_parent-link');
        for (let index = 0; index < menuParents.length; index++) {
            const menuParent = menuParents[index];
            menuParent.addEventListener("mouseenter", function(e) {
                menuParent.classList.add("active");
            });
            menuParent.addEventListener("mouseleave", function(e) {
                menuParent.classList.remove("active");
            });
        }
    }

    //Search menu
    const searchSelect = document.querySelector('.search-page_title');
    const categoriesSearch = document.querySelector('.categories-search');
    searchSelect.onclick = function () {
        searchSelect.classList.toggle('active');
        if (!categoriesSearch.classList.contains('categories-search_active')) {
            categoriesSearch.classList.add('categories-search_active');
            slideDown(document.getElementById("search-menu"), 300);
        } else {
            categoriesSearch.classList.remove('categories-search_active');
            slideUp(document.getElementById("search-menu"), 300);
        }
    }
    const checkboxCategories = document.querySelectorAll('.categories-search_checkbox')
    for (let index = 0; index < checkboxCategories.length; index++) {
        const checkboxCategory = checkboxCategories[index];
        checkboxCategory.addEventListener("change", function (e) {
            checkboxCategory.classList.toggle('active')
            let checkboxActiveCategories = document.querySelectorAll('.categories-search_checkbox.active')
            if (checkboxActiveCategories.length > 0) {
                searchSelect.classList.add('categories');
                let searchQuantity = searchSelect.querySelector('.search-page_quantity');
                searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + " " + checkboxActiveCategories.length;
            } else {
                searchSelect.classList.remove('categories');
            }
        })
    }

    //Swiper
    new Swiper('.swiper', {
        slidesPerView: 1,
        autoHeight: true,
        grabCursor: true,
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    });
    let mainSliderImages = document.querySelectorAll('.main-slider_img');
    let mainSliderDotts = document.querySelectorAll('.main-slider_dotts .swiper-pagination-bullet');
    for (let index = 0; index < mainSliderImages.length; index++) {
        const mainSliderImage = mainSliderImages[index].querySelector('img').getAttribute('src');
        mainSliderDotts[index].style.backgroundImage = "url('" + mainSliderImage + "')";
    }

    new Swiper('.swiper-product', {
        slidesPerView: 1,
        autoHeight: true,
        spaceBetween: 30,
        grabCursor: true,
        pagination: {
            el: '.products-slider_info',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.products-slider_arrow-next',
            prevEl: '.products-slider_arrow-prev',
        },
    });

    new Swiper('.swiper-brands', {
        grabCursor: true,
        loop: true,
        navigation: {
            nextEl: '.brands-slider_arrow-next',
            prevEl: '.brands-slider_arrow-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            400: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 5,
            },
        }
    });

    //ibg
    function ibg(){
        const ibg = document.querySelectorAll(".ibg");
        for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }}}
        ibg();

    //Адаптив
    function DynamicAdapt(type) {
        this.type = type;
    }
    
    DynamicAdapt.prototype.init = function () {
        const _this = this;
        // массив объектов
        this.оbjects = [];
        this.daClassname = "_dynamic_adapt_";
        // массив DOM-элементов
        this.nodes = document.querySelectorAll("[data-da]");
    
        // наполнение оbjects объктами
        for (let i = 0; i < this.nodes.length; i++) {
            const node = this.nodes[i];
            const data = node.dataset.da.trim();
            const dataArray = data.split(",");
            const оbject = {};
            оbject.element = node;
            оbject.parent = node.parentNode;
            оbject.destination = document.querySelector(dataArray[0].trim());
            оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
            оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
            оbject.index = this.indexInParent(оbject.parent, оbject.element);
            this.оbjects.push(оbject);
        }
    
        this.arraySort(this.оbjects);
    
        // массив уникальных медиа-запросов
        this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
            return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
        }, this);
        this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
            return Array.prototype.indexOf.call(self, item) === index;
        });
    
        // навешивание слушателя на медиа-запрос
        // и вызов обработчика при первом запуске
        for (let i = 0; i < this.mediaQueries.length; i++) {
            const media = this.mediaQueries[i];
            const mediaSplit = String.prototype.split.call(media, ',');
            const matchMedia = window.matchMedia(mediaSplit[0]);
            const mediaBreakpoint = mediaSplit[1];
    
            // массив объектов с подходящим брейкпоинтом
            const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
                return item.breakpoint === mediaBreakpoint;
            });
            matchMedia.addListener(function () {
                _this.mediaHandler(matchMedia, оbjectsFilter);
            });
            this.mediaHandler(matchMedia, оbjectsFilter);
        }
    };
    
    DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
        if (matchMedia.matches) {
            for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            }
        } else {
            for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) {
                    this.moveBack(оbject.parent, оbject.element, оbject.index);
                }
            }
        }
    };
    
    // Функция перемещения
    DynamicAdapt.prototype.moveTo = function (place, element, destination) {
        element.classList.add(this.daClassname);
        if (place === 'last' || place >= destination.children.length) {
            destination.insertAdjacentElement('beforeend', element);
            return;
        }
        if (place === 'first') {
            destination.insertAdjacentElement('afterbegin', element);
            return;
        }
        destination.children[place].insertAdjacentElement('beforebegin', element);
    }
    
    // Функция возврата
    DynamicAdapt.prototype.moveBack = function (parent, element, index) {
        element.classList.remove(this.daClassname);
        if (parent.children[index] !== undefined) {
            parent.children[index].insertAdjacentElement('beforebegin', element);
        } else {
            parent.insertAdjacentElement('beforeend', element);
        }
    }
    
    // Функция получения индекса внутри родителя
    DynamicAdapt.prototype.indexInParent = function (parent, element) {
        const array = Array.prototype.slice.call(parent.children);
        return Array.prototype.indexOf.call(array, element);
    };
    
    // Функция сортировки массива по breakpoint и place 
    // по возрастанию для this.type = min
    // по убыванию для this.type = max
    DynamicAdapt.prototype.arraySort = function (arr) {
        if (this.type === "min") {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }
    
                    if (a.place === "first" || b.place === "last") {
                        return -1;
                    }
    
                    if (a.place === "last" || b.place === "first") {
                        return 1;
                    }
    
                    return a.place - b.place;
                }
    
                return a.breakpoint - b.breakpoint;
            });
        } else {
            Array.prototype.sort.call(arr, function (a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) {
                        return 0;
                    }
    
                    if (a.place === "first" || b.place === "last") {
                        return 1;
                    }
    
                    if (a.place === "last" || b.place === "first") {
                        return -1;
                    }
    
                    return b.place - a.place;
                }
    
                return b.breakpoint - a.breakpoint;
            });
            return;
        }
    };
    
    const da = new DynamicAdapt("max");
    da.init();
});
