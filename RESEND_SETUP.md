# NEXBuild + Resend

1. Run:
   npm install

2. Create `.env.local` in the project root:

   RESEND_API_KEY=your_real_resend_key
   NEXBUILD_INBOX_EMAIL=your_real_inbox

3. Start the app:
   npm run dev

4. The backend endpoint is:
   POST /api/contact

5. The frontend can call the endpoint with:

   {
     "name": "Client Name",
     "email": "client@example.com",
     "phone": "+91...",
     "service": "Website Development",
     "message": "Project details"
   }

The API uses Resend server-side, so the API key is never exposed to the browser.

For production, verify your NEXBuild domain in Resend and replace
`onboarding@resend.dev` in `app/api/contact/route.ts` with your verified sender.


## Contact form connection

`components/ContactForm.tsx` now submits the form to `/api/contact`.
The server sends the inquiry through Resend to `NEXBUILD_INBOX_EMAIL`.
