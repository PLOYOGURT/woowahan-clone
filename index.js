const headerli1 = document.getElementsByClassName('header-li1');
const sublist1 = document.getElementsByClassName('sub-list1');

for (let i = 0; i < headerli1.length; i++) {
    headerli1[i].addEventListener('mouseover', function() {
        for (let j = 0; j < sublist1.length; j++) {
            sublist1[j].classList.add('show');
        }
    });

    headerli1[i].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let j = 0; j < sublist1.length; j++) {
                if (headerli1[i].matches(':hover') || sublist1[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                for (let j = 0; j < sublist1.length; j++) {
                    sublist1[j].classList.remove('show');
                }
            }
        }, 100);
    });
}

for (let j = 0; j < sublist1.length; j++) {
    sublist1[j].addEventListener('mouseover', function() {
        sublist1[j].classList.add('show');
    });

    sublist1[j].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let i = 0; i < headerli1.length; i++) {
                if (headerli1[i].matches(':hover') || sublist1[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                sublist1[j].classList.remove('show');
            }
        }, 100);
    });
}










const headerli2 = document.getElementsByClassName('header-li2');
const sublist2 = document.getElementsByClassName('sub-list2');

for (let i = 0; i < headerli2.length; i++) {
    headerli2[i].addEventListener('mouseover', function() {
        for (let j = 0; j < sublist2.length; j++) {
            sublist2[j].classList.add('show');
        }
    });

    headerli2[i].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let j = 0; j < sublist2.length; j++) {
                if (headerli2[i].matches(':hover') || sublist2[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                for (let j = 0; j < sublist2.length; j++) {
                    sublist2[j].classList.remove('show');
                }
            }
        }, 100);
    });
}

for (let j = 0; j < sublist2.length; j++) {
    sublist2[j].addEventListener('mouseover', function() {
        sublist2[j].classList.add('show');
    });

    sublist2[j].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let i = 0; i < headerli2.length; i++) {
                if (headerli2[i].matches(':hover') || sublist2[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                sublist2[j].classList.remove('show');
            }
        }, 100);
    });
}








const headerli3 = document.getElementsByClassName('header-li3');
const sublist3 = document.getElementsByClassName('sub-list3');

for (let i = 0; i < headerli3.length; i++) {
    headerli3[i].addEventListener('mouseover', function() {
        for (let j = 0; j < sublist3.length; j++) {
            sublist3[j].classList.add('show');
        }
    });

    headerli3[i].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let j = 0; j < sublist3.length; j++) {
                if (headerli3[i].matches(':hover') || sublist3[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                for (let j = 0; j < sublist3.length; j++) {
                    sublist3[j].classList.remove('show');
                }
            }
        }, 100);
    });
}

for (let j = 0; j < sublist3.length; j++) {
    sublist3[j].addEventListener('mouseover', function() {
        sublist3[j].classList.add('show');
    });

    sublist3[j].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let i = 0; i < headerli3.length; i++) {
                if (headerli3[i].matches(':hover') || sublist3[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                sublist3[j].classList.remove('show');
            }
        }, 100);
    });
}








const headerli4 = document.getElementsByClassName('header-li4');
const sublist4 = document.getElementsByClassName('sub-list4');

for (let i = 0; i < headerli4.length; i++) {
    headerli4[i].addEventListener('mouseover', function() {
        for (let j = 0; j < sublist4.length; j++) {
            sublist4[j].classList.add('show');
        }
    });

    headerli4[i].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let j = 0; j < sublist4.length; j++) {
                if (headerli4[i].matches(':hover') || sublist4[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                for (let j = 0; j < sublist4.length; j++) {
                    sublist4[j].classList.remove('show');
                }
            }
        }, 100);
    });
}

for (let j = 0; j < sublist4.length; j++) {
    sublist4[j].addEventListener('mouseover', function() {
        sublist4[j].classList.add('show');
    });

    sublist4[j].addEventListener('mouseout', function() {
        setTimeout(function() {
            let isHovering = false;
            for (let i = 0; i < headerli4.length; i++) {
                if (headerli4[i].matches(':hover') || sublist4[j].matches(':hover')) {
                    isHovering = true;
                    break;
                }
            }
            if (!isHovering) {
                sublist4[j].classList.remove('show');
            }
        }, 100);
    });
}








// 더미 데이터 생성





let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
let slideInterval = setInterval(nextSlide, 10000); // 3초마다 슬라이드 전환

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function currentSlide(index) {
    clearInterval(slideInterval); // 자동 전환 멈춤
    showSlide(index);
    slideInterval = setInterval(nextSlide, 3000); // 자동 전환 다시 시작
}

// 초기 슬라이드 설정
showSlide(currentIndex);




// script.js
window.addEventListener('DOMContentLoaded', (event) => {
    const textElement = document.getElementById('text'); // 텍스트 요소를 가져옵니다
    const text = textElement.textContent; // 요소의 텍스트를 가져옵니다
    textElement.textContent = ''; // 텍스트를 비워서 초기화합니다

    let index = 0; // 현재 문자 인덱스

    function addNextCharacter() {
        if (index < text.length) {
            textElement.textContent += text[index]; // 현재 문자 추가
            index++; // 인덱스 증가
            setTimeout(addNextCharacter, 100); // 100ms 후에 다음 문자 추가
        } else {
            textElement.style.opacity = 1; // 모든 문자가 추가된 후, opacity를 1로 변경하여 텍스트를 보이게 합니다
        }
    }

    addNextCharacter(); // 애니메이션 시작
});
