<template>

  <div class="vaucher">
        

    <div class="conteiner_promo animate__animated animate__rollIn">
        <div class="gift_conteiner">
        

        

            <div class="simple">
            <div class="gift_description">Do you want to make a gift for your significant other or close a successful deal during a business dinner? Come to the <b>AVELO</b> restaurant in Minsk. Appetizing national dishes are waiting for you, created according to old recipes, in a modern author's performance. Stylish interior and friendly staff will complement your experience. Throw away your worries and just enjoy the evening!</div>
            

            </div>

            <div class="promo">
              <div class="promo_description">
                  Dinner for two.<br> The voucher is valid for 3 months.

              </div>
              <div class="price">
                  300 BYR
              </div>

              <button id="modal_but" class="promo_btn">Buy Voucher</button>
            </div>

          

        </div>
         

    </div>
    

    <div class="conteiner_program">

      <div class="program_header">
          DINNER PROGRAM
  
        </div>

      <div class="dinner_program">
        
        <div class="promo_pict">
          <img src="img/vaucher/lunch-at-the-table-pour-summer-drinks-with-fresh-fruit-drinks-concept 1.png">
        </div>

        <div class="dinner_description">
          <p class="animate__animated wow animate__fadeInUpBig" data-wow-delay="2s">
          The dinner program for two at the <b>AVELO</b> restaurant includes 8 items: you can choose from the menu any 2 salads or 2 cold snacks, 2 hot dishes, 2 desserts and 2 portions of soft drinks. You can start your dinner with a selection of drinks.
          </p>
        </div>
        

        <div class="dinner_description">
          <p class="animate__animated wow animate__lightSpeedInLeft" data-wow-delay="2s">
          Fresh, original and delicious appetizer! Salads and other cold snacks with stylish presentation and exquisite flavor combination will whet your appetite before hot meals. You can choose from poultry, fish or meat dishes, and try venison. And since every dish is thought out to the smallest detail, you enjoy not only the taste, but also the aesthetics of the positions.
          </p>  
            
        </div>

        <div class="promo_pict">
          <img src="img/vaucher/squid-fried-with-curry-paste-in-white-plate-with-vegetables-and-side-dishes-on-a-white-wooden-floor 1.png">
        </div>

        <div class="promo_pict">
          <img src="img\vaucher\pexels-valeria-boltneva-827513.jpg">
        </div>

        <div class="dinner_description">
          <p class="animate__animated wow animate__rotateInUpLeft" data-wow-delay="2s">
          Desserts in the <b>AVELO</b> restaurant will also pleasantly surprise you with both taste and presentation. Cookies with warm milk, carrot dessert or rye ice cream with coarse sea salt - everyone can choose a sweet dish to their liking. Do you want to spend a pleasant evening with your loved one or a business dinner in an informal setting? Buy a gift certificate for dinner for two at the <b>AVELO</b> restaurant in Minsk. It will be delicious and very atmospheric!
          </p>
            
        </div>

        <div class="dinner_description">
          <p class="animate__animated wow animate__zoomIn" data-wow-delay="2s">
          The choice of wine for the ordered dish is not only a part of etiquette, it is a real art, subject to connoisseurs.

The wine list of our restaurant deserves a special mention: a wide selection of red, white and rosé wines; we provide guests with different regions and harvest years to choose from. You can find quite rare exclusive specimens. Sparkling wines and champagne will be no exception.
          </p>  
        </div>

        <div class="promo_pict">
          <img src="img/vaucher/pexels-kaboompics-com-5877 1.png">
        </div>

        <div class="promo_pict">
          <img src="img\vaucher\holiday-park-resort.jpg">
        </div>

        <section class="dinner_description">
          <p class="animate__animated wow animate__bounceOut" data-wow-delay="2s">
          To make your stay more soulful, cozy and pleasant, <b>AVELO</b> restaurant invites you to enjoy live music and luxurious singing of soloists any day of the week.

If you are looking for a restaurant in Minsk with live music for celebrations, choose <b>AVELO.</b> Imagine a fabulous picture: the melodic sounds of a violin, the warm tremor of candles, and a glass of aromatic wine in your hands.
          </p>  
        </section>

        
      </div>

    </div>
    <div class="overlay">
      <div class="modal" id="voucher_modal">
        <div class="modal_close">&times;</div> 
        

        <div class="modal_subtitle">Please fill out the application form</div>
        <div class="modal_descr">We will call you back within 10 minutes</div>

        <form class="feed_form" action="#">
          <input name="name" required placeholder="Your name" type="text">
          <input name="phone" required placeholder="Your phone number" type="number">
          <input name="email" required placeholder="Your e-mail" type="email">

          <button class="button_modal">Order a voucher</button>


        </form>
      </div>
    </div>
    
  </div>
   
   
</template>


<script>
import $ from 'jquery';
export default {
  name: "App",
  setup(){
     console.log($('a:first').text());
     
  },
  mounted() {
    $('#modal_but') .on("click", function() {
    $('.overlay').show();
    console.log ('test');
    $('#voucher_modal').show();
  }); 
$('.modal_close') .on("click", function() {
    $('.overlay').hide();
    console.log ('test');
    $('#voucher_modal').hide();
  }); 
   new WOW().init();        
  
  }
};

  
</script>
