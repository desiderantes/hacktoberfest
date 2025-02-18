const regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;

function getHashTags(inputText) {
    let matches = [];
    let match;

    while ((match = regex.exec(inputText))) {
        matches.push( "#" + match[1]);
    }

    return matches;
}

function getTip (inputText) {
    return inputText.replace(regex, "").trim();
}

function parseFile  (it) {
    return {
        hashtags: getHashTags(it),
        tip: getTip(it)
    }
}

