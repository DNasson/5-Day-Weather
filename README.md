# 5-Day-Weather

# User Story
AS A traveler <br>
I WANT to see the weather outlook for multiple cities <br>
SO THAT I can plan a trip accordingly <br>

# Acceptance Criteria
GIVEN a weather dashboard with form inputs <br>
WHEN I search for a city <br>
THEN I am presented with current and future conditions for that city and that city is added to the search history <br>
WHEN I view current weather conditions for that city <br>
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed <br>
WHEN I view future weather conditions for that city <br>
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity <br>
WHEN I click on a city in the search history <br>
THEN I am again presented with current and future conditions for that city <br>

## Description

The weather forecast application was built to give weather information about cities that the user searches for. The user will be given a current forecast of the city that the searched and a 5-day forecast which details: temperature, an icon to describe the weather, a description of the weather, wind speed and humidity. The previous searches will display as buttons next to the current forecast and when clicked the forecast of that city will redisplay. 

The motivation behind this project was to give a user that is travelling a resource to understand what the weather is like where they would like to travel. 

In completing this application I learned how event listeners worked in that they need a click or submit to listen for, not the title of the button that is pushed. I learned how to link a button click to the information that I want to have displayed.

## Usage

The user will be presented with a screen with placeholders for the information they will search for. Upon searching for a city name they will have the current weather and a 5-day forecast displayed. Next to the current forecast there will be a row of buttons showing the previously searched cities upon clicking they will be able to get that forecast information displayed again. 

Deployed URL: https://dnasson.github.io/5-Day-Weather/
GitHub Repository URL: https://github.com/DNasson/5-Day-Weather

Opening Screenshot: ![A8B3777B-2CCC-4C57-AEBB-CFABCAA34593](https://user-images.githubusercontent.com/123035338/231852385-b6837560-cfec-444d-9c35-84145480d676.jpeg)
Screenshot with searches: ![AAB3147C-C00C-4912-B7AC-2E371359D725](https://user-images.githubusercontent.com/123035338/231852401-bebe453c-8094-432c-8c19-4cee6afa5d50.jpeg)


## Credits

Juan Delgado - Tutor <br>
Blake Davis - Tutor 

## License

MIT License

Copyright (c) 2023 Danielle Memmott Nasson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
