app.controller("CharsetController", function($scope, $timeout) {
    
    $scope.clockCycle = 2000; //2 second - 
    $scope.count = 0;
    $scope.message = null; 
    $scope.receivedMessage = ""; 
    $scope.sending = false; 

    $scope.senderCharset = "ASCII"; 
    $scope.receiverCharset = "ASCII"; 

    $scope.currentPos = 0; 
    $scope.sendChar = null; 
    $scope.sendCharInfo = null; //encode

    $scope.receiveChar = null; 
    $scope.receiveCharInfo = null; //decode

    $scope.charsets = {
        "ASCII": { 
            "encode": {
                "NUL": {"dec": 0, "hex": "00", "bin": "00000000"},
                "SOH": {"dec": 1, "hex": "01", "bin": "00000001"},
                "A": {"dec": 65, "hex": "41", "bin": "00000001"},
                "B": {"dec": 66, "hex": "42", "bin": "00000001"},
                "C": {"dec": 67, "hex": "43", "bin": "00000001"},
                "D": {"dec": 68, "hex": "44", "bin": "00000001"},
                "E": {"dec": 69, "hex": "45", "bin": "00000001"},
                "F": {"dec": 70, "hex": "46", "bin": "00000001"},
                "G": {"dec": 71, "hex": "47", "bin": "00000001"},
                "H": {"dec": 72, "hex": "48", "bin": "00000001"},
                "I": {"dec": 73, "hex": "49", "bin": "00000001"},
                "J": {"dec": 74, "hex": "4A", "bin": "00000001"},
                "K": {"dec": 75, "hex": "4B", "bin": "00000001"},
                "L": {"dec": 76, "hex": "4C", "bin": "00000001"},
                "M": {"dec": 77, "hex": "4D", "bin": "00000001"},
                "N": {"dec": 78, "hex": "4E", "bin": "00000001"},
                "O": {"dec": 79, "hex": "4F", "bin": "00000001"},
                "P": {"dec": 80, "hex": "50", "bin": "00000001"},
                "Q": {"dec": 81, "hex": "51", "bin": "00000001"},
                "R": {"dec": 82, "hex": "52", "bin": "00000001"},
                "S": {"dec": 83, "hex": "53", "bin": "00000001"},
                "T": {"dec": 84, "hex": "54", "bin": "00000001"},
                "a": {"dec": 97, "hex": "61", "bin": "00000001"},
                "b": {"dec": 98, "hex": "62", "bin": "00000001"},
                "c": {"dec": 99, "hex": "63", "bin": "00000001"},
                "d": {"dec": 100, "hex": "64", "bin": "00000001"},
                "e": {"dec": 101, "hex": "65", "bin": "00000001"},
                "f": {"dec": 102, "hex": "66", "bin": "00000001"},
                "g": {"dec": 103, "hex": "67", "bin": "00000001"},
                "h": {"dec": 104, "hex": "68", "bin": "00000001"},
                "i": {"dec": 105, "hex": "69", "bin": "00000001"},
                "j": {"dec": 106, "hex": "6A", "bin": "00000001"},
                "k": {"dec": 107, "hex": "6B", "bin": "00000001"},
                "l": {"dec": 108, "hex": "6C", "bin": "00000001"},
                "m": {"dec": 109, "hex": "6D", "bin": "00000001"},
                "n": {"dec": 110, "hex": "6E", "bin": "00000001"},
                "o": {"dec": 111, "hex": "6F", "bin": "00000001"},
                "p": {"dec": 112, "hex": "70", "bin": "00000001"},
                "q": {"dec": 113, "hex": "71", "bin": "00000001"},
                "r": {"dec": 114, "hex": "72", "bin": "00000001"},
                "s": {"dec": 115, "hex": "73", "bin": "00000001"},
                "t": {"dec": 116, "hex": "74", "bin": "00000001"}
            },
            "decode":{
                "0": { "char":"NUL", "hex": "00", "bin":"00000000"},
                "1": { "char":"SOH", "hex": "01", "bin":"00000001"},
                "65": {"char":"A", "hex": "41", "bin": "00000001"},
                "66": {"char":"B", "hex": "42", "bin": "00000001"},
                "67": {"char":"C", "hex": "43", "bin": "00000001"},
                "68": {"char":"D", "hex": "44", "bin": "00000001"},
                "69": {"char":"E", "hex": "45", "bin": "00000001"},
                "70": {"char":"F", "hex": "46", "bin": "00000001"},
                "71": {"char":"G", "hex": "47", "bin": "00000001"},
                "72": {"char":"H", "hex": "48", "bin": "00000001"},
                "73": {"char":"I", "hex": "49", "bin": "00000001"},
                "74": {"char":"J", "hex": "4A", "bin": "00000001"},
                "75": {"char":"K", "hex": "4B", "bin": "00000001"},
                "76": {"char":"L", "hex": "4C", "bin": "00000001"},
                "77": {"char":"M", "hex": "4D", "bin": "00000001"},
                "78": {"char":"N", "hex": "4E", "bin": "00000001"},
                "79": {"char":"O", "hex": "4F", "bin": "00000001"},
                "80": {"char":"P", "hex": "50", "bin": "00000001"},
                "81": {"char":"Q", "hex": "51", "bin": "00000001"},
                "82": {"char":"R", "hex": "52", "bin": "00000001"},
                "83": {"char":"S", "hex": "53", "bin": "00000001"},
                "84": {"char":"T", "hex": "54", "bin": "00000001"},
                "97": {"char":"a", "hex": "61", "bin": "00000001"},
                "98": {"char":"b", "hex": "62", "bin": "00000001"},
                "99": {"char":"c", "hex": "63", "bin": "00000001"},
                "100": {"char":"d", "hex": "64", "bin": "00000001"},
                "101": {"char":"e", "hex": "65", "bin": "00000001"},
                "102": {"char":"f", "hex": "66", "bin": "00000001"},
                "103": {"char":"g", "hex": "67", "bin": "00000001"},
                "104": {"char":"h", "hex": "68", "bin": "00000001"},
                "105": {"char":"i", "hex": "69", "bin": "00000001"},
                "106": {"char":"j", "hex": "6A", "bin": "00000001"},
                "107": {"char":"k", "hex": "6B", "bin": "00000001"},
                "108": {"char":"l", "hex": "6C", "bin": "00000001"},
                "109": {"char":"m", "hex": "6D", "bin": "00000001"},
                "110": {"char":"n", "hex": "6E", "bin": "00000001"},
                "111": {"char":"o", "hex": "6F", "bin": "00000001"},
                "112": {"char":"p", "hex": "70", "bin": "00000001"},
                "113": {"char":"q", "hex": "71", "bin": "00000001"},
                "114": {"char":"r", "hex": "72", "bin": "00000001"},
                "115": {"char":"s", "hex": "73", "bin": "00000001"},
                "116": {"char":"t", "hex": "74", "bin": "00000001"}
            }
        },
        "GSM03.38": { 
            "encode": {},
            "decode": {}
        },
        "UTF-8": { 
            "encode": {},
            "decode": {}
        }
            
    };



    $scope.receivedMessage = ""; 


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

        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++"); 
        
        $scope.currentChar = $scope.message.charAt(position);

        //encode it and discover the binary work... to come later... 
        console.log("Sending character: "+ $scope.currentChar + ", pos: "+  position); 

        $scope.sendCharInfo = getCharInfo($scope.senderCharset, "encode", $scope.currentChar); 

        console.log("Encoding char '"+$scope.currentChar+"' in charset '"+$scope.senderCharset+"'");
        console.log($scope.sendCharInfo); 

        //sending happens - light the wires ON and OFF based on the binarry info... 

        
        //decode it and add it to the received message...

        if($scope.sendCharInfo != null){
            $scope.receiveCharInfo = getCharInfo($scope.receiverCharset, "decode", $scope.sendCharInfo.dec);
            $scope.receiveChar = $scope.receiveCharInfo.char;  

        } else {
            $scope.receiveChar = "?"; 
        }

        //append received char 
        $scope.receivedMessage = $scope.receivedMessage+ $scope.receiveChar; 
        
        console.log("Decoded char '"+$scope.receiveChar+"' in charset '"+$scope.receiverCharset+"'");
        console.log($scope.receiveCharInfo); 

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


    function getCharInfo(charset, encodingType, c){

        //check if charset exists in the config 
        if($scope.charsets[charset] != undefined){

            if($scope.charsets[charset][encodingType][c]){
                return $scope.charsets[charset][encodingType][c];
            }
        }

        return null; 

    }

});