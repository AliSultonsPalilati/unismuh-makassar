import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  image?: string;
}

export const FeatureCard = ({ icon, title, description, image }: FeatureCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card-hover transition-all">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
        </div>
      )}
      <CardHeader>
        {icon && <div className="mb-2 text-primary">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/70">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
