
export default function RefundPolicy() {
  return (
    <div className="flex max-w-7xl mx-auto p-6 sm:p-10 bg-white text-gray-800">
      <main className="flex-1 space-y-6">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

        <p>
            Thank you for choosing PinPay, a premier mobile recharge and utility payments 
            platform provided by Zapnity Services OPC Private Limited. We are committed to 
            delivering exceptional service and ensuring customer satisfaction. This refund policy 
            outlines the terms and conditions regarding refunds for mobile recharge transactions made 
            through the PinPay platform.

        </p>

        <section id="eligibility">
  <h2 className="text-lg font-bold text-gray-700 mt-8 mb-4">Eligibility for Refunds</h2>
  <p className="mt-4">1.1 PinPay will provide refunds only in the following case:</p>
  <p className="mt-2"> a)   If a mobile recharge, utility payment, or other transaction fails due to technical issues or errors on our platform.</p>
  <p className="mt-2">1.2   Refund requests for failed transactions must be reported by the user within 48 hours from the date of the failed transaction.</p>
</section>


        <section id="request">
          <h2 className="text-lg font-bold text-gray-700 mt-8 mb-4">Refund Request Process</h2>
          <p className="mb-4">2.1 To request a refund for a failed transaction, the user must contact PinPay 
            customer support within 48 hours from the date of the failed transaction.
        </p>
        <p className="mb-2">2.2 The refund request must include the following details:</p>
        <ul className="list-disc list-inside mb-6">
            <li>Transaction ID</li>
            <li>Date and time of the transaction</li>
            <li>Mobile number or account details used for the recharge/payment</li>
            <li>A brief description of the issue encountered</li>
        </ul>
        <p className="mb-4">2.3 Refund requests can be submitted by contacting our customer support
            via email or phone. Contact details are available on our website.</p>

        </section>

        <section id="processing">
          <h2 className="text-lg font-bold text-gray-700 mt-8 mb-4">Refund Processing</h2>
          <p className="mb-4">3.1 PinPay will review the refund request and the details provided by the user within 7 working days of receiving it.</p>
          <p className="mb-4">3.2 If the refund request is approved, the refund amount will be credited to the user’s PinPay wallet within 3-5 working days.</p>
          <p className="mb-4">3.3 The refunded amount can be used for future recharges or other transactions on the PinPay platform.</p>
        </section>

        <section id="exceptions">
          <h2 className="text-lg font-bold text-gray-700 mt-8 mb-4">Refund Exceptions</h2>
            <p className="mb-4">4.1 PinPay will not provide refunds for transactions that fail due to errors in user inputs, including incorrect mobile numbers or other user-related errors.</p>
            <p className="mb-4">4.2 PinPay will not entertain refund requests made after the specified 48 hours timeframe for failed transactions.</p>
            <p className="mb-4">4.3 The customer is not allowed to withdraw the amount added to the PinPay wallet. The same can only be utilized for Utility Payments and Recharges on the Platform.</p>
        </section>

        <section id="changes">
          <h2 className="text-lg font-bold text-gray-700 mt-8 mb-4">Changes to the Refund Policy</h2>
        <p className="mb-4">5.1 PinPay reserves the right to modify or update this refund policy at any time. Any changes to the policy will be effective immediately upon posting on our website.</p>
        <p className="mb-4">5.2 Users are encouraged to review this refund policy periodically to stay informed about our refund practices.</p>
        </section>

        <p>
          If you have any questions or concerns regarding our refund policy, please contact our customer support team at{" "}
          <a href="mailto:support@pinpay.in" className="text-blue-600 hover:underline">
            support@pinpay.in
          </a>.
        </p>
      </main>
    </div>
  );
}
