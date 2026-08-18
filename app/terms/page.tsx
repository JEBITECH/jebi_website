'use client';

import { DocumentTextIcon } from '@heroicons/react/24/outline';
import AnimatedSection from '@/components/AnimatedSection';
import FloatingElements from '@/components/FloatingElements';

export default function TermsOfService() {
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
                <DocumentTextIcon className="w-5 h-5 text-white" />
                <span className="text-white text-sm font-semibold">Legal Terms</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white font-heading mb-6">
                Terms of Service
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
                The terms and conditions governing your use of JEBI Tech&apos;s website and services.
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
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">1. Introduction and Acceptance</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you&rdquo; or &ldquo;your&rdquo;) and JEBI Tech Solutions Pvt. Ltd. (&ldquo;JEBI Tech,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or &ldquo;our&rdquo;), a company registered in India.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using the JEBI Tech website (jebitech.com), our software solutions, or any related services (collectively, the &ldquo;Services&rdquo;), you acknowledge that you have read, understood and agree to be bound by these Terms.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you do not agree to these Terms, you must not access or use the Services. If you are entering into these Terms on behalf of an organisation, you represent and warrant that you have the authority to bind that organisation.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 2 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">2. Services Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech is a software development company providing cloud-based software solutions to business customers primarily in the hospitality industry. Our Services include but are not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Cloud-based SaaS products and platforms;</li>
                  <li>Custom software development and integration services;</li>
                  <li>Implementation and consultancy services;</li>
                  <li>Technical support and maintenance;</li>
                  <li>Data processing services on behalf of customers.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Specific service terms, deliverables, pricing and service levels are governed by separate service agreements or statements of work entered into between JEBI Tech and the customer.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 3 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">3. User Accounts and Access</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Certain Services may require you to create an account or be granted access credentials. When accessing the Services, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Provide accurate and complete information;</li>
                  <li>Maintain the security and confidentiality of your login credentials;</li>
                  <li>Notify JEBI Tech immediately of any unauthorised use of your account;</li>
                  <li>Accept responsibility for all activity that occurs under your account;</li>
                  <li>Not share access credentials with unauthorised parties.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  JEBI Tech reserves the right to suspend or terminate access to accounts that violate these Terms or pose a security risk.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 4 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">4. Intellectual Property Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All intellectual property rights in the Services, including but not limited to software, code, designs, documentation, trademarks, logos and content, are owned by JEBI Tech or its licensors. These Terms do not grant you any ownership rights in the Services.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Subject to these Terms and any applicable service agreement, JEBI Tech grants you a limited, non-exclusive, non-transferable, revocable licence to access and use the Services solely for their intended purpose.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may not copy, modify, distribute, sell, lease, reverse-engineer, decompile or create derivative works from any part of the Services without prior written consent from JEBI Tech.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 5 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">5. Customer Data Ownership</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Customers retain full ownership and control of all data they submit, upload or process through JEBI Tech&apos;s Services (&ldquo;Customer Data&rdquo;). JEBI Tech does not claim any ownership rights over Customer Data.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech processes Customer Data solely for the purpose of delivering the contracted Services and in accordance with the applicable Data Processing Agreement. JEBI Tech will not access, use or disclose Customer Data except as necessary to provide the Services or as required by law.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination of services, Customer Data will be returned or deleted in accordance with the applicable service agreement and our Privacy Policy.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 6 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">6. Acceptable Use</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to use the Services to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Violate any applicable law, regulation or third-party rights;</li>
                  <li>Transmit malicious code, viruses or any harmful software;</li>
                  <li>Attempt to gain unauthorised access to any system, network or data;</li>
                  <li>Interfere with or disrupt the integrity or performance of the Services;</li>
                  <li>Use the Services for any unlawful, fraudulent or deceptive purpose;</li>
                  <li>Scrape, harvest or collect data from the Services through automated means without consent;</li>
                  <li>Impersonate another person or entity;</li>
                  <li>Circumvent any security or access controls.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  JEBI Tech reserves the right to investigate and take appropriate action against any violation of this section, including suspending or terminating access to the Services.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 7 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">7. SMS and Text Messaging Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By opting in to receive SMS notifications from JEBI Tech or VirtueInspect (virtueinspect.com), you agree to the following terms:
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Consent</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You consent to receive SMS/text messages from VirtueInspect by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Creating an account on jebitech.com and providing your phone number during signup or in account settings, and checking the box agreeing to receive SMS notifications regarding task assignments, updates, and reminders; or</li>
                  <li>Confirming opt-in by replying &ldquo;YES&rdquo; to an initial message sent when an administrator adds you to a workspace.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Consent is not a condition of purchase or use of the Services. You may use the Services without opting in to SMS notifications.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Message Types and Frequency</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Messages include task assignment notifications, task status updates, schedule reminders, and account verification codes. Message frequency varies based on your activity and task assignments. You may receive multiple messages per day.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Opt-Out</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may opt out at any time by replying &ldquo;STOP&rdquo; to any message, disabling SMS notifications in your account settings, or contacting <a href="mailto:DPO@Jebitech.com" className="text-primary-purple hover:text-primary-orange transition-colors font-medium">DPO@Jebitech.com</a>. After opting out, you will receive one final confirmation message and no further SMS messages unless you re-opt-in.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Help</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For assistance, reply &ldquo;HELP&rdquo; to any message or contact <a href="mailto:DPO@Jebitech.com" className="text-primary-purple hover:text-primary-orange transition-colors font-medium">DPO@Jebitech.com</a>.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Costs</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Message and data rates may apply. JEBI Tech is not responsible for charges imposed by your mobile carrier. Check with your carrier for details about your text messaging plan.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Privacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your phone number and SMS consent data are handled in accordance with our <a href="/privacy" className="text-primary-purple hover:text-primary-orange transition-colors font-medium">Privacy Policy</a>. We do not sell, rent, or share your phone number or opt-in data with third parties for marketing or promotional purposes.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 8 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">8. Service Availability and Support</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech strives to maintain high availability of its Services. However, the Services may be subject to scheduled maintenance, upgrades or unforeseen outages. JEBI Tech will use commercially reasonable efforts to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Provide advance notice of planned maintenance where feasible;</li>
                  <li>Minimise disruption during maintenance windows;</li>
                  <li>Restore Services promptly following any unplanned outage.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Specific service-level commitments, uptime guarantees and support response times are defined in the applicable service agreement between JEBI Tech and the customer.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 8 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">9. Payment Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Where Services are provided under a paid arrangement, payment terms are governed by the applicable service agreement or statement of work. General payment conditions include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Invoices are payable within the period specified in the applicable agreement;</li>
                  <li>All fees are exclusive of applicable taxes unless stated otherwise;</li>
                  <li>Late payments may be subject to interest charges as specified in the agreement;</li>
                  <li>JEBI Tech reserves the right to suspend Services for overdue accounts after reasonable notice.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Fee adjustments for subscription services will be communicated in advance as specified in the applicable agreement.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 9 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">10. Confidentiality</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Each party agrees to maintain the confidentiality of any proprietary or confidential information disclosed by the other party in connection with the Services. Confidential information includes but is not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>Business strategies, plans and financial information;</li>
                  <li>Technical specifications, source code and system architecture;</li>
                  <li>Customer data and user information;</li>
                  <li>Pricing and contractual terms.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Confidentiality obligations do not apply to information that is publicly available, independently developed, rightfully received from a third party, or required to be disclosed by law.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 10 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">11. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by applicable law:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>JEBI Tech shall not be liable for any indirect, incidental, special, consequential or punitive damages, including loss of profits, data, business opportunity or goodwill;</li>
                  <li>JEBI Tech&apos;s total aggregate liability for any claims arising out of or relating to the Services shall not exceed the total fees paid by the customer to JEBI Tech in the twelve (12) months preceding the event giving rise to the claim;</li>
                  <li>JEBI Tech does not warrant that the Services will be uninterrupted, error-free or free of vulnerabilities.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  These limitations apply regardless of the legal theory on which the claim is based, whether in contract, tort (including negligence), strict liability or otherwise.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 11 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">12. Disclaimer of Warranties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the fullest extent permitted by law, JEBI Tech disclaims all warranties, whether express, implied or statutory, including but not limited to implied warranties of merchantability, fitness for a particular purpose and non-infringement.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  JEBI Tech does not warrant that the Services will meet your specific requirements, that results obtained from the Services will be accurate or reliable, or that defects will be corrected within any particular timeframe.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 12 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">13. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree to indemnify, defend and hold harmless JEBI Tech, its officers, directors, employees and agents from and against any claims, damages, losses, liabilities and expenses (including reasonable legal fees) arising out of or related to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
                  <li>Your use of the Services in violation of these Terms;</li>
                  <li>Your violation of any applicable law or third-party rights;</li>
                  <li>Any data or content you submit through the Services;</li>
                  <li>Your negligence or wilful misconduct.</li>
                </ul>
              </section>
            </AnimatedSection>

            {/* Section 13 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">14. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Either party may terminate the use of Services in accordance with the applicable service agreement. JEBI Tech may also terminate or suspend your access to the Services immediately and without notice if:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4 pl-4">
                  <li>You breach any material provision of these Terms;</li>
                  <li>You engage in activity that poses a security risk to the Services or other users;</li>
                  <li>Required by law or regulatory authority;</li>
                  <li>Your account has been inactive for an extended period as defined in the service agreement.</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Upon termination, your right to use the Services will cease immediately. Provisions that by their nature should survive termination (including intellectual property, limitation of liability, indemnification and governing law) shall continue in full force and effect.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 14 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">15. Modifications to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  JEBI Tech reserves the right to modify these Terms at any time. Material changes will be communicated by updating the &ldquo;Last Updated&rdquo; date at the top of this page and, where appropriate, by providing notice through the Services or by email.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Your continued use of the Services after the effective date of any modifications constitutes your acceptance of the updated Terms. If you do not agree to the modified Terms, you should discontinue use of the Services.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 15 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">16. Governing Law and Dispute Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved through negotiation within thirty (30) days, it shall be submitted to binding arbitration in Pune, India, in accordance with the Arbitration and Conciliation Act, 1996.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nothing in this section shall prevent either party from seeking interim or injunctive relief from a court of competent jurisdiction where necessary to protect its rights.
                </p>
              </section>
            </AnimatedSection>

            {/* Section 16 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">17. General Provisions</h2>
                <ul className="space-y-4 text-gray-700">
                  <li>
                    <span className="font-semibold text-gray-900">Entire Agreement:</span> These Terms, together with any applicable service agreements and Data Processing Agreements, constitute the entire agreement between the parties regarding the subject matter herein.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Severability:</span> If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Waiver:</span> The failure of JEBI Tech to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Assignment:</span> You may not assign or transfer your rights under these Terms without the prior written consent of JEBI Tech. JEBI Tech may assign its rights and obligations without restriction.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Force Majeure:</span> JEBI Tech shall not be liable for any failure or delay in performing its obligations where such failure or delay results from circumstances beyond its reasonable control, including natural disasters, acts of government, pandemic, war, or infrastructure failures.
                  </li>
                </ul>
              </section>
            </AnimatedSection>

            {/* Section 17 */}
            <AnimatedSection direction="up" delay={0.15}>
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-4">18. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions, concerns or notices relating to these Terms of Service, please contact:
                </p>
                <div className="p-6 bg-gradient-to-r from-primary-purple/5 to-primary-orange/5 rounded-2xl border border-primary-purple/10">
                  <p className="text-gray-900 font-semibold mb-1">JEBI Tech Solutions Pvt. Ltd.</p>
                  <p className="text-gray-700 mb-1">12, Sweet Watervilla, Amanora, Pune, India</p>
                  <p className="text-gray-700">
                    Email: <a href="mailto:DPO@Jebitech.com" className="text-primary-purple hover:text-primary-orange transition-colors font-medium">DPO@Jebitech.com</a>
                  </p>
                </div>
              </section>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
