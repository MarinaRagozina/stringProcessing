// поскольку в JAICP есть только ECMA 5 версия, буду опираться именно на ее синтаксис
// использование метода filter из библиотеки underscore - лаконичное решение\
function filterNonRussianStringsFromArray(arrayOfStrings) {
    return _.filter(arrayOfStrings, function(string) { return (string.match(/[А-Яа-я]/g) || []).length >= 2});
}