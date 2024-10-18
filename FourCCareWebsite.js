import React, { useState } from 'react'
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"
import { Textarea } from "./components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card"
import { Label } from "./components/ui/label"
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
import { Checkbox } from "./components/ui/checkbox"

export default function FourCCareWebsite() {
  const [view, setView] = useState('landing')
  const [userType, setUserType] = useState(null)

  const LandingPage = () => (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo_NoBuffer-csAJSidHX62WdmZhSDhiGoAL3Ky7v0.jpeg" alt="4C Care Logo" className="h-12 w-auto" />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setView('signup')}>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to 4C Care</h1>
          <p className="text-xl mb-8">Empowering and celebrating natural hair beauty</p>
          <Button className="bg-white text-orange-500 hover:bg-gray-100 hover:text-orange-600 text-lg px-8 py-3" onClick={() => setView('signup')}>
            Discover More
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-purple-600">About 4C Care</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-500">Empowering Stylists</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-none space-y-4">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✦</span>
                    <span><strong className="text-orange-500">Be Your Own Boss:</strong> Set your own schedule and rates, giving you full control over your career.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✦</span>
                    <span><strong className="text-orange-500">Consistent Income:</strong> Connect with a steady stream of clients, ensuring more stable earnings.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✦</span>
                    <span><strong className="text-orange-500">No Salon? No Problem:</strong> Work from anywhere - home, while traveling, or in a new city.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✦</span>
                    <span><strong className="text-orange-500">Marketing Made Easy:</strong> We handle the marketing, you focus on creating beautiful hairstyles.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">✦</span>
                    <span><strong className="text-orange-500">Secure Payments:</strong> Receive 92% of each booking, with only an 8% booking fee paid upfront and securely.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-500">For Clients</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  4C Care isn't just for stylists. We're committed to helping clients find expert care for their 4C hair. Our platform makes it easy to connect with skilled stylists, book appointments, and get the personalized care your hair deserves.
                </p>
              </CardContent>
            </Card>

            <div className="text-center">
              <p className="text-xl text-purple-600 font-semibold">
                Join us at 4C Care and be part of a community that celebrates and nurtures the beauty of 4C hair. Whether you're a stylist looking to grow your business or a client seeking expert care, we're here to support you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 4C Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )

  const SignupPage = () => (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FullLogo_NoBuffer-csAJSidHX62WdmZhSDhiGoAL3Ky7v0.jpeg" alt="4C Care Logo" className="h-24 w-auto mx-auto mb-8" />

        {!userType ? (
          <Card>
            <CardHeader>
              <CardTitle>Join 4C Care</CardTitle>
              <CardDescription>Select your account type to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup onValueChange={setUserType}>
                <div className="flex items-center space-x-2 mb-4">
                  <RadioGroupItem value="client" id="client" />
                  <Label htmlFor="client">I'm a Client</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="stylist" id="stylist" />
                  <Label htmlFor="stylist">I'm a Stylist</Label>
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
                onClick={() => userType && setView('signup')}
              >
                Continue
              </Button>
            </CardFooter>
          </Card>
        ) : userType === 'client' ? (
          <Card>
            <CardHeader>
              <CardTitle>Client Sign Up</CardTitle>
              <CardDescription>Create your client account</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" type="text" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" type="text" required />
                </div>
                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input id="dateOfBirth" type="date" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="termsClient" required />
                  <Label htmlFor="termsClient">I agree to the Terms and Conditions</Label>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Sign Up as Client
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Stylist Sign Up</CardTitle>
              <CardDescription>Create your stylist account</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="fullNameStylist">Full Name</Label>
                  <Input id="fullNameStylist" type="text" required />
                </div>
                <div>
                  <Label htmlFor="emailStylist">Email</Label>
                  <Input id="emailStylist" type="email" required />
                </div>
                <div>
                  <Label htmlFor="passwordStylist">Password</Label>
                  <Input id="passwordStylist" type="password" required />
                </div>
                <div>
                  <Label htmlFor="phoneNumberStylist">Phone Number</Label>
                  <Input id="phoneNumberStylist" type="tel" required />
                </div>
                <div>
                  <Label htmlFor="postalCodeStylist">Postal Code</Label>
                  <Input id="postalCodeStylist" type="text" required />
                </div>
                <div>
                  <Label htmlFor="licenseNumber">Professional License Number (if applicable)</Label>
                  <Input id="licenseNumber" type="text" />
                </div>
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" type="number" min="0" required />
                </div>
                <div>
                  <Label htmlFor="specialties">Specialties</Label>
                  <Input id="specialties" type="text" required />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="canTravel" />
                  <Label htmlFor="canTravel">Can Travel</Label>
                </div>
                <div>
                  <Label htmlFor="travelRange">Travel Range (km)</Label>
                  <Input id="travelRange" type="number" min="0" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="homeService" />
                  <Label htmlFor="homeService">Offers Home Service</Label>
                </div>
                <div>
                  <Label htmlFor="portfolioImages">Upload Portfolio Images</Label>
                  <Input id="portfolioImages" type="file" multiple accept="image/*" />
                </div>
                <div>
                  <Label htmlFor="bio">Brief Bio</Label>
                  <Textarea id="bio" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="termsStylist" required />
                  <Label htmlFor="termsStylist">I agree to the Terms and Conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="backgroundCheck" required />
                  <Label htmlFor="backgroundCheck">I agree to a Background Check</Label>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Sign Up as Stylist
              </Button>
            </CardFooter>
          </Card>
        )}
        <div className="mt-4 text-center">
          <Button variant="link" onClick={() => {setView('landing'); setUserType(null);}}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {view === 'landing' ? <LandingPage /> : <SignupPage />}
    </>
  )
}