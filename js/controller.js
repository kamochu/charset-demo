app.controller("CharsetController", function($scope, $timeout) {
    
    $scope.clockCycle = 2000; //2 second - 
    $scope.count = 0;
    $scope.message = null; 
    $scope.sending = false; 

    $scope.currentPos = 0; 
    $scope.currentChar = null; 


    $scope.send = function(){
        console.log("Clicked the send button - message: "+ $scope.message); 

        //start sending
        $scope.sending = true; 
        $scope.currentPos = 0; 
        $scope.currentChar = null; 

        sendCharacter($scope.currentPos);


        //end of sending
        $scope.sending = false; // finish sending

    }


    function sendCharacter(position){

        $scope.currentChar = $scope.message.charAt(position);

        //decode it and discover the binary work... to come later... 
        console.log("Sending character: "+ $scope.currentChar + ", pos: "+  position); 

        //increment current position - next time we pick next character
        $scope.currentPos = $scope.currentPos + 1; 

        //break condition 
        if($scope.currentPos < $scope.message.length) {

            console.log("Sleeping for "+$scope.clockCycle+" ms....");             

            //send the next character
            $timeout(function () {
                sendCharacter($scope.currentPos);
            },  $scope.clockCycle);
        } else {
            console.log("We have finished sending the last character"); 
        }
    }

});