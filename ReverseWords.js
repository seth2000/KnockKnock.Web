function ReverseWords(sentence) {
    var words = sentence.split(/\s+/);
    var result = "";
    words.forEach(w => {
        result = result + " " + w.split("").reduce((revString, char) => char + revString, "");
    });
    return result;
}
exports.ReverseWords = ReverseWords;