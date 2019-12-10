function txtchange1(){
    document.getElementById('txt1').innerHTML='ナンバーワン!';
}
<div id="image1">
<input type="button" value="画像の変更”
oneclick="imgchange1();">
<img src='./image/josai.png'id="logo" alt="josai logo">
</img></div>

function imgchange1(){
    document.getElementById('logo').src='./image/bulbon.gif';
}