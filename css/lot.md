тут старые все стили для страницы лот (сохранил на всякий случай)

/---------------------------------- свайпер ------------------------------------------ \_/

/\* .swiper-pagination-bullet {
background: var(--gray-400, hsla(0, 0%, 0%, 0.405));
width: 12px;
height: 12px;
opacity: 1;
margin-right: 15px;

} \*/

/_ .swiper-pagination-bullet-active {
background: #FFF;
width: 12px;
height: 12px;
opacity: 1;
} _/

/_ .images-preview\_\_slide img {
width: 100px;
height: 70px;
object-fit: cover;
} _/

.images-product {
position: relative;
}

.swiper-pagination {
position: absolute;
top: 4%;
right: 3.5%;
font-weight: 500;
}

/_ @media (min-width: 320px) {
.swiper-pagination {
font-size: 12px;
position: absolute;
top: 10px;
right: 10px;
}
}
@media (min-width: 530px) {
.swiper-pagination {
font-size: 16px;
position: absolute;
top: 14px;
right: 17px;
}
} _/

.auction {
position: absolute;
top: 4%;
left: 3%;
z-index: 50;
}

/_- кнопка назад_/
.swiper-button-prev-1 {
/_ padding: 16px 32px; _/
background: var(--blue-500, #3F83F8);
border-radius: 11px;
/_ position: absolute;
top: 91%;
left: 30px; _/
z-index: 25;

    @media (max-width: 600px) {
        left: 15px;
    }

}

.swiper-button-next-1 {

    background: var(--blue-500, #3F83F8);
    border-radius: 11px;
    /* position: absolute;
    top: 91%;
    right: 30px; */
    z-index: 25;
    /* transform: translate(0, -50%); */

    @media (max-width: 600px) {
        right: 15px;
    }

}

/_-- делает первую и последнюю кнопку прозрачной --_/
/\* .swiper-button-disabled {
background: var(--blue-500, #3f83f84a);

} \*/

.images-preview {
margin-top: -50px;
}

@media (min-width: 450px) {
.images-preview {
margin-top: -70px;
}
}

/_ @media (min-width: 776px) {
.images-preview {
margin-top: -110px;
}
} _/
@media (min-width: 1100px) {
.images-preview {
margin-top: -80px;
}
}

/_ @media (max-width: 991px) {
.images-preview {
margin-top: -150px;
}
}
@media (max-width: 776px) {
.images-preview {
margin-top: -120px;
}
}
@media (max-width: 500px) {
.images-preview {
margin-top: -80px;
}
}
@media (max-width: 375px) {
.images-preview {
margin-top: -20px;
}
} _/

/_ -------------------------------------------------- _/
.box\_\_post {
height: 160px;
overflow: hidden;
}
/_----------------------- кнопки показать больше и меньше на странице со слайдером авто ---------------_/
.box-text {
max-height: 123px;
overflow: hidden;
}

/_ #expand-btn,
#hide-btn {
display: none;
} _/
