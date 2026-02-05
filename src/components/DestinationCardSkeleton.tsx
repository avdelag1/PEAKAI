 import { Skeleton } from "@/components/ui/skeleton";
 
 interface DestinationCardSkeletonProps {
   size?: "default" | "large";
 }
 
 const DestinationCardSkeleton = ({ size = "default" }: DestinationCardSkeletonProps) => {
   const height = size === "large" ? "h-80" : "h-64";
   
   return (
     <div className={`relative overflow-hidden rounded-2xl ${height}`}>
       <Skeleton className="absolute inset-0 bg-gold/5" />
       
       {/* Content overlay skeleton */}
       <div className="absolute bottom-0 left-0 right-0 p-6">
         <Skeleton className="h-6 w-32 bg-gold/10 mb-2" />
         <Skeleton className="h-4 w-24 bg-gold/10 mb-3" />
         <div className="flex gap-2">
           <Skeleton className="h-6 w-20 rounded-full bg-gold/10" />
           <Skeleton className="h-6 w-16 rounded-full bg-gold/10" />
         </div>
       </div>
     </div>
   );
 };
 
 export default DestinationCardSkeleton;