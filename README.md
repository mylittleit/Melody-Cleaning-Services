# Melody Cleaning Website

## Overview

Melody Cleaning Services website built with Next.js.

## Deployment

### Email configuration

Set these Vercel environment variables for production email:

- `EMAIL_USER`: the Melody Cleaning Services mailbox used to send messages, such as `melodycleaningservices@yahoo.com`
- `EMAIL_PASSWORD`: that mailbox's Yahoo app password

The sender is displayed as `Melody Cleaning Services`, and replies to booking or contact notifications go to the customer's submitted email address. Do not use a personal mailbox for `EMAIL_USER`, because Yahoo will show the authenticated mailbox as the sender.

## How It Works

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Create a production build with `npm run build`.
