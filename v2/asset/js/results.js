﻿function All_Calc() {
	window.parent.mains.All_Calc();
}
function UrlView(value1) {
	window.parent.mains.UrlView(value1);
}

function View_Result() {
	var typeValue = window.parent.mains.typeValue;
	var typeView = window.parent.mains.typeView;
	var writeValue = "<table class='cstable'><tr>";
	for (var i = 1; i < typeValue.length; i++) {
		if (i > 1 && (i - 1) % 5 == 0) {
			writeValue += "</tr><tr>";
		}
		writeValue += "<td class='spec-cell'><div class='specs'>";
		writeValue += "<div class='spec-row'><span class='spec-label'>" + typeView[i] + "</span><input class='csinput detail' type='text' id='" + typeValue[i] + "' value=''></div>";
		writeValue += "<div class='spec-row'><span class='detail'>改造後</span> <input class='csinput' type='text' id='" + typeValue[i] + "_kaisv' value=''></div>";
		writeValue += "<div class='spec-row detail'><span>改造比率[%]</span> <input class='csinput detail' type='text' id='" + typeValue[i] + "_rate' value=''></div>";
		writeValue += "</div></td>";
	}
	writeValue += "</tr></table>";
	writeValue += "<table class='cstable'><tr>";
	writeValue += "<td><input class='csinput1' type='radio' id='disp1' name='disp' onchange='All_Calc()'>旧アプリ表示　";
	writeValue += "<input class='csinput1' type='radio' id='disp2' name='disp' onchange='All_Calc()' checked>標準アクセサリー適用表示　</td>";
	writeValue += "</tr></table>";
	document.getElementById("bmain").innerHTML = writeValue;
}

// mains のロード完了チェック後にViewを構成する
if (window.parent.mains.document.readyState === "complete") {
	View_Result();
} else {
	window.parent.mains.addEventListener("load", View_Result);
}
