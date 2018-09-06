# ping-web
pingdom-alternative


Start the app
  node index.js
  
Environment changes
  --Windows(Powershell)
  
    1. DEBUG
        command=    $env:NODE_DEBUG='workers';node index.js
        
    2. Production
        command=    $env:NODE_ENV="production";node index.js
        
    3. Development
        command=    $env:NODE_ENV="development";node index.js
