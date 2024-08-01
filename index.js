// 네비 hover 했을때 haeder 늘어나는 거
const setClassName = () => {
	document.getElementsByClassName("header")[0].className += " headerOver";
}


const reset = () => {
	document.getElementsByClassName("headerOver")[0].classList.remove('headerOver');

}

//main 화면 넘어가는 거
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.swiper');
    const showPages = document.getElementsByClassName('swiper_side');
    const buttons = document.getElementsByClassName('swiperBtn');
    let currentIndex = 0;
    let totalSlides = showPages.length / 2;

    const updateButtons = () => {
        for (let btn of buttons) {
            if (parseInt(btn.dataset.index) === currentIndex) {
                btn.classList.add('btnActive');
            } else {
                btn.classList.remove('btnActive');
            }
        }
    }

    const moveSlide = (index) => {
        currentIndex = index;
        carouselInner.style.transition = 'transform 0.5s ease';
        carouselInner.style.transform = `translateX(${currentIndex * -100}%)`;

        if (currentIndex >= totalSlides) {
            setTimeout(() => {
                carouselInner.style.transition = 'none';
                carouselInner.style.transform = 'translateX(0)';
                currentIndex = 0;
                updateButtons();
            }, 500);
        } else {
            updateButtons();
        }
    }

    const autoMoveSlide = () => {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }
        moveSlide(currentIndex);
    }

    setInterval(autoMoveSlide, 5000); // 5초마다 넘어감

    // 초기 상태를 설정
    updateButtons();

    // 버튼 클릭 이벤트 리스너 추가
    Array.from(buttons).forEach(button => {
        button.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            moveSlide(index);
        });
    });
});
