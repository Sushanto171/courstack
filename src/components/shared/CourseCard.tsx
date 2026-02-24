import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
      <div className="flex flex-col justify-between h-full gap-3">
        {rating && (
          <div className="flex px-6 items-center gap-1 text-yellow-400 text-xs">
            {Array.from({ length: 5 }).map((_, i) => {
              const filled = i + 0.5 < rating ? true : false;
              return (
                <span key={i} className="text-xs" style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}>
                  {i + 1 <= Math.floor(rating) ? <Star fill="yellow" size={15}/> : i + 1 - rating === 0.5 ? <StarHalf size={15} /> : <StarHalf size={15} />}
                </span>
              );
            })}
            <span className="ml-1 text-xs font-medium text-muted-foreground">({rating.toFixed(1)})</span>
          </div>
        )}
        {/* Title */}
        <CardHeader className="font-bold text-lg line-clamp-2">{title}</CardHeader>

        <CardContent className="flex items-center gap-2 py-0">
          {/* Instructor */}
          <Avatar className="h-6 w-6">
            <AvatarImage src={instructor.avatar} />
            <AvatarFallback>{instructor.name[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{instructor.name}</span>

          <span className="font-bold text-primary">${price}</span>
        </CardContent>
      </div>


    </Card>
  );
}