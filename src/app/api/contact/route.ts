import { NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(req: Request) {
  try {
    const formData = await req.json();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Google Sheets API setup using JWT
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Prepare data for the spreadsheet
    const values = [
      [
        new Date().toLocaleString('en-US', { timeZone: 'Asia/Colombo' }), // Date/Time
        formData.name,
        formData.email,
        formData.phone || 'N/A',
        formData.company || 'N/A',
        formData.message,
      ]
    ];

    // Append data to the spreadsheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:F', // Adjust range as needed
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    });
    
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to submit form. Please try again.' 
      },
      { status: 500 }
    );
  }
}