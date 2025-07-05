import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8 font-poppins">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>By accessing OPPA Services Limited's website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
              <p>OPPA Services Limited provides ICT systems integration services including but not limited to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Audio Visual Solutions</li>
                <li>Network Infrastructure</li>
                <li>Security Systems</li>
                <li>Office Automation</li>
                <li>Software Solutions</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Payment Terms</h2>
              <p>Payment terms are specified in individual service contracts. Standard payment terms are 30 days from invoice date unless otherwise agreed.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p>All intellectual property rights in our services and documentation remain with OPPA Services Limited or our licensors.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>OPPA Services Limited's liability is limited to the value of the specific service contract. We provide comprehensive warranty and support as specified in individual agreements.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Contact Information</h2>
              <p>For questions about these Terms of Service, contact us at:</p>
              <div className="bg-accent/20 p-4 rounded-lg mt-4">
                <p><strong>OPPA Services Limited</strong></p>
                <p>Elysee Plaza, 2nd Floor, Kilimani Road</p>
                <p>Nairobi, Kenya</p>
                <p>Email: info@oppaservices.com</p>
                <p>Phone: +254 705 576 746</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;