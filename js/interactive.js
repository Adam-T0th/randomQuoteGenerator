$(document).ready(function() {    
  var randomizeQuotes;
  var quotes;
  var randomBackgroundColors;
  var randomize;   
  
  $("button").click(function() {     
    //9 random quotes to match the 9 colors
    quotes = [
      "<h2>Anyone who has never made a mistake has never tried anything new.</h2> </br> - </br><p>Albert Einstein</p>",
      "<h2>Life is like riding a bicycle. To keep your balance, you must keep moving.</h2> </br> - </br><p>Albert Einstein</p>",
      "<h2>The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts.</h2> </br> - </br><p>Bertrand Russell</p>",
      "<h2>When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.</h2> </br> - </br><p>Robert Pirsig</p>",
      "<h2>I find that the harder I work, the more luck I seem to have.</h2> </br> - </br><p>Thomas Jefferson</p>",
      "<h2>Do, or do not. There is no 'try'.</h2> </br> - </br><p>Yoda</p>",
      "<h2>The only way to get rid of a temptation is to yield to it.</h2> </br> - </br><p>Oscar Wilde</p>",
      "<h2>Don't stay in bed, unless you can make money in bed.</h2> </br> - </br><p>George Burns</p>",
      "<h2>If you can't get rid of the skeleton in your closet, you'd best teach it to dance.</h2> </br> - </br><p>George Bernard Shaw</p>"
    ];
        
    randomizeQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    
    //9 random colors for the 9 random quotes    
    randomBackgroundColors = ["#4286f4", "#214c91", 
                                  "#4292af", "#40ad8c", 
                                  "#ad4040", "#db2727", 
                                  "#3d1426", "#993762", 
                                  "#613799"];     
    randomize = randomBackgroundColors[Math.floor(Math.random() * randomBackgroundColors.length)];
        
    $("body").css({"background": randomize});   
    $(".color-paragraph").css({"color": randomize});
    $("#button-text").css({"color": randomize});
    $(".btn-default").css({"border-color": randomize});     
    $("#message").html("<p>" + randomizeQuotes + "</p>");
    $("#message p").css({"color": randomize, "font-weight": 800});
    $("#message h2").css({"color": randomize});    
  })
  var initialQuote = "<h2>Anyone who has never made a mistake has never tried anything new.</h2> </br> - </br><p style='font-weight: 800'>Albert Einstein</p>";
  $("#message").html(initialQuote);  
});

































