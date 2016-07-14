var Stopwatch = (function() {

    var stopwatch = function(spec) {

        var that = {},
            startTime,
            isRunning = false,
            timerId,
            timeElapsed;


        // declare private inner functions
        var startStop = function (callback) {
            // if not running, start the timer
            if (!timerId) {
                timerId = setInterval(function() {
                    currentTime = new Date().getTime();
                    if (isRunning) {
                        callback(currentTime);
                    }
                }, 10);
            }
            isRunning = (!isRunning);
        };

        that.startStop = startStop;

        return that;
    };

    var mySw = stopwatch();

    document.getElementById('start').onclick = function(){
        mySw.startStop(function(timeElapsed) {
            document.getElementById('display').innerText = timeElapsed;
        });
    };

}());
