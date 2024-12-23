import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-500 to-blue-700 text-white">
      {/* Navigation Bar */}
      <header className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold">Needle</div>
        <NavigationMenu>
          <NavigationMenuList className="flex gap-10">
            <NavigationMenuItem>
              <a href="#features" className="hover:underline scroll-smooth">
                Features
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#contact" className="hover:underline scroll-smooth">
                Contact
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="/sign-up-in" className="hover:underline">
                Log In
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center px-4 py-20">
        <h1 className="text-5xl font-extrabold mb-6">
          Find Exactly What You Need
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          Welcome to Needle, the marketplace where buyers post their needs, and
          sellers meet them. Get started by posting or searching for your
          perfect match.
        </p>
        <Button className="bg-white text-teal-500 font-bold px-6 py-3 rounded-full hover:bg-teal-100">
          Get Started
        </Button>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white text-gray-900 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Post Your Needs</CardTitle>
            </CardHeader>
            <CardContent>
              Let the world know what you're looking for. Create posts with
              detailed descriptions and price offers.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Search with Precision</CardTitle>
            </CardHeader>
            <CardContent>
              Advanced filters and intuitive search tools help you find exactly
              what you need in no time.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Get Notified</CardTitle>
            </CardHeader>
            <CardContent>
              Receive instant updates when your needs match a seller’s offer.
              Never miss an opportunity.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-600 py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Find What You Need?</h3>
        <p className="text-lg mb-6">
          Join Needle today and start connecting with sellers instantly.
        </p>
        <Button className="bg-white text-teal-600 font-bold px-6 py-3 rounded-full hover:bg-teal-100">
          Sign Up Now
        </Button>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-white text-gray-900 py-16 px-6 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-lg mb-6 text-center">
          We’d love to hear from you! Feel free to reach out to us via email.
        </p>
        <a
          href="mailto:info@needle.com"
          className="text-teal-600 text-xl font-bold hover:underline"
        >
          info@needle.com
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="text-center text-sm">
          &copy; {new Date().getFullYear()} Needle. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
