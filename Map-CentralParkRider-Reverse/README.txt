Title of the Project: 
Central Park Rider

Description of the Project: 
When clicking the button on the top left of the page, the rider dynamically cycles around central park, and once the rider completes the loop, reverses back!


How to Run: 
Step 1: Within the .js file, input your own mapbox accessToken within the quotations on line 8
Afterward, drag the .html file into the browser, and click on the button that reads "Click to Move Rider Around the Park and Back!" to get the rider to start riding.
Step 2: In line 11, feel free to update the properties of style, center and zoom. There are in-line notes next to each property explaining what each controls.
Step 3: In line 19 and 20, we create a marker to add to the map (in my case it is an image of a bicycle rider). The starting coordinate for the marker, when the application is loaded, is controled by lng and lat coordinates in line 23. The image for the marker is controlled in the .css file within the .bicycle-marker class. Updating the actual image is controlled by the background-image property's url value - update it to whatever image you like within the quotations. The size of the marker is controlled by the height and width properties.
Step 4: The route array in line 27 hold the coordinates your marker will move along. If you are reversing back at the end of your journey, you will need to include the coordinate in line 23 as index 0 in the route array (more notes provided on line 28). 
Step 5: The moveRider() function is programmed to reverse course once you reach the last coordinate in the route array, as well as the coordinate at index 0, so that the rider will dynamically go back and forth. The variables in lines 38 and 39 control the state which allows this functionality to happen. The counter variable should start at 1, so that the first move of your marker is to index 1 of the route array. Because remember, the marker starts at index 0 via line 23, and therefore would not move on the first iteration of the setInterval if the first movemement (which is controlled by the counter) is to that same coordinate i.e. if the first movement is to index 0.

Roadmap of Future Improvements: 
The rider can easily take a different route than around central pack and back, say perhaps riding from your apartment to your office, and back, on perhaps, a moped 
This can be done by: 
a. In the .js file, updating the coordinates on line 14 to recenter the map if need be
b. In the .js file, updating the coordinates in line 23 to be your apartment
c. In the .js file update the coordinates in the array on line 27 to be some route from your apartment to your office, with the final coordinate in the array being your office
d. in the .css file in the style on line 19, update the url link within the quotes to be a photo of a moped rather than a bicycle