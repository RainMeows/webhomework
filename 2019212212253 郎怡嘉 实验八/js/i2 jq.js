$(".btn").click((a) => {
    var i = $(".btn").index(a.currentTarget);
    $(".item").each((index, ele) => {
        index == i ? ele.style.display = "block" : ele.style.display = "none"
    })
})