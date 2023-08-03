// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {
//     // Prevent the default prompt from showing
//     event.preventDefault();
//     console.log("BEFORE INSTALL DEFFERED")
//     // Store the event for later use
//     const deferredPrompt = event;
    
//     // Update UI or show a custom install prompt
//     // For example, you can display a button to trigger the installation
//     const installButton = document.getElementById('buttonInstall');
//     installButton.style.display = 'block';
    
//     // Handle the button click to trigger the installation
//     installButton.addEventListener('click', async () => {
//       console.log("HIT LINE 19")
//       // Show the installation prompt
//       deferredPrompt.prompt();
      
//       // Wait for the user to respond to the prompt
//       const choiceResult = await deferredPrompt.userChoice;
      
//       // Handle the user's choice (e.g., track installation, display success message, etc.)
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the installation');
//       } else {
//         console.log('User dismissed the installation');
//       }
      
//       // Reset the deferred prompt variable
//       deferredPrompt = null;
      
//       // Hide the install button
//       installButton.style.display = 'none';
//     });
//   });
  

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {
//     // Check if the deferredPrompt is available
//     if (deferredPrompt) {
//       // Show the installation prompt
//       deferredPrompt.prompt();
  
//       // Wait for the user to respond to the prompt
//       const choiceResult = await deferredPrompt.userChoice;
  
//       // Handle the user's choice
//       if (choiceResult.outcome === 'accepted') {
//         console.log('User accepted the installation');
//       } else {
//         console.log('User dismissed the installation');
//       }
  
//       // Reset the deferredPrompt variable
//       deferredPrompt = null;
//     }
//   });
  

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {
//       // Log the installation to analytics or save the event somehow
//     console.log('App installed', event);
// });

const butInstall = document.getElementById("buttonInstall");

window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
  });

butInstall.addEventListener('click', async () => {
  
  const promptEvent = window.deferredPrompt;

  if (!promptEvent) {
   return;
  }

  // Show prompt
  promptEvent.prompt();
  
  // Reset the deferred prompt variable, it can only be used once.
  window.deferredPrompt = null;
  
  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  // Clear prompt
  window.deferredPrompt = null;
}); 
