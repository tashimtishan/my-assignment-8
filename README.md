SkillSphere

SkillSphere is an online learning platform where anyone can explore courses, learn from industry experts, and upgrade their skills at their own pace. whether you're into web development, design, or digital marketing.and there's something here for you.

Live Site: https://my-assignment-8-two.vercel.app


What This Project Is About

I built SkillSphere as part of my web development journey. The idea was to create a platform that feels clean, fast, and actually useful. not just another template project. It has real authentication, protected routes, a searchable course listing, and a proper user profile system.


Key Features

user Authentication: Register and sign in with email and password. Google OAuth support is also integrated.
Protected Routes: Course details and profile pages are only accessible to logged-in users. Everyone else gets redirected to the sign in page.
course Listing with Search: Browse all available courses and filter them instantly by title, description, or instructor name.
Course Details Page: Each course has its own dedicated page with full details, instructor info, and an enroll button.
User Profile Page: After signing in, users can view their profile with their name, photo, and account information.
Responsive Navbar: The navbar shows login/register buttons when logged out, and switches to a welcome message with the user's photo and a logout button when logged in. Works on both desktop and mobile.
Toast Notifications: Friendly success and error messages on sign in, sign up, and logout actions.
Loading Spinner: A smooth loader appears while course data is being fetched.
Animations: The banner section animates in on load, and the floating skill badges bounce continuously for a lively feel.



NPM Packages Used

 **better-auth** — Handles all authentication, email/password and Google OAuth
 **next** — The React framework the entire project is built on
 **react / react-dom** — Core UI library
 **tailwindcss** — Utility-first CSS for all styling
 **daisyui** — Component library built on Tailwind for buttons, spinners, badges etc.
 **motion** — Animations for the banner slide-in and floating badge bounce effects
 **react-toastify** — Toast notifications for sign in, sign up, and logout feedback
 **lucide-react** — Icons used in the navbar hamburger menu
 **@gravity-ui/icons** — Additional icon set used across the project
 **kysely** — SQL query builder used internally by Better Auth


Getting Started Locally

bashgit clone https://github.com/tashimtishan/your-repo-name
cd your-repo-name
npm install
npm run dev

Make sure to add your .env file with the required Better Auth and Google OAuth credentials before running.


Built with by Tashim. CSE student, front-end developer, and lifelong learner.