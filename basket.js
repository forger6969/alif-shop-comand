let count = 0;

    function plus() {
        count++;
        document.getElementById("count").textContent = count;
    }

    function minus() {
        if (count > 0) {
            count--;
        }
        document.getElementById("count").textContent = count;
        
    }