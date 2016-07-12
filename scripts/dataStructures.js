var DataStructures = (function() {

    var my = {};

    var Matrix = function(w, h, initial) {
        this.data = [];
        this.rows = h;
        this.cols = w;
        this.initial = initial;

        var a, b;
        for (a = 0; a < h; a++) {
            var row = [];

            for (b = 0; b < w; b++) {
                row[b] = {};

                var prop;
                for (prop in initial) {
                    row[b][prop] = initial[prop];
                }
                row[b].x = b;
                row[b].y = a;
            }

            this.data[a] = row;
        }
        return this;
    };

    Matrix.prototype.toString = function() {
        return this.cols + ' x ' + this.rows + ' matrix: ' + JSON.stringify(this.data);
            return this;
    };
    //
    //
    // Matrix.prototype.getWidth = function() {
    //     return this.cols;
    // };
    //
    // Matrix.prototype.getHeight = function() {
    //     return this.rows;
    // };

    // Matrix.prototype.setValue = function(node, key, val) {
    //     if (node && key) {
    //         this.data[node.x][node.y][key] = val;
    //     }
    // };
    //
    // Matrix.prototype.getValue = function(node, key) {
    //     return this.data[node.x][node.y][key];
    // };

    Matrix.prototype.getNode = function(x, y) {
        return this.data[x][y];
    };

    Matrix.prototype.getNorth = function(node) {
        console.log('[' + node.x + ']' + '[' + node.y + '] north -> ' + '[' + node.x + ']' + '[' + (node.y - 1) + ']');
        var north = this.data[node.x][node.y - 1];
        console.log('north: ' + JSON.stringify(north));
        return north;
    };

    Matrix.prototype.getSouth = function(node) {
        var south = this.data[node.x][node.y + 1];
        console.log('south: ' + JSON.stringify(south));
        return south;
    };

    Matrix.prototype.getEast = function(node) {
        if (this.data[node.x + 1]) {
            var east = this.data[node.x + 1][node.y];
            console.log('east: ' + JSON.stringify(east));
            return east;
        }
        return null;
    };

    Matrix.prototype.getWest = function(node) {
        if (this.data[node.x - 1]) {
            var west = this.data[node.x - 1][node.y];
            console.log('west: ' + JSON.stringify(west));
            return west;
        }
        return null;
    };

    my.Matrix = function(w, h, i) {
        return new Matrix(w, h, i);
    };

    return my;

}());
