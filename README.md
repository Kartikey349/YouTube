- Head
- Body
    - Sidebar
        - MenuItems
    - MainContainer
        - ButtonList
        - videoContainer
            -videoCard


Debouncing:
    typing slow: 200ms
    typing fast: 30ms/key stroke


performance:
    -iphone pro max = 14 letters * 1000 people = 14000 api calls
    - with debouncing =  3 api calls * 1000 = 3000


debouncing with 200ms
    - if difference btw 2 key strokes is <200ms - decline api calls
    - if > 200ms make an api call

