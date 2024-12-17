const giftList = [
    { 'name': 'Delica Cuff', 'image': './assets/img/gift/2.png', 'percent': 100 },
    { 'name': 'Mây Cuff', 'image': './assets/img/gift/3.png', 'percent': 100 },
    { 'name': 'Minora Cuff', 'image': './assets/img/gift/4.png', 'percent': 100 },
    { 'name': 'Perfinity Cuff', 'image': './assets/img/gift/5.png', 'percent': 100 },
    { 'name': 'Simora Cuff', 'image': './assets/img/gift/6.png', 'percent': 100 },
    { 'name': 'Slim Delica Cuff', 'image': './assets/img/gift/7.png', 'percent': 100 },
    { 'name': 'Slim Delica Cuff', 'image': './assets/img/gift/8.png', 'percent': 20 },
    { 'name': 'Slim Delica Cuff', 'image': './assets/img/gift/9.png', 'percent': 20 },
    { 'name': 'Slim Delica Cuff', 'image': './assets/img/gift/10.png', 'percent': 20 },
    { 'name': 'Slim Delica Cuff', 'image': './assets/img/gift/11.png', 'percent': 20 },
    { 'name': 'Slim Delica Cuff', 'image': './assets/img/gift/12.png', 'percent': 20 },
    { 'name': 'Slim Delica Cuff', 'image': './assets/img/gift/13.png', 'percent': 20 },
];

const groupBox = $('.group__box')[0];
var isPlay = false;  // Để theo dõi tình trạng game
var isGiftRevealed = false; // Để theo dõi xem quà đã được lật chưa

// Khởi tạo giá trị và thêm các lá bài vào giao diện
giftList.forEach((e) => {
    var card = document.createElement('div');
    card.classList.add('card', 'card__hidden');  // Ẩn tất cả các lá bài khi bắt đầu
    card.innerHTML = `
        <div class="card__front">
            <h4 class="card__gift--name">${e.name}</h4>
            <img class="card__gift--img" src="${e.image}" alt="">
        </div>
        <div class="card__back"></div>
    `;
    card.onclick = function () {
        if (!isPlay && !isGiftRevealed) {  // Chỉ lật khi chưa chơi và chưa lật quà
            const item = getGift(); // Gọi hàm getGift để lấy quà ngẫu nhiên
            this.querySelector('.card__gift--name').innerHTML = item.name;
            this.querySelector('.card__gift--img').src = item.image;
            const isMobile = window.innerWidth <= 575.98; // Check if screen width is mobile size
            const imageWidth = isMobile ? '70%' : '80%';  // For mobile, use smaller width
            const imageHeight = isMobile ? '300px' : '500px'; // For mobile, use smaller height
            // Hiển thị popup với quà
            Swal.fire({
                imageUrl: item.image,
                imageWidth: imageWidth,  // Adjusted for mobile
                imageHeight: imageHeight, // Adjusted for mobile
                showConfirmButton: false,  // Ẩn nút "OK"
                allowOutsideClick: false,  // Không cho phép đóng popup khi nhấn ngoài
                allowEscapeKey: false,     // Không cho phép đóng popup bằng phím ESC
                showCloseButton: false,    // Ẩn nút đóng popup
            });
            isGiftRevealed = true;  // Đánh dấu là đã lật quà
        }
    };
    groupBox.appendChild(card);
});

// Lấy quà ngẫu nhiên
const getGift = () => {
    let randomIndex = Math.floor(Math.random() * giftList.length); // Lấy một chỉ số ngẫu nhiên từ 0 đến độ dài danh sách quà
    return giftList[randomIndex];  // Trả về phần quà ngẫu nhiên
};

function resize() {
    var width = $(window).width();
    document.documentElement.style.setProperty('--card-width', width > 720 ? "720px" : width + "px");
}

resize();
