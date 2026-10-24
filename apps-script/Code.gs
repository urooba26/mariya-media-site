/**
 * ─────────────────────────────────────────────────────────────────────────────
 * Mariya Media Ltd — contact form backend (Google Apps Script Web App)
 *
 * WHAT IT DOES
 *  1. Appends every submission as a new row in this spreadsheet, with a
 *     timestamp (headers below are created automatically on first run).
 *  2. Sends a notification email to the owner with the submission details.
 *
 * HEADERS
 *   Timestamp | Name | TikTok ID | Email | Phone | Interest | Message
 *
 * ── SETUP (about 2 minutes, no coding needed) ────────────────────────────────
 *  1. Create a Google Sheet (https://sheets.new).
 *  2. Extensions → Apps Script.
 *  3. Delete whatever is there and paste this entire file in, then press Save.
 *  4. At the top of the script, change OWNER_EMAIL to the address that should
 *     receive notification emails (your own Gmail address).
 *  5. Deploy → New deployment → choose type "Web app":
 *        - Execute as:  Me
 *        - Who has access:  Anyone
 *     Click Deploy and copy the Web app URL (it ends with /exec).
 *  6. Paste that URL into GOOGLE_APPS_SCRIPT_URL in src/config.js.
 *     (Also set NOTIFICATION_EMAIL_OWNER below to the same address.)
 *
 * FIRST SUBMISSION: if the sheet is empty, the header row is written for you.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// Where notification emails go.
// PLACEHOLDER: replace with the owner's real email address.
var OWNER_EMAIL = 'hello@mariyamedia.example';

// Where the site is served from (for links back in the email). Optional.
var SITE_URL = 'https://example.com';

var HEADERS = [
  'Timestamp',
  'Name',
  'TikTok ID',
  'Email',
  'Phone',
  'Interest',
  'Message',
];

/**
 * Handle the POST from the website contact form.
 * The site sends JSON with Content-Type: text/plain so no CORS preflight is
 * needed; the payload arrives in e.postData.contents either way.
 */
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    writeRow(data);
    sendNotification(data);
    return json({ ok: true });
  } catch (err) {
    // Return a 500-ish JSON error so the browser can show its error state.
    return json({ ok: false, error: String(err) }, 500);
  }
}

/** Append one submission to the sheet, creating headers if needed. */
function writeRow(data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Contact Form') || ss.getSheets()[0];

  if (!sheet) {
    sheet = ss.insertSheet('Contact Form');
  }

  // First run: write the header row (frozen for readability).
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight('bold')
      .setBackground('#0b0b0f')
      .setFontColor('#f1d27a');
    sheet.setFrozenRows(1);
  }

  sheet.appendRow([
    new Date(),
    sanitize(data.name),
    sanitize(data.tiktok),
    sanitize(data.email),
    sanitize(data.phone),
    sanitize(data.interest),
    sanitize(data.message),
  ]);
}

/** Email the owner with the new submission's details. */
function sendNotification(data) {
  var subject = '🌐 New website enquiry — ' + (data.interest || 'General');

  var rows = [
    ['Name', data.name],
    ['TikTok ID', data.tiktok],
    ['Email', data.email],
    ['Phone / WhatsApp', data.phone],
    ['Interested in', data.interest],
    ['Sent at', new Date().toLocaleString()],
  ];

  var html = '<div style="font-family:Arial,Helvetica,sans-serif;color:#111;max-width:560px">' +
    '<h2 style="margin:0 0 4px;color:#b8862f">New contact form submission</h2>' +
    '<p style="margin:0 0 18px;color:#666">Mariya Media Ltd website — ' + SITE_URL + '</p>' +
    '<table cellpadding="6" style="border-collapse:collapse;width:100%;font-size:14px">' +
    rows.map(function (r) {
      return '<tr>' +
        '<td style="background:#faf6ec;font-weight:bold;white-space:nowrap">' + esc(r[0]) + '</td>' +
        '<td style="border-bottom:1px solid #eee">' + esc(r[1] || '—') + '</td>' +
        '</tr>';
    }).join('') +
    '</table>' +
    '<h3 style="margin:22px 0 6px;color:#b8862f">Message</h3>' +
    '<p style="white-space:pre-wrap;line-height:1.6;background:#faf6ec;padding:14px;border-radius:8px">' +
    esc(data.message) +
    '</p>' +
    '<p style="font-size:12px;color:#999;margin-top:18px">Reply directly to this email to reach ' + esc(data.name) + ' at ' + esc(data.email) + '.</p>' +
    '</div>';

  // Plain-text fallback for mail clients that block HTML.
  var text = rows.map(function (r) { return r[0] + ': ' + (r[1] || '—'); }).join('\n') +
    '\n\nMessage:\n' + data.message;

  MailApp.sendEmail(OWNER_EMAIL, subject, text, { htmlBody: html });
}

/** Answer CORS preflight if the form is ever switched to application/json. */
function doOptions() {
  return ContentService.createTextOutput('')
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeader('Access-Control-Allow-Origin', '*')
    .setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    .setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

/* ── Helpers ─────────────────────────────────────────────────────────────── */

// Strip anything that isn't a plain string, and cap length so a spammer
// cannot flood the sheet with megabyte-long cells.
function sanitize(value) {
  if (value === null || value === undefined) return '';
  return String(value).slice(0, 5000);
}

function esc(value) {
  return String(value === null || value === undefined ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function json(obj, status) {
  var output = ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
  if (status) output.setHttpCode(status);
  return output;
}
