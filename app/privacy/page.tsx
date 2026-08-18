'use client';

import { ShieldCheckIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingElements from '@/components/FloatingElements';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-36 pb-16 md:pt-40 md:pb-20 lg:px-8 overflow-hidden bg-gradient-to-br from-primary-purple via-purple-700 to-purple-800">
        <FloatingElements />
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary-orange/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <AnimatedSection direction="up" delay={0.2}>
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                <ShieldCheckIcon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-semibold">Data Protection</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-heading mb-6">
                Privacy Policy
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
                How JEBI Tech protects personal data and meets applicable privacy data-protection requirements.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Effective Date */}
            <AnimatedSection direction="up" delay={0.1}>
              <div className="mb-12 p-6 bg-gradient-to-r from-primary-purple/5 to-primary-orange/5 rounded-2xl border border-primary-purple/10">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Effective Date:</span> 28-07-2026 &nbsp;|&nbsp; <span className="font-semibold">Last Updated:</span> 28-07-2026
                </p>
              </div>
            </AnimatedSection>

            {/* Section 1 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  JEBI Tech is a software development company providing cloud-based software solutions to multiple business customers. This Privacy Policy explains how JEBI Tech protects personal data processed through its software solutions and how it meets applicable privacy data-protection requirements and regulations.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 2 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">2. Scope and Privacy Roles</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Customer Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When a customer uses a JEBI Tech software solution, the customer remains the owner and controller of the personal data processed through that solution. JEBI Tech acts only as a data processor and processes customer personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Only on the documented instructions of the respective customer;</li>
                  <li>Only for providing, supporting and maintaining the contracted software services;</li>
                  <li>Only for responding to customer-related requests;</li>
                  <li>In accordance with the applicable contract and Data Processing Agreement.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech does not use customer personal data for its own marketing, analytics, commercial benefit or any purpose unrelated to providing services to the customer.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Employee Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech acts as a data controller only in relation to the personal data of its employees and contractors. All current JEBI Tech employees are based in India. Employee personal data is processed for legitimate employment purposes, including recruitment, payroll, benefits, performance management, administration, legal compliance and information security.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 3 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">3. GDPR Privacy Principles</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech processes personal data in accordance with the following GDPR principles:
                </p>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-900">Lawfulness, fairness and transparency:</span> Personal data is processed fairly, transparently and on an appropriate legal basis.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Purpose limitation:</span> Personal data is collected and used only for specified and legitimate purposes.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Data minimisation:</span> Only personal data necessary for providing the relevant services is processed.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Accuracy:</span> Reasonable steps are taken to keep personal data accurate and up to date.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Storage limitation:</span> Personal data is retained only for as long as required by customer instructions, contractual requirements or applicable law.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Integrity and confidentiality:</span> Personal data is protected against unauthorised access, disclosure, alteration, loss or destruction.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Accountability:</span> JEBI Tech maintains appropriate governance, documentation and oversight of its personal-data processing activities.
                  </li>
                </ul>
              </section>
            </AnimatedSection>

            {/* Section 4 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">4. Customer Data Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech manages software solutions for multiple customers and treats each customer&apos;s data as confidential. Customer personal data will not be:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Shared with another customer;</li>
                  <li>Disclosed to another entity;</li>
                  <li>Used for an unrelated purpose;</li>
                  <li>Accessed beyond what is necessary to provide the contracted services;</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  unless the respective customer has provided approval, the disclosure is required under the applicable contract, or JEBI Tech is legally required to disclose the information.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any authorised service provider or subprocessor used by JEBI Tech will be subject to appropriate confidentiality, security and data-protection obligations.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 5 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">5. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech operates from India and provides software services to customers located in the European Economic Area, the United Kingdom, United States of America or other jurisdictions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Where personal data is transferred from the European Economic Area to India, JEBI Tech will enter into the applicable European Commission Standard Contractual Clauses (&ldquo;SCCs&rdquo;) with the European customer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Where required, JEBI Tech will also support transfer-risk assessments, privacy impact assessments and implement appropriate supplementary safeguards as requested by the customer.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 6 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">6. Information Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech maintains state-of-the-art security practices appropriate to the nature, scope and risks of its processing activities. JEBI Tech maintains reasonable and proportionate technical and organisational measures designed to protect personal data against unauthorised or unlawful processing and against accidental loss, destruction, alteration or disclosure.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  JEBI Tech&apos;s information-security programme is aligned with the principles and requirements of ISO/IEC 27001.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech applies reasonable technical and organisational safeguards, including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Role-based access controls;</li>
                  <li>Authentication and access management;</li>
                  <li>Encryption during transmission;</li>
                  <li>Logging and security monitoring;</li>
                  <li>Backup and recovery controls;</li>
                  <li>Vulnerability and patch management;</li>
                  <li>Secure software development practices;</li>
                  <li>Confidentiality obligations for employees and contractors.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Production personal data should not be used in development or testing environments. Synthetic, masked or anonymised data should be used wherever possible.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 7 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">7. Data Retention and Deletion</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Customer personal data is retained in accordance with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>The customer&apos;s documented instructions;</li>
                  <li>The applicable service agreement;</li>
                  <li>The Data Processing Agreement;</li>
                  <li>Applicable legal and regulatory requirements.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Data may also be retained to comply with legal, accounting and contractual requirements, resolve disputes and protect legal rights.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  At the end of the service relationship, customer personal data will be returned, deleted or securely retained as agreed with the customer and subject to applicable legal obligations.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Employee personal data is retained only for the period required for employment administration, legal compliance, dispute management and other legitimate organisational purposes in line with local laws.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 8 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">8. Data-Subject Requests</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Where JEBI Tech receives a request relating to personal data processed on behalf of a customer, JEBI Tech will forward or refer the request to the relevant customer. The customer, as data controller, is responsible for reviewing and responding to the request.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech will provide reasonable assistance to the customer where required under the applicable Data Processing Agreement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Requests relating to JEBI Tech employee data will be handled directly by JEBI Tech in its capacity as data controller.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 9 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">9. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on applicable law, individuals may have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Access their personal information;</li>
                  <li>Correct inaccurate information;</li>
                  <li>Request deletion;</li>
                  <li>Restrict or object to processing;</li>
                  <li>Request data portability;</li>
                  <li>Withdraw consent;</li>
                  <li>Lodge a complaint with a data-protection authority.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Where information is processed on behalf of a JEBI Tech customer, requests may need to be directed to that customer.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 10 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">10. Personal-Data Breaches</h2>
                <p className="text-gray-700 leading-relaxed">
                  JEBI Tech maintains processes for identifying, assessing and responding to personal-data breaches. Where a breach affects customer personal data, JEBI Tech will inform the relevant customer without undue delay and provide reasonable information and assistance to support the customer&apos;s legal and regulatory obligations.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 11 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">11. SMS and Text Messaging</h2>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Opt-In and Consent</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech and its product VirtueInspect (virtueinspect.com) may send SMS/text notifications to end users who have provided explicit consent. Users opt-in to receive SMS messages through one of the following methods:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Creating an account on jebitech.com and providing their phone number during signup or in account settings, and checking a box agreeing to receive SMS notifications from VirtueInspect regarding task assignments, updates, and reminders;</li>
                  <li>Being added to a workspace by an administrator, at which point the user receives an initial SMS asking them to confirm opt-in by replying &ldquo;YES.&rdquo;</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Types of Messages</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SMS messages sent through our Services are limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Task assignment notifications;</li>
                  <li>Task status updates;</li>
                  <li>Schedule and deadline reminders;</li>
                  <li>Account verification and security codes.</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Message Frequency</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Message frequency varies based on your activity and task assignments. You may receive multiple messages per day when tasks are assigned or updated.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Opt-Out</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may opt out of SMS notifications at any time by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Replying &ldquo;STOP&rdquo; to any SMS message received from VirtueInspect;</li>
                  <li>Disabling SMS notifications in your account settings on jebitech.com;</li>
                  <li>Contacting us at <a href="mailto:DPO@Jebitech.com" className="text-primary-purple hover:text-primary-orange transition-colors font-medium">DPO@Jebitech.com</a>.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After opting out, you will receive a single confirmation message. You will not receive further SMS messages unless you re-opt-in.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Costs and Carriers</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Message and data rates may apply depending on your mobile carrier and plan. JEBI Tech is not responsible for any charges imposed by your carrier.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Phone Number Data</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Phone numbers collected for SMS notifications are used solely for delivering the messages described above. We do not sell, rent, or share your phone number with third parties for marketing purposes. Phone numbers may be shared with our SMS service provider solely for the purpose of delivering messages on our behalf, subject to appropriate data protection agreements.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For help, reply &ldquo;HELP&rdquo; to any message or contact <a href="mailto:DPO@Jebitech.com" className="text-primary-purple hover:text-primary-orange transition-colors font-medium">DPO@Jebitech.com</a>.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 12 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">12. Privacy Enquiries and Complaints</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Data subjects, customers and other concerned parties may raise a privacy-related concern or data-subject request by contacting:
                </p>
                <div className="p-6 bg-gradient-to-r from-primary-purple/5 to-primary-orange/5 rounded-2xl border border-primary-purple/10">
                  <p className="text-gray-900 font-semibold mb-1">Data Protection Officer</p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:DPO@Jebitech.com" className="text-primary-purple hover:text-primary-orange transition-colors font-medium">DPO@Jebitech.com</a>
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Where the request concerns personal data controlled by a JEBI Tech customer, the request may be referred to that customer for appropriate action.
                </p>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
