import { defineStore } from 'pinia';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null
  }),
  actions: {
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider();
      try {
        const result = await signInWithPopup(auth, provider);
        this.user = result.user;
      } catch (error) {
        console.error('Erro ao fazer login com o Google:', error);
        throw error;
      }
    },
    async logout() {
      await signOut(auth);
      this.user = null;
    }
  }
});
