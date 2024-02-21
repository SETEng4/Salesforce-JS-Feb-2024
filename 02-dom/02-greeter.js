function onBtnGreetClick(){
            // locate the text box
            var txtUserName = document.getElementById('txtUserName');

            // access the value of the text box
            var userName = txtUserName.value;

            // prepare the personalized greet message
            var greetMsg = 'Hi '+ userName + ', Have a nice day!';

            // locate the div(divMessage)
            var divMessage = document.getElementById('divMessage');

            // display the greet message in the div
            divMessage.innerText = greetMsg;
        }

        function onDocumentLoad(){
            // locate the button
            var btnGreet = document.getElementById('btnGreet');

            // subscribe to the click event of the button
            btnGreet.addEventListener('click', onBtnGreetClick)
        }

        // execute the given function when the document is loaded (when all the dom objects are created in the memory)
        window.addEventListener('load', onDocumentLoad)