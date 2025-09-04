"use client"

import { Mail, Phone, MapPin } from "lucide-react"

const contactItems = [
    {
        icon: Mail,
        title: "Email us",
        value: "hello@whiteglove-labs.com",
    },
    {
        icon: Phone,
        title: "Call us",
        value: "+1 (555) 123-4567",
    },
    {
        icon: MapPin,
        title: "Visit us",
        value: (
            <>
                123 Tech Park Avenue
                <br />
                San Francisco, CA 94107
            </>
        ),
    },
]

const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
]

export function ContactInfo() {
    return (
        <div className="space-y-10 text-foreground">
            
            <div>
                <h2 className="mb-6 text-2xl font-bold tracking-tight">
                    Contact Information
                </h2>
                <p className="text-muted-foreground">
                    Fill out the form and we&apos;ll get back to you as soon as possible.
                </p>
            </div>

            
            <div className="space-y-6">
                { contactItems.map( ( item ) => (
                    <div key={ item.title } className="flex items-start">
                        <div className="flex-shrink-0 rounded-lg bg-accent p-3 text-accent-foreground">
                            <item.icon className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                            <h3 className="font-medium text-foreground">{ item.title }</h3>
                            <p className="text-muted-foreground">{ item.value }</p>
                        </div>
                    </div>
                ) ) }
            </div>

            
            <div className="border-t border-border pt-6">
                <h3 className="mb-4 font-medium text-foreground">Business Hours</h3>
                <dl className="space-y-3">
                    { businessHours.map( ( item ) => (
                        <div key={ item.day } className="flex justify-between">
                            <dt className="text-muted-foreground">{ item.day }</dt>
                            <dd className="font-medium text-foreground">{ item.hours }</dd>
                        </div>
                    ) ) }
                </dl>
            </div>
        </div>
    )
}