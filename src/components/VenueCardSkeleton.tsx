 import { Skeleton } from "@/components/ui/skeleton";
 
 const VenueCardSkeleton = () => {
   return (
     <div className="overflow-hidden rounded-xl bg-charcoal border border-gold/10">
       {/* Image skeleton */}
       <div className="relative aspect-[4/3]">
         <Skeleton className="h-full w-full bg-gold/5" />
       </div>
 
       {/* Content skeleton */}
       <div className="p-4 space-y-3">
         <div className="flex items-start justify-between gap-2">
           <Skeleton className="h-5 w-3/4 bg-gold/5" />
           <Skeleton className="h-4 w-8 bg-gold/5" />
         </div>
 
         <div className="flex items-center gap-1">
           <Skeleton className="h-3 w-3 rounded-full bg-gold/5" />
           <Skeleton className="h-3 w-20 bg-gold/5" />
         </div>
 
         <Skeleton className="h-4 w-full bg-gold/5" />
         <Skeleton className="h-4 w-2/3 bg-gold/5" />
 
         <div className="flex items-center gap-1">
           <Skeleton className="h-4 w-4 rounded-full bg-gold/5" />
           <Skeleton className="h-4 w-12 bg-gold/5" />
           <Skeleton className="h-3 w-20 bg-gold/5" />
         </div>
       </div>
     </div>
   );
 };
 
 export default VenueCardSkeleton;