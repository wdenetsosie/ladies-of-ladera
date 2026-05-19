import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, MapPin, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-stone-900 font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-[#faf9f6]/95 backdrop-blur supports-[backdrop-filter]:bg-[#faf9f6]/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex gap-2 items-center font-semibold text-[#064e3b] text-lg tracking-tight">
            <span>Ladies of Ladera</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-[#ea580c] transition-colors">About David</a>
            <a href="#clinics" className="hover:text-[#ea580c] transition-colors">Group Clinics</a>
            <a href="#private" className="hover:text-[#ea580c] transition-colors">Book Private</a>
            <a href="#social" className="hover:text-[#ea580c] transition-colors">Weekly Socials</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex border-[#064e3b] text-[#064e3b] hover:bg-stone-100">
              Log In
            </Button>
            <Button className="bg-[#064e3b] text-white hover:bg-[#064e3b]/90">
              Dashboard
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative w-full py-24 md:py-32 lg:py-48 overflow-hidden bg-[#064e3b]">
          <div className="absolute inset-0 bg-black/40 z-0"></div>
          {/* Replace with actual image later */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#064e3b]/90 to-transparent z-0"></div>
          
          <div className="container px-4 md:px-6 relative z-10 text-white">
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl/none">
                Elevate Your Game. <br /> Expand Your Circle.
              </h1>
              <p className="mx-auto max-w-[700px] text-stone-200 md:text-xl">
                Premium golf instruction designed for women at Albuquerque's scenic Ladera Golf Course. 
                Led by Head Instructor David Lovato.
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <Button size="lg" className="bg-[#ea580c] text-white hover:bg-[#ea580c]/90">
                  View Schedule
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#064e3b]">
                  Meet the Coach
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* INSTRUCTOR SECTION */}
        <section id="about" className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-stone-200">
                  <div className="absolute inset-0 flex items-center justify-center text-stone-500 font-mono text-sm">
                    /assets/david-lovato-profile.jpg
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-[#fdbbc6]/50 px-3 py-1 text-sm text-[#064e3b] font-medium">
                  Meet the Coach
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#064e3b]">
                  David Lovato
                </h2>
                <p className="text-stone-600 md:text-lg leading-relaxed">
                  With a patient, instructional style and a tailored approach to women's mechanics, 
                  David is passionate about growing the game locally in Albuquerque. Whether you're 
                  picking up a club for the first time or looking to break 90, David provides a 
                  welcoming, low-pressure environment focused on improvement and enjoyment.
                </p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-center gap-3 text-stone-700">
                    <MapPin className="h-5 w-5 text-[#ea580c]" />
                    <span>Ladera Golf Course, Albuquerque, NM</span>
                  </li>
                  <li className="flex items-center gap-3 text-stone-700">
                    <Users className="h-5 w-5 text-[#ea580c]" />
                    <span>Specializing in women's clinics and fundamentals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BOOKING WIDGET */}
        <section id="schedule" className="w-full py-16 md:py-24 bg-[#064e3b]/5">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#064e3b]">
                Book Your Session
              </h2>
              <p className="max-w-[700px] text-stone-600 md:text-lg mx-auto">
                Join our next clinic, book a private lesson, or RSVP for our weekly clubhouse social.
              </p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <Tabs defaultValue="clinics" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-stone-200">
                  <TabsTrigger value="clinics" className="py-2.5 data-[state=active]:bg-white">Group Clinics</TabsTrigger>
                  <TabsTrigger value="private" className="py-2.5 data-[state=active]:bg-white">Private Lessons</TabsTrigger>
                  <TabsTrigger value="socials" className="py-2.5 data-[state=active]:bg-white">Weekly Socials</TabsTrigger>
                </TabsList>
                
                <TabsContent value="clinics">
                  <Card className="border-stone-200 shadow-sm">
                    <CardHeader>
                      <CardTitle>Upcoming Group Clinics</CardTitle>
                      <CardDescription>
                        Bi-weekly Saturday sessions. Max 12 participants per clinic.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Placeholder for clinic items */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-stone-200 rounded-lg gap-4">
                        <div>
                          <p className="font-semibold text-lg">Fundamentals Workshop</p>
                          <p className="text-sm text-stone-500">Sat, Jun 12 • 9:00 AM - 10:30 AM</p>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                          <span className="text-sm text-[#ea580c] font-medium bg-[#ea580c]/10 px-2 py-1 rounded-md">4 Spots Left</span>
                          <Button className="bg-[#064e3b] text-white hover:bg-[#064e3b]/90">Register Slot</Button>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border border-stone-200 rounded-lg gap-4">
                        <div>
                          <p className="font-semibold text-lg">Short Game Focus</p>
                          <p className="text-sm text-stone-500">Sat, Jun 26 • 9:00 AM - 10:30 AM</p>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                          <span className="text-sm text-[#064e3b] font-medium bg-[#064e3b]/10 px-2 py-1 rounded-md">8 Spots Left</span>
                          <Button className="bg-[#064e3b] text-white hover:bg-[#064e3b]/90">Register Slot</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="private">
                  <Card className="border-stone-200 shadow-sm">
                    <CardHeader>
                      <CardTitle>1-on-1 Instruction</CardTitle>
                      <CardDescription>
                        Strictly limited to one (1) private lesson per user per calendar month.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-stone-300 rounded-lg bg-stone-50/50">
                        <CalendarDays className="h-10 w-10 text-stone-400 mb-4" />
                        <h3 className="text-lg font-medium text-stone-900">Calendar Picker</h3>
                        <p className="text-sm text-stone-500 mt-2 max-w-sm">
                          Integration with scheduling logic to ensure availability and booking constraints.
                        </p>
                        <Button className="mt-6 bg-[#064e3b] text-white hover:bg-[#064e3b]/90">Select Date</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="socials">
                  <Card className="border-stone-200 shadow-sm">
                    <CardHeader>
                      <CardTitle>Clubhouse Mixers</CardTitle>
                      <CardDescription>
                        Casual meetups at the Ladera Clubhouse patio to expand your circle.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 border rounded-lg bg-[#fdbbc6]/10 border-[#fdbbc6]/30 gap-4">
                        <div>
                          <p className="font-semibold text-lg">Post-Round Margaritas</p>
                          <p className="text-sm text-stone-500">Fri, Jun 18 • 5:30 PM</p>
                        </div>
                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                          <div className="flex items-center -space-x-3 isolate">
                            <div className="w-9 h-9 rounded-full border-2 border-white bg-stone-300 z-10"></div>
                            <div className="w-9 h-9 rounded-full border-2 border-white bg-stone-400 z-20"></div>
                            <div className="w-9 h-9 rounded-full border-2 border-[#faf9f6] bg-[#064e3b] flex items-center justify-center text-xs font-medium text-white z-30">+12</div>
                          </div>
                          <Button className="bg-[#ea580c] text-white hover:bg-[#ea580c]/90">RSVP Now</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full py-12 bg-[#064e3b] text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center space-y-6">
          <div className="text-xl font-bold tracking-tight">Ladies of Ladera</div>
          <p className="text-sm text-stone-300">
            Ladera Golf Course • 3401 Ladera Dr NW, Albuquerque, NM 87120
          </p>
          <div className="w-full max-w-2xl h-px bg-white/20"></div>
          <p className="text-xs text-stone-400 leading-relaxed max-w-2xl">
            Disclaimer: This program is independently organized by David Lovato Instruction at the Ladera facilities. 
            All bookings and instruction are managed solely by David Lovato.
          </p>
        </div>
      </footer>
    </div>
  );
}
