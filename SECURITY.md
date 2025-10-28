# Security Policy

## Overview
This document outlines the security policy for the **St. Aloysius Gonzaga Website** repository.  
Maintaining the confidentiality, integrity, and availability of the website and its data is a top priority.  
All contributors and users are expected to follow these guidelines to ensure a secure digital environment.

---

## Supported Versions
The following versions of the project are currently supported with security updates:

| Version | Supported          |
|----------|--------------------|
| v1.0     | ✅ Fully Supported |
| < v1.0   | ❌ Not Supported   |

> Ensure your deployment uses the latest stable release to benefit from security fixes and performance updates.

---

## Reporting a Vulnerability
If you discover a vulnerability, please **do not disclose it publicly**.  
Instead, report it through one of the following channels:

- **Primary contact (Developer & Maintainer):**
  - Name: **Knoph Oluoch Ayieko**
  - Email: **knophayieko@gmail.com**
  - GitHub: [@Knoph1](https://github.com/Knoph1)
- **Alternative:** Use the GitHub [Security Advisories](https://github.com/Knoph1/St.AloysiusGonzaga/security/advisories) page.

When reporting a vulnerability, please include:
1. Description of the issue and its impact.  
2. Steps to reproduce the vulnerability (if possible).  
3. Any relevant logs, screenshots, or code snippets.  
4. Recommended mitigation (if known).  

> You will receive an acknowledgment within **48 hours**, and a full response within **5 business days**.

---

## Security Best Practices for Contributors
If you are contributing to this repository, please adhere to the following practices:

- Do **not** commit or expose sensitive data such as API keys, credentials, or `.env` files.  
- Use secure communication (HTTPS, SSH) when interacting with the repository.  
- Validate all input and sanitize output to prevent XSS, CSRF, and SQL injection attacks.  
- Always use the **latest dependencies** and run security audits (`npm audit` or equivalent).  
- Review pull requests carefully before merging to ensure no insecure code is introduced.  
- Keep your local environment and tools up to date with the latest security patches.

---

## Responsible Disclosure Policy
The project follows a **responsible disclosure** policy.  
Individuals who report valid vulnerabilities responsibly will be appreciated and credited in release notes or acknowledgments (unless anonymity is requested).  
We do not pursue legal action against those who act in good faith to identify and report vulnerabilities.

---

## Security Features Implemented
- HTTPS enforced for all connections  
- Server-side validation and sanitization of user inputs  
- Secure session handling  
- Regular software and dependency updates  
- Limited file upload permissions  
- M‑Pesa and online payment integrations follow secure, encrypted communication protocols  
- SSL/TLS certificates installed and renewed annually

---

## Data Protection
The project complies with **Kenyan Data Protection Act (2019)** and general global best practices.  
Sensitive data, such as donor and student information, is handled securely with restricted access and encrypted transmission.

---

## Incident Response
If a breach or incident occurs:
1. The issue will be logged and assessed for impact.  
2. Affected systems or users will be notified.  
3. Immediate containment and mitigation measures will be applied.  
4. A post-incident review will be conducted to prevent recurrence.

---

## Contact
**Maintainer:** Knoph Oluoch Ayieko  
**Email:** [knophayieko@gmail.com](mailto:knophayieko@gmail.com)  
**GitHub:** [https://github.com/Knoph1](https://github.com/Knoph1)  
**Project:** [St. Aloysius Gonzaga Website](https://staloysiusgonzaga.org)

---

*Last Updated: October 2025*  
© 2025 Knoph Oluoch Ayieko. All rights reserved.
