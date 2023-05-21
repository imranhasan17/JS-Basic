function multiplicationTable(num){
  
    for (var i = 0; i <= 10; i++) {
        var res = num * i;
        document.write(num + "X" + i + "=" + res + "<br>");
      }
     

}
multiplicationTable(10);