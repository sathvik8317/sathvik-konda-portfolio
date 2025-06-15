
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote: "Sathvik's data analysis unlocked hidden insights and delivered real value for our project.",
    author: "A. Sharma",
    role: "Lead Data Scientist, DataNow Inc.",
  },
  {
    quote: "Incredible attention to detail and ability to communicate complex ML results simply.",
    author: "K. Rao",
    role: "Professor, VNR VJIET",
  },
  {
    quote: "Highly professional and innovative—our team adopted his suggestions across several products.",
    author: "P. Singh",
    role: "Product Owner, FinTech Startup",
  },
];

const TestimonialCarousel = () => {
  const [selected, setSelected] = useState(0);
  const intervalRef = useRef<number|undefined>();

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setSelected(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6 text-[#B8B8CA] text-center">Testimonials</h2>
      <Carousel opts={{ loop: true }} className="relative">
        <CarouselContent>
          {testimonials.map((t, i) => (
            <CarouselItem key={i} className={i === selected ? "" : "hidden"}>
              <blockquote className="rounded-xl bg-[#22223b]/80 p-6 shadow-md text-center">
                <p className="text-lg text-[#B8B8CA] italic">“{t.quote}”</p>
                <footer className="mt-4 text-sm text-[#00BFFF] font-semibold">
                  {t.author}
                  <span className="ml-2 text-xs text-[#B8B8CA]/70">{t.role}</span>
                </footer>
              </blockquote>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious onClick={() => setSelected(p => (p - 1 + testimonials.length) % testimonials.length)} />
          <CarouselNext onClick={() => setSelected(p => (p + 1) % testimonials.length)} />
        </div>
      </Carousel>
    </div>
  );
};
export default TestimonialCarousel;
