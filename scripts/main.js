(function(Formulas, DataStructures, Rendering) {

    var main = function() {

        Formulas.stackedFactorial(12);

        // factorial calculations
        for (var i = 0; i < 5; i++) {
            console.log(i + '! = ' + Formulas.basicFactorial(i));
            console.log(i + '! = ' + Formulas.stackedFactorial(i));
        }




        // create matrix-based image:
        var image = DataStructures.Matrix(4, 5, {
            color: 'white'
        });
        console.log('image:\n' + image.toString());

        image.getNode(3, 3).color = 'green';

        var startingNode = image.getNode(0,0);
        console.log('starting node: ' + JSON.stringify(startingNode));

        Rendering.fill(image, startingNode, 'white', 'blue');
        console.log('filled image:\n' + image.toString());

    };

    main();

}(Formulas, DataStructures, Rendering));
