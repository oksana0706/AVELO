<template>
<div class="booking_form">
  <form class="book_res">
   
		<h3 class="animate__animated animate__fadeInDownBig">RESERVATION FORM</h3>
		
		<fieldset class="reservation">

      <legend>
      Book a table</legend>
			
			
      <div class="rtb-text date">
            <label for="rtb-date">
          Date		</label>
        <input type="date" name="rtb-date" id="rtb-date" value="" required aria-required="true">
      </div>

    
      <div class="rtb-text time">
            <label for="rtb-time">
          Time		</label>
        <input type="time" name="rtb-time" id="rtb-time" value="" required aria-required="true">
      </div>

	
      <div class="rtb-select party">
          <label for="rtb-party">
        Guests		</label>
        <select name="rtb-party" id="rtb-party" required aria-required="true" >
                      <option value="1" >1</option>
                <option value="2" >2</option>
                <option value="3" >3</option>
                <option value="4" >4</option>
                <option value="5" >5</option>
                <option value="6" >6</option>
                <option value="7" >7</option>
                <option value="8" >8</option>
                <option value="9" >9</option>
                <option value="10" >10</option>
                <option value="11" >11</option>
                <option value="12" >12</option>
                <option value="13" >13</option>
                <option value="14" >14</option>
                <option value="15" >15</option>
                <option value="16" >16</option>
                <option value="17" >17</option>
                <option value="18" >18</option>
                <option value="19" >19</option>
                <option value="20" >20</option>
                
              </select>
      </div>

		</fieldset>
		<fieldset class="rtb-contact">

      <legend >
      Contact Information			</legend>
			
			
      <div class="rtb-text name">
            <label for="rtb-name">
          Name		</label>
        <input type="text" name="rtb-name" id="rtb-name" value="" required aria-required="true">
      </div>

	
      <div class="rtb-text email">
            <label for="rtb-email">
         E-mail address		</label>
        <input type="email" name="rtb-email" id="rtb-email" value="" required aria-required="true">
      </div>

	
      <div class="rtb-text phone">
            <label for="rtb-phone">
          Telephone		</label>
        <input type="tel" name="rtb-phone" id="rtb-phone" value="">
      </div>

		
      <div class="rtb-textarea message">
            <label for="rtb-message">
          Message	</label>
        <textarea style="resize:none" name="rtb-message" id="rtb-message"></textarea>
      </div>

		</fieldset>
		
		
		
		
		<button type="submit">Booking request</button>

  </form>

  <div class="booking">
    <div class="booking_header">
      Select date and time
    </div>
    <div class="booking_descr">
      To book a table in our restaurant, you need to select the desired date and time, use the special calendar-form posted on this page.
    </div>

    <div class="booking_header">
      Fill the form
    </div>
    <div class="booking_descr">
      When booking a time, the form will ask you to fill in several important fields, such as your phone number, number of guests, additional wishes, and possibly something else. All fields are very important to us and help us to provide a high quality service.
    </div>

    <div class="booking_header">
      Submit your application
    </div>
    <div class="booking_descr">
      After submitting your request, you will receive a notification in the form of an email that your booking request has been accepted. Please note that the submitted application and the received email about the acceptance of the application does not guarantee that your reservation has been accepted! It is very important!
    </div>

    <div class="booking_header">
      Confirmation
    </div>
    <div class="booking_descr">
      All applications go to our internal system where an individual decision is made for each application in accordance with the current load at your date and time. Most applications will be approved and you will receive a separate email confirming your booking. 
    </div>

    <div class="booking_header">
      Reminder
    </div>
    <div class="booking_descr">
      You will receive a courteous reminder email two hours before your reservation.
    </div>


  </div>
	
</div>
</template>
