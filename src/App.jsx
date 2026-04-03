import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <UserProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Service />} />
            <Route path="/registration" element={<Registration />} />

            <Route path="/admin" element={<Admin />} />

            <Route
              path="*"
              element={
                <div className="min-h-screen flex items-center justify-center text-2xl">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>

          <Footer />
        </BrowserRouter>
      </HelmetProvider>
    </UserProvider>
  );
}