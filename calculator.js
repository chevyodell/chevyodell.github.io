/*
  Assignment 2 - CPSC 513 - Winter 2020
  Author: Siobhan Chevy O'Dell
  UCID: 30019806
  Last revision: 09/02/2020
*/

/******* ON DOCUMENT LOAD *******/
$(document).ready(() => {

  /******* DELETION EVENTS *******/
  $("#backspace").click(()=>{
    $(".outputBox").text($(".outputBox").text().slice(0,-1));
  });

  $("#clear").click(()=>{
    $(".outputBox").empty();
  });

  /******** EQUALS EVENT ********/
  $("#equals").click(()=>{
    $(".previousBox").text($(".outputBox").text());
    $(".outputBox").text(doMath($(".outputBox").text()));
    $(".previousBox").append("=" + $(".outputBox").text());
  });

  /******* SYMBOLS EVENTS *******/
  $("#left-bracket").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("(");
    }else{
        $(".outputBox").append("(");
    }
  });

  $("#right-bracket").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text(")");
    }else{
    $(".outputBox").append(")");
    }
  });

  $("#decimal").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text(".");
    }else{
    $(".outputBox").append(".");
    }
  });

  $("#divide").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("/");
    }else{
    $(".outputBox").append("/");
    }
  });

  $("#multiply").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("*");
    }else{
    $(".outputBox").append("*");
    }
  });

  $("#negative").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("-");
    }else{
    $(".outputBox").append("-");
    }
  });

  $("#addition").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("+");
    }else{
    $(".outputBox").append("+");
    }
  });

  /******* NUMBER EVENTS *******/
  $("#nine").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("9");
    }else{
    $(".outputBox").append("9");
    }
  });

  $("#eight").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("8");
    }else{
    $(".outputBox").append("8");
    }
  });

  $("#seven").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("7");
    }else{
    $(".outputBox").append("7");
    }
  });

  $("#six").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("6");
    }else{
    $(".outputBox").append("6");
    }
  });

  $("#five").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("5");
    }else{
    $(".outputBox").append("5");
    }
  });

  $("#four").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("4");
    }else{
    $(".outputBox").append("4");
    }
  });

  $("#three").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("3");
    }else{
    $(".outputBox").append("3");
    }
  });

  $("#two").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("2");
    }else{
    $(".outputBox").append("2");
    }
  });

  $("#one").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("1");
    }else{
    $(".outputBox").append("1");
    }
  });

  $("#zero").click(()=>{
    if ($(".outputBox").text().includes("ERROR")){
        $(".outputBox").text("0");
    }else{
    $(".outputBox").append("0");
    }
  });
});

function doMath(input){
  try{
    let result = eval(input);
  }
  catch(err){
    return "ERROR";
  }
  let result = eval(input);
  if (!isFinite(result)){
    return "ERROR";
   }
  return result;
}
