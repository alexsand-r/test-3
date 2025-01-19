
import {SendPostRequest, SendGetRequest, getAjaxLink} from './ajax.js'; // scripts
import {domainSite,pathLang} from './main.js';

window.make_first_checkbox_inactive = make_first_checkbox_inactive; // Global
window.clear_one_filters = clear_one_filters; // Global
window.clear_all_filters = clear_all_filters;
window.click_all_filters = click_all_filters;
window.change_sort = change_sort;

let customEvent = new Event('change', {bubbles: true});

let noDataFilters =
    {
        'min-year': "2015",
        'max-year': (new Date()).getFullYear(),
        'page': "1",
        // 'page_name': 'page.catalog'

    };
let noDataFiltersHidden =
    {
        //'page_name': 'page.catalog',
        'order_by': 'desc',
        'sort': 'date_sale',

    };


const filterCarForm = document.querySelector('.filter_car_form');
filterCarForm.addEventListener('change', function(event) {
    const formData = new FormData(this);
    filter_car_form(event, formData);
});

// function generated_mark(formData) {
//
//    // let startTime = performance.now();
//     let postData = {
//         formData: formData,
//         markButtons: versions.markButtons++
//     };
//
//     SendPostRequest(getAjaxLink('get_mark_buttons'), postData)
//         .then(responseData => {
//             let menuMarkButtonsView_mine = document.querySelector('#menuMarkButtonsView_mine')
//             menuMarkButtonsView_mine.innerHTML = responseData.data;
//         })
//         .catch(error => {
//             console.error(error);
//         });
// }

function filter_car_form(e, $form) {
    getCatalog(remove_empty_params($form, noDataFilters));
    e.preventDefault();
}

let versions = {
    pagination: 0,
    markButtons: 0,
}

function getPaginate() {
    let startTime = performance.now();
    let postData = {
        pagination: versions.pagination++,
        //page_name: 'page.catalog'
    };
    // console.log('Pagination start. Version: ' + postData.pagination)

    SendPostRequest(getAjaxLink('get_paginate'), postData)
        .then(responseData => {
            let pagination_mine = document.querySelector('#pagination_mine')
            pagination_mine.innerHTML = responseData.dd;
            let executionTime = performance.now() - startTime;
            // console.log('Запрос выполнен за ' + executionTime + ' миллисекунд');
            // console.log('Pagination end. Version: ' + postData.pagination)
        })
        .catch(error => {
            console.error(error);
        });

}

// function clear_url() {
//
//     const currentURL = window.location.href;
//     const url = new URL(currentURL);
//     const params = url.searchParams;
//
//     let formData = remove_empty_params(params, noDataFilters);
//     let newURL;
//
//
//     // if (formData === "") {
//     //     newURL = "auction";
//     // } else {
//     //     newURL = "auction" + "?" + formData;
//     //
//     // }
//
//     history.pushState({}, "", newURL);
// }

//clear_url();

function remove_empty_params(queryString, noData) {

    const params = new URLSearchParams(queryString);
    const updatedParams = new URLSearchParams();
    let carModels = [];

    for (const [key, value] of params) {
        if (value !== '' && value !== null && noData[key] != value) {
            if (key == 'models[]') {
                let newValue = value.split('__');
                if (newValue.hasOwnProperty(1)) {
                    if (!carModels.hasOwnProperty(newValue[0])) {
                        carModels[newValue[0]] = [];
                    }
                    carModels[newValue[0]].push(newValue[1]);
                }
            } else if (key === 'makes[]') {
                if (!carModels.hasOwnProperty(value)) {
                    carModels[value] = []
                }
            }
        }
    }

    for (const [key, value] of params) {
        if (value !== '' && value !== null && key !== 'models[]' && key !== 'makes[]' && noData[key] != value) {
            updatedParams.append(key, value);
        }
    }
    if (carModels !== []) {
        for (let key in carModels) {
            updatedParams.append('model[]', key + '[' + carModels[key].join(',') + ']');
        }
    }

    return updatedParams.toString();
    //return updatedParams;
}

function click_all_filters(clickedCheckbox) {

    let checkboxesWithSameName = getCheckboxes(clickedCheckbox);
    checkboxesWithSameName.forEach(function (checkbox) {
        checkbox.checked = (checkbox === clickedCheckbox);
    });
}

function getCheckboxes(clickedCheckbox)
{
    let nameAttribute = clickedCheckbox.getAttribute('name');
    return document.querySelectorAll('input[type="checkbox"][name="' + nameAttribute + '"]');
}

export function make_first_checkbox_inactive(clickedCheckbox) {

    let checkboxesWithSameName = getCheckboxes(clickedCheckbox);

    let count_active = 0;
    let all_check;
    checkboxesWithSameName.forEach(function (checkbox) {
        if (checkbox.value === '') {
            all_check = checkbox;
            all_check.checked = false;
        }
        if (checkbox.checked) {
            count_active++;
        }
    });
    // if (count_active === checkboxesWithSameName.length - 1) {
    //     all_check.checked = true;
    // }
}

function getCatalog(formData) {
    let params = remove_empty_params(formData, noDataFiltersHidden);
    let newURL =  (params === '')  ? "auction" : "auction" + "?" + params; // version2
    localeUrl(newURL);

    // const protocol = window.location.protocol; // 'https:' или 'http:'
    // const host = window.location.host; // 'example.com' или 'example.com:8000'
    //
    // const currentLang = document.documentElement.lang; // lang
    // let locale = currentLang+'/';
    // if (currentLang === 'en'){
    //     locale = '';
    // }
    newURL = domainSite() + pathLang() + newURL;
    history.pushState({}, "", newURL);

    let response= SendGetRequest(newURL);
    response.then(responseData => {
        document.querySelector('.car_card_lis').innerHTML = responseData.html;
        document.querySelector('.breadcrumb_mine').innerHTML = responseData.bradrumsView;
        document.querySelector('#pagination').innerHTML = responseData.paginationView;
        document.querySelector('#menuMarkButtonsView_mine').innerHTML = responseData.menuMarkButtonsView;
        //console.log('Запрос выполнен');
    }).catch(error => {
        console.error(error);
    });

}

function localeUrl(patch){
    const currentHost = window.location.host;
    const currentProtocol = window.location.protocol;
    const host = currentProtocol+'//'+currentHost

    if (patch){
        patch = '/'+patch;
    }

    document.querySelector("#locale_en").setAttribute('href', host+patch)
    document.querySelector("#locale_pl").setAttribute('href', host+'/pl'+patch)
    document.querySelector("#locale_ru").setAttribute('href', host+'/ru'+patch)
}

function clear_all_filters() {
    getCatalog({
       // page_name: 'page.catalog',
        order_by: 'desc',
        sort: 'date_sale',
        'min-year': noDataFilters['min-year'],
        'max-year': noDataFilters['max-year']
    });

    const mark_list = document.querySelectorAll('input.catalog_filter_select_makes:checked, input.filter_checkbox:checked');
    mark_list.forEach((item) => {
        item.checked = false
    })
    // const min_value = document.querySelector('#min-value')
    // const max_value = document.querySelector('#max-value')
    // min_value.value = noDataFilters['min-year'];
    // max_value.value = noDataFilters['max-year']
    let all_filters = document.querySelectorAll('.all_filters')
    // all_filters[0].click()
    //
    all_filters.forEach(filter => {
        filter.checked = false;
    });
}

function clear_one_filters(request, el) {
    const filter_name = request.split("||")[0];
    const filter_value = request.split("||")[1];

    let element = document.querySelector('input[name="' + filter_name + '\\[\\]"][value="' + filter_value + '"]');
    if (typeof element === 'undefined' || element === null) {
        element = document.querySelector('input[name="makes\\[\\]"][value="' + filter_value + '"]')
        if (typeof element === 'undefined' || element === null) {
            let make = el.getAttribute('data-make');
            element = document.querySelector('input[name="models\\[\\]"][value="' + make + '__' + filter_value + '"]')
        }

        if (element.name === 'makes[]') {
            let parent = element.closest('div.check_container');
            if (typeof parent !== 'undefined' || parent !== null) {
                let children = parent.querySelectorAll('input[type="checkbox"]');
                children.forEach((c) => {
                    if (c.checked) {
                        c.click()
                    }
                });
            }
        } else {
            element.click()
        }
    } else {
        element.click()
    }
}

const searchItems = document.querySelectorAll('.catalog_filter_select_makes .find_marks, .catalog_filter_select_makes .find_model');
const searchInput = document.querySelector('#inp-find-makes');
if (searchInput) {
    searchInput.addEventListener('input', function () {
        const searchString = searchInput.value.trim().toLowerCase();
        if (searchString.length > 1) {
            let temp_open_wrapper_all_models = [];
            searchItems.forEach(item => {
                const text = item.innerText.toLowerCase();
                const find_marks_wrapper_model = item.closest('.find_marks_wrapper_model');
                const find_marks_wrapper_mark = item.closest('.find_marks_wrapper_mark');
                let temp_open = false;
                const wrapper_all_models = item.closest('.check_container');
                // const wrapper_all_models = item.closest('.wrapper_all_models');
                if (find_marks_wrapper_mark) {
                    if (text.includes(searchString)) {
                        find_marks_wrapper_mark.style.display = 'block';
                        temp_open = true;
                        temp_open_wrapper_all_models.push(wrapper_all_models)
                    } else {
                        find_marks_wrapper_mark.style.display = 'none';
                    }
                } else {
                    const check_container = item.closest('.check_container').querySelector('.find_marks_wrapper_mark');

                    if (text.includes(searchString)) {
                        temp_open_wrapper_all_models.push(wrapper_all_models)
                        check_container.style.display = 'block';
                        find_marks_wrapper_model.style.display = 'block';
                        wrapper_all_models.querySelector('.wrapper_all_models').classList.remove('hidden');
                    } else {
                        if (!temp_open_wrapper_all_models.includes(wrapper_all_models)) {
                            check_container.style.display = 'none';
                            find_marks_wrapper_model.style.display = 'none';

                        }
                    }
                }

            });
        } else {
            searchItems.forEach((item) => {
                item.closest('.find_marks_wrapper').style.display = 'block';
            })
        }
    });
}

function change_sort(sort_name, sort_orderBy) {
    const filter_form = document.querySelector('#filter_form');
    const form_sortName = filter_form.querySelector('input[name="sort"]');
    //const form_orderBy = filter_form.querySelector('input[name="order_by"]');
    form_sortName.value = sort_name;
    //form_orderBy.value = sort_orderBy;
    filter_form.dispatchEvent(customEvent);
}

