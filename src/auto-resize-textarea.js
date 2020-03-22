var autoResizeTextarea = function (querySelector, options) {

    for (var i = 0; i < querySelector.length; i++) {
        forEachElement(querySelector[i])
    }

    var config = {
        maxHeight: Infinity
    }
    for (var option in options) {
        // noinspection JSUnfilteredForInLoop
        config[option] = options[option]
    }

    function elementHeight(element) {
        return parseFloat(getComputedStyle(element, null).height.replace("px", ""))
    }

    function updateElement(element) {
        if(!element.autoResizeTextarea.initialHeight) {
            element.autoResizeTextarea.initialHeight = elementHeight(element)
            element.autoResizeTextarea.initialScrollHeight = parseFloat(element.scrollHeight)
        }
        element.style.height = element.autoResizeTextarea.initialHeight + "px"
        var newHeight = element.autoResizeTextarea.initialHeight + element.scrollHeight - element.autoResizeTextarea.initialScrollHeight
        newHeight = Math.max(newHeight, element.autoResizeTextarea.initialHeight)
        element.style.height = Math.min(newHeight, config.maxHeight) + "px"
    }

    function forEachElement(element) {
        element.autoResizeTextarea = {}
        element.addEventListener("input", function () {
            updateElement(element)
        })
    }
}
