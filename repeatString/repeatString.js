const repeatString = function (string, numberOfRepeats) {
	return (string = string.repeat(numberOfRepeats))
}
console.log(repeatString('hello', 3))

module.exports = repeatString
