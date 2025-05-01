# 🚀 CI/CD Integration in Node.js with GitHub Actions & VPS (or AWS EC2)

In this repository, we will learn **how to integrate CI/CD** in a Node.js application using **GitHub Actions** and a **VPS server** or **AWS EC2 instance**.  
We will also learn how to deploy our Node.js application on a VPS server or AWS EC2 instance using a **CI/CD pipeline**.

This is a **step-by-step guide** designed for learning and practicing **CI/CD integration** in real-world Node.js projects using GitHub Actions and remote servers.  
I created this repository as part of my learning journey, so feel free to explore and adapt it for your own CI/CD needs.

## 📚 Prerequisites

Make sure you know the basics of:

- **Node.js** & **Express.js**
- **Git** & **GitHub**
- **AWS EC2** or any **VPS server**
- CI/CD fundamentals
- **GitHub Actions**
- **SSH**
- **Nginx** server setup
- **PM2** process manager
- **MongoDB** (if needed)
- Basic **environment variables** usage
- Basic **Linux** commands
- Basic **terminal** usage
- Basic **networking** concepts
- Basic **firewall** setup

---

## 🛠️ Setup This Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/vikashkrdeveloper/CI-CD-Integration-IN-NodeJS.git && cd CI-CD-Integration-IN-NodeJS
```

### 2. Install dependencies

```bash
npm install
```

---

## ▶️ Run The Application Locally

```bash
npm start
```

Open your browser and go to:  
👉 [http://localhost:3000](http://localhost:3000)  
You should see: **Hello CI/CD World!**

---

## 🌐 Test The API

### Using `curl`

```bash
curl -X GET http://localhost:3000/
```

### Using browser

👉 [http://localhost:3000/](http://localhost:3000/)

### Using Postman

Send a `GET` request to `http://localhost:3000/`

---

## 🚀 Steps to Integrate CI/CD with GitHub Actions + VPS (or EC2)

1. Create your **Node.js** application
2. Push the project to **GitHub**
3. Set up your **VPS** or **AWS EC2** instance
4. Install on your server:
   - Node.js
   - Nginx
   - PM2
   - MongoDB (if needed)
5. Set up **SSH keys** between GitHub Actions and your server
6. Create a **GitHub Actions workflow** file (`.github/workflows/main.yml`)
7. Configure the pipeline to:
   - Install dependencies
   - Run tests
   - SSH into server
   - Pull latest code
   - Restart app with PM2
8. Test by pushing a commit — CI/CD should trigger 🚀
9. Celebrate! Your Node.js app is now automatically deployed! 🎉

---

## 🏅 Pro Tips

- 🔒 Always use environment variables for sensitive data.
- 🔥 Use `pm2 status` to monitor your Node.js app in production.
- 🌐 Set up **Nginx reverse proxy** for serving your app securely.
- ⚡ Use **fail2ban** or **firewalls** to protect your VPS.
- 🕵️ Regularly check `pm2 logs` for debugging.

---

## ❤️ Contributing

Want to improve this guide?  
Feel free to fork this repo, submit pull requests, or open issues. Contributions are welcome!

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use and modify it.

---

## 📸 Screenshots

Add any relevant screenshots here! 📸 (Optional)

---

## 📞 Contact

- **Name**: Vikash Kumar
- **Location**: India
- **What's App**: [+91 7352514546](https://wa.me/917352514546/?text=Hello%20Vikash%2C%20I%20need%20help%20with%20CI/CD%20integration%20in%20Node.js.)
- **Email**: [Vik.fstkdvpro@gmail.com](mailto:vik.fstkdvpro@gmail.com)
- **LinkedIn**: [Vikash Kumar](https://www.linkedin.com/in/vikashkrdeveloper/)
- **GitHub**: [Vikash Kumar](https://www.github.com/vikashkrdeveloper)
- **Twitter**: [@vikashkrdeveloper](https://twitter.com/vikashkrdeveloper)
- **Instagram**: [@vikashkrdeveloper](https://www.instagram.com/vikashkrdeveloper/)
- **Portfolio**: [vikashkrdeveloper](https://vikashkrdeveloper.github.io/)
- **Telegram**: [@vikashkrdeveloper](https://t.me/vikashkrdeveloper)
- **YouTube**: [Vikash Kumar](https://www.youtube.com/@vikashkrdeveloper)

## 📝 Author

Developed by [Vikash Kumar](https://github.com/vikashkrdeveloper)  
Let’s build cool things together! 🚀

Ab tumhara kaam pura ho gaya, bhai! 😊 If facing any issues, please check the **Issues** tab or create a new issue.

Feel free to reach out if you have any questions or need help with CI/CD integration in Node.js.
Happy coding! 💻
