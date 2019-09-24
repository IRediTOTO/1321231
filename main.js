var btn = document.querySelector("#btn-sum");



btn.addEventListener("click", function () {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    console.log(num1, num2);

    var tong = parseInt(num1) + parseInt(num2);
    document.getElementById('num3').value = tong;
});


document.getElementById('btn-disapear').addEventListener("click", function () {
    // this.classList.add("disapear");  //Kieeru nay k chay :S cha hieu sao
    this.style.visibility = "hidden";


})

document.getElementById('btn-disapear-2s').addEventListener('click', function () {
    setTimeout(() => {
        this.style.visibility = "hidden";
    }, 2000);

})


var create10bt = document.getElementById('create10bt');

for (var i = 0; i < 10; i++) {

    var newbt = document.createElement("button");
    var btntext = document.createTextNode("Nút thứ " + (i+1));
    newbt.appendChild(btntext);
    create10bt.appendChild(newbt);
    newbt.addEventListener("click", function () {
        document.getElementById('num3').value="nut thu"+(i+1);
    })
}