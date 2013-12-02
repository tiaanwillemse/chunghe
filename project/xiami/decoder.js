
/*
> var decoder = require('./decoder.js')
> decoder.decode('8h2xt13355_EtFi%991EE28t%a2554435.p2mF%%6_42m%Fi422%143p3f.%FF27873A3n254F73%%.eF65%%35')
'http://f3.xiami.net/4/195/56395/453146/04_1770344833_2523708.mp3'
*/

exports.decode = function (arg1) {

    var loc9 = undefined,
        loc1 = Number(arg1.charAt(0)),
        loc2 = arg1.substring(1),
        loc3 = Math.floor(loc2.length / loc1),
        loc4 = loc2.length % loc1,
        loc5 = [], loc6 = 0;

    while (loc6 < loc4) {
        if (loc5[loc6] == undefined) {
            loc5[loc6] = "";
        }
        loc5[loc6] = loc2.substr((loc3 + 1) * loc6, loc3 + 1);
        ++loc6;
    }
    loc6 = loc4;
    while (loc6 < loc1) {
        loc5[loc6] = loc2.substr(loc3 * (loc6 - loc4) + (loc3 + 1) * loc4, loc3);
        ++loc6;
    }
    var loc7="";
    loc6 = 0;
    while (loc6 < loc5[0].length) {
        loc9 = 0;
        while (loc9 < loc5.length) {
            loc7 = loc7 + loc5[loc9].charAt(loc6);
            ++loc9;
        }
        ++loc6;
    }
    loc7 = unescape(loc7);
    var loc8="";
    loc6 = 0;
    while (loc6 < loc7.length) {
        if (loc7.charAt(loc6) != "^") {
            loc8 = loc8 + loc7.charAt(loc6);
        }
        else {
            loc8 = loc8 + "0";
        }
        ++loc6;
    }
    return loc8;
}
