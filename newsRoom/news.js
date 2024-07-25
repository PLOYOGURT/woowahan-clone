// 네비 hover 했을때 haeder 늘어나는 거
function setClassName() {
	document.getElementsByClassName("header")[0].className += " headerOver";
    // document.getElementByClassName("item")[0].classList.remove('active');
}


function reset(){
	document.getElementsByClassName("headerOver")[0].classList.remove('headerOver');
    // document.getElementByClassName("item")[0].className += "active";

}

//히히 더미데이터 만드는거 알아왔다!!
//더미 데이터 생성

const news = [
    {
        title : "\"배민상회 7주년 행사에 사장님을 초대합니다\"",
        info : "누적주문 900만 건 돌파..배민상회 론칭 7주년 기념 할인행사",
        date : "2024.07.22",
        img : "../assets/newsImg/1.png"
    },
    {
        title : "우아한형제들-현대카드,'배민현대카드II'2종 선보인다",
        info : "배민 앱에서 결제하면 최대10%가 배민포인트로 적립됩니다",
        date : "2024.07.17",
        img : "../assets/newsImg/2.jpg"
    },
    {
        title : "배달의민족, 소비자 경험 개선∙업주 성장 위한 대규모 개편",
        info : "",
        date : "2024.07.10",
        img : "../assets/newsImg/3.png"
    },
    {
        title : "배민ㄴ 장보기∙쇼핑, 배우 김신록과 TV모델 광고 시작",
        info : "장보기도 역시 배민이었어",
        date : "2024.07.08",
        img : "../assets/newsImg/4.jpg"
    },
    {
        title : "배달의민족 이국환 대표 사임",
        info : "",
        date : "2024.07.02",
        img : "../assets/newsImg/5.png"
    },
    {
        title : "\"올 여름방학에도 배민과 함께 아이들에게 든든한 끼니 선물해요\"",
        info : "배민-KB증권 '배민방학도시락' 2024 여름 후원 캠페인 진행",
        date : "2024.07.02",
        img : "../assets/newsImg/6.png"
    },
    {
        title : "\"GS25도 배민됩니다\"",
        info : "유통 브랜드 총집합'배민 장보기∙쇼핑'",
        date : "2024.07.01",
        img : "../assets/newsImg/7.png"
    },
    {
        title : "\"이마트 에브리데이도 배민에서 만나요\"",
        info : "배민 입점한 이마트 에브리데이 인기...2주새 44만명 방문",
        date : "2024.06.28",
        img : "../assets/newsImg/8.png"
    },
    {
        title : "우아한 노무해결사 경기 소공연과 컨설팅 진행",
        info : "\"직원 관리 고민, 배민 덕분에 덜었어요\"",
        date : "2024.06.25",
        img : "../assets/newsImg/9.jpg"
    },
    {
        title : "전문 사진가와 함께 한 메뉴 약 1000개의 기록...배민사진관,3주년 성과 공개",
        info : "\"보기 좋은 메뉴가 시키기도 좋아요\"",
        date : "2024.06.20",
        img : "../assets/newsImg/10.jpg"
    },
];

//map을 써서 html로 바꾸기
const newsHtml =  news.map(news => {
    return `
    <div class="newsBox">
        <a href="./news.html">
            <div class="newsImg">
                <img src="${news.img}" alt="" />
            </div>
            <div class="newsInfo">
                <p class="list-title">
                    <div>${news.title}</div>
                </p>
                <p class="list-desc">${news.info}</p>
                <div>
                    <time>${news.date}</time>
                </div>
            </div>
        </a>
    </div>
    `
});

//html에 더미데이터 값 넣기!
document.getElementById("newsList").innerHTML = newsHtml.join("");