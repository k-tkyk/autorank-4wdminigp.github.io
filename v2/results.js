﻿var typeValue = new Array("", "speed", "power", "corner", "stamina", "weight", "gearfuka", "powerloss", "speedloss", "aerodf", "setsuden", "seishin", "thrust", "tiremasatsu", "tiresenkai", "tirehanpatsu", "tirekei", "rollermasatsu", "rollerteikou", "wave", "offload", "gearrate", "ampere", "brake", "stabilizer", "digital", "taifuu", "taisui", "curvestamina", "jumpstamina", "tread", "wheelbase", "rollerwidth", "rollerbase");
var typeView = new Array("", "スピード ", "パワー ", "コーナー安定 ", "スタミナ耐久 ", "重さ ", "ギヤ負荷 ", "パワーロス ", "スピードロス ", "ｴｱﾛﾀﾞｳﾝﾌｫｰｽ ", "節電 ", "制振 ", "スラスト角 ", "タイヤ摩擦 ", "タイヤ旋回 ", "タイヤ反発 ", "タイヤ径 ", "ローラー摩擦 ", "ローラー抵抗 ", "ウェーブ ", "オフロード ", "ギヤ比 ", "消費電流 ", "ブレーキ減速 ", "スタビ減速 ", "デジタル ", "耐風 ", "耐水 ", "カーブ耐久 ", "ジャンプ耐久 ", "トレッド ", "ﾎｲｰﾙﾍﾞｰｽ ", "ローラー幅 ", "ﾛｰﾗｰﾍﾞｰｽ ");

function Result_Calc() {
	window.parent.mains.Result_Calc();
}
function UrlView(value1) {
	window.parent.mains.UrlView(value1);
}

function View_Result() {
	//var typeValue = window.parent.mains.typeValue;
	//var typeView = window.parent.mains.typeView;
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
	writeValue += "<td><input class='csinput1' type='radio' id='disp1' name='disp' onchange='Result_Calc()'>旧アプリ表示　";
	writeValue += "<input class='csinput1' type='radio' id='disp2' name='disp' onchange='Result_Calc()' checked>標準アクセサリー適用表示　</td>";
	writeValue += "</tr></table>";
	document.getElementById("bmain").innerHTML = writeValue;
}