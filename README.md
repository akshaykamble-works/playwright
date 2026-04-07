
<p align="center">
<img src="https://komarev.com/ghpvc/?username=akshaykamble-works&label=Profile%20views&color=0e75b6&style=for-the-badge" />
</p>
<!-- Animated Banner -->
<p align="center">
<img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=28&duration=3000&pause=1000&color=36BCF7&center=true&vCenter=true&width=700&lines=Playwright+Automation+Framework;JavaScript+UI+Automation;CI/CD+Integration+with+GitHub+Actions;Built+by+Akshay+Kamble" />
</p>

<h1 align="center">🚀 Playwright Automation Framework</h1>

<p align="center">
Modern UI Test Automation using <b>Playwright + JavaScript + CI/CD</b>
</p>

<hr>

<h2>🧰 Tech Stack</h2>

<p align="center">

<img src="https://img.shields.io/badge/Playwright-Automation-green?style=for-the-badge&logo=playwright">
<img src="https://img.shields.io/badge/JavaScript-ES6-yellow?style=for-the-badge&logo=javascript">
<img src="https://img.shields.io/badge/NodeJS-runtime-green?style=for-the-badge&logo=node.js">
<img src="https://img.shields.io/badge/Git-VersionControl-orange?style=for-the-badge&logo=git">
<img src="https://img.shields.io/badge/GitHub-CI/CD-black?style=for-the-badge&logo=github">

</p>

<hr>

<h2>📌 Project Overview</h2>

<p>
This project is a scalable <b>UI Test Automation Framework</b> built using 
<b>Playwright with JavaScript</b>. The framework is designed using modern 
automation testing best practices like <b>Page Object Model (POM)</b>, 
<b>parallel execution</b>, and <b>CI/CD pipeline integration</b>.
</p>

<hr>

<h2>📂 Project Structure</h2>

<pre>
Playwright-Automation/
│
├── tests/                 # Test scripts
├── pages/                 # Page Object Model classes
├── fixtures/              # Test data
├── utils/                 # Helper utilities
├── playwright.config.js   # Playwright configuration
├── package.json
└── README.md
</pre>

<hr>

<h2>⚙️ Installation</h2>

<h3>1️⃣ Clone the repository</h3>

<pre>
git clone https://github.com/yourusername/playwright-automation.git
</pre>

<h3>2️⃣ Navigate to project folder</h3>

<pre>
cd playwright-automation
</pre>

<h3>3️⃣ Install dependencies</h3>

<pre>
npm install
</pre>

<h3>4️⃣ Install browsers</h3>

<pre>
npx playwright install
</pre>

<hr>

<h2>▶️ Run Tests</h2>

<p><b>Run all tests</b></p>

<pre>
npx playwright test
</pre>

<p><b>Run in headed mode</b></p>

<pre>
npx playwright test --headed
</pre>

<p><b>Run specific test file</b></p>

<pre>
npx playwright test tests/login.spec.js
</pre>

<hr>

<h2>📊 Test Reports</h2>

<p>Generate and view the Playwright HTML report</p>

<pre>
npx playwright show-report
</pre>

<hr>

<h2>🔄 CI/CD Pipeline</h2>

<p>This framework supports automated test execution using <b>GitHub Actions</b>.</p>

<pre>
name: Playwright Tests

on:
  push:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          node-version: 18

      - run: npm install

      - run: npx playwright install

      - run: npx playwright test
</pre>

<hr>

<h2>✨ Framework Features</h2>

<ul>

<li>✔ Cross-browser testing (Chromium, Firefox, WebKit)</li>

<li>✔ Page Object Model (POM) architecture</li>

<li>✔ Parallel execution</li>

<li>✔ Screenshot & video capture on failure</li>

<li>✔ HTML reporting</li>

<li>✔ CI/CD integration</li>

<li>✔ Easy scalability</li>

</ul>

<hr>

<h2>📈 GitHub Contribution Graph</h2>

<p align="center">
<img src="https://github-readme-activity-graph.vercel.app/graph?username=akshaykamble-works&theme=tokyo-night&hide_border=true" />
</p>

<hr>

<h2>👨‍💻 Author</h2>

<p>

<b>Akshay Kamble</b><br>
Automation Test Engineer

</p>

<p>

Skills:

</p>

<ul>

<li>Playwright</li>

<li>Selenium</li>

<li>JavaScript</li>

<li>REST Assured</li>

<li>API Testing</li>

<li>CI/CD</li>

<li>Git & GitHub</li>

</ul>

<hr>

<p align="center">
⭐ If you like this project, please give it a star on GitHub!
</p>
