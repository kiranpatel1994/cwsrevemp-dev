/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// pages/api/obfuscated-image/single-image.js

import fs from "fs";
import path from "path";

export default (req, res) => {
  // Define the path to the actual image
  const imagePath = path.join(process.cwd(), "public/images/self.png");

  // Define an array of allowed domains
  const allowedDomains = [
    "cws-revamp.vercel.app",
    "cws-revamp-git-main-aashnamehta810.vercel.app",
    "localhost",
  ];

  // Check the request's referer header
  const referer = req.headers.referer || req.headers.referrer;

  // Check if the referer matches any of the allowed domains
  const isAllowed = allowedDomains.some((domain) => referer?.includes(domain));

  if (!isAllowed) {
    res.status(403).end("Access Denied"); // Return a 403 Forbidden status
    return;
  }

  try {
    // Read the image file as binary data
    const imageBuffer = fs.readFileSync(imagePath);

    // Set the appropriate Content-Type header
    res.setHeader("Content-Type", "image/png"); // Adjust the content type as needed

    // Send the image data as the response
    res.status(200).end(imageBuffer);
  } catch (error) {
    console.error("Error serving image:", error);
    res.status(500).end("Image not found");
  }
};
