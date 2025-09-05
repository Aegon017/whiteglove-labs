interface Props {
    heading: string;
    subHeading: string;
    brief: string;
}

const SectionHero = ( { heading, subHeading, brief }: Props ) => {
    return (
        <>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                { heading }
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-foreground">
                { subHeading }
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                { brief }
            </p>
            {/* <div className="mt-5 h-1 w-20 rounded-full bg-primary" /> */ }
        </>
    )
}

export default SectionHero