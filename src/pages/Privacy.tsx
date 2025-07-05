import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8 font-poppins">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <p>We collect information you provide directly, such as contact forms, service inquiries, and consultation requests.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide and improve our ICT services</li>
                <li>Respond to inquiries and support requests</li>
                <li>Send service updates and technical information</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p>You have the right to access, update, or delete your personal information. Contact us to exercise these rights.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <div className="bg-accent/20 p-4 rounded-lg">
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

export default Privacy;