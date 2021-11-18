module.exports = {
    getTitulo() {
        let random1 = ("00000000" + Math.floor(Math.random() * Math.pow(10, 8))).toString().slice(-8);
        let random2 = ("00" + Math.floor(((Math.random() * (28 - 1 + 1)) + 1))).toString().slice(-2);
        let random = random1 + random2;

        const eArray = Array.from(String(random), Number);
        var sum1 = 0;
        var sum2 = 0;
        for (var i = 0; i < eArray.length; i++) {
            sum1 += (eArray[i] * (i + 2));
        }
        eArray.push((sum1 % 11) >= 10 ? 0 : (sum1 % 11))
        for (var j = 8; j < eArray.length; j++) {
            sum2 += (eArray[j] * (j - 1));
        }
        return (random + ((sum1 % 11) >= 10 ? 0 : (sum1 % 11)) + ((sum2 % 11) >= 10 ? 0 : (sum2 % 11)));
    },

    validTitulo(e) {
        if (e.length !== 12) {
            return false;
        } else {
            const eArray = Array.from(String(e), Number);
            var fisrtValidation = false;
            var secondValidation = false;
            const firstValidatorCode = eArray[eArray.length - 2];
            const secondValidatorCode = eArray[eArray.length - 1];
            var firstSum = 0;
            for (var i = 0; i < eArray.length - 2; i++) {
                firstSum += (eArray[i] * (i + 2));
            }
            var firstCodeToValidate = firstSum % 11;
            if ((firstCodeToValidate === firstValidatorCode) ||
                (firstCodeToValidate >= 10 && firstValidatorCode === 0)) {
                fisrtValidation = true;
            }
            var secondSum = 0;
            for (var j = 8; j < eArray.length - 1; j++) {
                secondSum += (eArray[j] * (j - 1));
            }
            var secondCodeToValidate = secondSum % 11;
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