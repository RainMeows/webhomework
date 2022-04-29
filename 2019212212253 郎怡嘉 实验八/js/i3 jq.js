var num = 3
$('#btn').click(() => {
    var cl = $('#item').clone(true)
    var clch = cl.find('#u-left')
    clch.text(++num)
    $('#main').append(cl)
})

$('body').on('click', '.u-right', (e) => {
    e.currentTarget.parentNode.remove()
    num--;
    $('.u-left').each((index, ele) => {
        ele.innerHTML = index
    })
})