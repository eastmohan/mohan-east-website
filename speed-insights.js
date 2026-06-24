// Vercel Speed Insights initialization
// This script loads and initializes Vercel Speed Insights for performance tracking

(function() {
  'use strict';
  
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return;
  
  // Initialize the queue for Speed Insights
  if (!window.si) {
    window.si = function() {
      (window.siq = window.siq || []).push(arguments);
    };
  }
  
  // Function to inject the Speed Insights script
  function injectSpeedInsights() {
    // Check if script is already loaded
    var existingScript = document.head.querySelector('script[src*="speed-insights"]');
    if (existingScript) return;
    
    // Create and configure the script element
    var script = document.createElement('script');
    
    // Use Vercel's automatic path when deployed on Vercel
    // This path is automatically served by Vercel when Speed Insights is enabled
    script.src = '/_vercel/speed-insights/script.js';
    script.defer = true;
    
    // Add SDK information as data attributes
    script.dataset.sdkn = '@vercel/speed-insights';
    script.dataset.sdkv = '1.0.10';
    
    // Error handling
    script.onerror = function() {
      console.log('[Vercel Speed Insights] Failed to load script. Please ensure Speed Insights is enabled in your Vercel dashboard.');
    };
    
    // Add script to document head
    document.head.appendChild(script);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSpeedInsights);
  } else {
    // DOM is already ready
    injectSpeedInsights();
  }
})();
