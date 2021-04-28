app.controller("CharsetController", function ($scope, $timeout, $http) {

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

    // $http.get('js/charsets.json').success(function (data) {
    //     $scope.charsets = data;
    // });

    $scope.charsets = {
        "ASCII": {
            "encode": {
                "NUL": { "dec": 0, "hex": "00", "bin": "00000000" },
                "SOH": { "dec": 1, "hex": "01", "bin": "00000001" },
                "STX": { "dec": 2, "hex": "02", "bin": "00000010" },
                "ETX": { "dec": 3, "hex": "03", "bin": "00000011" },
                "EOT": { "dec": 4, "hex": "04", "bin": "00000100" },
                "ENQ": { "dec": 5, "hex": "05", "bin": "00000101" },
                "ACK": { "dec": 6, "hex": "06", "bin": "00000110" },
                "BEL": { "dec": 7, "hex": "07", "bin": "00000111" },
                "BS": { "dec": 8, "hex": "08", "bin": "00001000" },
                "HT": { "dec": 9, "hex": "09", "bin": "00001001" },
                "LF": { "dec": 10, "hex": "0A", "bin": "00001010" },
                "VT": { "dec": 11, "hex": "0B", "bin": "00001011" },
                "FF": { "dec": 12, "hex": "0C", "bin": "00001100" },
                "CR": { "dec": 13, "hex": "0D", "bin": "00001101" },
                "SO": { "dec": 14, "hex": "0E", "bin": "00001110" },
                "SI": { "dec": 15, "hex": "0F", "bin": "00001111" },
                "DLE": { "dec": 16, "hex": "10", "bin": "00010000" },
                "DC1": { "dec": 17, "hex": "11", "bin": "00010001" },
                "DC2": { "dec": 18, "hex": "12", "bin": "00010010" },
                "DC3": { "dec": 19, "hex": "13", "bin": "00010011" },
                "DC4": { "dec": 20, "hex": "14", "bin": "00010100" },
                "NAK": { "dec": 21, "hex": "15", "bin": "00010101" },
                "SYN": { "dec": 22, "hex": "16", "bin": "00010110" },
                "ETB": { "dec": 23, "hex": "17", "bin": "00010111" },
                "CAN": { "dec": 24, "hex": "18", "bin": "00011000" },
                "EM": { "dec": 25, "hex": "19", "bin": "00011001" },
                "SUB": { "dec": 26, "hex": "1A", "bin": "00011010" },
                "ESC": { "dec": 27, "hex": "1B", "bin": "00011011" },
                "FS": { "dec": 28, "hex": "1C", "bin": "00011100" },
                "GS": { "dec": 29, "hex": "1D", "bin": "00011101" },
                "RS": { "dec": 30, "hex": "1E", "bin": "00011110" },
                "US": { "dec": 31, "hex": "1F", "bin": "0011111" },
                "space": { "dec": 32, "hex": "20", "bin": "00100000" },
                "!": { "dec": 33, "hex": "21", "bin": "00100001" },
                "\"": { "dec": 34, "hex": "22", "bin": "00100010" },
                "#": { "dec": 35, "hex": "23", "bin": "00100011" },
                "$": { "dec": 36, "hex": "24", "bin": "00100100" },
                "%": { "dec": 37, "hex": "25", "bin": "00100101" },
                "&": { "dec": 38, "hex": "26", "bin": "00100110" },
                "'": { "dec": 39, "hex": "27", "bin": "00100111" },
                "(": { "dec": 40, "hex": "28", "bin": "00101000" },
                ")": { "dec": 41, "hex": "29", "bin": "00101001" },
                "*": { "dec": 42, "hex": "2A", "bin": "00101010" },
                "+": { "dec": 43, "hex": "2B", "bin": "00101011" },
                ",": { "dec": 44, "hex": "2C", "bin": "00101100" },
                "-": { "dec": 45, "hex": "2D", "bin": "00101101" },
                ".": { "dec": 46, "hex": "2E", "bin": "00101110" },
                "/": { "dec": 47, "hex": "2F", "bin": "00101111" },
                "0": { "dec": 48, "hex": "30", "bin": "00110000" },
                "1": { "dec": 49, "hex": "31", "bin": "00110001" },
                "2": { "dec": 50, "hex": "32", "bin": "00110010" },
                "3": { "dec": 51, "hex": "33", "bin": "00110011" },
                "4": { "dec": 52, "hex": "34", "bin": "00110100" },
                "5": { "dec": 53, "hex": "35", "bin": "00110101" },
                "6": { "dec": 54, "hex": "36", "bin": "00110110" },
                "7": { "dec": 55, "hex": "37", "bin": "00110111" },
                "8": { "dec": 56, "hex": "38", "bin": "00111000" },
                "9": { "dec": 57, "hex": "39", "bin": "00111001" },
                ":": { "dec": 58, "hex": "3A", "bin": "00111010" },
                ";": { "dec": 59, "hex": "3B", "bin": "00111011" },
                "<": { "dec": 60, "hex": "3C", "bin": "00111100" },
                "=": { "dec": 61, "hex": "3D", "bin": "00111101" },
                ">": { "dec": 62, "hex": "3E", "bin": "00111110" },
                "?": { "dec": 63, "hex": "3F", "bin": "00111111" },
                "@": { "dec": 64, "hex": "40", "bin": "01000000" },
                "A": { "dec": 65, "hex": "41", "bin": "01000001" },
                "B": { "dec": 66, "hex": "42", "bin": "01000010" },
                "C": { "dec": 67, "hex": "43", "bin": "01000011" },
                "D": { "dec": 68, "hex": "44", "bin": "01000100" },
                "E": { "dec": 69, "hex": "45", "bin": "01000101" },
                "F": { "dec": 70, "hex": "46", "bin": "01000110" },
                "G": { "dec": 71, "hex": "47", "bin": "01000111" },
                "H": { "dec": 72, "hex": "48", "bin": "01001000" },
                "I": { "dec": 73, "hex": "49", "bin": "01001001" },
                "J": { "dec": 74, "hex": "4A", "bin": "01001010" },
                "K": { "dec": 75, "hex": "4B", "bin": "01001011" },
                "L": { "dec": 76, "hex": "4C", "bin": "01001100" },
                "M": { "dec": 77, "hex": "4D", "bin": "01001101" },
                "N": { "dec": 78, "hex": "4E", "bin": "01001110" },
                "O": { "dec": 79, "hex": "4F", "bin": "01001111" },
                "P": { "dec": 80, "hex": "50", "bin": "01010000" },
                "Q": { "dec": 81, "hex": "51", "bin": "01010001" },
                "R": { "dec": 82, "hex": "52", "bin": "01010010" },
                "S": { "dec": 83, "hex": "53", "bin": "01010011" },
                "T": { "dec": 84, "hex": "54", "bin": "01010100" },
                "U": { "dec": 85, "hex": "55", "bin": "01010101" },
                "V": { "dec": 86, "hex": "56", "bin": "01010110" },
                "W": { "dec": 87, "hex": "57", "bin": "01010111" },
                "X": { "dec": 88, "hex": "58", "bin": "01011000" },
                "Y": { "dec": 89, "hex": "59", "bin": "01011001" },
                "Z": { "dec": 90, "hex": "5A", "bin": "01011010" },
                "[": { "dec": 91, "hex": "5B", "bin": "01011011" },
                "\\": { "dec": 92, "hex": "5C", "bin": "01011100" },
                "]": { "dec": 93, "hex": "5D", "bin": "01011101" },
                "^": { "dec": 94, "hex": "5E", "bin": "01011110" },
                "_": { "dec": 95, "hex": "5F", "bin": "01011111" },
                "`": { "dec": 96, "hex": "60", "bin": "01100000" },
                "a": { "dec": 97, "hex": "61", "bin": "01100001" },
                "b": { "dec": 98, "hex": "62", "bin": "01100010" },
                "c": { "dec": 99, "hex": "63", "bin": "01100011" },
                "d": { "dec": 100, "hex": "64", "bin": "01100100" },
                "e": { "dec": 101, "hex": "65", "bin": "01100101" },
                "f": { "dec": 102, "hex": "66", "bin": "01100110" },
                "g": { "dec": 103, "hex": "67", "bin": "01100111" },
                "h": { "dec": 104, "hex": "68", "bin": "01101000" },
                "i": { "dec": 105, "hex": "69", "bin": "01101001" },
                "j": { "dec": 106, "hex": "6A", "bin": "01101010" },
                "k": { "dec": 107, "hex": "6B", "bin": "01101011" },
                "l": { "dec": 108, "hex": "6C", "bin": "01101100" },
                "m": { "dec": 109, "hex": "6D", "bin": "01101101" },
                "n": { "dec": 110, "hex": "6E", "bin": "01101110" },
                "o": { "dec": 111, "hex": "6F", "bin": "01101111" },
                "p": { "dec": 112, "hex": "70", "bin": "01110000" },
                "q": { "dec": 113, "hex": "71", "bin": "01110001" },
                "r": { "dec": 114, "hex": "72", "bin": "01110010" },
                "s": { "dec": 115, "hex": "73", "bin": "01110011" },
                "t": { "dec": 116, "hex": "74", "bin": "01110100" },
                "u": { "dec": 117, "hex": "75", "bin": "01110101" },
                "v": { "dec": 118, "hex": "76", "bin": "01110110" },
                "w": { "dec": 119, "hex": "77", "bin": "01110111" },
                "x": { "dec": 120, "hex": "78", "bin": "01111000" },
                "y": { "dec": 121, "hex": "79", "bin": "01111001" },
                "z": { "dec": 122, "hex": "7A", "bin": "01111010" },
                "{": { "dec": 123, "hex": "7B", "bin": "01111011" },
                "|": { "dec": 124, "hex": "7C", "bin": "01111100" },
                "}": { "dec": 125, "hex": "7D", "bin": "01111101" },
                "~": { "dec": 126, "hex": "7E", "bin": "01111110" },
                "DEL": { "dec": 127, "hex": "7F", "bin": "11111111" }
            },
            "decode": {
                "0": { "char": "NUL", "hex": "00", "bin": "00000000" },
                "1": { "char": "SOH", "hex": "01", "bin": "00000001" },
                "2": { "char": "STX", "hex": "02", "bin": "00000010" },
                "3": { "char": "ETX", "hex": "03", "bin": "00000011" },
                "4": { "char": "EOT", "hex": "04", "bin": "00000100" },
                "5": { "char": "ENQ", "hex": "05", "bin": "00000101" },
                "6": { "char": "ACK", "hex": "06", "bin": "00000110" },
                "7": { "char": "BEL", "hex": "07", "bin": "00000111" },
                "8": { "char": "BS", "hex": "08", "bin": "00001000" },
                "9": { "char": "HT", "hex": "09", "bin": "00001001" },
                "10": { "char": "LF", "hex": "0A", "bin": "00001010" },
                "11": { "char": "VT", "hex": "0B", "bin": "00001011" },
                "12": { "char": "FF", "hex": "0C", "bin": "00001100" },
                "13": { "char": "CR", "hex": "0D", "bin": "00001101" },
                "14": { "char": "SO", "hex": "0E", "bin": "00001110" },
                "15": { "char": "SI", "hex": "0F", "bin": "00001111" },
                "16": { "char": "DLE", "hex": "10", "bin": "00010000" },
                "17": { "char": "DC1", "hex": "11", "bin": "00010001" },
                "18": { "char": "DC2", "hex": "12", "bin": "00010010" },
                "19": { "char": "DC3", "hex": "13", "bin": "00010011" },
                "20": { "char": "DC4", "hex": "14", "bin": "00010100" },
                "21": { "char": "NAK", "hex": "15", "bin": "00010101" },
                "22": { "char": "SYN", "hex": "16", "bin": "00010110" },
                "23": { "char": "ETB", "hex": "17", "bin": "00010111" },
                "24": { "char": "CAN", "hex": "18", "bin": "00011000" },
                "25": { "char": "EM", "hex": "19", "bin": "00011001" },
                "26": { "char": "SUB", "hex": "1A", "bin": "00011010" },
                "27": { "char": "ESC", "hex": "1B", "bin": "00011011" },
                "28": { "char": "FS", "hex": "1C", "bin": "00011100" },
                "29": { "char": "GS", "hex": "1D", "bin": "00011101" },
                "30": { "char": "RS", "hex": "1E", "bin": "00011110" },
                "31": { "char": "US", "hex": "1F", "bin": "00011111" },
                "32": { "char": "space", "hex": "20", "bin": "00100000" },
                "33": { "char": "!", "hex": "21", "bin": "00100001" },
                "34": { "char": "\"", "hex": "22", "bin": "00100010" },
                "35": { "char": "#", "hex": "23", "bin": "00100011" },
                "36": { "char": "$", "hex": "24", "bin": "00100100" },
                "37": { "char": "%", "hex": "25", "bin": "00100101" },
                "38": { "char": "&", "hex": "26", "bin": "00100110" },
                "39": { "char": "'", "hex": "27", "bin": "00100111" },
                "40": { "char": "(", "hex": "28", "bin": "00101000" },
                "41": { "char": ")", "hex": "29", "bin": "00101001" },
                "42": { "char": "*", "hex": "2A", "bin": "00101010" },
                "43": { "char": "+", "hex": "2B", "bin": "00101011" },
                "44": { "char": ",", "hex": "2C", "bin": "00101100" },
                "45": { "char": "-", "hex": "2D", "bin": "00101101" },
                "46": { "char": ".", "hex": "2E", "bin": "00101110" },
                "47": { "char": "/", "hex": "2F", "bin": "00101111" },
                "48": { "char": "0", "hex": "30", "bin": "00110000" },
                "49": { "char": "1", "hex": "31", "bin": "00110001" },
                "50": { "char": "2", "hex": "32", "bin": "00110010" },
                "51": { "char": "3", "hex": "33", "bin": "00110011" },
                "52": { "char": "4", "hex": "34", "bin": "00110100" },
                "53": { "char": "5", "hex": "35", "bin": "00110101" },
                "54": { "char": "6", "hex": "36", "bin": "00110110" },
                "55": { "char": "7", "hex": "37", "bin": "00110111" },
                "56": { "char": "8", "hex": "38", "bin": "00111000" },
                "57": { "char": "9", "hex": "39", "bin": "00111001" },
                "58": { "char": ":", "hex": "3A", "bin": "00111010" },
                "59": { "char": ";", "hex": "3B", "bin": "00111011" },
                "60": { "char": "<", "hex": "3C", "bin": "00111100" },
                "61": { "char": "=", "hex": "3D", "bin": "00111101" },
                "62": { "char": ">", "hex": "3E", "bin": "00111110" },
                "63": { "char": "?", "hex": "3F", "bin": "00111111" },
                "64": { "char": "@", "hex": "40", "bin": "01000000" },
                "65": { "char": "A", "hex": "41", "bin": "01000001" },
                "66": { "char": "B", "hex": "42", "bin": "01000010" },
                "67": { "char": "C", "hex": "43", "bin": "01000011" },
                "68": { "char": "D", "hex": "44", "bin": "01000100" },
                "69": { "char": "E", "hex": "45", "bin": "01000101" },
                "70": { "char": "F", "hex": "46", "bin": "01000110" },
                "71": { "char": "G", "hex": "47", "bin": "01000111" },
                "72": { "char": "H", "hex": "48", "bin": "01001000" },
                "73": { "char": "I", "hex": "49", "bin": "01001001" },
                "74": { "char": "J", "hex": "4A", "bin": "01001010" },
                "75": { "char": "K", "hex": "4B", "bin": "01001011" },
                "76": { "char": "L", "hex": "4C", "bin": "01001100" },
                "77": { "char": "M", "hex": "4D", "bin": "01001101" },
                "78": { "char": "N", "hex": "4E", "bin": "01001110" },
                "79": { "char": "O", "hex": "4F", "bin": "01001111" },
                "80": { "char": "P", "hex": "50", "bin": "01010000" },
                "81": { "char": "Q", "hex": "51", "bin": "01010001" },
                "82": { "char": "R", "hex": "52", "bin": "01010010" },
                "83": { "char": "S", "hex": "53", "bin": "01010011" },
                "84": { "char": "T", "hex": "54", "bin": "01010100" },
                "85": { "char": "U", "hex": "55", "bin": "01010101" },
                "86": { "char": "V", "hex": "56", "bin": "01010110" },
                "87": { "char": "W", "hex": "57", "bin": "01010111" },
                "88": { "char": "X", "hex": "58", "bin": "01011000" },
                "89": { "char": "Y", "hex": "59", "bin": "01011001" },
                "90": { "char": "Z", "hex": "5A", "bin": "01011010" },
                "91": { "char": "[", "hex": "5B", "bin": "01011011" },
                "92": { "char": "\\", "hex": "5C", "bin": "01011100" },
                "93": { "char": "]", "hex": "5D", "bin": "01011101" },
                "94": { "char": "^", "hex": "5E", "bin": "01011110" },
                "95": { "char": "_", "hex": "5F", "bin": "01011111" },
                "96": { "char": "`", "hex": "60", "bin": "01100000" },
                "97": { "char": "a", "hex": "61", "bin": "01100001" },
                "98": { "char": "b", "hex": "62", "bin": "01100010" },
                "99": { "char": "c", "hex": "63", "bin": "01100011" },
                "100": { "char": "d", "hex": "64", "bin": "01100100" },
                "101": { "char": "e", "hex": "65", "bin": "01100101" },
                "102": { "char": "f", "hex": "66", "bin": "01100110" },
                "103": { "char": "g", "hex": "67", "bin": "01100111" },
                "104": { "char": "h", "hex": "68", "bin": "01101000" },
                "105": { "char": "i", "hex": "69", "bin": "01101001" },
                "106": { "char": "j", "hex": "6A", "bin": "01101010" },
                "107": { "char": "k", "hex": "6B", "bin": "01101011" },
                "108": { "char": "l", "hex": "6C", "bin": "01101100" },
                "109": { "char": "m", "hex": "6D", "bin": "01101101" },
                "110": { "char": "n", "hex": "6E", "bin": "01101110" },
                "111": { "char": "o", "hex": "6F", "bin": "01101111" },
                "112": { "char": "p", "hex": "70", "bin": "01110000" },
                "113": { "char": "q", "hex": "71", "bin": "01110001" },
                "114": { "char": "r", "hex": "72", "bin": "01110010" },
                "115": { "char": "s", "hex": "73", "bin": "01110011" },
                "116": { "char": "t", "hex": "74", "bin": "01110100" },
                "117": { "char": "u", "hex": "75", "bin": "01110101" },
                "118": { "char": "v", "hex": "76", "bin": "01110110" },
                "119": { "char": "w", "hex": "77", "bin": "01110111" },
                "120": { "char": "x", "hex": "78", "bin": "01111000" },
                "121": { "char": "y", "hex": "79", "bin": "01111001" },
                "122": { "char": "z", "hex": "7A", "bin": "01111010" },
                "123": { "char": "{", "hex": "7B", "bin": "01111011" },
                "124": { "char": "|", "hex": "7C", "bin": "01111100" },
                "125": { "char": "}", "hex": "7D", "bin": "01111101" },
                "126": { "char": "~", "hex": "7E", "bin": "01111110" },
                "127": { "char": "DEL", "hex": "7F", "bin": "11111111" }
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

    }

    $scope.receivedMessage = "";

    $scope.send = function () {
        console.log("Clicked the send button - message: " + $scope.message);

        //start sending
        $scope.sending = true;
        $scope.currentPos = 0;
        $scope.currentChar = null;

        sendCharacter($scope.currentPos);


        //end of sending
        $scope.sending = false; // finish sending

    }


    function sendCharacter(position) {

        console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

        $scope.currentChar = $scope.message.charAt(position);

        //encode it and discover the binary work... to come later... 
        console.log("Sending character: " + $scope.currentChar + ", pos: " + position);

        $scope.sendCharInfo = getCharInfo($scope.senderCharset, "encode", $scope.currentChar);

        console.log("Encoding char '" + $scope.currentChar + "' in charset '" + $scope.senderCharset + "'");
        console.log($scope.sendCharInfo);

        //sending happens - light the wires ON and OFF based on the binarry info... 


        //decode it and add it to the received message...

        if ($scope.sendCharInfo != null) {
            $scope.receiveCharInfo = getCharInfo($scope.receiverCharset, "decode", $scope.sendCharInfo.dec);
            $scope.receiveChar = $scope.receiveCharInfo.char;

        } else {
            $scope.receiveChar = "?";
        }

        //append received char 
        $scope.receivedMessage = $scope.receivedMessage + $scope.receiveChar;

        console.log("Decoded char '" + $scope.receiveChar + "' in charset '" + $scope.receiverCharset + "'");
        console.log($scope.receiveCharInfo);

        //increment current position - next time we pick next character
        $scope.currentPos = $scope.currentPos + 1;

        //break condition 
        if ($scope.currentPos < $scope.message.length) {

            console.log("Sleeping for " + $scope.clockCycle + " ms....");

            //send the next character
            $timeout(function () {
                sendCharacter($scope.currentPos);
            }, $scope.clockCycle);
        } else {
            console.log("We have finished sending the last character");
        }
    }


    function getCharInfo(charset, encodingType, c) {

        //check if charset exists in the config 
        if ($scope.charsets[charset] != undefined) {

            if ($scope.charsets[charset][encodingType][c]) {
                return $scope.charsets[charset][encodingType][c];
            }
        }

        return null;

    }

});