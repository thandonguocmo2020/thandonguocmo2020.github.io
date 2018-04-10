/* price == "206872.082271" */
/* symbol == USD or VND */
/* sort 1 usd + price || sort != 1 price + symbol */


module.exports = convertPrice(price,  symbol = '', sort = 1) {
                let num = price;

            try {
                 let _str = num.split('.')[0].toString();
                 let _decima = num.split('.')[1] ? '.'+ num.toString().split('.')[1].toString() : '';
              // Convert Number to string if not
                let Result = [];
                let length = _str.length;
                for (let i = 0; i <= length; i += 3) {
                  if(i!==length){
                      let n= i==length ?  i :  i+3;
                      Result.push(_str.substring(i,n));
                  }
                }

               return  sort == 1 ? symbol+ ' '  + Result.join(',') + _decima :  Result.join(',') + _decima + ' ' + symbol  
   
            } catch (error) {
                return  sort == 1 ? symbol+ ' ' +  "???"  :  "???"  + ' ' + symbol;
          }
      }