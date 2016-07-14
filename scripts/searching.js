var Searching =  (function() {

    var my = {};

    var binarySearch = function(items, value) {

        var startIndex = 0,
            stopIndex = items.length,
            middle = Math.floor((startIndex + stopIndex) / 2);

        while (items[middle] != value) {

            // adjust search area
            if (value < items[middle]) {
                stopIndex = middle - 1;
            }
            else if (value > items[middle]) {
                startIndex = middle + 1;
            }

            // recalculate middle
            middle = Math.floor((startIndex + stopIndex) / 2);
        }

        return (items[middle] == value) ? middle : -1;
    };

    my.binarySearch = binarySearch;

}());
