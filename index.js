var cssRuler = module.exports = {};
/**
 * get all stylesheets
 * @return {Array}
 */
cssRuler.getStylesheets = function () {
    return document.styleSheets;
};
/**
 * Get a css rule by selector
 * @param {string} css selector
 * @return {CSSRule}
 */
cssRuler.getRule = function (cssSelector) {
    var mysheet = document.styleSheets;
    if (typeof (cssSelector) !== 'string' || mysheet.length < 1) {
        return false;
    }
    for (var index = 0; index < mysheet.length; index++) {
        var myrules = document.styleSheets[index].cssRules;
        for (var i = 0; i < myrules.length; i++) {
            if (myrules[i].selectorText == cssSelector) {
                return myrules[i];
            }
        }
    }
    return false
};
/**
 * Delete css rule by selector
 * @param {string} css selector
 * @return {boolean}
 */
cssRuler.deleteRule = function (cssSelector) {
    var mysheet = document.styleSheets;
    if (typeof (cssSelector) !== 'string' || mysheet.length < 1) {
        return false;
    }
    for (var index = 0; index < mysheet.length; index++) {
        var myrules = document.styleSheets[index].cssRules;
        for (var i = 0; i < myrules.length; i++) {
            if (myrules[i].selectorText == cssSelector) {
                mysheet[index].deleteRule(i);
                return true
            }
        }
    }
    return false
};
/**
 * Edit an existing css rule by selector
 * @param {string} css selector
 * @param {object} style object
 * @return {boolean}
 */
cssRuler.editRule = function (cssSelector, rule) {
    var mysheet = document.styleSheets;
    if (typeof (cssSelector) !== 'string' || typeof (rule) !== 'object' || mysheet.length < 1) {
        return false
    }
    for (var index = 0; index < mysheet.length; index++) {
        var myrules = document.styleSheets[index].cssRules;
        for (var i = 0; i < myrules.length; i++) {
            if (myrules[i].selectorText == cssSelector) {
                for (var key in rule) {
                    mysheet[index].cssRules[i].style.setProperty(key.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase() }), rule[key]);
                }
                return true
            }
        }
    }
    return false
};
/**
 * Add a new css rule
 * @param {string} css selector
 * @param {object} style object
 * @return {boolean}
 */
cssRuler.addRule = function (cssSelector, rule) {
    var mysheet = document.styleSheets;
    if (typeof (cssSelector) !== 'string' || typeof (rule) !== 'object' || mysheet.length < 1) {
        return false
    }
    var newRule = cssSelector + ' {';
    for (var key in rule) {
        newRule += key.replace(/[A-Z]/g, function (m) { return "-" + m.toLowerCase() }) + ': ' + rule[key] + ';';
    }
    newRule += '}';
    mysheet[0].insertRule(newRule);
    return true;
};
