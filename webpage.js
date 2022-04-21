var show = 1;
var istie = 0;
var iswin = false;
const xwin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const owin = [0, 0, 0, 0, 0, 0, 0, 0, 0];
console.log("its ok");
function disp(e) {
	var id = (e.target.id);
	if (id == "n1" && show == 1) {
		document.getElementById("x1").style.visibility = "visible";
		document.getElementById("n1").style.visibility = "hidden";
		xwin[0] = 1;
		show = 2;
		istie++;

	}
	else if (id == "n1" && show == 2) {
		document.getElementById("o1").style.visibility = "visible";
		document.getElementById("n1").style.visibility = "hidden";
		show = 1;
		owin[0] = 1;
		istie++;

	}
	if (id == "n2" && show == 1) {
		xwin[1] = 1;
		document.getElementById("x2").style.visibility = "visible";
		document.getElementById("n2").style.visibility = "hidden";
		show = 2;
		istie++;

	}
	else if (id == "n2" && show == 2) {
		document.getElementById("o2").style.visibility = "visible";
		document.getElementById("n2").style.visibility = "hidden";
		show = 1;
		owin[1] = 1;
		istie++;

	}
	if (id == "n3" && show == 1) {
		xwin[2] = 1;
		document.getElementById("x3").style.visibility = "visible";
		document.getElementById("n3").style.visibility = "hidden";
		show = 2;
		istie++;
	}
	else if (id == "n3" && show == 2) {
		document.getElementById("o3").style.visibility = "visible";
		document.getElementById("n3").style.visibility = "hidden";
		show = 1;
		owin[2] = 1;
		istie++;

	}
	if (id == "n4" && show == 1) {
		xwin[3] = 1;
		document.getElementById("x4").style.visibility = "visible";
		document.getElementById("n4").style.visibility = "hidden";
		show = 2;
		istie++;

	}
	else if (id == "n4" && show == 2) {
		document.getElementById("o4").style.visibility = "visible";
		document.getElementById("n4").style.visibility = "hidden";
		show = 1;
		owin[3] = 1;
		istie++;

	}
	if (id == "n5" && show == 1) {
		xwin[4] = 1;
		document.getElementById("x5").style.visibility = "visible";
		document.getElementById("n5").style.visibility = "hidden";
		show = 2;
		istie++;

	}
	else if (id == "n5" && show == 2) {
		document.getElementById("o5").style.visibility = "visible";
		document.getElementById("n5").style.visibility = "hidden";
		show = 1;
		owin[4] = 1;
		istie++;

	}
	if (id == "n6" && show == 1) {
		xwin[5] = 1;
		document.getElementById("x6").style.visibility = "visible";
		document.getElementById("n6").style.visibility = "hidden";
		show = 2;
		istie++;

	}
	else if (id == "n6" && show == 2) {
		document.getElementById("o6").style.visibility = "visible";
		document.getElementById("n6").style.visibility = "hidden";
		show = 1;
		owin[5] = 1;
		istie++;

	}
	if (id == "n7" && show == 1) {
		xwin[6] = 1;
		document.getElementById("x7").style.visibility = "visible";
		document.getElementById("n7").style.visibility = "hidden";
		show = 2;
		istie++;

	}
	else if (id == "n7" && show == 2) {
		document.getElementById("o7").style.visibility = "visible";
		document.getElementById("n7").style.visibility = "hidden";
		show = 1;
		owin[6] = 1;
		istie++;

	}
	if (id == "n8" && show == 1) {
		xwin[7] = 1;
		document.getElementById("x8").style.visibility = "visible";
		document.getElementById("n8").style.visibility = "hidden";
		show = 2;
		istie++;

	}
	else if (id == "n8" && show == 2) {
		document.getElementById("o8").style.visibility = "visible";
		document.getElementById("n8").style.visibility = "hidden";
		show = 1;
		owin[7] = 1;
		istie++;

	}
	if (id == "n9" && show == 1) {
		xwin[8] = 1;
		document.getElementById("x9").style.visibility = "visible";
		document.getElementById("n9").style.visibility = "hidden";
		show = 2;
		istie++;

	}
	else if (id == "n9" && show == 2) {
		document.getElementById("o9").style.visibility = "visible";
		document.getElementById("n9").style.visibility = "hidden";
		show = 1;
		owin[8] = 1;
		istie++;

	}
	showf();

}
function showf() {
	var count = 1;
	var counter = setInterval(timer, 100);
	function timer() {
		count = count - 1;
		if (count == 0) {
			if (xwin[0] == 1 && xwin[1] == 1 && xwin[2] == 1 || xwin[3] == 1 && xwin[4] == 1 && xwin[5] == 1 || xwin[6] == 1 && xwin[7] == 1 && xwin[8] == 1 || xwin[0] == 1 && xwin[3] == 1 && xwin[6] == 1 || xwin[1] == 1 && xwin[4] == 1 && xwin[7] == 1 || xwin[2] == 1 && xwin[5] == 1 && xwin[8] == 1 || xwin[0] == 1 && xwin[4] == 1 && xwin[8] == 1 || xwin[2] == 1 && xwin[4] == 1 && xwin[6] == 1) {
				var text = " X won do you want to Reset";
				iswin = true;
				if (confirm(text) == true) {
					window.location.reload();
				}
				else {
					window.close();
				}
			}
			if (owin[0] == 1 && owin[1] == 1 && owin[2] == 1 || owin[3] == 1 && owin[4] == 1 && owin[5] == 1 || owin[6] == 1 && owin[7] == 1 && owin[8] == 1 || owin[0] == 1 && owin[3] == 1 && owin[6] == 1 || owin[1] == 1 && owin[4] == 1 && owin[7] == 1 || owin[2] == 1 && owin[5] == 1 && owin[8] == 1 || owin[0] == 1 && owin[4] == 1 && owin[8] == 1 || owin[2] == 1 && owin[4] == 1 && owin[6] == 1) {
				var text = " O won do you want to Reset";
				iswin = true;
				
				if (confirm(text) == true) {
					window.location.reload();
				}
				else {
					window.close();
				}
			}
			if (istie == 9 && !iswin) {
				var text = " Game gone tie in both player, Do you want to reload";
				if (confirm(text) == true) {
					window.location.reload();
				}
				else {
					window.close();
				}

			}
		}
	}

}
