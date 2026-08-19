/* ============================================================================
   MAN-TEN BOOKING SYSTEM — WEBSITE CONFIGURATION

   This is the ONLY file you edit after a redeployment.
   Upload it to your GitHub repository next to index.html.

   Because your settings live here and not in index.html, you can replace
   index.html with a new version any time without losing them — and a new
   index.html can never arrive carrying a placeholder URL that breaks the
   live site. That is exactly what happened on 19 Aug 2026.
   ============================================================================ */


/* ---------------------------------------------------------------------------
   1. YOUR APPS SCRIPT WEB APP URL
   ---------------------------------------------------------------------------
   Where to find it:
     Apps Script editor > Deploy > Manage deployments > copy the Web app URL.

   It must:
     - start with  https://script.google.com/macros/s/
     - end with    /exec        (NOT /dev — /dev only works while signed in as you)

   The URL below was taken from your working 18 Aug deployment. If you have
   since created a NEW deployment rather than a new VERSION of the existing
   one, the URL will have changed — copy the current one from Manage
   deployments and replace it here.
   --------------------------------------------------------------------------- */

window.MANTEN_API =
  "https://script.google.com/macros/s/AKfycbxM5c3Hd_VjBv4JRYkpilxF3RJ2vAmKzhjzMYnXIhkgPH8mtfh3l70c6f5IKnaRHhiT/exec";


/* ---------------------------------------------------------------------------
   2. reCAPTCHA (optional)
   ---------------------------------------------------------------------------
   Leave blank unless you are getting spam bookings. If you turn it on, paste
   the SITE key here and put the SECRET key in Apps Script, never here — this
   file is public.
   --------------------------------------------------------------------------- */

window.MANTEN_RECAPTCHA_SITE_KEY = "";
