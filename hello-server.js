// hello-server.js
const http = require("http");
const myName = "Mahi";

const server = http.createServer((req, res) => {
  // Set response headers for HTML content
  res.writeHead(200, { "Content-Type": "text/html" });

  // HTML with embedded CSS
  const htmlResponse = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${myName}'s Server</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      }
      
      body {
        background: linear-gradient(135deg, #0a0a2a, #1a1a4a);
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        overflow: hidden;
        position: relative;
      }

      /* Starry background */
      .stars {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
      }
      
      .star {
        position: absolute;
        background-color: white;
        border-radius: 50%;
        animation: twinkle var(--duration) infinite ease-in-out;
        opacity: 0;
      }
      
      @keyframes twinkle {
        0%, 100% { opacity: 0; transform: scale(0.5); }
        50% { opacity: var(--opacity); transform: scale(1); }
      }
      
      .main-container {
        width: 90%;
        max-width: 600px;
        text-align: center;
        position: relative;
        z-index: 1;
      }
      
      .name-card {
        background: linear-gradient(145deg, #2563eb, #1e40af);
        padding: 3rem 2rem;
        border-radius: 20px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        margin-bottom: 2.5rem;
        border: 2px solid rgba(255, 255, 255, 0.15);
        position: relative;
        overflow: hidden;
      }
      
      .name-card::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
        animation: rotate 15s linear infinite;
      }
      
      h1 {
        font-size: 3.5rem;
        margin-bottom: 0.5rem;
        position: relative;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
      }
      
      .subtitle {
        font-size: 1.5rem;
        opacity: 0.9;
        position: relative;
        line-height: 1.6;
      }
      
      .highlight {
        color: #a5b4fc;
        font-weight: 600;
      }
      
      @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
    </style>
  </head>
  <body>
    <div class="stars" id="stars"></div>
    
    <div class="main-container">
      <div class="name-card">
        <h1>Hello, I'm ${myName}!</h1>
        <p class="subtitle">Welcome <span class="highlight">to</span> my first <span class="highlight">Node.js</span> server!</p>
      </div>
    </div>

    <script>
      // Create stars
      const starsContainer = document.getElementById('stars');
      const starCount = 100;
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random properties for each star
        const size = Math.random() * 3;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const opacity = Math.random() * 0.8 + 0.2;
        const duration = Math.random() * 5 + 3;
        
        star.style.width = \`\${size}px\`;
        star.style.height = \`\${size}px\`;
        star.style.left = \`\${x}%\`;
        star.style.top = \`\${y}%\`;
        star.style.setProperty('--opacity', opacity);
        star.style.setProperty('--duration', \`\${duration}s\`);
        
        // Random delay for animation
        star.style.animationDelay = \`\${Math.random() * 5}s\`;
        
        starsContainer.appendChild(star);
      }
    </script>
  </body>
  </html>
  `;

  // Send response
  res.end(htmlResponse);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log("Press Ctrl+C to stop the server");
});
