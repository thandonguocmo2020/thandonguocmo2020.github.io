/* price == "206872.082271" */
/* symbol == USD or VND */
/* sort 1 usd + price || sort != 1 price + symbol */


module.exports = function convertPrice(price, symbol = "", sort = 1) {
    let num = typeof price == "number" ? price.toString() : price;
    try {
        if (num) {
            let _str = num.split(".")[0].toString();
            let _decima = num.split(".")[1]
                ? "." +
                num
                    .toString()
                    .split(".")[1]
                    .toString()
                : "";
            // Convert Number to string if not
            let Result = [];
            let length = _str.length;
            for (let i = 0; i <= length; i += 3) {
                if (i == 0) {
                    // lấy các số dư đầu tiên
                    let _s = length % 3;
                    if (_s != 0) {
                        i = i + _s;
                        Result.push(_str.substring(0, _s));
                    }
                }

                // lấy các chữ số kế tiếp
                if (i !== length) {
                    let n = i == length ? i : i + 3;
                    Result.push(_str.substring(i, n));
                }
            }

            return sort == 1
                ? symbol + " " + Result.join(",") + _decima
                : Result.join(",") + _decima + " " + symbol;
        } else {
            return "???" + " " + symbol;
        }
    } catch (error) {
        console.log(error);
        console.log("CHỖ NÀY CÓ THỂ ALERT BÁO LỖI ĐỂ DEBUG ====>");
        return sort == 1 ? symbol + " " + "???" : "???" + " " + symbol;
    }
}
