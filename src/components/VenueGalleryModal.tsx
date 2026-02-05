 import { useState, useEffect, useCallback } from "react";
 import { X, ChevronLeft, ChevronRight } from "lucide-react";
 import { Dialog, DialogContent } from "@/components/ui/dialog";
 import { cn } from "@/lib/utils";
 
 interface VenueGalleryModalProps {
   images: string[];
   initialIndex: number;
   open: boolean;
   onOpenChange: (open: boolean) => void;
   venueName: string;
 }
 
 const VenueGalleryModal = ({ 
   images, 
   initialIndex, 
   open, 
   onOpenChange,
   venueName 
 }: VenueGalleryModalProps) => {
   const [currentIndex, setCurrentIndex] = useState(initialIndex);
 
   useEffect(() => {
     setCurrentIndex(initialIndex);
   }, [initialIndex]);
 
   const goToNext = useCallback(() => {
     setCurrentIndex((prev) => (prev + 1) % images.length);
   }, [images.length]);
 
   const goToPrev = useCallback(() => {
     setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
   }, [images.length]);
 
   useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
       if (!open) return;
       
       if (e.key === "ArrowRight") {
         goToNext();
       } else if (e.key === "ArrowLeft") {
         goToPrev();
       } else if (e.key === "Escape") {
         onOpenChange(false);
       }
     };
 
     window.addEventListener("keydown", handleKeyDown);
     return () => window.removeEventListener("keydown", handleKeyDown);
   }, [open, goToNext, goToPrev, onOpenChange]);
 
   return (
     <Dialog open={open} onOpenChange={onOpenChange}>
       <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-xl border-gold/20">
         {/* Close button */}
         <button
           onClick={() => onOpenChange(false)}
           className="absolute top-4 right-4 z-50 p-2 rounded-full bg-charcoal/80 text-foreground hover:bg-gold hover:text-background transition-colors"
         >
           <X className="h-5 w-5" />
         </button>
 
         {/* Main image */}
         <div className="relative flex items-center justify-center min-h-[60vh]">
           <img
             src={images[currentIndex]}
             alt={`${venueName} - Image ${currentIndex + 1}`}
             className="max-h-[70vh] max-w-full object-contain"
           />
 
           {/* Navigation arrows */}
           {images.length > 1 && (
             <>
               <button
                 onClick={goToPrev}
                 className="absolute left-4 p-3 rounded-full bg-charcoal/80 text-foreground hover:bg-gold hover:text-background transition-colors"
               >
                 <ChevronLeft className="h-6 w-6" />
               </button>
               <button
                 onClick={goToNext}
                 className="absolute right-4 p-3 rounded-full bg-charcoal/80 text-foreground hover:bg-gold hover:text-background transition-colors"
               >
                 <ChevronRight className="h-6 w-6" />
               </button>
             </>
           )}
         </div>
 
         {/* Thumbnails */}
         {images.length > 1 && (
           <div className="flex gap-2 p-4 overflow-x-auto justify-center">
             {images.map((image, index) => (
               <button
                 key={index}
                 onClick={() => setCurrentIndex(index)}
                 className={cn(
                   "relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all",
                   currentIndex === index 
                     ? "border-gold" 
                     : "border-transparent opacity-60 hover:opacity-100"
                 )}
               >
                 <img
                   src={image}
                   alt={`Thumbnail ${index + 1}`}
                   className="w-full h-full object-cover"
                 />
               </button>
             ))}
           </div>
         )}
 
         {/* Counter */}
         <div className="text-center pb-4 text-muted-foreground text-sm">
           {currentIndex + 1} / {images.length}
         </div>
       </DialogContent>
     </Dialog>
   );
 };
 
 export default VenueGalleryModal;