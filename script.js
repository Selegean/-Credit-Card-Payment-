

function submitFunction() {

    var numarCard = document.getElementById("only4").value;
    var cardHolder = document.getElementById("holder").value;
    var cardMonth = document.getElementById("months").value;
    var cardYear = document.getElementById("years").value;
    var cardCvv = document.getElementById("cvv").value;
    alert("Card Number: " + numarCard + "\n" + "Card Holder: " + cardHolder + "\n" + "Expiration MM & Year: " + cardMonth + "/" + cardYear + "\n" + "CVV: " + cardCvv);


}

// export const numarCard1="numarCard";


