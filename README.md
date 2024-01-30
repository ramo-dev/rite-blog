# Getting Started with Vite and Nx Pipeline

This project was bootstrapped with [Vite](https://vitejs.dev/) using the [Nx](https://nx.dev/) monorepo pipeline.

## Available Scripts

In the project directory, you can run:

```bash
npm start
```

Runs the app in development mode using Vite.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will automatically reload when you make changes.\
You may also see any lint errors in the console.

```bash
npm test
```

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://vitejs.dev/guide/testing) for more information.

```bash
npm run build
```

Builds the app for production to the `dist` folder.\
It correctly bundles React and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://vitejs.dev/guide/build.html) for more information.

### Backend Setup

This project includes a Flask backend, which provides API endpoints for blogs. Follow the steps below to set up and run the backend.

#### 1. Clone the Backend Repository

```bash
git clone https://github.com/your-username/rite-blog-backend.git
cd rite-blog-backend
```
#### 2. Install Dependencies
```bash
pip install -r requirements.txt
```
#### 3. Run the Flask Server
```bash
python app.py
```
The backend server should now be running at http://localhost:5000.
```bash
npm run eject
```
## Note: This project was bootstrapped with Vite, and there is no equivalent to Create React App's eject feature.

Vite provides a flexible and efficient build setup, and there is no need to eject from its configuration. All build configurations are already accessible, making it easy to customize without the need for ejecting.


```bash
Replace 
`"https://github.com/your-username/rite-blog-backend.git"`
with the actual URL of your backend repository. This modification provides clear instructions on how to set up and run the Flask backend along with the React frontend.
```