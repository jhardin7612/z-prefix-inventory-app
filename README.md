# z-prefix-inventory-app

SDI#15 Z-Prefix MVP Full stack MVP App

Setup:

Backend: install Express, Nodemon, postgress, create a pg database named inventory_db. CD into server directory then npm start

frontend: cd into client/babykicks directory, npm install then npm start

Navigating the site. There are several glitches that are currently pending fixes

1. Registered users can log into their accounts but will need to click the login button twice before page will navigate. 
2. The BabyKicks logo in top right corner will navigate all users back to homepage. 

3. Registered users will be navigated to their inventory upon log in where they can view all of thier current items. 
4. Registered users have the ability to delete items, add items using the top row of table.
5. Registered users also have the ability to dynamically edit items in their inventory by double clicking insid of the table.
  Once inside edit mode: Only edit one item at a time. Each column in the row must be edited. if no changes just cut and repaste info back in then click save. Click logo inorder to escape edit mode. 
