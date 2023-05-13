grove.setupWifi(
SerialPin.P3,
SerialPin.P2,
BaudRate.BaudRate115200,
"T-Box",
"BacoWill1Wifi!"
)
basic.forever(function () {
    if (grove.wifiOK()) {
        basic.showIcon(IconNames.Yes)
        grove.sendToThinkSpeak(
        "BYC0J741W9908Z5M",
        input.lightLevel(),
        grove.measureInCentimetersV2(DigitalPin.C16),
        -999,
        -999,
        -999,
        -999,
        -999,
        -999
        )
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
})
