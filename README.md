# Overview - Chronos App
<img width="100%" alt="image" src="https://github.com/lucasKoyama/chronos-frontend/assets/121680414/6f346535-5829-4095-9070-e9bb7a88c7d0">
<!--
Think of the STAR + Hero Journey description for the entire README:
1. Situation: begin with the situation, what it aims to solve, and what the common problem is.
2. Tasks: What were my responsibilities? What challenges were I responsible for?
3. Action: What did I do to solve the challenge?
4. Results: solutions developed, value brought to the company, and users.
-->
<!-- SITUATION / COMMON PROBLEM -->
<details>
  <summary>Summary</summary>

  1. [Overview](https://github.com/lucasKoyama/chronos-frontend?tab=readme-ov-file#overview---chronos-app)
  2. [Features & Challenges solved](https://github.com/lucasKoyama/chronos-frontend?tab=readme-ov-file#-features--challenges-solved)
  3. [Tools used](https://github.com/lucasKoyama/chronos-frontend?tab=readme-ov-file#%EF%B8%8F-tools-used)
  4. [Running Locally](https://github.com/lucasKoyama/chronos-frontend?tab=readme-ov-file#running-locally)
  5. [Authors](https://github.com/lucasKoyama/chronos-frontend?tab=readme-ov-file#authors)
</details>
<p>
  Web App for time and task management for personal productivity! Frontend built with Next.js 14 (TS) + Tailwind CSS. Backend Nest.js (TS) + JWT Auth and password Hashing.
</p>

<a href="https://chronos-manager.vercel.app/">
🌐DEMO LIVE - Click here to check it out on the web!
</a>

## 📌 Features & Challenges solved
<!-- TASKS / CHALLENGES -->
<details>
  <summary>Responsive page</summary>
<p>  
The page was developed responsively, adapting to different screen sizes and devices. This ensures a consistent and pleasant experience for users, regardless of the device they are using.
</p>
</details>
<details>
  <summary>Automatic login & Authentication with redirect to previous page (Adittionaly Google login in progress)</summary>

<p>  
When the user signs in and closes the app, leaving the website, closing the browser or turning off the computer, the user will be logged in automatically and redirected to the last accessed page/tab.
</p>
<img width="100%" alt="image" src="https://github.com/lucasKoyama/chronos-frontend/assets/121680414/e4397dec-0908-4cc6-9a76-d1989198d4c2">
</details>

<details>
  <summary>Create, Read, Update and Remove (CRUD) tasks</summary>

<p>
You can add, edit and remove tasks on different pages. Each task has a title, description, scheduled day to do, tag, level of priority and urgency.
</p>
<br>
<div style="display: flex">
  <img width="48%" alt="image" src="https://github.com/lucasKoyama/chronos-frontend/assets/121680414/66788547-8c8d-4cee-97cd-796b225911c9">
  <img width="48%" alt="image" src="https://github.com/lucasKoyama/chronos-frontend/assets/121680414/ae44e763-7365-4f3e-8ac4-2093abee7bdf">
</div>

</details>

<details>
  <summary>Calendar Tab (filtered tasks by day)</summary>

<p>  
The calendar page shows the final days of the last month, the days of the current month, and the initial days of the next month, and it's filled with the user's tasks for each scheduled day. The user can also edit and delete tasks from that page.
</p>
<img width="100%" alt="image" src="https://github.com/lucasKoyama/chronos-frontend/assets/121680414/2672b543-ff29-4fac-8619-040dae69630f">
</details>

<details>
  <summary>Tasks Priorities Tab (filtered tasks by importance X urgency)</summary>

<p>
Tasks filtered and grouped based on importance and urgency were grouped in different visualization areas labeled "now," "later," "delegate," and "discard".
</p>
<img width="100%" alt="image" src="https://github.com/lucasKoyama/chronos-frontend/assets/121680414/caad3d4d-b7f6-45fb-a1d1-fa98a0e06e97">
</details>

<details>
  <summary>Pomodoro timer</summary>

<p>
A simple pomodoro cycle with inputs to receive custom timers of focus, breaks (short and big), and the number of cycles. With the start, pause, resume and reset buttons.
</p>
<img width="100%" alt="image" src="https://github.com/lucasKoyama/chronos-frontend/assets/121680414/b4ba10f7-7753-41d2-b754-2c5b7f66fec5">
</details>

<details>
  <summary>Account settings (WORK IN PROGRESS)</summary>

<p>
Configs like add personalized tags, change user's password, and even customize the theme of the app based on user preference of main and secondary colors.
</p>
</details>

## 🛠️ Tools used
<!-- ACTION -->
<!-- SKILL_BADGE/NAME: DESCRIPTION WHY IT WAS USED -->

![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

## Running locally

### Clone it
`git clone https://github.com/lucasKoyama/chronos-frontend.git`

### Go to project's folder
`cd chronos-frontend`

### Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Authors
- [lucasKoyama](https://github.com/lucasKoyama)
