<script>
    function toDou(iNum) {
        return iNum < 10 ? '0' + iNum : '' + iNum;
    }
    var arr = ['seven', 'one', 'two', 'three', 'four', 'five', 'six'];
    window.onload = function() {
        var oYearBox = document.getElementById('year');
        var oTimeBox = document.getElementById('time');
        var aImg = oYearBox.getElementsByTagName('img');
        var aImg2 = oTimeBox.getElementsByTagName('img');

        function tick() {
            var oDate = new Date();
            var Y = oDate.getFullYear();
            var M = oDate.getMonth() + 1;
            var D = oDate.getDate();
            var h = oDate.getHours();
            var m = oDate.getMinutes();
            var s = oDate.getSeconds();
            var W = oDate.getDay();
            var str = Y + ' ' + toDou(M) + ' ' + toDou(D);
            for (var i = 0; i < aImg.length; i++) {
                if (aImg[i].className == 'num') {
                    aImg[i].src = 'images/' + str.charAt(i) + '.png';
                }
            }
            var str2 = toDou(h) + ':' + toDou(m) + ':' + toDou(s);
            for (var i = 0; i < aImg2.length; i++) {
                if (aImg2[i].className == 'num') {
                    aImg2[i].src = 'images/' + str2.charAt(i) + '.png';
                }
                if (aImg2[i].className == 'num2') {
                    aImg2[i].src = 'images/' + arr[W] + '.png';
                }
            }
        }
        tick();
        setInterval(tick, 1000);
    };
    </script>