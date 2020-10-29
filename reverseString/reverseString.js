const reverseString = function (string) {
	return (string = '')
		? ''
		: (splitString = string.split('').reverse().join(''))
}

console.log(reverseString('nick'))

module.exports = reverseString
