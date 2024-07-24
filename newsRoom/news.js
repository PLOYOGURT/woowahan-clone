// 네비 hover 했을때 haeder 늘어나는 거
function setClassName() {
	document.getElementsByClassName("header")[0].className += " headerOver";
    // document.getElementByClassName("item")[0].classList.remove('active');
}


function reset(){
	document.getElementsByClassName("headerOver")[0].classList.remove('headerOver');
    // document.getElementByClassName("item")[0].className += "active";

}
