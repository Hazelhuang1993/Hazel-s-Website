
var oPage = document.getElementById('page');
var headerButton = oPage.getElementsByClassName('click');
var sectionPage = oPage.getElementsByTagName('section');


for (var i = 0; i < headerButton.length; i ++) {
    headerButton[i].index = i; 
    console.log(i);
    headerButton[i].onclick = function () {
        for (var j = 0; j < headerButton.length; j ++) { 
            headerButton[j].classList.remove('active'); 
            sectionPage[j].style.display='none';
        }

        this.classList.add('active'); 
        sectionPage[this.index].style.display='block';
    }
}

