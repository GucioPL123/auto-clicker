input.onButtonPressed(Button.A, function () {
    click = true
})
input.onButtonPressed(Button.B, function () {
    click = false
})
let click = false
mouse.startMouseService()
click = false
basic.forever(function () {
    if (click == true) {
        basic.showLeds(`
            . # . . .
            . # # . .
            . # # # .
            . # # . .
            . # . . .
            `)
        mouse.click()
    } else {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
})
