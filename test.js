function timeConversion(s) {
    if (s.charAt(8) == "A") {
        convertAM(s)
        return convertAM(s)
    } else {
        convertPM(s)
        return convertPM(s)
    }
    function convertAM(x) {
        var new_hours = ""
        var newStr = x.substring(2)
        var hours = x.substring(0, 2)
        if (hours == "12") {
            new_hours = "00"
            newStr = new_hours + newStr
            return (newStr.substring(0, 8))
        } else {
            return (x.substring(0, 8))
        }
    }
    function convertPM(x) {
        var hours = x.substring(0, 2)
        if (hours == "12") {
            return (x.substring(0, 8))
        }
        var newStr = x.substring(0, 8)
        var firstTwo = parseInt(x.substring(0, 2))
        var newfirstTwo = (firstTwo + 12)
        newStr = newfirstTwo + newStr.substring(2, 8)
        return newStr
    }
}


console.log(timeConversion("12:45:54PM"))