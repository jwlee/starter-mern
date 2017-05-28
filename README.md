# starter-mern
Starter for MERN stack (Mongo, Express, React, and Node)

Webpack 2
- To make 'bundle.js', which combined all css, sass, jsx, and other static assets into one file.

Frontend:
 - Run 'npm install'
 - For development, run 'npm run dev'
    - It will run on localhost:3000 by 'webpack-dev-server', which includes automatic reload.
 - For production, run 'npm run build'
    - It will build production version at './dist' and 'httpster' will loads './dist' folder on localhost:3000.

Backend:
 - Run 'npm install'
 - Run 'npm start'
 - Make sure to change 'mongo_connection' in backend/config/secrets.js.
