My first project: Online shop and blog for sale spinning fishing articles.
The main features of project inludes:
1. Serching engine field (it's used by onkeyup="search()" -> (Works only in firt page) That means, when you write something in the field it's automaticaly bring you the products by name);
2. Blog -> On first page and also in the aboutfishing page with link's;
3. Shopping cart -> (Works only in firt page) it's add the product in cart, can calculate price per unit, total price, place order etc.
4. Login/Register -> Register user, save dates in local storage to not miss your data, login (active alert when your data isn't match) -> after that it's return you at the mane page with your (First and Second name) and the href will modify to go further to profile page. Also you will have a button to localstorage.clear all your data.
5. Profile page -> Here you have a link with Login/Register input field and will be completed automaticaly, but you can also can change the information and saved it. Also you can chage the profile picture and save in localy (local storage is also saving it localy) and after that you could navigate in all the site page as you were login with your picture and name.
6. Automatic autocomplete products:
A. In the firts page and the products ar imported from htmlproducts.js with link from products.js - where all the products is imported by an array of objects with link's on products.html?id=.
B. In products.html all the products ar imported htmlproducts.js. I have create an array of objects that's injected in some empty div's when an product is called. Here also the imported info in bring by products.html?id=.

In future:
I want to add an filter with low/high price or to ordering;
I want to add an favorites page;
I want to add an filter by categories with link's etc. 
Details and contact section