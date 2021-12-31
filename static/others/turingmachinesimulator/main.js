//定数
//状態の表示位置
var STATUS_RECT=new Rect(305,0,30,30);
//ヘッダの描画位置
var HEADER_RECT=new Rect(305,30,30,30);
//テープ表示関係
//テープの表示位置
var TAPE_POS_Y = 70;
//テープのブロックサイズ
var TAPE_BLOCK_SIZE=new Size(24,24);
//
var UPDATE_INTERVAL=33; //更新間隔

//グローバル変数
var draw_area_size = new Size(0,0); //描画領域のサイズ
var draw_tape_block_num=0; //表示するテープブロック数

//チューリングマシン
//動作フレーム数
var action_frame=3;
var animation_flag=true; //アニメーションの有無
var tape=new Tape(); //テープ
var status=0; //状態
var status_list; //状態リスト
var transition_func_list; //遷移関数リスト
var symbol_list; //記号列
var initialized=false; //初期化されたか
var CalcState={stop:0,interrupted:1,playing:2,error:3}
var calc_state=CalcState.stop; //計算状況(stop:停止中,interrupted:中断中,playing:動作中)
var TapeState={moving:0,writing:1}
var tape_state=TapeState.writing;
var act_cnt=0; //動作カウンター
var tape_draw_pos_x_cor=0; //テープの表示位置x座標のずれ
//描画関係
var canvas1;
var ctx1;

//メイン関数
function main(){
  if(initialized){
    Update();
    Draw();
  }
  if(calc_state==CalcState.stop){return;}
  setTimeout("main()",UPDATE_INTERVAL);
}
//

//チューリングマシン関数
//初期化
function Init(){
  //htmlにcanvas追加。幅は表示領域幅に合わせる
  var body_node=document.getElementsByTagName('body').item(0);
  var canvas_node=document.createElement("canvas");
  canvas_node.width=document.documentElement.clientWidth;
  canvas_node.height=150;
  canvas_node.id="id_canvas1"
  body_node.appendChild(canvas_node);
  
  canvas1 = document.getElementById('id_canvas1');
  draw_area_size=new Size(canvas1.width,canvas1.height);
  //console.log("draw_area_size=("+draw_area_size.width+","+draw_area_size.height+")");
   if (!canvas1 || !canvas1.getContext) {
   alert("HTML5対応ブラウザで閲覧してください。");
   return false;
  }
  ctx1 = canvas1.getContext('2d');
  draw_tape_block_num=Math.floor(draw_area_size.width/TAPE_BLOCK_SIZE.width)+1;
  SetTuringMachine();
  initialized=true;
  SetAnimFlag(document.getElementById("anim_ckb").checked);
  SetSpeed(document.getElementById("spd_rng").value);
  Draw();
}
//更新
function Update(){
  switch(calc_state){
  case CalcState.stop:
    break;
  case CalcState.interrupted:
    break;
  case CalcState.playing:
    switch(tape_state){
    case TapeState.moving:
     if(animation_flag){tape_draw_pos_x_cor=(tape_draw_pos_x_cor>0?1:-1)*TAPE_BLOCK_SIZE.width*(1-act_cnt/action_frame);}
      break;
    case TapeState.writing:
      break;
    }
    if(act_cnt>=action_frame){
      Calculate();
      act_cnt=0;
    }
    ++act_cnt;
    break;
  }
}
//描画
function Draw(){
  DrawFillBox(ctx1,0,0,draw_area_size.width,draw_area_size.height,255,255,255);
  //状態表示
  DrawLineBox(ctx1,STATUS_RECT.left,STATUS_RECT.top,STATUS_RECT.width,STATUS_RECT.height,0,0,0,2);
  DrawString(ctx1,STATUS_RECT.left,STATUS_RECT.top,0,0,0,STATUS_RECT.width,status);
  //テープヘッダ
  DrawLineTriangle(ctx1,HEADER_RECT.left,HEADER_RECT.top,HEADER_RECT.right,HEADER_RECT.top,(HEADER_RECT.left+HEADER_RECT.right)/2,HEADER_RECT.bottom,0,0,0,2);
//  var center_idx=Math.floor(draw_tape_block_num/2);
  var center_idx=Math.floor(HEADER_RECT.left/TAPE_BLOCK_SIZE.width)+1;
  for(i=-1;i<=draw_tape_block_num;++i){
    var idx=i-center_idx;
    var draw_pos_x=HEADER_RECT.center_x-Math.floor(TAPE_BLOCK_SIZE.width/2)+TAPE_BLOCK_SIZE.width*(idx)+tape_draw_pos_x_cor;
    DrawLineBox(ctx1,draw_pos_x,TAPE_POS_Y,TAPE_BLOCK_SIZE.width,TAPE_BLOCK_SIZE.height,255,0,0,2);
    DrawString(ctx1,draw_pos_x,TAPE_POS_Y,0,0,0,TAPE_BLOCK_SIZE.width,tape.GetTapeData(idx));
  }
}
//計算
function Calculate(){
  if(status=="fin"){
    OutputResult();
    calc_state=CalcState.stop;
    return;
  }
  var val = tape.GetTapeData(0);
  var current_tf=transition_func_list[status][val];
  if(current_tf==undefined){
    calc_state=Calculate.error;
    alert("異常終了しました。状態"+status+",記号"+val+"に対応する遷移関数が定義されていません。");
    return;
  }
  status=current_tf.q;
  MoveHeader(current_tf.val,current_tf.action);
}
//計算処理(書き換える値,移動コード(L,R,N))
function MoveHeader(val,mv){
  tape.Move(val,mv);
  OutpitCurrentState();
  if(mv=="N"){
    tape_state=TapeState.writing;
    tape_draw_pos_x_cor=0;
    }
  else if(mv=="R"){
    tape_state=TapeState.moving;
    if(animation_flag){tape_draw_pos_x_cor= TAPE_BLOCK_SIZE.width;}
    else{tape_draw_pos_x_cor=0;}
  }else{
    tape_state=TapeState.moving;
    if(animation_flag){tape_draw_pos_x_cor= -TAPE_BLOCK_SIZE.width;}
     else{tape_draw_pos_x_cor=0;}
  }
}
//結果出力
function OutputResult(){
  var res_array=new Array();
  var ok=true;
  for(var i=0;;++i){
    var d = tape.GetTapeData(i);
    if(d=='1'||d=='0'){
      res_array.push(d);
    }else if(d=='B'){
      if(tape.CheckRightDataAllB(i+1)==false){ok=false;}
      break;
    }else{
      ok=false;
      break;
    }
  }
  if(ok){document.getElementById("output").textContent=res_array.join("");}
  else{document.getElementById("output").textContent="異常終了しました。";}
  calc_state=CalcState.stop;
  document.getElementById("start_btn").disabled=false;
}
//計算状況出力
function OutpitCurrentState(){
//  console.log(status);
}

//アニメーションの有無を設定
function SetAnimFlag(ckd){
  if(ckd){
    animation_flag=true;
  }else{
    animation_flag=false;
  }
}

//速度設定
function SetSpeed(val){
  action_frame=101-val;
}

//入力を取得して確認し、チューリングマシンセット
function SetTuringMachine(){
  //状態
  var status_str=document.getElementById("status_tb").value;
  var statuses=status_str.split(",");
  //0,finがなかったら追加
  if(statuses.indexOf("fin")==-1){
    statuses.unshift("fin");
  }
  if(statuses.indexOf("0")==-1){
    statuses.unshift("0");
  }
  document.getElementById("status_tb").value=statuses.join(",");
  SetStatus(statuses);
  
  //記号
  var symbol_str=document.getElementById("symbol_tb").value;
  var symbol_list=symbol_str.split(",");
  //B,0,1がなかったら追加
  if(symbol_list.indexOf("1")==-1){
    symbols.unshift("1");
  }
  if(symbol_list.indexOf("0")==-1){
    symbol_list.unshift("0");
  }
  if(symbol_list.indexOf("B")==-1){
    symbol_list.unshift("B");
  }
  document.getElementById("symbol_tb").value=symbol_list.join(",");
  SetSymbol(symbol_str);
  
  //状態遷移関数
  var transitionfunc_str=document.getElementById("transition_func_tb").value;
  //正規表現で入力が(,,,,),(,,,,),……,(,,,,)になってるか確認。なってなかったらエラー
  var reg=/(?:\([^(),]+,[^(),]+,[^(),]+,[^(),]+,[NLR]\),)*\([^(),]+,[^(),]+,[^(),]+,[^(),]+,[NLR]\)$/;
  if(reg.test(transitionfunc_str)==false){
    alert("遷移関数の定義が不正です。記入ミスがないか確認してください。");
    return;
  }
  //正規表現で()に囲まれた場版を取り出す
  reg=/\([^(),]+,[^(),]+,[^(),]+,[^(),]+,[NLR]\)/g;
  var tf_strs=transitionfunc_str.match(reg);
  var tfuncs=new Array();
  for(var i=0;i<tf_strs.length;++i){
    var str=tf_strs[i].substr(1,tf_strs[i].length-2);
    var ps = str.split(",",5);
    //パラメータの確認
    //0,2
    if(status_list.indexOf(ps[0])==-1 || status_list.indexOf(ps[2])==-1){
      alert("遷移関数の定義が不正です。"+i+"個目の関数で存在しない状態が指定されています。");
      return;
    }
    //1,3
    if(symbol_list.indexOf(ps[1])==-1||symbol_list.indexOf(ps[3])==-1){
      alert("遷移関数の定義が不正です。"+i+"個目の関数で存在しない記号が指定されています。");
      return;
    }
    //4(動作が不正だったら正規表現の確認ではじかれるので確認は省略)
    
    tfuncs.push(ps);
  }
  SetTransitionFunction(tfuncs);
  
  //入力
  var input_str=document.getElementById("input_tb").value;
  var inputs=new Array();
  for(i=0;i<input_str.length;++i){
    var w=input_str.substr(i,1);
    //0,1でなかったらエラー
    if(w!='0' && w!='1'){
      alert("入力が不正です。idx="+i+"で0,1以外の記号が検出されました。");
      return;
    }else{
      inputs.push(w);
    }
  }
  SetInput(inputs);
  
}
//制御関数
//状態セット
function SetStatus(status_array){
  status_list=status_array;
}
//記号セット
function SetSymbol(symbol_array){
  symbol_list=symbol_array;
}
//遷移関数セット
function SetTransitionFunction(tfunc_array){
  transition_func_list=new Object();
  for(var i=0;i<tfunc_array.length;++i){
    if(transition_func_list[tfunc_array[i][0]]==undefined){transition_func_list[tfunc_array[i][0]]=new Object();}
    transition_func_list[tfunc_array[i][0]][tfunc_array[i][1]]=new TransitionFunction(tfunc_array[i][2],tfunc_array[i][3],tfunc_array[i][4]);
  }
}
//入力セット
function SetInput(input_array){
  tape.Init(input_array);
  document.getElementById("input").textContent=input_array.join("");
}
//計算開始
function Start(){
  if(calc_state==CalcState.stop){
    OutpitCurrentState();
    Reset();
  }
  calc_state=CalcState.playing;
  document.getElementById("start_btn").disabled=true;
  main();
}
//計算停止
function Stop(){
  document.getElementById("start_btn").disabled=false;
  calc_state=CalcState.interrupted;
}
//リセット
function Reset(){
  tape=new Tape();
  calc_state=CalcState.stop;
  tape_state=TapeState.writing;
  var input_str=document.getElementById("input").textContent;
  var inputs=new Array();
  for(i=0;i<input_str.length;++i){
    var w=input_str.substr(i,1);
    inputs.push(w);
  }
  SetInput(inputs);
  document.getElementById("output").textContent="";
  status=0;
  act_cnt=action_frame;
  tape_draw_pos_x_cor=0;
  document.getElementById("start_btn").disabled=false;
  Draw();
}

//クラス
//矩形
function Rect(x,y,w,h){
  this.left=x;
  this.top=y;
  this.width=w;
  this.height=h;
  this.right=x+w-1;
  this.bottom=y+h-1;
  this.center_x=this.left+Math.floor(this.width/2);
  this.center_y=this.top+Math.floor(this.height/2);
}

//サイズ
function Size(w,h){
  this.width=w;
  this.height=h;
}

//遷移関数
function TransitionFunction(mq,v,d){
  this.q=mq;
  this.val=v;
  this.action=d;
}

//テープ
function Tape(){
  this.data=new Array('B','B','B');
  this.header_pos=0;
}
//データで初期化
Tape.prototype.Init=function(data_array){
  this.header_pos=0;
  this.data=[];
  for(var i=0;i<data_array.length;++i){
    this.data.push(data_array[i]);
  }
}
//ヘッダの移動。v:書き換える値 d:方向(N,L,R)
Tape.prototype.Move=function(v,d){
  switch(d){
  case 'N':
    this.data[this.header_pos]=v;
    break;
  case 'L':
    this.data[this.header_pos]=v;
    --this.header_pos;
    if(this.header_pos<0){
      this.header_pos=0;
      this.data.unshift('B');
    }
    break;
  case 'R':
    this.data[this.header_pos]=v;
    ++this.header_pos;
    if(this.header_pos==this.data.length){
      this.data.push('B');
    }
    break;
  default:
    break;      
  }
  return;
}
//テープのデータ取得(0が現在のヘッダの位置)
Tape.prototype.GetTapeData = function(idx){
  var pos=this.header_pos+idx;
  if(pos<0){return 'B';}
  else if(pos>=this.data.length){return 'B';}
  return this.data[pos];
}
//指定位置から右が全てBか確認
Tape.prototype.CheckRightDataAllB=function(idx){
  var pos=idx+this.header_pos;
  if(pos>=this.data.length){return true;}
  for(var i=pos;i<this.data.length;++i){
    if(this.data[i]!='B'){return false;}
  }
  return true;
}


