import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

type Instructor = {
  name: string;
  avatar: string;
};

type Props = {
  title: string;
  category: string;
  instructor: Instructor;
  price: number | string;
  image: string;
  rating?: number; // optional if you want to display stars
};

export function CourseCard({ title, category, instructor, price, image, rating }: Props) {
  return (
    <Card className="group overflow-hidden pt-0 transition-transform hover:-translate-y-1 hover:shadow-lg">

      {/* Image + Category Badge */}
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3">{category}</Badge>
      </div>

      {/* Title */}
      <CardHeader className="font-bold text-lg line-clamp-2">{title}</CardHeader>

      <CardContent className="flex items-center gap-2 mt-2">
        {/* Instructor */}
        <Avatar className="h-6 w-6">
          <AvatarImage src={instructor.avatar} />
          <AvatarFallback>{instructor.name[0]}</AvatarFallback>
        </Avatar>
        <span className="text-sm text-muted-foreground">{instructor.name}</span>
      </CardContent>

      {/* Footer: Price + Optional Rating */}
      <CardFooter className="flex items-center justify-between">
        {rating && (
          <div className="flex items-center gap-1 text-yellow-400 text-sm">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = i + 0.5 < rating ? true : false;
              return (
                <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}>
                  {i + 1 <= Math.floor(rating) ? <Star /> : i + 1 - rating === 0.5 ? <StarHalf /> : <Star />}
                </span>
              );
            })}
            <span className="ml-1 text-xs font-medium text-muted-foreground">({rating.toFixed(1)})</span>
          </div>
        )}
        <span className="font-bold text-primary">${price}</span>
      </CardFooter>
    </Card>
  );
}