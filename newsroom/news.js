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
const users = [
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" },
    { title: "“배민상회 7주년 행사에 사장님을 초대합니다”", subtitle: "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사", data:"2024.07.22", img: "/assets/fakeimg1.png" }
  ];

  // 사용자 데이터를 HTML로 변환
  const userHtml = users.map(user => `
  
    <div>
    <a href="#" class="user-profile">
      <img src="${user.img}" alt="${user.title}" />
      <div class="letter0">
        <p class="title1">${user.title}</p>
        <p>${user.subtitle}</p>
        <p>${user.data}</p>
      </div>
      </a>
    </div>
    
  `).join('');

  // HTML 요소에 사용자 정보를 추가
  document.getElementById("user-container").innerHTML = userHtml;