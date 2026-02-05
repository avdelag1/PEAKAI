 import { LucideIcon } from "lucide-react";
 import { Link } from "react-router-dom";

 interface CategoryCardProps {
   icon: LucideIcon;
   title: string;
   description: string;
   count: number;
   slug: string;
 }
 
 const CategoryCard = ({ icon: Icon, title, description, count, slug }: CategoryCardProps) => {
  return (
     <Link 
       to={`/category/${slug}`}
       className="group relative block p-8 rounded-2xl bg-gradient-card luxury-border hover-lift cursor-pointer transition-all duration-500 hover:luxury-border-glow"
     >
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
        <Icon className="w-8 h-8 text-gold" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-gold transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Count */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-gradient-gold">{count}+</span>
        <span className="text-sm text-muted-foreground">venues worldwide</span>
      </div>

       {/* Shimmer effect */}
       <div className="absolute inset-0 rounded-2xl shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
     </Link>
  );
};

export default CategoryCard;
