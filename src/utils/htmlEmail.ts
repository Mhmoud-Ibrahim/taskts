export const htmlEmail = (message: string) => {
  return `
  <!doctype html>
  <html dir="rtl" lang="ar">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>Noor Store Notification</title>
      <style>
        body { background-color: #f4f5f6; font-family: sans-serif; margin: 0; padding: 0; }
        .container { margin: 0 auto; max-width: 600px; padding: 24px; width: 600px; }
        .main { background: #ffffff; border-radius: 16px; width: 100%; border: 1px solid #eaebed; }
        .wrapper { box-sizing: border-box; padding: 30px; text-align: center; }
        .footer { clear: both; padding-top: 24px; text-align: center; width: 100%; color: #9a9ea6; font-size: 12px; }
        .btn-primary table td { background-color: #0867ec; border-radius: 8px; text-align: center; }
        .btn-primary a { background-color: #0867ec; border: none; border-radius: 8px; color: #ffffff; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 12px 25px; text-decoration: none; }
        .message-box { background-color: #f9f9f9; border: 1px dashed #0867ec; padding: 20px; border-radius: 8px; margin: 20px 0; font-size: 20px; font-weight: bold; color: #333; }
        h2 { color: #0867ec; }
      </style>
    </head>
    <body>
      <table role="presentation" class="container">
        <tr>
          <td>
            <div class="content">
              <table role="presentation" class="main">
                <tr>
                  <td class="wrapper">
                    <h2>Noor Store 🛍️</h2>
                    <p>مرحباً بك، لقد تلقيت رسالة بخصوص حسابك:</p>
                    
                    <div class="message-box">
                      ${message}
                    </div>

                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="btn btn-primary" style="width: 100%;">
                      <tr>
                        <td align="center">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                            <tbody>
                              <tr>
                                <td> <a href="https://vercel.app" target="_blank">الذهاب للمتجر</a> </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="margin-top: 20px; font-size: 14px; color: #666;">إذا لم تطلب هذا الإجراء، يرجى تجاهل هذا الإيميل.</p>
                  </td>
                </tr>
              </table>
              <div class="footer">
                <p>© 2024 Noor Store. All rights reserved.</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
};
