## INTRODUCTION
Pizza Time - a website that allows the user to specify the type of pizza they want. Made in order to highlight my knowledge of constructors and prototypes and the interaction between them.

### SPECS
This website will allow the user to order a pizza with several options:
1.  Size (Personal, Regular)
2.  Crust Type (Semolina, Cornmeal, Gluten-free)
3.  Toppings (Goat Cheese, Pepperoni, Calabrian Chilis, Mushrooms, Spinach, Meatballs, Olives, Arugula, Balsamic Vinegar, and more)
4.  Name (User will enter name to receive a personal thank you from the business)

Once the order is placed the user will see the cost of what they selected, the total cost of the order, and a thank you addressed to them.

| BEHAVIOR | INPUT | OUTPUT |
|---|---|---|
| size entry will be two variables | regular or personal | 6 and 4 |
| crust entry will be 3 variables | semolina, cornmeal, glutenFree | 3, 3, and 4 |
| toppings entry will be several variables as a checklist | Goat Cheese  | 2 |
| toppings also holds an alt value string | Goat Cheese | alt="goat cheese" |
| user name is their own choice, no stringent rules for this except Initial Case | grApe SALAD | Grape Salad |

### INSTALLATION
https://github.com/GrapeSalad/5-12-pizzaTime is the url that will provide access to the code. To run on your computer follow these steps:

1.  Open the git bash terminal (https://git-scm.com/downloads)
2.  Click on the link to my github project to view code
3.  Click the green button that says "Clone or Download" and copy the link
4.  In git bash create a new directory in your chosen folder to store the project (touch "yourDirectory")
5.  Enter this command: git clone https://github.com/GrapeSalad/5-12-pizzaTime
6.  If you have a default text editor installed git can help you open all of the files that you need to use in one      command: git "your-text-editor" .
7.  Edit and make it better!

In this project I spent more time trying to name the variables appropriately to cut down on comment-bloating. This way the developer (you!) will be more able to follow the data-path that each variable and method take.

### USAGE
This code is available for any and all to use or borrow from. To run the code in your browser, follow the directions in the installation instructions to step 5. Once the files are downloaded, find them in your file browser and double click on the index.html file.

### KNOWN BUGS
There is one feature that may be viewed as a bug by some, that of the dynamic pizza builder not moving with the rest of the content. This is intentional.

### HISTORY/CREDIT
I, GrapeSalad, built this website on Friday the 12th of May in 2017.

### LICENSE
Open Source Licensing via the MIT software license.


### POTENTIAL FUTURE FUNCTIONALITY FOR THE SITE
I plan on trying to develop this site further, and here are a few of my ideas for increasing functionality:
1.  Allow user to order more than one pizza
2.  Add delivery capability?
3.  Allow user to choose delivery options
4.  Accept user address input
5.  Calculate delivery route in google maps
