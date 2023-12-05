// script.js

let intervalId;

function checkAndPlaySound() {
    const expectedText = "Status";
    const xpathExpression = "//div[1]";
    const element = document.evaluate(xpathExpression, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    
    console.log(element.textContent.trim());

    if (element && element.textContent.trim() !== expectedText) {
        window.open('https://', '_blank');
        clearInterval(intervalId);
    }
}

intervalId = setInterval(checkAndPlaySound, 5000);
