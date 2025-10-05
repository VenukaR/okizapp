# Contact Form Integration Guide

This guide explains how to connect your contact form submissions to various spreadsheet solutions.

## Option 1: Google Sheets Integration

### Prerequisites
1. Create a Google Cloud project
2. Enable Google Sheets API
3. Create service account credentials

### Setup Steps

1. **Create a Google Sheets spreadsheet**:
   - Create a new spreadsheet at [sheets.google.com](https://sheets.google.com)
   - Add column headers: Name, Email, Phone, Company, Message, Date
   - Note the spreadsheet ID (found in the URL)

2. **Set up Google Cloud credentials**:
   ```bash
   # Install the Google API library
   npm install googleapis
   ```

3. **Update the API route**:
   Replace the placeholder code in `src/app/api/contact/route.ts` with:

   ```typescript
   import { NextResponse } from 'next/server';
   import { google } from 'googleapis';

   // Create JWT client using service account
   const createJwtClient = () => {
     const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
     return new google.auth.JWT({
       email: process.env.GOOGLE_CLIENT_EMAIL,
       key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
       scopes: SCOPES,
     });
   };

   export async function POST(req: Request) {
     try {
       const formData = await req.json();
       const jwtClient = createJwtClient();
       const sheets = google.sheets({ version: 'v4', auth: jwtClient });
       
       // Format the current date
       const currentDate = new Date().toISOString();
       
       // Append data to the spreadsheet
       await sheets.spreadsheets.values.append({
         spreadsheetId: process.env.GOOGLE_SHEET_ID,
         range: 'Sheet1!A:F',
         valueInputOption: 'USER_ENTERED',
         requestBody: {
           values: [
             [formData.name, formData.email, formData.phone, formData.company, formData.message, currentDate]
           ]
         }
       });
       
       return NextResponse.json({ success: true, message: 'Form submitted successfully' });
     } catch (error) {
       console.error('Error processing contact form submission:', error);
       return NextResponse.json(
         { success: false, message: 'Failed to submit form' },
         { status: 500 }
       );
     }
   }
   ```

4. **Set up environment variables**:
   Add these variables to your `.env.local` file:
   ```
   GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nyour-private-key-here\n-----END PRIVATE KEY-----\n
   GOOGLE_SHEET_ID=your-spreadsheet-id
   ```

## Option 2: Airtable Integration

### Prerequisites
1. Create an Airtable account
2. Set up a new base with a table for contact submissions

### Setup Steps

1. **Create an Airtable base**:
   - Create a new base in Airtable
   - Create a table called "Contact Submissions" with fields: Name, Email, Phone, Company, Message, Date

2. **Install Airtable package**:
   ```bash
   npm install airtable
   ```

3. **Update the API route**:
   Replace the placeholder code in `src/app/api/contact/route.ts` with:

   ```typescript
   import { NextResponse } from 'next/server';
   import Airtable from 'airtable';

   export async function POST(req: Request) {
     try {
       const formData = await req.json();
       
       // Initialize Airtable
       const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
         .base(process.env.AIRTABLE_BASE_ID);
       
       // Create a new record
       await base('Contact Submissions').create([
         {
           fields: {
             Name: formData.name,
             Email: formData.email,
             Phone: formData.phone,
             Company: formData.company,
             Message: formData.message,
             Date: new Date().toISOString()
           }
         }
       ]);
       
       return NextResponse.json({ success: true, message: 'Form submitted successfully' });
     } catch (error) {
       console.error('Error processing contact form submission:', error);
       return NextResponse.json(
         { success: false, message: 'Failed to submit form' },
         { status: 500 }
       );
     }
   }
   ```

4. **Set up environment variables**:
   Add these variables to your `.env.local` file:
   ```
   AIRTABLE_API_KEY=your-airtable-api-key
   AIRTABLE_BASE_ID=your-airtable-base-id
   ```

## Option 3: Simple CSV or Excel File (for testing)

For simple testing or low-volume sites, you could store submissions in a CSV file on your server:

```typescript
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const date = new Date().toISOString();
    
    // Format data as CSV row
    const csvRow = `"${formData.name}","${formData.email}","${formData.phone}","${formData.company}","${formData.message.replace(/"/g, '""')}","${date}"\n`;
    
    // Append to CSV file
    const filePath = path.join(process.cwd(), 'contact-submissions.csv');
    
    // Create file with headers if it doesn't exist
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, '"Name","Email","Phone","Company","Message","Date"\n');
    }
    
    // Append data
    fs.appendFileSync(filePath, csvRow);
    
    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
```

**Note:** This approach is only suitable for local development or testing as writing to the filesystem isn't supported in many production environments like Vercel.

## Security Considerations

1. Always validate and sanitize form input
2. Implement rate limiting to prevent spam
3. Use environment variables for sensitive credentials
4. Consider adding CAPTCHA protection for public-facing forms