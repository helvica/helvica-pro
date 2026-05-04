export default function PrivacyPage() {
  return (
    <main className="bg-white py-24">
      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-4xl font-semibold text-gray-900">
          Privacy Policy
        </h1>

        <p className="mt-6 text-gray-600">
          Last updated: {new Date().getFullYear()}
        </p>

        <p className="mt-6 text-gray-600">
          Helvica Pharma ("we", "our", "us") respects your privacy and is committed
          to protecting your personal data in accordance with applicable laws,
          including GDPR where applicable.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          1. Information We Collect
        </h2>
        <ul className="mt-3 text-gray-600 list-disc pl-5 space-y-2">
          <li>Name and contact details</li>
          <li>Email communications</li>
          <li>Usage data (IP address, browser, device)</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          2. How We Use Your Data
        </h2>
        <p className="mt-3 text-gray-600">
          We use your data to respond to inquiries, improve our services,
          and ensure compliance with regulatory requirements.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          3. Legal Basis (GDPR)
        </h2>
        <p className="mt-3 text-gray-600">
          Processing is based on consent, legitimate interest, or legal obligations.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          4. Data Sharing
        </h2>
        <p className="mt-3 text-gray-600">
          We do not sell personal data. Data may be shared with trusted service providers.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          5. Data Security
        </h2>
        <p className="mt-3 text-gray-600">
          We implement appropriate technical and organizational measures
          to protect your data.
        </p>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          6. Your Rights
        </h2>
        <ul className="mt-3 text-gray-600 list-disc pl-5 space-y-2">
          <li>Access your data</li>
          <li>Request correction or deletion</li>
          <li>Withdraw consent</li>
        </ul>

        <h2 className="mt-10 text-xl font-semibold text-gray-900">
          7. Contact
        </h2>
        <p className="mt-3 text-gray-600">
          contact@helvicapharma.com
        </p>

      </div>
    </main>
  );
}