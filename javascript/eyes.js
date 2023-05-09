// 这部分有现成的模板，更换了图片并根据个人主页布局进行了一些修改

// 这里是对变量的定义
var eyeCanvas = null;
var eyeObject = null;
var eyeBack = null;
var eyeBackPic = null;
var irisPic = null;
var eyeMessage = null;

var eyeCanvasWidth = 250;
var eyeCanvasHeight = 200;
var eyeRadiusX = 55;
var eyeRadiusY = 35;

var offsetX = null;
var offsetY = null;

var compression = 1;



//	Move eyes：眼珠的移动

function eyeMove(x, y) {

	var ex, ey, dx, dy;

	// 这部分是眼珠坐标的修改：已滚动过后的y值
    let yOffset = document.body.scrollTop || 
                  window.pageYOffset      || 
                  document.documentElement.scrollTop;

    y = y - yOffset;        //需要减去滚动条已经滚动过的页面的高度值。

	ex = eyeCanvas.offsetLeft+eyeCanvasWidth/2;
	ey = eyeCanvas.offsetTop+eyeCanvasHeight/2;

	dx = x-ex;
	dy = y-ey;

	r = (dx*dx/(eyeRadiusX*eyeRadiusX)+dy*dy/(eyeRadiusY*eyeRadiusY)<1) ? 1 : Math.sqrt((eyeRadiusX*eyeRadiusX)*(eyeRadiusY*eyeRadiusY)/(dx*dx*(eyeRadiusY*eyeRadiusY)+dy*dy*(eyeRadiusX*eyeRadiusX)));

	eyeObject.style.left = r*dx+offsetX+'px'; 
	eyeObject.style.top = r*dy+offsetY+'px';
}

//	侦测鼠标的位置

function eyesMouseMove(e) {

	var mousex = (e) ? e.pageX : event.clientX + standardbody.scrollLeft;
	var mousey = (e) ? e.pageY : event.clientY + standardbody.scrollTop;

	eyeMove(mousex, mousey);

}

//	眼眶和眼球的初始位置

function eyeInit() {

	eyeCanvas = document.getElementById('eyeCanvas');
	eyeObject = document.getElementById('eyeObject');
	eyeBack = document.getElementById('eyeBackground');
	eyeBackPic = document.getElementById('eyeBackgroundPic');
	irisPic = document.getElementById('irisPic');
	eyeMessage = document.getElementById('divEyeMessage');

	offsetX = eyeCanvasWidth/2-parseFloat(eyeObject.style.width)/2;
	offsetY = eyeCanvasHeight/2-parseFloat(eyeObject.style.height)/2;

	eyeObject.style.left = offsetX+'px';
	eyeObject.style.top = offsetY+'px';

	eyeCanvas.style.width = eyeCanvasWidth+'px';
	eyeCanvas.style.height = eyeCanvasHeight+'px';
	eyeCanvas.style.marginLeft = -eyeCanvasWidth/2+'px';
	eyeCanvas.style.marginTop = -eyeCanvasHeight/2+'px';

	// 这个是随鼠标移动的函数
	document.onmousemove = eyesMouseMove;
	// 这是自适应的函数
	window.onresize = switchSize;

}




//	眼睛大小随网页的自适应（这部分太恐怖了没看懂）

function switchSize() {

	if (menu.clientWidth < 340 && compression != (menu.clientWidth-40)/300) {

		compression = (menu.clientWidth-40)/300;

		eyeCanvasWidth = eyeCanvasWidth*compression;
		eyeCanvasHeight = eyeCanvasHeight*compression;
		eyeRadiusX = 55*compression;
		eyeRadiusY = 35*compression;

		eyeBackPic.style.width = menu.clientWidth-40+'px';
		eyeBackPic.style.height = menu.clientWidth-40+'px';
		eyeBack.style.width = 300*compression+'px';
		eyeBack.style.height = 300*compression+'px';
		eyeBack.style.marginLeft = -parseFloat(eyeBack.style.width)/2+'px';
		eyeBack.style.marginTop = -parseFloat(eyeBack.style.height)-20+'px';

		irisPic.style.width = 120*compression+'px';
		irisPic.style.height = 120*compression+'px';

		eyeCanvas.style.width = eyeCanvasWidth+'px';
		eyeCanvas.style.height = eyeCanvasHeight+'px';
		eyeCanvas.style.marginLeft = -eyeCanvasWidth/2+'px';
		eyeCanvas.style.marginTop = -eyeCanvasHeight/2-150*compression-20+'px';

		eyeObject.style.width = 120*compression+'px';
		eyeObject.style.height = 120*compression+'px';

		offsetX = eyeCanvasWidth/2-parseFloat(eyeObject.style.width)/2;
		offsetY = eyeCanvasHeight/2-parseFloat(eyeObject.style.height)/2;

		eyeObject.style.left = offsetX+'px';
		eyeObject.style.top = offsetY+'px';

		divEyeMessage.style.width = 280*compression+'px';
		divEyeMessage.style.height = 50*compression+'px';
		divEyeMessage.style.marginLeft = -140*compression+'px';
		divEyeMessage.style.marginTop = -300*compression-20+'px';
		divEyeMessage.style.paddingTop = 212*compression+'px';
		divEyeMessage.style.fontSize = 15*compression+'px';
		divEyeMessage.style.lineHeight = 17*compression+'px';

	}

	if (menu.clientWidth >= 340) {

		compression = 1;

		eyeCanvasWidth = eyeCanvasWidth*compression;
		eyeCanvasHeight = eyeCanvasHeight*compression;
		eyeRadiusX = 55*compression;
		eyeRadiusY = 35*compression;

		eyeBackPic.style.width = 300+'px';
		eyeBackPic.style.height = 300+'px';
		eyeBack.style.width = 300*compression+'px';
		eyeBack.style.height = 300*compression+'px';
		eyeBack.style.marginLeft = -150+'px';
		eyeBack.style.marginTop = -320+'px';

		irisPic.style.width = 120*compression+'px';
		irisPic.style.height = 120*compression+'px';

		eyeCanvas.style.width = eyeCanvasWidth+'px';
		eyeCanvas.style.height = eyeCanvasHeight+'px';
		eyeCanvas.style.marginLeft = -eyeCanvasWidth/2+'px';
		eyeCanvas.style.marginTop = -eyeCanvasHeight/2-150*compression-20+'px';

		eyeObject.style.width = 120*compression+'px';
		eyeObject.style.height = 120*compression+'px';

		offsetX = eyeCanvasWidth/2-parseFloat(eyeObject.style.width)/2;
		offsetY = eyeCanvasHeight/2-parseFloat(eyeObject.style.height)/2;

		eyeObject.style.left = offsetX+'px';
		eyeObject.style.top = offsetY+'px';

		divEyeMessage.style.width = 280*compression+'px';
		divEyeMessage.style.height = 50*compression+'px';
		divEyeMessage.style.marginLeft = -140*compression+'px';
		divEyeMessage.style.marginTop = -300*compression-20+'px';
		divEyeMessage.style.paddingTop = 212*compression+'px';
		divEyeMessage.style.fontSize = 15*compression+'px';
		divEyeMessage.style.lineHeight = 17*compression+'px';

	}

}


// 这里是文字信息的显示和隐藏
//	Show eye message

function showEyeMsg() {

	document.getElementById('eyeMsg').style.visibility = 'visible';
	document.body.style.cursor = "none";

}

//	Hide eye message

function hideEyeMsg() {

	document.getElementById('eyeMsg').style.visibility = 'hidden';
	document.body.style.cursor = "auto";

}





