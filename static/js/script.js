// document.getElementById("sendButton").addEventListener("click", async(event) => {
//     event.preventDefault(); // Prevent the form from submitting
//     // Toggle visibility of both panels
//     document.querySelector('.right1').style.display = 'none';
//     document.querySelector('.right2').style.display = 'block';
// });



// fetchAPI that worsk perfectly


// sendButton.addEventListener("click", async() => {

//     questionInput=document.getElementById('questionInput').value;
    
//     document.querySelector('.right1').style.display = 'none';
//     document.querySelector('.right2').style.display = 'block';

//     question.innerHTML=questionInput



//     const url = 'http://127.0.0.1:8000/product/';
//     const data = {
//         questionInput: questionInput
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         // Handle response if needed
//     } catch (error) {
//         console.error('Error:', error);
//         // Handle error
//     }
// });


// Define the event listener function
// const sendButtonClickHandler = async () => {
//     const questionInput = document.getElementById('questionInput').value;

//     document.querySelector('.right1').style.display = 'none';
//     document.querySelector('.right2').style.display = 'block';

//     // question.innerHTML = questionInput;
//     question1.innerHTML = questionInput;
//     question2.innerHTML = questionInput;

//     const url = 'http://127.0.0.1:8000/product/';
//     const data = {
//         questionInput: questionInput
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
//         // Handle response if needed
//     } catch (error) {
//         console.error('Error:', error);
//         // Handle error
//     }
// };

// // Add event listener to sendButton
// sendButton1.addEventListener("click", sendButtonClickHandler);

// // Add event listener to sendButton2
// sendButton2.addEventListener("click", sendButtonClickHandler);

