module.exports = {
    getEan() {
        let random = ("000000000000" + Math.floor(Math.random() * Math.pow(10, 12))).toString().slice(-12);
        const eArray = Array.from(String(random), Number);
        var sum = 0;
        for (var i = eArray.length - 1; i >= 0; i--) {
            if (i % 2 === 0) {
                sum += eArray[i];
            } else {
                sum += eArray[i] * 3;
            }
        }
        return (random + (((Math.floor(sum / 10) + 1) * 10) - sum));
    },

    validEan(e) {
        if (e.length !== 13) {
            return false;
        } else {
            const eArray = Array.from(String(e), Number);
            const validatorCode = eArray[eArray.length - 1];
            var sum = 0;
            for (var i = 0; i < eArray.length - 1; i++) {
                if (i % 2 === 0) {
                    sum += eArray[i];
                } else {
                    sum += eArray[i] * 3;
                }
            }
            var roundedValue = Math.floor(sum / 10);
            var codeToValidate =
                (((roundedValue + 1) * 10) - sum);
            if ((codeToValidate === validatorCode) ||
                (codeToValidate === 10 && validatorCode === 0)) {
                return true;
            } else {
                return false;
            }
        }
    }
}