module.exports = {
    getRg() {
        let random = ("00000000" + Math.floor(Math.random() * Math.pow(10, 8))).toString().slice(-8);
        const eArray = Array.from(String(random), Number);
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            sum += (eArray[i] * (2 + i));
        }
        return (random + ((11 - (sum % 11)) === 10 ? 'X' : (11 - (sum % 11)) === 11 ? 0 : (11 - (sum % 11))));
    },

    validRg(e) {
        if (e.length !== 9) {
            return false;
        } else {
            const eArray = Array.from(String(e.substring(0, 8)), Number);
            var validatorCode = e.substring(8, 9).toUpperCase();
            var sum = 0;
            for (var i = 0; i < 8; i++) {
                sum += (eArray[i] * (2 + i));
            }
            var codeToValidate = 11 - (sum % 11);
            if ((validatorCode !== 'X' && codeToValidate === Number(validatorCode)) ||
                (codeToValidate === 10 && validatorCode === 'X') ||
                (codeToValidate === 11 && Number(validatorCode) === 0)) {
                return true;
            } else {
                return false;
            }
        }
    }
}