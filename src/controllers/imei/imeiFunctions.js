module.exports = {
    getImei() {
        let random = ("00000000000000" + Math.floor(Math.random()
            * Math.pow(10, 14))).toString().slice(-14);
        const eArray = Array.from(String(random), Number);
        var sum = 0;
        for (var i = eArray.length - 1; i >= 0; i--) {
            let auxNumber = 0;
            if (i % 2 === 0) {
                sum += eArray[i];
            } else {
                auxNumber = eArray[i] * 2;
                if (auxNumber > 9) {
                    while (auxNumber) {
                        sum += auxNumber % 10;
                        auxNumber = Math.floor(auxNumber / 10);
                    }
                } else {
                    sum += auxNumber;
                }
            }
        }
        return (random + ((10 - (sum % 10)) === 10
            ? 0 : (10 - (sum % 10))));
    },

    validImei(e) {
        if (e.length !== 15) {
            return false;
        } else {
            const eArray = Array.from(String(e), Number);
            var sum = 0;
            for (var i = eArray.length - 1; i >= 0; i--) {
                let auxNumber = 0;
                if (i % 2 === 0) {
                    sum += eArray[i];
                } else {
                    auxNumber = eArray[i] * 2;
                    if (auxNumber > 9) {
                        while (auxNumber) {
                            sum += auxNumber % 10;
                            auxNumber = Math.floor(auxNumber / 10);
                        }
                    } else {
                        sum += auxNumber;
                    }
                }
            }
            if (sum % 10 === 0) {
                return true;
            } else {
                return false;
            }
        }
    }
}