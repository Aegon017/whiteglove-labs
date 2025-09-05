import { cn } from "@/lib/utils";
import { ReactNode } from "react"

interface Props {
    id: string;
    children: ReactNode;
    className?: ReactNode;
}

const SectionLayout = ( { id, children, className }: Props ) => {
    return (
        <section id={ id } className={ cn( "relative py-16 px-8 overflow-hidden", className ) }>
            <div className="container max-w-7xl mx-auto">
                { children }
            </div>
        </section>
    )
}

export default SectionLayout