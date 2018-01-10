---
layout: post
title:  "The Art of Printable Sites"
permalink: /printable-site/
date:   '2017-06-02'
categories: home blog
excerpt: "Currently, a typo in a white page means a trip to the designer, who navigates what feels like an impossible, expensive graphic design program. With printable websites, content owners can edit white pages in any web-based method, including Content Management Systems like WordPress or Craft."
---

People cringe at the idea of printing websites. Ads, navigation, and unnecessary styles create terrible user experience in physical copies of websites, leaving content unread and undesired. 
Companies primarily use PDFs for document delivery, including concert tickets, whitepapers, and infographics. Living in a digital, mobile-first world makes forgetting printable content easy. But we forget that problems exist with PDFs. Updating PDFs always require some graphical program knowledge. Application versions and file size create problems with mailers, especially e-mail clients like G-mail. The answer to these problems? Printer-friendly websites. Making your website printer-friendly eases updated content delivery independent of consumption method, reduces the potential of outside errors, and provides single-format universal product styling in one location.

## Single location content

Currently, a typo in a white page means a trip to the designer, who navigates what feels like an impossible, expensive graphic design program. With printable websites, content owners can edit white pages in any web-based method, including Content Management Systems like WordPress or Craft. This approach places the ownership of the content on the owners, not the designer or any other middle man. Printable websites also ease the translation of websites. Designers and content owners may rely on a user-chosen language in the browser to translate the content, ensuring a wider possible audience versus focusing prioritization of content translation based on purely analytics. Now users experience the same content online and offline, universally.

Have premium or specialized content? CSS classes create the ability to hide content. When combined with JavaScript, CSS classes can hide content based on an IP address, country, or logged in status. In a CMS, tags can translate into classes, creating an easier user experience with content management.  This concept translates to printable sites as well. Content owners who want their website to redact certain information when printed can do so through CSS classes.

## Outside problems

PDF is the standard for document delivery. Companies deliver everything from concert tickets to whitepapers in PDF format. While you can optimize and secure documents, a number of problems exist with PDFs, which Adobe lists out [here](https://helpx.adobe.com/acrobat/kb/cant-open-pdf.html). Printable websites reduce the number of potential errors outside of the product. Can't open a PDF because of versioning errors? Chrome and Edge auto-update, while others alert you quickly to updates. Sites like (W3Counter)[https://www.w3counter.com/globalstats.php] alert you to global browser usage, though initial research may require other focus based on country-level browser usage. Mail clients sometimes block or refuse to attach PDFs based on a number of criteria, while links do not normally trigger spam filters and translate well into text-only emails.

## Style problems

What about printed material? If you worry about sending a printable website to a professional printer or colors printing incorrectly, CSS has the ability to use CMYK with percentages, which printers use. Need help converting color values to CMYK? W3schools created (a tool)[https://www.w3schools.com/colors/colors_cmyk.asp] to help you transition. If you're stuck determining if transitioning to CMYK has beneficial value, Lea Verou wrote about an (op-ed on the subject)[http://lea.verou.me/2009/03/cmyk-colors-in-css-useful-or-useless/]. Attribute `device-cmyk` allows for deeper control of CMYK specificity.

When printing normally, a browser adds the additional information to the page, including the page header, website URL, and page number. Developers remove these additives through user Jacta's approach seen in (this StackOverflow response)[http://stackoverflow.com/questions/585254/how-to-remove-the-url-from-the-printing-page], allowing for top-to-bottom page styling.

## Bad news

The lacking complete support of @page illustrates the biggest downside of printable websites. According to [CanIUse](https://caniuse.com/#search=%40page), the selector's attribute 'size' lacks support in Internet Explorer, Edge, and Firefox, while desktop and iOS Safari completely disregard the selector. This problem creates the inability to control if browser-created additional page information appears or not, relying on the unknowing user to disable these features. Internet Explorer, Edge, and Firefox enable JavaScript event listeners "beforeprint" and "afterprint", which allow for the developer to switch CSS files between print and web, but alas Safari still remains dark. 

If these problems suffice as a reason to avoid printable pages, a browser's print preview enables all of this work to retain purpose. Choose print preview from your browser, then from printer options choose 'Save to PDF'. This approach takes your print-specific CSS into consideration with this option and removes the need for PDF creating applications while preventing potential version-control problems.