## Fullstack development Assessment
This application is built with the following technologies:
1. HTML
2. CSS,
3. Jquery(3.5.1)
4. PHP(8.2.18) and Apache/2.4.48
5. Laravel Framework(11.9.2)
6. MYSQL(5.0.12)
7.Composer version 2.6.5 2023-10-06 10:11:5
10. Openserver 6.0.0(8.2.18)

### This is how you can install this application
1. Clone this Repository(Repo) with the following command `git clone https://github.com/Bonifaceebuka/raily-assessments.git`
2. Move to the DIR of the Repo `cd raily-assessments`
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
7. Import the database tables with this command: `php artisan migrate`.
10. Start the application with `php artisan serve`
	Visit localhost:8000/ to see the front-end of the application

### Assumptions or decisions made during the development
1. Assumed that this is a single paged application. Having that in mind, I decided not to create a controller that will return the `index.blade.php` as the landing page.
2. I assumed that there maybe need for future modifications on the project core pages. That is why I decided to create a layout that will have the primary parts of the project(header, footer etc). This will help in the easier maintainance of the project when needed.

#### Challenges faced and how they were overcome
1. Getting the videos to play: I was able to overcome this challenge by checking out on how `videojs` plugin works and the basic dependencies that are required for the plugin to work effienctly
2. Getting some of the animated parts to work: I was able to overcome this by ensuring that I used the same version JQuery and the animation plugin that were used on the site.