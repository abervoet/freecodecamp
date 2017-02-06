/*      https://www.freecodecamp.com/challenges/convert-html-entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

// solution with map
function convertHTML(str) {
    htmlCharMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': "&apos;"
    };

    return str.split('').map(function (char) {
        return htmlCharMap[char] || char;
    }).join('');
}

// solution with chained string.replace
function convertHTML(str) {
    var res = str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&apos;')
        .replace(/"/g, '&quot;');
    return res;
}

//solution with char by char switch replace
function convertHTML(str) {
    var result = str.split('');

    for (var i = 0; i < result.length; i++) {
        switch (result[i]) {
            case '<':
                result[i] = '&lt;';
                break;
            case '&':
                result[i] = '&amp;';
                break;
            case '>':
                result[i] = '&gt;';
                break;
            case '"':
                result[i] = '&quot;';
                break;
            case "'":
                result[i] = "&apos;";
                break;
            default: break;
        }
    }

    return result.join('');
}

convertHTML("Dolce & Gabbana");

/*
    convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana.
    convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos.
    convertHTML("Sixty > twelve") should return Sixty &​gt; twelve.
    convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
    convertHTML("Shindler's List") should return Shindler&​apos;s List.
    convertHTML("<>") should return &​lt;&​gt;.
    convertHTML("abc") should return abc.
*/