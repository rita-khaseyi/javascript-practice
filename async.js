Create an async function fetchData that simulates fetching data from an API. Use setTimeout to introduce a delay of 2 seconds and then resolve the Promise with a mock data object.

Write an async function getUserData that fetches user data from an API using fetch(). Handle any errors that may occur during the request and return the user data if successful.

Implement an async function processData that takes an array of numbers as an argument. The function should iterate over the numbers and use fetchData to fetch additional data for each number. Use Promise.all to wait for all the async operations to complete and return the combined results.

Create an async function uploadFile that simulates uploading a file to a server. Use setTimeout to introduce a delay of 3 seconds and then resolve the Promise with a success message. Handle any errors that may occur during the upload process.


Create an async function fetchData that simulates fetching data from an API. Inside the function, use setTimeout to simulate an asynchronous delay of 2 seconds. Then, return a resolved Promise with a sample data object.

Write an async function getUserData that makes a request to an API to fetch user data. Use the fetch function with the await keyword to retrieve the data. Handle any errors that may occur during the request.

Create an async function processData that receives an array of URLs. Inside the function, use Promise.all with await to concurrently fetch data from each URL. Return an array of the retrieved data.

Implement an async function calculateSum that takes two numbers as parameters. Inside the function, use await to retrieve the sum of the two numbers from a remote API. Handle any errors that may occur.

Write an async function uploadFiles that takes an array of file objects. Inside the function, use Promise.all and await to upload each file to a server. Handle the response for each file upload and return the array of uploaded file URLs.