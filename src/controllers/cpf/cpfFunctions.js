module.exports = {
    getCpf() {
        let random = ("000000000" + Math.floor(Math.random() * Math.pow(10, 9))).toString().slice(-9);
        const eArray = Array.from(String(random), Number);
        var sum1 = 0;
        for (var i = 0; i < 9; i++) {
            sum1 += (eArray[i] * (10 - i));
        }
        eArray.push((11 - (sum1 % 11)) >= 10 ? 0 : (11 - (sum1 % 11)))
        var sum2 = 0;
        for (var l = 0; l < 10; l++) {
            sum2 += (eArray[l] * (11 - l));
        }
        eArray.push((11 - (sum2 % 11)) >= 10 ? 0 : (11 - (sum2 % 11)))
        return (random + ((11 - (sum1 % 11)) >= 10 ? 0 : (11 - (sum1 % 11))) + ((11 - (sum2 % 11)) >= 10 ? 0 : (11 - (sum2 % 11))));
    },

    validCpf(e) {
        if (e.length !== 11) {
            return false;
        } else {
            const eArray = Array.from(String(e), Number);
            var fisrtValidation = false;
            var secondValidation = false;
            var firstValidatorCode = eArray[eArray.length - 2];
            var secondValidatorCode = eArray[eArray.length - 1];
            var firstSum = 0;
            for (var i = 0; i < 9; i++) {
                firstSum += (eArray[i] * (10 - i));
            }
            var firstCodeToValidate = 11 - (firstSum % 11);
            if ((firstCodeToValidate === firstValidatorCode) ||
                (firstCodeToValidate >= 10 && firstValidatorCode === 0)) {
                fisrtValidation = true;
            }
            var secondSum = 0;
            for (var j = 0; j < 10; j++) {
                secondSum += (eArray[j] * (11 - j));
            }
            var secondCodeToValidate = 11 - (secondSum % 11);
            if ((secondCodeToValidate === secondValidatorCode) ||
                (secondCodeToValidate >= 10 && secondValidatorCode === 0)) {
                secondValidation = true;
            }
            if (fisrtValidation === true && secondValidation === true) {
                return true;
            } else {
                return false;
            }
        }
    }
}