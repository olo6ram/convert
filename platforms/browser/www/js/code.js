function convertCurrency(){
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var ajaxhttp = new XMLHttpRequest();
    var url = "http://data.fixer.io/api/latest?access_key=7463f08dd60bb1effae36642da523f4f&symbols="+from+","+to;
    console.log(url);
    ajaxhttp.open("GET",url,true);
    ajaxhttp.send();
    ajaxhttp.onreadystatechange = function(){
        if(ajaxhttp.readyState === 4 && ajaxhttp.status == 200){
            console.log(ajaxhttp);
            var result = JSON.parse(ajaxhttp.responseText);
            console.log(ajaxhttp.responseText);
            var oneUnit = result.rates[to] / result.rates[from];
            console.log(oneUnit);
            var amt = document.getElementById('fromAmount').value;
            document.getElementById('toAmount').value = (oneUnit*amt).toFixed(2);
            
        }
    }
}