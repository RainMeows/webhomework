$(".item").click((a) => {
    $("#big").show()
    $("#big_center").text(a.target.innerText);
})

$("#big").click(() => {
    $("#big").hide()
})