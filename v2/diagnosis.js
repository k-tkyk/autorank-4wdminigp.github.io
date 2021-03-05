﻿var diagnosisValue = new Array("dia0speed_h", "dia1speed_s", "dia2battery", "dia3accele", "dia4arrivaltime", "dia5tiregrip", "dia6cornerdecele", "dia7jump", "dia8boundtime", "dia9gravity", "dia10rollerangle", "dia11weight", "dia12brake", "dia13rollermasatsu", "dia14rollerteikou", "dia15kuuten_h", "dia16taifuu_h", "dia17offload_h", "dia18offloaddirt_h", "dia19taisuikuuten_h", "dia20cornerspeed_h", "dia21raincornerspeed_h", "dia22arrivaltime95", "dia23time100m", "dia24stamina", "dia25", "dia26time25m", "dia27time50m");
var diagnosisView = new Array("最高速度(時速) ", "最高速度(秒速) ", "バッテリー消費量 ", "加速度(毎秒) ", "最高速到達時間(秒)<font color='#FFA500'>※6</font> ", "タイヤグリップ ", "コーナー減速率(仮)<font color='#FFA500'>※4</font> ", "ジャンプ飛距離(仮)<font color='#FFA500'>※3</font> ", "バウンド時間(仮)<font color='#FFA500'>※5</font> ", "前後の重心 ", "ローラースラスト角 ", "重さ ", "ブレーキ性能 ", "有効ローラー摩擦 ", "有効ローラー抵抗 ", "空転目安(時速) ", "耐風最高速(時速) ", "芝最高速(時速) ", "ダート最高速(時速) ", "耐水空転目安(時速) ", "ｺｰﾅｰｵﾊﾞｽﾋﾟ目安(仮)(時速) ", "雨ｺｰﾅｰｵﾊﾞｽﾋﾟ目安(仮)(時速) ", "最高速95%到達時間(秒) ", "100m走(仮)(秒) ", "ﾃﾞｼﾞﾀﾙｶｰﾌﾞ耐久目安(仮) ", " ", "25m走(仮)(秒) ", "50m走(仮)(秒) ");

function Result_Calc() {
	window.parent.mains.Result_Calc();
}

function View_Diagnosis() {
	//var diagnosisValue = window.parent.mains.diagnosisValue;
	//var diagnosisView = window.parent.mains.diagnosisView;
	var writeValue = "<table class='cstable'><tr>";
	for (var i = 0; i < diagnosisValue.length; i++) {
		if (i > 0 && i % 4 == 0) {
			writeValue += "</tr><tr>";
		}
		writeValue += "<td>" + diagnosisView[i] + "<input class='csinput' type='text' id='" + diagnosisValue[i] + "' value=''></td>";
	}
	writeValue += "</tr></table><table class='cstable'><tr class='specs'>";
	writeValue += "<td><input class='csinput1' type='radio' id='shindantire1' name='shindantire' onchange='Result_Calc()' checked>マシン診断　";
	writeValue += "<input class='csinput1' type='radio' id='shindantire2' name='shindantire' onchange='Result_Calc()'>タイヤ径差表示　";
	writeValue += "<select id='shindantirekei' onchange='Result_Calc()'>";
	for (var j = 0; j <= 8; j++) {
		writeValue += "<option value=" + j + ">" + j + "</option>";
	}
	writeValue += "</select></td></tr></table>";
	writeValue += "<br><font color='#FFA500'>※3 参考値です(ブレーキは考慮せず、速いマシンの場合は表示より少し大きくなり、遅い場合は少し小さくなります)</font>";
	writeValue += "<br><font color='#FFA500'>※4 ほぼ解明(最適重心未実装)</font>";
	writeValue += "<br><font color='#FFA500'>※5 参考値です(2次多項式の重回帰分析による近似式)</font>";
	writeValue += "<br><font color='#FFA500'>※6 情報提供感謝します</font>";
	document.getElementById("bmain").innerHTML = writeValue;
}
