
function handlerNumber(num){
    Number.prototype.noExponents= function(){
        var data= String(this).split(/[eE]/);

        if(data.length== 1) return data[0]; 
    
        var  z= '', sign= this<0? '-':'',
        str= data[0].replace('.', ''),
        mag= Number(data[1])+ 1;
    
        if(mag<0){
            z= sign + '0.';
            while(mag++) z += '0';
            return z + str.replace(/^\-/,'');
        }
        mag -= str.length;  
        while(mag--) z += '0';
        return str + z;
    }

    return num.noExponents();
}


export const convertPrice =   function(_obj){
  
    if(_obj){
        Object.keys(_obj._doc).map(key => {
        _obj._doc[key] = typeof _obj._doc[key] == 'number' ?  handlerNumber(_obj._doc[key]) : _obj._doc[key];
       });
      return _obj;
    }else{
      return  _obj;
    }

}