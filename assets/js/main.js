const giftList = [
    {
        'name': 'Infinity Bangle',
        'image': './assets/img/gift/product-1.png',
        'percent': 10,
    },
    {
        'name': 'Delica Cuff',
        'image': './assets/img/gift/product-2.png',
        'percent': 10,
    },
    {
        'name': 'Mây Cuff',
        'image': './assets/img/gift/product-3.png',
        'percent': 10,
    },
    {
        'name': 'Minora Cuff',
        'image': './assets/img/gift/product-4.png',
        'percent': 10,
    },
    {
        'name': 'Perfinity Cuff',
        'image': './assets/img/gift/product-5.jpg',
        'percent': 20,
    },
    {
        'name': 'Simora Cuff',
        'image': './assets/img/gift/product-6.jpg',
        'percent': 20,
    },
    {
        'name': 'Slim Delica Cuff',
        'image': './assets/img/gift/product-7.jpg',
        'percent': 20,
    },
]
const groupBox = $('.group__box')[0];
const btnStart = $('#btn--start')[0];
var isPlay = false;
// Khởi tạo giá trị
giftList.forEach((e) => {
    var card = document.createElement('div');
    card.classList.add('card', 'card__visible');
    card.innerHTML = `<div class="card__front">
                        <h4 class="card__gift--name">${e.name}</h4>
                        <img class="card__gift--img" src="${e.image}" alt="">
                    </div>
                    <div class="card__back"></div>`;
    card.onclick = function () {
        if (isPlay) {
            const item = getGift(Math.random() * 100);
            this.querySelector('.card__gift--name').innerHTML = item.name;
            this.querySelector('.card__gift--img').src = item.image;
            Swal.fire({
                title: item.name,
                imageUrl: item.image,
                imageHeight: 200,
            });
            this.classList.add('card__visible');
            isPlay = false;
            btnStart.classList.toggle('btn__hide');
        }
    }
    groupBox.appendChild(card);
});
btnStart.onclick = function () {
    const cardList = $('.card');
    for (i = 0; i < cardList.length; i++) {
        cardList[i].classList.remove('card__visible');
    }
    isPlay = true;
    btnStart.classList.toggle('btn__hide');
}
// Lấy quà
const getGift = (randomNumber) => {
    let currentPercent = 0;
    let list = [];
    giftList.forEach((item, index) => {
        currentPercent += item.percent;
        randomNumber <= currentPercent && list.push({
            ...item, index
        });
    });
    return list[0];
}
function resize() {
    var width = $(window).width();
    document.documentElement.style.setProperty('--card-width', width > 720 ? "720px" : width + "px");
}
resize();