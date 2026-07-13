# Gather frontend

Run the forum API from the repository root:

```powershell
.\mvnw.cmd spring-boot:run
```

In a second terminal, run this React app:

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173`. The API defaults to `http://localhost:8081`; set `VITE_API_URL` when deploying it elsewhere.
