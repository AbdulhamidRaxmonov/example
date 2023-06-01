

function tek(){
    var  radio1 = document.getElementById('radio1');
    var h11 = document.getElementById('h11');

    console.log(radio1.checked);

    if(radio1.checked == true)
    {
        h11.innerText = "To'gri";
        h11.style.color ="green";
    }
    else{
        h11.innerText = "Noto'gri";
        h11.style.color ="crimson";
    }
}