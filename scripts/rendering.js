var Rendering = (function(d3) {

    var my = {};

    // Simple flood fill using recursion
    var recursiveFloodFill = function recursiveFloodFill(image, startNode, targetColor, replacementColor) {

        // rare case: if the 2 colors are equal, nothing changes
        if (targetColor === replacementColor) {
            return;
        }

        else if (!startNode) {
            console.log('invalid starting node');
            return;
        }

        // if node color !== target color, return
        else if (startNode.color !== targetColor) {
            return;
        }

        // perform color replacement
        else {
            startNode.color = replacementColor;
            recursiveFloodFill(image, image.getNorth(startNode), targetColor, replacementColor);
            recursiveFloodFill(image, image.getSouth(startNode), targetColor, replacementColor);
            recursiveFloodFill(image, image.getEast(startNode), targetColor, replacementColor);
            recursiveFloodFill(image, image.getWest(startNode), targetColor, replacementColor);
        }

        //return image;
    };

    // more complex flood fill using temporary stack instead of recursion
    var stackBasedFloodFill = function stackBasedFloodFill(image, startingNode, targetColor, replacementColor) {

        var queue = [];

        // rare case: if the 2 colors are equal, nothing changes
        if (targetColor === replacementColor) {
            return;
        }

        // perform color replacement
        else {
            queue.push(startingNode);

            while (queue.length > 0) {
                // process top of queue

                var processingNode = queue[0];

                if (processingNode.color === targetColor) {
                    processingNode.color = replacementColor;
                    processingNode.processed = true;
                    queue.splice(0,1);

                    if (!image.getNorth(processingNode).processed) {
                        queue.push(image.getNorth(processingNode));
                    }

                    if (!image.getSouth(processingNode).processed) {
                        queue.push(image.getSouth(processingNode));
                    }

                    if (!image.getEast(processingNode).processed) {
                        queue.push(image.getEast(processingNode));
                    }

                    if (!image.getWest(processingNode).processed) {
                        queue.push(image.getWest(processingNode));
                    }
                }
            }
        }
    };

    my.fill = function(image, startingNode, targetColor, replacementColor) {
        recursiveFloodFill(image, startingNode, targetColor, replacementColor);
    };

    return my;

}(d3));
