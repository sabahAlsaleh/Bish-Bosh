function runBishBosh(){
    let limit =document.getElementById('limit').value
    let bish =document.getElementById('bish').value
    let bosh =document.getElementById('bosh').value
    let resultDiv = document.getElementById('result')
    resultDiv.innerHTML=""

    for (let i = 1; i <= limit; i++) {
        if (i % bish == 0 && i % bosh == 0) {
            resultDiv.innerHTML += "Bish-Bosh<br>";
        } else if (i % bish == 0) {
            resultDiv.innerHTML += "Bish<br>";
        } else if (i % bosh == 0) {
            resultDiv.innerHTML += "Bosh<br>";
        } else {
            resultDiv.innerHTML += i + "<br>";
        }
    }

    //  runBishBoshusing jQuery
    function runBishBosh2() {
        let limit = $('#limit').val();
        let bish = $('#bish').val();
        let bosh = $('#bosh').val();
        let resultDiv = $('#result');
        resultDiv.html(""); // Clear previous results
    
        for (let i = 1; i <= limit; i++) {
            if (i % bish == 0 && i % bosh == 0) {
                resultDiv.append("Bish-Bosh<br>");
            } else if (i % bish == 0) {
                resultDiv.append("Bish<br>");
            } else if (i % bosh == 0) {
                resultDiv.append("Bosh<br>");
            } else {
                resultDiv.append(i + "<br>");
            }
        }
    }
    

}