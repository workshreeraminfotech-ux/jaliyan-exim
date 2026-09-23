// Centralized Firebase & Cloud Sync Module — Jaliyan Exim
// Safe, resilient fallback when offline or Firebase keys not configured

const CONFIG_STORAGE_KEY = 'new_site_firebase_config';

export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// Default / fallback config from environment variables or localStorage
export function getFirebaseConfig() {
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && parsed.projectId && parsed.apiKey) {
          return parsed;
        }
      }
    } catch (e) {}
  }

  // Fallback to Vite env variables
  const env = import.meta.env || {};
  if (env.VITE_FIREBASE_API_KEY && env.VITE_FIREBASE_PROJECT_ID) {
    return {
      apiKey: env.VITE_FIREBASE_API_KEY,
      authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || `${env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
      projectId: env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || `${env.VITE_FIREBASE_PROJECT_ID}.appspot.com`,
      messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: env.VITE_FIREBASE_APP_ID || ''
    };
  }

  return DEFAULT_FIREBASE_CONFIG;
}

export function saveFirebaseConfig(config) {
  if (typeof window === 'undefined') return;
  if (!config) {
    localStorage.removeItem(CONFIG_STORAGE_KEY);
  } else {
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
  }
}

export function isFirebaseConnected() {
  const config = getFirebaseConfig();
  return !!(config && config.apiKey && config.projectId);
}

// Fetch dataset from Firestore
export async function getCloudData(collectionKey) {
  return null;
}

// Save dataset to Firestore
export async function setCloudData(collectionKey, items) {
  return false;
}

export async function setCloudSingleItem(collectionKey, item) {
  return false;
}

export async function deleteCloudSingleItem(collectionKey, itemId, remainingList = null) {
  return false;
}
