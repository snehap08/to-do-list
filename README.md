# To-Do List Application

This is a simple To-Do List application built with Next.js, Tailwind CSS, and MongoDB.

## 🚀 Features

- Add tasks
- Delete tasks
- Responsive UI
- MongoDB integration

## 🛠️ Tech Stack

- **Frontend:** Next.js, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB Atlas

## 🛠️ Installation

```bash
git clone https://github.com/snehap08/to-do-list.git
cd to-do-list
npm install
```

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<databaseName>
```

## 🚀 Run the Application

```bash
npm run dev
```

## 🖼️ Folder Structure

```plaintext
📦 to-do-list
├── 📂 pages
│   └── 📜 page.js (Main UI)
├── 📂 api
│   └── 📜 todos.js (API routes)
├── 📂 public
├── 📂 styles
├── 📜 .env.local (Environment Variables)
├── 📜 package.json
└── 📜 README.md
```

## 🌐 API Endpoints

- `GET /api/todos`: Fetch all tasks
- `POST /api/todos`: Add a new task
- `DELETE /api/todos`: Delete a task

## 🛑 Known Issues

- Make sure to whitelist your IP address in MongoDB Atlas.
- Run the application on Node.js 18+ for better compatibility.

## 🤝 Contributing

Feel free to fork the repository, make improvements, and create pull requests!

## 📜 License

MIT License

Happy Coding! 🚀
