import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';

export default function PrivacyPolicyGenerator() {
  const [formData, setFormData] = useState({
    websiteUrl: '',
    companyName: '',
    companyPhone: '',
    companyEmail: ''
  });
  const [generatedPolicy, setGeneratedPolicy] = useState('');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const policyRef = useRef(null);

  useEffect(() => {
    if (policyRef.current) {
      policyRef.current.innerHTML = generatedPolicy;
    }
  }, [generatedPolicy]);

  const handleInputChange = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    if (name === 'companyPhone') {
      value = value.replace(/\D/g, '');
      if (value.length > 0) {
        value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
      }
    }

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleWebsiteUrlBlur = (e) => {
    const formattedUrl = formatUrl(e.target.value);
    setFormData(prevData => ({
      ...prevData,
      websiteUrl: formattedUrl
    }));
  };

  const formatUrl = (url) => {
    if (url === '') return url;
    if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }
    return url;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const generatePolicy = () => {
    if (!isValidEmail(formData.companyEmail)) {
      setSnackbar({ open: true, message: "Please enter a valid email address.", severity: 'error' });
      return;
    }

    const policyTemplate = `
      <h1>SMS/MMS Consent and Terms</h1>

      <p>By providing your mobile phone number to ${formData.companyName}, you consent to receive periodic SMS or MMS messages from us. These messages may include important updates, information, exclusive offers, promotions tailored to your interests, and other communications related to our products and services.</p>

      <h2>Providing Your Telephone Number and Notification Obligations</h2>

      <p>You affirm that the mobile number you have provided to us is accurate and current. You represent that you are the authorized subscriber or owner of any telephone number you provide. If there are any changes to your contact information, including changes to your telephone numbers, you agree to notify us immediately by sending an email to ${formData.companyEmail} prior to the effect of the change.</p>

      <h2>Consent to Receive Automated Communications</h2>

      <p>By voluntarily providing your telephone number(s), you explicitly consent to receive recurring automated text messages from ${formData.companyName} regarding our products, services, offers, promotions, and your relationship with us. You acknowledge that consent to receive these messages is not a condition of purchase. Standard message and data rates may apply.</p>

      <h2>Opt-Out Instructions</h2>

      <p>To unsubscribe from our SMS/MMS messages at any time, you can text STOP in response to any message you receive from us. Additionally, you can send an email to ${formData.companyEmail} specifying that you wish to opt out of text messages. You agree to receive a final message confirming your opt-out.</p>

      <h2>Privacy Assurance</h2>

      <p>Your personal information and phone number will not be shared or sold to third parties. We are committed to safeguarding your privacy and ensuring the confidentiality of your data. Any information collected will be used solely for the purpose of providing you with relevant updates and offers. Your trust is paramount to us, and we take every measure to protect your privacy.</p>

      <h2>Assistance</h2>

      <p>For help, text "HELP" to the number from which you're receiving messages or email ${formData.companyEmail}.</p>

      <h2>Carrier Participation</h2>

      <p>Participating carriers in the United States include AT&T, T-Mobile®, Verizon Wireless, Sprint, Boost, U.S. Cellular®, MetroPCS®, InterOp, Cellcom, C Spire Wireless, Cricket, Virgin Mobile, among others. Not all carriers may support our SMS/MMS service. T-Mobile is not liable for delayed or undelivered messages.</p>

      <h2>Data Collection and Use</h2>

      <p>In connection with this SMS service, we may collect your mobile phone number, carrier's name, and the date, time, and content of your messages among other information you provide. This information may be used to contact you and to deliver the services you have requested from us.</p>

      <h2>Service Modifications and Termination</h2>

      <p>By subscribing or using the service, you acknowledge our right to modify or discontinue the service, with or without notice, at any time.</p>

      <h2>Indemnification</h2>

      <p>You agree to indemnify ${formData.companyName} against any claims, including privacy, tort, or others, arising from your voluntary provision of a telephone number not owned by you, failure to notify us of changes in your telephone number, or related to the Federal Telephone Consumer Protection Act or state law equivalents. You agree to defend and hold us harmless from any claims, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising from such issues.</p>

      <h2>Participation Requirements</h2>

      <p>By participating in this Service, you affirm that you are at least eighteen (18) years of age, possess a wireless device capable of two-way messaging, are a customer of a participating wireless carrier, and have a text messaging service. Compatibility of cell phone models with the service, text messaging capabilities, and service availability may vary by carrier.</p>

      <h2>Miscellaneous</h2>

      <p>You warrant and represent that you possess all necessary rights, powers, and authority to agree to these terms and perform your obligations hereunder, and that doing so does not conflict with any other agreement to which you are bound. If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these terms shall otherwise remain in full force and effect.</p>

      <p>For questions or concerns, please contact ${formData.companyName} at ${formData.companyEmail} or by phone at ${formData.companyPhone}.</p>

      <p><em>Note: While ${formData.companyName} does not charge for text messages you receive, your mobile provider's standard rates for text and data may apply. Contact your wireless provider for information about your text and data plan.</em></p>

      <h1>Privacy Policy</h1>

      <p>At ${formData.companyName}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>

      <h2>Information Collection</h2>
      <ul>
        <li>We collect personal information such as name, email address, and phone number when you sign up for our services or interact with our website.</li>
        <li>We may also collect non-personal information such as browser type, IP address, and referring URL for analytical purposes.</li>
      </ul>

      <h2>Use of Information</h2>
      <ul>
        <li>Your personal information is used to provide and improve our services, communicate with you, and personalize your experience.</li>
        <li>Non-personal information is used for analytics, site optimization, and to better understand user behavior.</li>
      </ul>

      <h2>Data Security</h2>
      <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

      <h2>Third-Party Disclosure</h2>
      <p>We do not share your personal information with third parties except as necessary to provide our services, comply with legal obligations, or protect our rights.</p>

      <h2>Consent</h2>
      <p>By using our services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy.</p>

      <h2>Changes to Privacy Policy</h2>
      <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be reflected on this page.</p>

      <h2>Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, You can contact us:</p>
      <ul>
        <li>By email: ${formData.companyEmail}</li>
        <li>By visiting this page on our website: ${formData.websiteUrl}</li>
        <li>By phone number: ${formData.companyPhone}</li>
      </ul>

      <p>By continuing to use our services, you acknowledge that you have read and understood this Privacy Policy.</p>
    `;

    setGeneratedPolicy(policyTemplate);
  };

  const copyToClipboard = async (text, successMessage) => {
    try {
      await navigator.clipboard.writeText(text);
      setSnackbar({ open: true, message: successMessage, severity: 'success' });
    } catch (err) {
      console.error('Failed to copy text: ', err);
      setSnackbar({ open: true, message: "Failed to copy. Please try manually selecting and copying the text.", severity: 'error' });
    }
  };

  const downloadAsHtml = () => {
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>SMS/MMS Consent and Terms & Privacy Policy</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            line-height: 1.6; 
            color: #333; 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px; 
          }
          h1 { 
            color: #2c3e50; 
            margin-top: 1.5em;
            margin-bottom: 0.5em;
          }
          h2 { 
            color: #34495e; 
            margin-top: 1.2em;
            margin-bottom: 0.5em;
          }
          p, ul { 
            margin-bottom: 1em; 
          }
          ul { 
            padding-left: 20px; 
          }
        </style>
      </head>
      <body>
        ${generatedPolicy}
      </body>
      </html>
    `;
    const blob = new Blob([fullHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'privacy_policy.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main className="pb-5 mb-lg-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="talkBanner position-relative privacyBanner">
              <div className="form_container">
                <div class="text-center">
                  <h2>SMS/MMS Consent and Privacy Policy Generator</h2>
                </div>
                <Box className='generatorForm' component="form" noValidate autoComplete="off" sx={{ '& .MuiTextField-root': { marginBottom: 2 } }}>
                  <TextField
                    fullWidth
                    id="websiteUrl"
                    name="websiteUrl"
                    // label="Website URL"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    onBlur={handleWebsiteUrlBlur}
                    placeholder="Website URL"
                  />
                  <TextField
                    fullWidth
                    id="companyName"
                    name="companyName"
                    // label="Company Name"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    placeholder="Your Company Name"
                  />
                  <TextField
                    fullWidth
                    id="companyPhone"
                    name="companyPhone"
                    // label="Company Phone Number"
                    value={formData.companyPhone}
                    onChange={handleInputChange}
                    placeholder="Company Phone Number"
                    inputProps={{ maxLength: 14 }}
                  />
                  <TextField
                    fullWidth
                    id="companyEmail"
                    name="companyEmail"
                    // label="Company Email"
                    value={formData.companyEmail}
                    onChange={handleInputChange}
                    placeholder="Company Email"
                    type="email"
                  />
                  <Button variant="contained" onClick={generatePolicy}>
                    Generate Policy
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="generatedPolicyouter mt-5">
              {generatedPolicy && (
                <div className="generatedPolicy">
                  <div class="text-center">
                    <h2>Generated Policy</h2>
                  </div>
                  <Box
                    ref={policyRef}
                    sx={{
                      bgcolor: 'background.paper',
                      p: 4,
                      borderRadius: 5
                    }}
                  />
                  <div className="d-flex justify-content-end mt-3">
                    <Button
                      variant="outlined"
                      startIcon={<ContentCopyIcon />}
                      onClick={() => copyToClipboard(policyRef.current?.innerText || '', "The formatted policy has been copied to your clipboard.")}
                    >
                      Copy to Clipboard
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<DownloadIcon />}
                      onClick={downloadAsHtml}
                    >
                      Download as HTML
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </main>
  );
}