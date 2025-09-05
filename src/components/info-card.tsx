import { Card, CardContent } from "./ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
    icon: LucideIcon;
    title: string;
    description: string;
}

const InfoCard = ( { icon, title, description }: Props ) => {
    const IconComponent = icon;
    return (
        <Card className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex gap-2 mb-3">
                    { IconComponent && <IconComponent className="w-6 h-6 text-foreground" /> }
                    <h3 className="text-lg font-semibold text-card-foreground">{ title }</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{ description }</p>
            </CardContent>
        </Card>
    )
}

export default InfoCard