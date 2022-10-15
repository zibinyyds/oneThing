import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                clientsClaim: true,
                skipWaiting: true,
            },
            includeAssets: [
                'logo.png',
                'apple-touch-icon.png',
            ],
            manifest: {
                name: 'My Awesome App',
                short_name: 'Nerdz',
                icons: [
                    {
                        src: './public/logo.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: './public/logo.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                ],
            },
        }),
    ],
})
