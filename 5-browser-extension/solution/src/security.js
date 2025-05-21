/**
 * Security utilities for the browser extension
 * 
 * SECURITY NOTE: In a production environment, you should use the Chrome extension's
 * chrome.storage.sync API with proper encryption rather than localStorage for sensitive data.
 * https://developer.chrome.com/docs/extensions/reference/storage/
 */

/**
 * Securely store an API key
 * @param {string} apiKey - The API key to store
 */
export const storeApiKey = (apiKey) => {
  // SECURITY NOTE: In production, implement additional protection
  // such as encryption before storage
  try {
    // For educational purposes, we're still using localStorage
    localStorage.setItem('apiKey', apiKey);
    console.log('API key stored (Note: localStorage is not secure for sensitive data)');
  } catch (error) {
    console.error('Error storing API key:', error);
  }
};

/**
 * Retrieve a stored API key
 * @returns {string|null} The stored API key or null if not found
 */
export const getApiKey = () => {
  try {
    return localStorage.getItem('apiKey');
  } catch (error) {
    console.error('Error retrieving API key:', error);
    return null;
  }
};

/**
 * Store region information
 * @param {string} region - The region to store
 */
export const storeRegion = (region) => {
  try {
    localStorage.setItem('region', region);
  } catch (error) {
    console.error('Error storing region:', error);
  }
};

/**
 * Retrieve stored region information
 * @returns {string|null} The stored region or null if not found
 */
export const getRegion = () => {
  try {
    return localStorage.getItem('region');
  } catch (error) {
    console.error('Error retrieving region:', error);
    return null;
  }
};

/**
 * Clear stored security information
 * @param {string} key - The specific key to clear (optional)
 */
export const clearStoredData = (key) => {
  try {
    if (key) {
      localStorage.removeItem(key);
    } else {
      // Be careful with clear() as it removes all data
      localStorage.removeItem('apiKey');
      localStorage.removeItem('region');
    }
  } catch (error) {
    console.error('Error clearing stored data:', error);
  }
};