import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig(function () { return ({
    plugins: [react()],
    base: "/",
    server: {
        host: true,
        port: 5173
    }
}); });
