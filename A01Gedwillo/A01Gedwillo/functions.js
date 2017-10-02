var app = {
    launch: function () {
        app.calculateC();
        app.calculateF();
    },
    calculateC: function (){
        if (!document.getElementById("F").value){
            return;
        }else{
            var num = document.getElementById("F").value;
            // if (typeof num !== 'number'){
            //     throw Error('This field can only have numbers');
            // }else{
            //     document.getElementById("C").value = (num-32)*(5/9);
            // }
            document.getElementById("C").value = (num-32)*(5/9);
        }
    },
    calculateF: function (){
        if (!document.getElementById("C").value){
            return;
        }else{
            var num = document.getElementById("C").value;
            // if (typeof num !== 'number'){
            //     throw Error('This field can only have numbers');
            // }else{
            //     document.getElementById("F").value = (num * 9/5) + 32;
            // }
            document.getElementById("F").value = (num * 9/5) + 32;
        }
    }
};