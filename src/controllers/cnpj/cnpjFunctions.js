module.exports = {
    getCnpj() {
        let random = ("000000000000" + Math.floor(Math.random() * Math.pow(10, 12))).toString().slice(-12);
        const eArray = Array.from(String(random), Number);
        const firstArrayForFirstCode = eArray.slice(0, 4);
        const secondArrayForFirstCode = eArray.slice(4, 12);
        var sum1_1 = 0;
        for (var j = 0; j < 4; j++) {
            sum1_1 += (firstArrayForFirstCode[j] * (5 - j));
        }
        var sum1_2 = 0;
        for (var k = 0; k < 8; k++) {
            sum1_2 += (secondArrayForFirstCode[k] * (9 - k));
        }
        var sum1Factor = (sum1_1 + sum1_2) % 11;
        var sum1 = 0;
        sum1Factor < 2 ? sum1 = 0 : sum1 = 11 - sum1Factor;
        eArray.push(sum1)
        const firstArrayForSecondCode = eArray.slice(0, 5);
        const secondArrayForSecondCode = eArray.slice(5, 13);
        var sum2_1 = 0;
        for (var l = 0; l < 5; l++) {
            sum2_1 += (firstArrayForSecondCode[l] * (6 - l));
        }
        var sum2_2 = 0;
        for (var m = 0; m < 8; m++) {
            sum2_2 += (secondArrayForSecondCode[m] * (9 - m));
        }
        var sum2Factor = (sum2_1 + sum2_2) % 11;
        var sum2 = 0;
        sum2Factor < 2 ? sum2 = 0 : sum2 = 11 - sum2Factor;
        return (random + sum1 + sum2);
    },

    validCnpj(e) {
        if (e.length !== 14) {
            return false;
        } else {
            const eArray = Array.from(String(e), Number);
            const firstValidatorCode = eArray[eArray.length - 2];
            const secondValidatorCode = eArray[eArray.length - 1];
            const firstArrayForFirstValidation = eArray.slice(0, 4);
            const secondArrayForFirstValidation = eArray.slice(4, 12);
            var firstSumForFirstValidation = 0;
            for (var i = 0; i < 4; i++) {
                firstSumForFirstValidation += (firstArrayForFirstValidation[i] * (5 - i));
            }
            var secondSumForFirstValidation = 0;
            for (var j = 0; j < 8; j++) {
                secondSumForFirstValidation += (secondArrayForFirstValidation[j] * (9 - j));
            }
            var sumForFirstValidation = firstSumForFirstValidation + secondSumForFirstValidation;
    
            var sumDividedByFactorForFirstValidation = sumForFirstValidation % 11;
            var fisrtValidation = false;
            var firstCodeToValidate = 0;
    
            sumDividedByFactorForFirstValidation < 2
                ? firstCodeToValidate = 0
                : firstCodeToValidate = 11 - sumDividedByFactorForFirstValidation;
    
            if (firstCodeToValidate === firstValidatorCode) {
                fisrtValidation = true;
            }
            const firstArrayForSecondValidation = eArray.slice(0, 5);
            const secondArrayForSecondValidation = eArray.slice(5, 13);
            var firstSumForSecondValidation = 0;
            for (var k = 0; k < 5; k++) {
                firstSumForSecondValidation += (firstArrayForSecondValidation[k] * (6 - k));
            }
            var secondSumForSecondValidation = 0;
            for (var l = 0; l < 8; l++) {
                secondSumForSecondValidation += (secondArrayForSecondValidation[l] * (9 - l));
            }
            var sumForSecondValidation = firstSumForSecondValidation + secondSumForSecondValidation;
            var sumDividedByFactorForSecondValidation = sumForSecondValidation % 11;
            var secondValidation = false;
            var secondCodeToValidate = 0;
            sumDividedByFactorForSecondValidation < 2
                ? secondCodeToValidate = 0
                : secondCodeToValidate = 11 - sumDividedByFactorForSecondValidation;
            if (secondCodeToValidate === secondValidatorCode) {
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