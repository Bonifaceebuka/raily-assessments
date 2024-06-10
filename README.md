## Fullstack development Assessment
This application is built with the following technologies:
1. HTML
2. CSS,
4. Jquery(1.12.4)
5. PHP(8.2.18) and Apache/2.4.48
6. Laravel Framework(11.9.2)
7. MYSQL(5.0.12)
8. Font-awesome(4.7.0)
9.Composer version 2.6.5 2023-10-06 10:11:5
10. Openserver 6.0.0(8.2.18)


### This is how you can install this application
1. Clone this Repository(Repo) with the following command `git clone https://github.com/Bonifaceebuka/os-systems.git`
2. Move to the DIR of the Repo `cd os-systems.git`
3. Install composer with `composer install`
4. Save .env.example file as .env or run this command: `cp .env.example .env`
5.	Open the .env file and set the Database configurations as follows:<br>
	DB_CONNECTION=mysql<br>
	DB_HOST=127.0.0.1<br>
	DB_PORT=3306<br>
	DB_DATABASE=YOUR_DATABASE_NAME<br>
	DB_USERNAME=YOUR_SERVER_USERNAME<br>
	DB_PASSWORD=YOUR_DATABASE_PASSWORD (Leave it empty if you have none)<br>
6. Generate new Key with this command: `php artisan key:generate`
7. Import the database tables with this command: `php artisan migrate` or use the `os-system.sql file` in 'db' folder of this project
8. Run the Seeder to insert demo into the database whcih you can use for testing the application. Run the seeder with the following artisan command<br>
    `php artisan db:seed`
9.  Run `php artisan storage:link` to ensure that you don't have issues with file upload to your storage folder.
10. Start the application with `php artisan serve`
	Visit localhost:8000/ to see the front-end of the application

### This is how this application works
#### An unauthenticated user can perform the following actions on this application
1. Access the list of available posts with pagination
2. Create new post
3. Update an existing post
4. Delete an existing post
5. Sign up for a new account
6. Login to an already created account

#### An authenticated user can perform the following actions on this application
1. Access the list of all the available categories
2. Create new categories
3. Update and already created category
4. Delete an already created category
5. Create new post
6. Update an existing post
7. Delete an existing post
8. Logout from already created account
