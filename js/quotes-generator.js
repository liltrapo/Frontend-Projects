    let btn = document.getElementById('btn');
    let output = document.getElementById('output');
    let quotes =
      [
              '"dont give up." -leonard',
              '"just follow all your dreams and when you reach em celebrate thats the only way to truly make a hater suffocate." -Juice WRLD',
              '"told that l finna get a new prescription from that coughing m" -Juice WRLD',
              '"at the l on the phone with the doctor" -leonard',
              '"Prayer is key" -unknown',
              '"Never Get Too Comfortable With Anyone" -unknown'
      ];

      btn.addEventListener('click', function() {
         var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
         output.innerHTML = randomQuote;
      
     })