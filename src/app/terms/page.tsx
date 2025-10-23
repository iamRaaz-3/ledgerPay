import React from "react";

export const metadata = {
  title: "Terms & Conditions | Veena Expert Vault",
  description:
    "Read the terms and conditions for using Veena Expert Vault's payroll management services.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 pt-5">
      <section className="max-w-5xl mx-auto px-6 py-16 pt-35 leading-relaxed">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-5">
          Terms & Conditions
        </h1>

        {/* Terms List */}
        <ul className="list-disc pl-5 space-y-3 text-gray-700">
          <li>
            This website pages content is for your general information and uses only.
            It is subject to change without prior notice.
          </li>
          <li>
            Neither we nor any third parties provide any warranty or guarantee the
            accuracy, timeliness, performance, completeness or suitability of the
            information and materials found or offered on this website for any
            particular purpose. By visiting the website you acknowledge that such
            information and materials may contain inaccuracies or errors and we
            expressly exclude liability for any such inaccuracies or errors to the
            fullest extent permitted by law.
          </li>
          <li>
            Your use of any information or materials on this website is entirely at
            your own risk, for which we shall not be liable. It shall be your own
            responsibility to ensure that any products, services or information
            available through this website meet your specific requirements.
          </li>
          <li>
            This website contains material which is owned by or licensed to us. This
            material includes, but is not limited to, the design, layout, look,
            appearance and graphics. Reproduction is prohibited other than in
            accordance with the copyright notice, which forms part of these terms
            and conditions.
          </li>
          <li>
            All trademarks reproduced in this website, which is not the property of,
            or licensed to the operator, are acknowledged on the website.
          </li>
          <li>
            Unauthorized use of this website shall be subjected to a claim for
            damages and/or be a criminal offence.
          </li>
          <li>
            From time to time, this website may also include links to other websites.
            These links are provided for your convenience to provide further
            information. They do not signify that we endorse the website(s). We have
            no responsibility for the content of the linked website(s).
          </li>
          <li>
            You may not create a link to this website from another website or
            document without Veena Expert Vault&apos;s prior written consent.
          </li>
          <li>
            If you choose, or you are provided with, a user identification code,
            password or any other piece of information as part of our security
            procedures, you must treat such information as confidential. You must
            not disclose it to any third party.
          </li>
          <li>
            We have the right to disable any user identification code or password,
            whether chosen by you or allocated by us, at any time, if in our
            reasonable opinion you have failed to comply with any of the provisions
            of these terms of use.
          </li>
          <li>
            Your use of this website and any dispute arising out of such use of the
            website is subject to the exclusive jurisdiction of the courts of
            Haryana State Government of India.
          </li>
        </ul>

        {/* Acceptance Section */}
        <div className="bg-gray-100 mt-14 p-6 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Acceptance of Terms through Use
          </h2>
          <p className="text-gray-700">
            The data we collect from you are stored in our system servers and will
            be treated with utmost confidentiality. Your personal information will
            be used only by Veena Expert Vault for all business transactions that
            require your information to complete the transactions. Veena Expert
            Vault may allow a third-party application to access your information in
            cases where a need arises for verification of your data and other
            validation purposes. Veena Expert Vault ensures that verification
            processes used by third-party applications will help to make your
            account safe from fraud or any money laundering.
          </p>
        </div>
      </section>
    </main>
  );
}
